// === Module 17052: onPostConnectionOpen ===

// Module 17052 (onPostConnectionOpen)
import failsDefault from "fails" /* 584 */;
import setDefault from "set" /* 687 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 5486 */;
import trackInviteDefault from "trackInvite" /* 7201 */;
import fetchAndReconcileGiftIntentDismissals from "fetchAndReconcileGiftIntentDismissals" /* 10517 */;
import closure_3 from "dropChannelIfEmpty" /* 4736 */;
import closure_4 from "handleConnectionClosedOrResumed" /* 1340 */;
import closure_5 from "ensureGuildLoaded" /* 1387 */;
import closure_6 from "getCurrentTime" /* 7987 */;
import { MessageTypes } from "ME" /* 676 */;

require = arg1;
let closure_8 = 10 * setDefault.Millis.SECOND;
let closure_9 = 5 * setDefault.Millis.MINUTE;
initializeDefault;
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
          }
    };
    items = [, ];
    items[0] = closure_6;
    items[1] = () => applyArgumentsResult.onPremiumGiftingIntentStoreChange();
    items1 = [];
    items1[0] = items;
    map = new Map(items1);
    applyArgumentsResult.stores = map;
    tmp4 = new require("fails")(closure_8, closure_9);
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
  return store.getFriendAnniversaries().length > 0;
};
prototype["getServerDismissalTimestampMs"] = function getServerDismissalTimestampMs() {
  const userContent = settings.settings.userContent;
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
    const andReconcileGiftIntentDismissals = fetchAndReconcileGiftIntentDismissals.fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs);
    const obj = fetchAndReconcileGiftIntentDismissals;
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
    let value = lastReconciledDismissalAtMs.get(targetId);
    let tmp4 = value;
    let lastReconciledDismissalAtMs2 = self.lastReconciledDismissalAtMs;
    let num = value;
    if (value == null) {
      num = 0;
    }
    let tmp5 = dismissedAtMs;
    let result = lastReconciledDismissalAtMs2.set(targetId, Math.max(num, dismissedAtMs));
    let tmp7 = value;
    if (null != tmp4) {
      let tmp20 = dismissedAtMs;
      let tmp21 = value;
      if (dismissedAtMs > tmp4) {
        let tmp22 = dMFromUserId;
        let tmp23 = targetId;
        dMFromUserId = dMFromUserId.getDMFromUserId(tmp2);
        let tmp25 = dMFromUserId;
        if (null != dMFromUserId) {
          let tmp26 = messages;
          let tmp27 = dMFromUserId;
          messages = messages.getMessages(tmp25);
          let tmp29 = messages;
          let tmp8 = messages;
          for (const item10031 of messages) {
            let tmp9 = item10031;
            let tmp10 = MessageTypes;
            let tmp11 = item10031.type === MessageTypes.GIFTING_PROMPT;
            if (tmp11) {
              let tmp12 = item10031;
              let giftingPrompt = tmp9.giftingPrompt;
              let recipientUserId;
              if (giftingPrompt != null) {
                recipientUserId = giftingPrompt.recipientUserId;
              }
              let tmp14 = targetId;
              tmp11 = recipientUserId === tmp2;
            }
            if (tmp11) {
              let tmp15 = importDefault;
              let tmp16 = dependencyMap;
              let obj = dispatcherDefault;
              obj = { type: "MESSAGE_DELETE", id: null, channelId: null };
              let tmp17 = item10031;
              obj[1] = tmp9.id;
              let tmp18 = dMFromUserId;
              obj[2] = tmp25;
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
    const lastKnownGiftIntentDismissedAtMs = store.getLastKnownGiftIntentDismissedAtMs();
    if (lastKnownGiftIntentDismissedAtMs >= self.getServerDismissalTimestampMs()) {
      self.heldGiftingPromptSystemMessage = false;
      const result = self.sendGiftingPromptSystemMessagesIfEligible();
    }
  }
};
prototype["shouldHoldGiftingPromptSystemMessageForServerReconcile"] = function shouldHoldGiftingPromptSystemMessageForServerReconcile() {
  const lastKnownGiftIntentDismissedAtMs = store.getLastKnownGiftIntentDismissedAtMs();
  return lastKnownGiftIntentDismissedAtMs < this.getServerDismissalTimestampMs();
};
prototype["trySendGiftingPromptSystemMessage"] = function trySendGiftingPromptSystemMessage(id, FRIEND_ANNIVERSARY, closure_0, SEND_MESSAGE) {
  if (this.shouldHoldGiftingPromptSystemMessageForServerReconcile()) {
    this.heldGiftingPromptSystemMessage = true;
    let flag = false;
  } else {
    let obj = trackInviteDefault;
    obj = { giftIntentType: null, recipientUserId: null, giftIntentSecondaryAction: null };
    obj[0] = FRIEND_ANNIVERSARY;
    obj[1] = closure_0;
    obj[2] = SEND_MESSAGE;
    const result = obj.sendGiftingPromptSystemMessage(id, obj);
    flag = true;
  }
  return flag;
};
let result = require("set").fileFinishedImporting("modules/premium/gifting/shared/GiftIntentReconcilingManager.tsx");

export default GiftIntentReconcilingManager;