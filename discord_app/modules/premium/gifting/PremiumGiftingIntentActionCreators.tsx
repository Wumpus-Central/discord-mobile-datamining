// discord_app/modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx
import sendRequest from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../../Dispatcher.tsx";
import recomputeAffinities from "../../user_affinities/UserAffinitiesV2Store.tsx";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";
import reinjectEphemerals from "../../../stores/MessageStore.tsx";
import { GiftIntentType } from "../PremiumConstants.tsx";
import ME from "../../../Constants.tsx";

require = fn;
({ AnalyticEvents: error, Endpoints: closure_8 } = ME);
const result = require("obj132").fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx");

export const fetchAndReconcileGiftIntentDismissals = function fetchAndReconcileGiftIntentDismissals(serverDismissalTimestampMs) {
  const _require = serverDismissalTimestampMs;
  const id2 = id.getId();
  const HTTP = require("../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
  const value = HTTP.get({ url: constants2.GIFT_INTENT_DISMISSALS, oldFormErrors: true, rejectWithError: true });
  return value.then((result) => {
    if (closure_1_4.getId() === callback) {
      let dismissals = result.body.dismissals;
      if (dismissals == null) {
        dismissals = [];
      }
      let obj = { type: "GIFT_INTENT_DISMISSALS_FETCH_SUCCESS", dismissals: null, settingsTimestampMs: null };
      obj[1] = dismissals.map((item, index) => ({ targetId: item.target_id, dismissedAtMs: Number(item.dismissed_at_ms) }));
      obj[2] = closure_0;
      callback(dependencyMap[6]).dispatch(obj);
      const obj2 = callback(dependencyMap[6]);
    } else {
      obj = callback(dependencyMap[6]);
      obj.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
    }
  }, (arg0) => {
    callback(1208).captureException(arg0, { tags: { feature: "gift_intent" } });
    const obj = callback(1208);
    callback(709).dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
  });
};
export const logFriendsListGiftIntentsShown = function logFriendsListGiftIntentsShown() {
  dispatcherDefault.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
};
export const logMessageGiftIntentShown = function logMessageGiftIntentShown(recipientUserId) {
  let FRIEND_ANNIVERSARY = arg1;
  if (arg1 === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = { type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId };
  obj.dispatch(obj);
  let obj2 = expandEventPropertiesDefault;
  obj = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: "shown", affinity: null };
  const userAffinity = authStore.getUserAffinity(recipientUserId);
  let dmProbability;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  obj[2] = dmProbability;
  obj2.track(constants.GIFT_INTENT_DISMISSED, obj);
  if (FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED) {
    const HTTP = sendRequest.HTTP;
    obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj1[0] = constants2.GIFT_INTENTS_DISMISS;
    obj2 = { intent_type: null, target_id: null };
    obj2[0] = FRIEND_ANNIVERSARY;
    obj2[1] = recipientUserId;
    obj1[1] = obj2;
    HTTP.post(obj1).catch((error) => {
      callback(table[7]).captureException(error, { tags: { feature: "gift_intent" } });
    });
    const postResult = HTTP.post(obj1);
  }
};
export const logGiftIntentMessageDismissed = function logGiftIntentMessageDismissed(channel_id, id) {
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
    expandEventPropertiesDefault.track(constants.GIFT_INTENT_DISMISSED, obj);
    if (giftIntentType !== GiftIntentType.UNSPECIFIED) {
      const HTTP = sendRequest.HTTP;
      obj = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
      obj[0] = constants2.GIFT_INTENTS_DISMISS;
      obj = { intent_type: null, target_id: null };
      obj[0] = giftIntentType;
      obj[1] = recipientUserId;
      obj[1] = obj;
      HTTP.post(obj).catch((error) => {
        callback(table[7]).captureException(error, { tags: { feature: "gift_intent" } });
      });
      const postResult = HTTP.post(obj);
    }
  }
};
export const logGiftIntentFlowPurchasedGift = function logGiftIntentFlowPurchasedGift(handleGiftCodeCreate) {
  let FRIEND_ANNIVERSARY = arg1;
  if (arg1 === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = { type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId: handleGiftCodeCreate };
  obj.dispatch(obj);
  let obj2 = expandEventPropertiesDefault;
  obj = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: "gift_sent", affinity: null };
  const userAffinity = authStore.getUserAffinity(handleGiftCodeCreate);
  let dmProbability;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  obj[2] = dmProbability;
  obj2.track(constants.GIFT_INTENT_DISMISSED, obj);
  if (FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED) {
    const HTTP = sendRequest.HTTP;
    obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: true };
    obj1[0] = constants2.GIFT_INTENTS_DISMISS;
    obj2 = { intent_type: null, target_id: null };
    obj2[0] = FRIEND_ANNIVERSARY;
    obj2[1] = handleGiftCodeCreate;
    obj1[1] = obj2;
    HTTP.post(obj1).catch((error) => {
      callback(table[7]).captureException(error, { tags: { feature: "gift_intent" } });
    });
    const postResult = HTTP.post(obj1);
  }
};