// === Module 17654: GiftIntentReconcilingManager ===

// Module 17654 (GiftIntentReconcilingManager)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6978 */;
import PremiumGiftingIntentActionCreators from "PremiumGiftingIntentActionCreators" /* 10485 */;
import EphemeralMessageStore from "EphemeralMessageStore" /* 5117 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PremiumGiftingIntentStore from "PremiumGiftingIntentStore" /* 7759 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let set;

const MessageTypes = Constants.MessageTypes;
let closure_8 = 10 * DurationsDefault.Millis.SECOND;
let closure_9 = 5 * DurationsDefault.Millis.MINUTE;
class GiftIntentReconcilingManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN() {
        return applyArgumentsResult.onPostConnectionOpen();
      },
      CHANNEL_SELECT(channelId) {
        return applyArgumentsResult.onChannelSelect(channelId);
      },
      GIFT_INTENT_DISMISSALS_FETCH_SUCCESS(dismissals) {
        return applyArgumentsResult.onReconcileSuccess(dismissals);
      },
      GIFT_INTENT_DISMISSALS_FETCH_FAILURE() {
        return applyArgumentsResult.onReconcileSettled(false);
      },
      LOGOUT() {
        return applyArgumentsResult.onLogout();
      }
    };
    const items = [PremiumGiftingIntentStore, () => applyArgumentsResult.onPremiumGiftingIntentStoreChange()];
    const items1 = [items];
    applyArgumentsResult.stores = new Map(items1);
    new Map(items1);
    applyArgumentsResult.reconcileBackoff = new BackoffDefault(closure_8, closure_9);
    applyArgumentsResult.isReconciling = false;
    applyArgumentsResult.heldGiftingPromptSystemMessage = false;
    new BackoffDefault(closure_8, closure_9);
    applyArgumentsResult.lastReconciledDismissalAtMs = new Map();
    applyArgumentsResult.retryReconcileServerDismissals = function retryReconcileServerDismissals() {
      if (applyArgumentsResult.isReconcileEligible()) {
        const result = applyArgumentsResult.attemptReconcileFetch();
      }
    };
    new Map();
    return applyArgumentsResult;
  }
  onPostConnectionOpen() {
    const lastReconciledDismissalAtMs = this.lastReconciledDismissalAtMs;
    lastReconciledDismissalAtMs.clear();
    const result = this.sendGiftingPromptSystemMessagesIfEligible();
  }
  onPremiumGiftingIntentStoreChange() {
    const result = this.maybeReconcileServerDismissals();
    const result1 = this.maybeRetryHeldGiftingPromptSystemMessage();
  }
  maybeReconcileServerDismissals() {
    const self = this;
    if (this.isReconcileEligible()) {
      if (!self.reconcileBackoff.pending) {
        const result = self.attemptReconcileFetch();
      }
    }
  }
  isReconcileEligible() {
    return PremiumGiftingIntentStore.getFriendAnniversaries().length > 0;
  }
  getServerDismissalTimestampMs() {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let str;
    const _Number = Number;
    if (userContent != null) {
      str = userContent.lastGiftIntentDismissedAtMs;
    }
    if (str == null) {
      str = "0";
    }
    return _Number(str);
  }
  attemptReconcileFetch() {
    const self = this;
    const serverDismissalTimestampMs = this.getServerDismissalTimestampMs();
    const tmp2 = PremiumGiftingIntentStore.getLastKnownGiftIntentDismissedAtMs() >= serverDismissalTimestampMs || self.isReconciling;
    if (!tmp2) {
      self.isReconciling = true;
      const obj = PremiumGiftingIntentActionCreators;
      const andReconcileGiftIntentDismissals = obj.fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs);
    }
  }
  onReconcileSuccess(dismissals) {
    this.onReconcileSettled(true);
    const result = this.removeRemotelyDismissedGiftIntentCards(dismissals.dismissals);
  }
  onReconcileSettled(arg0) {
    this.isReconciling = false;
    const reconcileBackoff = this.reconcileBackoff;
    const tmp2 = arg0;
    if (tmp2) {
      reconcileBackoff.succeed();
    } else {
      reconcileBackoff.fail(tmp.retryReconcileServerDismissals);
    }
  }
  removeRemotelyDismissedGiftIntentCards(dismissals) {
    const self = this;
    const iter = dismissals[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let targetId = nextResult.targetId;
      let tmp2 = targetId;
      let dismissedAtMs = nextResult.dismissedAtMs;
      let lastReconciledDismissalAtMs = self.lastReconciledDismissalAtMs;
      let value = lastReconciledDismissalAtMs.get(targetId);
      let tmp4 = value;
      let lastReconciledDismissalAtMs2 = self.lastReconciledDismissalAtMs;
      let num = value;
      set = lastReconciledDismissalAtMs2.set;
      let _Math = Math;
      if (value == null) {
        num = 0;
      }
      let result = set(targetId, max(num, dismissedAtMs));
      if (null != tmp4) {
        if (dismissedAtMs > tmp4) {
          let dMFromUserId = ChannelStore.getDMFromUserId(tmp2);
          let tmp25 = dMFromUserId;
          if (null != dMFromUserId) {
            let messages = EphemeralMessageStore.getMessages(tmp25);
            for (const item10031 of messages) {
              let tmp11 = item10031.type === MessageTypes.GIFTING_PROMPT;
              if (tmp11) {
                let giftingPrompt = item10031.giftingPrompt;
                let recipientUserId;
                if (giftingPrompt != null) {
                  recipientUserId = giftingPrompt.recipientUserId;
                }
                tmp11 = recipientUserId === tmp2;
              }
              if (tmp11) {
                let obj = DispatcherDefault;
                let obj2 = { type: "MESSAGE_DELETE", id: item10031.id, channelId: tmp25 };
                let dispatchResult = obj.dispatch(obj2);
              }
              continue;
            }
          }
        }
      }
      continue;
    }
  }
  onLogout() {
    const reconcileBackoff = this.reconcileBackoff;
    reconcileBackoff.cancel();
    this.isReconciling = false;
    this.heldGiftingPromptSystemMessage = false;
    const lastReconciledDismissalAtMs = this.lastReconciledDismissalAtMs;
    lastReconciledDismissalAtMs.clear();
  }
  maybeRetryHeldGiftingPromptSystemMessage() {
    const self = this;
    if (this.heldGiftingPromptSystemMessage) {
      const lastKnownGiftIntentDismissedAtMs = PremiumGiftingIntentStore.getLastKnownGiftIntentDismissedAtMs();
      if (lastKnownGiftIntentDismissedAtMs >= self.getServerDismissalTimestampMs()) {
        self.heldGiftingPromptSystemMessage = false;
        const result = self.sendGiftingPromptSystemMessagesIfEligible();
      }
    }
  }
  shouldHoldGiftingPromptSystemMessageForServerReconcile() {
    const lastKnownGiftIntentDismissedAtMs = PremiumGiftingIntentStore.getLastKnownGiftIntentDismissedAtMs();
    return lastKnownGiftIntentDismissedAtMs < this.getServerDismissalTimestampMs();
  }
  trySendGiftingPromptSystemMessage(id, FRIEND_ANNIVERSARY, recipientUserId, SEND_MESSAGE) {
    let flag;
    if (this.shouldHoldGiftingPromptSystemMessageForServerReconcile()) {
      this.heldGiftingPromptSystemMessage = true;
      flag = false;
    } else {
      const obj2 = { giftIntentType: FRIEND_ANNIVERSARY, recipientUserId, giftIntentSecondaryAction: SEND_MESSAGE };
      const obj = MessageActionCreatorsDefault;
      const result = obj.sendGiftingPromptSystemMessage(id, obj2);
      flag = true;
    }
    return flag;
  }
}
const prototype = GiftIntentReconcilingManager.prototype;
let result = size.fileFinishedImporting("modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx");

export default GiftIntentReconcilingManager;