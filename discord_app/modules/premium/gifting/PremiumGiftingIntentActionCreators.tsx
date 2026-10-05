// discord_app/modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import SentryUtilsDefault from "../../../utils/SentryUtils.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import UserAffinitiesV2Store from "../../user_affinities/UserAffinitiesV2Store.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let metroImportAll;
let metroImportDefault;
const f104248 = (error) => {
  const obj = SentryUtilsDefault;
  obj.captureException(error, { tags: { feature: "gift_intent" } });
};
const GiftIntentType = PremiumConstants.GiftIntentType;
({ AnalyticEvents: metroImportDefault, Endpoints: metroImportAll } = Constants);
const result = size.fileFinishedImporting("modules/premium/gifting/PremiumGiftingIntentActionCreators.tsx");

export const fetchAndReconcileGiftIntentDismissals = function fetchAndReconcileGiftIntentDismissals(
  serverDismissalTimestampMs,
) {
  let closure_1;
  let settingsTimestampMs;
  _require = serverDismissalTimestampMs;
  const id = AuthenticationStore.getId();
  const HTTP = require("HTTPUtils").HTTP;
  let obj = { url: constants2.GIFT_INTENT_DISMISSALS, oldFormErrors: true, rejectWithError: true };
  const value = HTTP.get(obj);
  return value.then(
    (body) => {
      if (AuthenticationStore.getId() === closure_1) {
        let dismissals = body.body.dismissals;
        const dispatch = DispatcherDefault.dispatch;
        DispatcherDefault;
        if (dismissals == null) {
          dismissals = [];
        }
        const obj2 = {
          type: "GIFT_INTENT_DISMISSALS_FETCH_SUCCESS",
          dismissals: dismissals.map((targetId) => {
            const obj = { targetId: targetId.target_id, dismissedAtMs: Number(targetId.dismissed_at_ms) };
            return obj;
          }),
          settingsTimestampMs,
        };
        dispatch(obj2);
      } else {
        let obj = DispatcherDefault;
        obj.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
      }
    },
    (arg0) => {
      const obj = closure_1(dependencyMap[7]);
      obj.captureException(arg0, { tags: { feature: "gift_intent" } });
      const obj2 = closure_1(dependencyMap[6]);
      obj2.dispatch({ type: "GIFT_INTENT_DISMISSALS_FETCH_FAILURE" });
    },
  );
};
export const logFriendsListGiftIntentsShown = function logFriendsListGiftIntentsShown() {
  const obj = DispatcherDefault;
  obj.dispatch({ type: "FRIENDS_LIST_GIFT_INTENTS_SHOWN" });
};
export const logMessageGiftIntentShown = function logMessageGiftIntentShown(recipientUserId) {
  let dmProbability;
  let obj4;
  let FRIEND_ANNIVERSARY = arg1;
  if (arg1 === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  const obj = DispatcherDefault;
  const obj2 = { type: "MESSAGE_GIFT_INTENT_SHOWN", recipientUserId };
  obj.dispatch(obj2);
  const obj3 = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: "shown", affinity: dmProbability };
  const track = AnalyticsUtilsDefault.track;
  const GIFT_INTENT_DISMISSED = metroImportDefault.GIFT_INTENT_DISMISSED;
  AnalyticsUtilsDefault;
  const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
  dmProbability = undefined;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  track(GIFT_INTENT_DISMISSED, obj3);
  if (FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED) {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: metroImportAll.GIFT_INTENTS_DISMISS,
      body: obj4,
      oldFormErrors: true,
      rejectWithError: true,
    };
    obj4 = { intent_type: FRIEND_ANNIVERSARY, target_id: recipientUserId };
    const postResult = HTTP.post(request);
    postResult.catch(f104248);
  }
};
export const logGiftIntentMessageDismissed = function logGiftIntentMessageDismissed(channel_id, id) {
  let dmProbability;
  let giftIntentType;
  let obj2;
  let recipientUserId;
  const message = MessageStore.getMessage(channel_id, id);
  let giftingPrompt;
  if (message != null) {
    giftingPrompt = message.giftingPrompt;
  }
  if (null != giftingPrompt) {
    ({ giftIntentType, recipientUserId } = giftingPrompt);
    const obj = { gift_intent_type: giftIntentType, dismiss_type: "explicit", affinity: dmProbability };
    const track = AnalyticsUtilsDefault.track;
    const GIFT_INTENT_DISMISSED = metroImportDefault.GIFT_INTENT_DISMISSED;
    AnalyticsUtilsDefault;
    const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
    dmProbability = undefined;
    if (userAffinity != null) {
      dmProbability = userAffinity.dmProbability;
    }
    track(GIFT_INTENT_DISMISSED, obj);
    if (giftIntentType !== GiftIntentType.UNSPECIFIED) {
      const HTTP = HTTPUtils.HTTP;
      const request = {
        url: metroImportAll.GIFT_INTENTS_DISMISS,
        body: obj2,
        oldFormErrors: true,
        rejectWithError: true,
      };
      obj2 = { intent_type: giftIntentType, target_id: recipientUserId };
      const postResult = HTTP.post(request);
      postResult.catch(f104248);
    }
  }
};
export const logGiftIntentFlowPurchasedGift = function logGiftIntentFlowPurchasedGift(recipientUserId) {
  let dmProbability;
  let obj4;
  let FRIEND_ANNIVERSARY = arg1;
  if (arg1 === undefined) {
    FRIEND_ANNIVERSARY = GiftIntentType.FRIEND_ANNIVERSARY;
  }
  let obj = DispatcherDefault;
  const obj2 = { type: "GIFT_INTENT_FLOW_PURCHASED_GIFT", recipientUserId };
  obj.dispatch(obj2);
  const obj3 = { gift_intent_type: FRIEND_ANNIVERSARY, dismiss_type: "gift_sent", affinity: dmProbability };
  const track = AnalyticsUtilsDefault.track;
  const GIFT_INTENT_DISMISSED = metroImportDefault.GIFT_INTENT_DISMISSED;
  AnalyticsUtilsDefault;
  const userAffinity = UserAffinitiesV2Store.getUserAffinity(recipientUserId);
  dmProbability = undefined;
  if (userAffinity != null) {
    dmProbability = userAffinity.dmProbability;
  }
  track(GIFT_INTENT_DISMISSED, obj3);
  if (FRIEND_ANNIVERSARY !== GiftIntentType.UNSPECIFIED) {
    const HTTP = HTTPUtils.HTTP;
    const request = {
      url: metroImportAll.GIFT_INTENTS_DISMISS,
      body: obj4,
      oldFormErrors: true,
      rejectWithError: true,
    };
    obj4 = { intent_type: FRIEND_ANNIVERSARY, target_id: recipientUserId };
    const postResult = HTTP.post(request);
    postResult.catch(f104248);
  }
};
