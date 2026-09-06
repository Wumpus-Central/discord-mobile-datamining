// discord_app/modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx
import BackoffDefault from "../../../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../../../Dispatcher.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import MessageActionCreatorsDefault from "../../../../actions/MessageActionCreators.tsx";
import PremiumGiftingIntentActionCreators from "../PremiumGiftingIntentActionCreators.tsx";
import EphemeralMessageStore from "../../../messages/EphemeralMessageStore.tsx";
import UserSettingsProtoStore from "../../../user_settings/UserSettingsProtoStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PremiumGiftingIntentStore from "../PremiumGiftingIntentStore.tsx";
import AutomaticLifecycleManager from "../../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const MessageTypes = fn(1074).MessageTypes;
let closure_8 = 10 * DurationsDefault.Millis.SECOND;
let closure_9 = 5 * DurationsDefault.Millis.MINUTE;
class GiftIntentReconcilingManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
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
      },
    };
    items = [,];
    items[0] = closure_6;
    items[1] = () => applyArgumentsResult.onPremiumGiftingIntentStoreChange();
    items1 = [];
    items1[0] = items;
    map = new Map(items1);
    applyArgumentsResult.stores = map;
    tmp4 = new closure_1(closure_2[7])(closure_8, closure_9);
    applyArgumentsResult.reconcileBackoff = tmp4;
    applyArgumentsResult.isReconciling = false;
    applyArgumentsResult.heldGiftingPromptSystemMessage = false;
    map1 = new Map();
    applyArgumentsResult.lastReconciledDismissalAtMs = map1;
    applyArgumentsResult.retryReconcileServerDismissals = function retryReconcileServerDismissals() {
      if (applyArgumentsResult.isReconcileEligible()) {
        const result = applyArgumentsResult.attemptReconcileFetch();
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = GiftIntentReconcilingManager.prototype;
prototype["onPostConnectionOpen"] = function onPostConnectionOpen() {
  const lastReconciledDismissalAtMs = this.lastReconciledDismissalAtMs;
  lastReconciledDismissalAtMs.clear();
  const result = this.sendGiftingPromptSystemMessagesIfEligible();
};
prototype["onPremiumGiftingIntentStoreChange"] = function onPremiumGiftingIntentStoreChange() {
  const result = this.maybeReconcileServerDismissals();
  const result1 = this.maybeRetryHeldGiftingPromptSystemMessage();
};
prototype["maybeReconcileServerDismissals"] = function maybeReconcileServerDismissals() {
  const self = this;
  if (this.isReconcileEligible()) {
    if (!self.reconcileBackoff.pending) {
      const result = self.attemptReconcileFetch();
    }
  }
};
prototype["isReconcileEligible"] = function isReconcileEligible() {
  return PremiumGiftingIntentStore.getFriendAnniversaries().length > 0;
};
prototype["getServerDismissalTimestampMs"] = function getServerDismissalTimestampMs() {
  const userContent = UserSettingsProtoStore.settings.userContent;
  let str;
  if (userContent != null) {
    str = userContent.lastGiftIntentDismissedAtMs;
  }
  if (str == null) {
    str = "0";
  }
  return Number(str);
};
prototype["attemptReconcileFetch"] = function attemptReconcileFetch() {
  const self = this;
  const serverDismissalTimestampMs = this.getServerDismissalTimestampMs();
  if (!tmp2) {
    self.isReconciling = true;
    const andReconcileGiftIntentDismissals =
      PremiumGiftingIntentActionCreators.fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs);
  }
};
prototype["onReconcileSuccess"] = function onReconcileSuccess(dismissals) {
  this.onReconcileSettled(true);
  const result = this.removeRemotelyDismissedGiftIntentCards(dismissals.dismissals);
};
prototype["onReconcileSettled"] = function onReconcileSettled(arg0) {
  this.isReconciling = false;
  const reconcileBackoff = this.reconcileBackoff;
  if (arg0) {
    reconcileBackoff.succeed();
  } else {
    reconcileBackoff.fail(tmp.retryReconcileServerDismissals);
  }
};
prototype["removeRemotelyDismissedGiftIntentCards"] = function removeRemotelyDismissedGiftIntentCards(dismissals) {
  const self = this;
  const iter = dismissals[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let targetId = nextResult.targetId;
    let tmp2 = targetId;
    let dismissedAtMs = nextResult.dismissedAtMs;
    let lastReconciledDismissalAtMs = self.lastReconciledDismissalAtMs;
    value = lastReconciledDismissalAtMs.get(targetId);
    let tmp4 = value;
    let lastReconciledDismissalAtMs2 = self.lastReconciledDismissalAtMs;
    let num = value;
    if (value == null) {
      num = 0;
    }
    let result = lastReconciledDismissalAtMs2.set(targetId, Math.max(num, dismissedAtMs));
    if (null != tmp4) {
      if (dismissedAtMs > tmp4) {
        let dMFromUserId = ChannelStore.getDMFromUserId(tmp2);
        let tmp25 = dMFromUserId;
        if (null != dMFromUserId) {
          let messages = EphemeralMessageStore.getMessages(tmp25);
          for (const item10031 of messages) {
            let tmp9 = item10031;
            let tmp11 = item10031.type === MessageTypes.GIFTING_PROMPT;
            if (tmp11) {
              let giftingPrompt = tmp9.giftingPrompt;
              let recipientUserId;
              if (giftingPrompt != null) {
                recipientUserId = giftingPrompt.recipientUserId;
              }
              tmp11 = recipientUserId === tmp2;
            }
            if (tmp11) {
              let obj = DispatcherDefault;
              obj = { type: "MESSAGE_DELETE", id: null, channelId: null };
              obj.id = tmp9.id;
              obj.channelId = tmp25;
              let dispatchResult = obj.dispatch(obj);
            }
            continue;
          }
        }
      }
    }
    continue;
  }
};
prototype["onLogout"] = function onLogout() {
  const reconcileBackoff = this.reconcileBackoff;
  reconcileBackoff.cancel();
  this.isReconciling = false;
  this.heldGiftingPromptSystemMessage = false;
  const lastReconciledDismissalAtMs = this.lastReconciledDismissalAtMs;
  lastReconciledDismissalAtMs.clear();
};
prototype["maybeRetryHeldGiftingPromptSystemMessage"] = function maybeRetryHeldGiftingPromptSystemMessage() {
  const self = this;
  if (this.heldGiftingPromptSystemMessage) {
    const lastKnownGiftIntentDismissedAtMs = PremiumGiftingIntentStore.getLastKnownGiftIntentDismissedAtMs();
    if (lastKnownGiftIntentDismissedAtMs >= self.getServerDismissalTimestampMs()) {
      self.heldGiftingPromptSystemMessage = false;
      const result = self.sendGiftingPromptSystemMessagesIfEligible();
    }
  }
};
prototype["shouldHoldGiftingPromptSystemMessageForServerReconcile"] =
  function shouldHoldGiftingPromptSystemMessageForServerReconcile() {
    const lastKnownGiftIntentDismissedAtMs = PremiumGiftingIntentStore.getLastKnownGiftIntentDismissedAtMs();
    return lastKnownGiftIntentDismissedAtMs < this.getServerDismissalTimestampMs();
  };
prototype["trySendGiftingPromptSystemMessage"] = function trySendGiftingPromptSystemMessage(
  id,
  FRIEND_ANNIVERSARY,
  recipientUserId,
  SEND_MESSAGE,
) {
  if (this.shouldHoldGiftingPromptSystemMessageForServerReconcile()) {
    this.heldGiftingPromptSystemMessage = true;
    let flag = false;
  } else {
    const obj = { giftIntentType: FRIEND_ANNIVERSARY, recipientUserId, giftIntentSecondaryAction: SEND_MESSAGE };
    const result = obj.sendGiftingPromptSystemMessage(id, obj);
    flag = true;
  }
  return flag;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx");

export default GiftIntentReconcilingManager;
