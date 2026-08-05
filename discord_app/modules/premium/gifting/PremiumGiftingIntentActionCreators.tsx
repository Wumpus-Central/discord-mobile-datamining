// discord_app/modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx
import recomputeAffinities from "recomputeAffinities";
import fetchFingerprint from "fetchFingerprint";
import reinjectEphemerals from "reinjectEphemerals";
import { GiftIntentType } from "GuildFeatures";
import ME from "ME";
import { sendRequest } from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../../Dispatcher.tsx";
import { expandEventProperties } from "../../../utils/AnalyticsUtils.tsx";
import { apexExperiment } from "../experiments/FriendshipAnniversaryBackendPersistenceExperiment.tsx";

let error;
let metroImportAll;
const require = arg1;
({ AnalyticEvents: error, Endpoints: metroImportAll } = ME);
let result = require("reinjectEphemerals").fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx");

export const fetchAndReconcileGiftIntentDismissals = function fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs) {
  const _require = serverDismissalTimestampMs;
  const id2 = id.getId();
  const HTTP = _sendRequest.HTTP;
  const value = HTTP.get({ url: constants2.GIFT_INTENT_DISMISSALS, oldFormErrors: true, rejectWithError: true });
  return value.then((body) => {
    if (outer1_4.getId() === callback) {
      let dismissals = body.body.dismissals;
      if (dismissals == null) {
        dismissals = [];
      }
      let obj = { type: "GIFT_INTENT_DISMISSALS_FETCH_SUCCESS", dismissals: null, settingsTimestampMs: null };
      obj[1] = dismissals.map((targetId) => ({ targetId: targetId.target_id, dismissedAtMs: Number(targetId.dismissed_at_ms) }));
      obj[2] = closure_0;
      callback(outer1_2[6]).dispatch(obj);
      const obj2 = callback(outer1_2[6]);
    } else {
      obj = callback(outer1_2[6]);
      obj.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
    }
  }, (arg0) => {
    callback(1208).captureException(arg0, { tags: { feature: "gift_intent" } });
    const obj = callback(1208);
    callback(709).dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
  });
};
export const logFriendsListGiftIntentsShown = function logFriendsListGiftIntentsShown() {
  dispatcher.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
};
export const logMessageGiftIntentShown = function logMessageGiftIntentShown(recipientUserId) {
  let FRIEND_ANNIVERSARY = arg1;
  if (arg1 === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = dispatcher;
  obj = { type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId };
  obj.dispatch(obj);
  let obj2 = expandEventProperties;
  obj = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: "shown", affinity: null };
  const userAffinity = authStore.getUserAffinity(recipientUserId);
  let dmProbability;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  obj[2] = dmProbability;
  obj2.track(constants.GIFT_INTENT_DISMISSED, obj);
  let result = apexExperiment /* apexExperiment */.isFriendshipAnniversaryBackendPersistenceEnabled("dismissGiftIntent");
  if (result) {
    result = FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED;
  }
  if (result) {
    const HTTP = sendRequest /* sendRequest */.HTTP;
    const obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj1[0] = constants2.GIFT_INTENTS_DISMISS;
    obj2 = { intent_type: null, target_id: null };
    obj2[0] = FRIEND_ANNIVERSARY;
    obj2[1] = recipientUserId;
    obj1[1] = obj2;
    HTTP.post(obj1).catch((arg0) => {
      callback(table[7]).captureException(arg0, { tags: { feature: "gift_intent" } });
    });
    const postResult = HTTP.post(obj1);
  }
};
export const logGiftIntentMessageDismissed = function logGiftIntentMessageDismissed(channel_id, id) {
  let giftIntentType;
  let recipientUserId;
  message = message.getMessage(channel_id, id);
  let giftingPrompt;
  if (message != null) {
    giftingPrompt = message.giftingPrompt;
  }
  if (null != giftingPrompt) {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    let obj = { gift_intent_type: null, dismiss_type: "explicit", affinity: null };
    obj[0] = giftIntentType;
    const userAffinity = authStore.getUserAffinity(recipientUserId);
    let dmProbability;
    if (userAffinity != null) {
      dmProbability = userAffinity.dmProbability;
    }
    obj[2] = dmProbability;
    expandEventProperties.track(constants.GIFT_INTENT_DISMISSED, obj);
    obj = apexExperiment /* apexExperiment */;
    let result = obj.isFriendshipAnniversaryBackendPersistenceEnabled("dismissGiftIntent");
    if (result) {
      result = giftIntentType !== GiftIntentType.UNSPECIFIED;
    }
    if (result) {
      const HTTP = tmp5(530).HTTP;
      obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj[0] = constants2.GIFT_INTENTS_DISMISS;
      const obj1 = { intent_type: null, target_id: null };
      obj1[0] = giftIntentType;
      obj1[1] = recipientUserId;
      obj[1] = obj1;
      HTTP.post(obj).catch((arg0) => {
        callback(table[7]).captureException(arg0, { tags: { feature: "gift_intent" } });
      });
      const postResult = HTTP.post(obj);
    }
    const obj4 = expandEventProperties;
    tmp5 = require;
  }
};
export const logGiftIntentFlowPurchasedGift = function logGiftIntentFlowPurchasedGift(recipientUserId) {
  let FRIEND_ANNIVERSARY = arg1;
  if (arg1 === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = dispatcher;
  obj = { type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId };
  obj.dispatch(obj);
  let obj2 = expandEventProperties;
  obj = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: "gift_sent", affinity: null };
  const userAffinity = authStore.getUserAffinity(recipientUserId);
  let dmProbability;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  obj[2] = dmProbability;
  obj2.track(constants.GIFT_INTENT_DISMISSED, obj);
  let result = apexExperiment /* apexExperiment */.isFriendshipAnniversaryBackendPersistenceEnabled("dismissGiftIntent");
  if (result) {
    result = FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED;
  }
  if (result) {
    const HTTP = sendRequest /* sendRequest */.HTTP;
    const obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj1[0] = constants2.GIFT_INTENTS_DISMISS;
    obj2 = { intent_type: null, target_id: null };
    obj2[0] = FRIEND_ANNIVERSARY;
    obj2[1] = recipientUserId;
    obj1[1] = obj2;
    HTTP.post(obj1).catch((arg0) => {
      callback(table[7]).captureException(arg0, { tags: { feature: "gift_intent" } });
    });
    const postResult = HTTP.post(obj1);
  }
};