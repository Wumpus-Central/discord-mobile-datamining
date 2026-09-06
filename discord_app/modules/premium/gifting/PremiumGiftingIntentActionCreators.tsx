// === Module 10744: PremiumGiftingIntentActionCreators ===

// Module 10744 (PremiumGiftingIntentActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import SentryUtilsDefault from "SentryUtils" /* 1232 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import UserAffinitiesV2Store from "UserAffinitiesV2Store" /* 7659 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MessageStore from "MessageStore" /* 4781 */;

require = fn;
const GiftIntentType = fn(1373).GiftIntentType;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, Endpoints: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx");

export const fetchAndReconcileGiftIntentDismissals = function fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs) {
  _require = serverDismissalTimestampMs;
  const id = AuthenticationStore.getId();
  const HTTP = require("HTTPUtils").HTTP;
  value = HTTP.get({ url: constants2.GIFT_INTENT_DISMISSALS, oldFormErrors: true, rejectWithError: true });
  return value.then((body) => {
    if (AuthenticationStore.getId() === closure_1) {
      let dismissals = body.body.dismissals;
      if (dismissals == null) {
        dismissals = [];
      }
      let obj = { type: "GIFT_INTENT_DISMISSALS_FETCH_SUCCESS", dismissals: dismissals.map((targetId) => ({ targetId: targetId.target_id, dismissedAtMs: Number(targetId.dismissed_at_ms) })), settingsTimestampMs };
      DispatcherDefault.dispatch(obj);
    } else {
      obj = DispatcherDefault;
      obj.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
    }
  }, (arg0) => {
    closure_1(1232).captureException(arg0, { tags: { feature: "gift_intent" } });
    const obj = closure_1(1232);
    closure_1(573).dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
  });
};
export const logFriendsListGiftIntentsShown = function logFriendsListGiftIntentsShown() {
  DispatcherDefault.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
};
export const logMessageGiftIntentShown = function logMessageGiftIntentShown(recipientUserId) {
  let FRIEND_ANNIVERSARY = arg1;
  if (arg1 === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = { type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId };
  obj.dispatch(obj);
  obj = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: "shown", affinity: null };
  const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
  let dmProbability;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  obj.affinity = dmProbability;
  AnalyticsUtilsDefault.track(constants.GIFT_INTENT_DISMISSED, obj);
  if (FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants2.GIFT_INTENTS_DISMISS, body: null, oldFormErrors: true, rejectWithError: true };
    const obj1 = { intent_type: FRIEND_ANNIVERSARY, target_id: recipientUserId };
    request.body = obj1;
    HTTP.post(request).catch((error) => {
      SentryUtilsDefault.captureException(error, { tags: { feature: "gift_intent" } });
    });
    const postResult = HTTP.post(request);
  }
};
export const logGiftIntentMessageDismissed = function logGiftIntentMessageDismissed(channel_id, id) {
  const message = MessageStore.getMessage(channel_id, id);
  let giftingPrompt;
  if (message != null) {
    giftingPrompt = message.giftingPrompt;
  }
  if (null != giftingPrompt) {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    let obj = { gift_intent_type: giftIntentType, dismiss_type: "explicit", affinity: null };
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
    let dmProbability;
    if (userAffinity != null) {
      dmProbability = userAffinity.dmProbability;
    }
    obj.affinity = dmProbability;
    AnalyticsUtilsDefault.track(constants.GIFT_INTENT_DISMISSED, obj);
    if (giftIntentType !== GiftIntentType.UNSPECIFIED) {
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants2.GIFT_INTENTS_DISMISS, body: null, oldFormErrors: true, rejectWithError: true };
      obj = { intent_type: giftIntentType, target_id: recipientUserId };
      request.body = obj;
      HTTP.post(request).catch((error) => {
        SentryUtilsDefault.captureException(error, { tags: { feature: "gift_intent" } });
      });
      const postResult = HTTP.post(request);
    }
  }
};
export const logGiftIntentFlowPurchasedGift = function logGiftIntentFlowPurchasedGift(recipientUserId) {
  let FRIEND_ANNIVERSARY = arg1;
  if (arg1 === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = { type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId };
  obj.dispatch(obj);
  obj = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: "gift_sent", affinity: null };
  const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
  let dmProbability;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  obj.affinity = dmProbability;
  AnalyticsUtilsDefault.track(constants.GIFT_INTENT_DISMISSED, obj);
  if (FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants2.GIFT_INTENTS_DISMISS, body: null, oldFormErrors: true, rejectWithError: true };
    const obj1 = { intent_type: FRIEND_ANNIVERSARY, target_id: recipientUserId };
    request.body = obj1;
    HTTP.post(request).catch((error) => {
      SentryUtilsDefault.captureException(error, { tags: { feature: "gift_intent" } });
    });
    const postResult = HTTP.post(request);
  }
};