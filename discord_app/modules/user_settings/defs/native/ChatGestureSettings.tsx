// discord_app/modules/user_settings/defs/native/ChatGestureSettings.tsx
import ME from "ME";
import createToggle from "createToggle";

let c3;
let c4;
function useSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = require("../../UserSettings.tsx") /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
}
({ AnalyticEvents: c3, AnalyticsSections: c4 } = ME);
const radio = createToggle.createRadio({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["9BGJ1m"])];
    return items;
  },
  parent: require("MobileSetting").MobileSetting.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = require("../../../../utils/AnalyticsUtils.tsx");
    obj = { enabled: NumberResult === require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = require("../../UserSettings.tsx") /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS, label: null, subLabel: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["6eXLcJ"]);
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[2] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ohhhDK);
    const items = [obj, ];
    obj = { value: require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: null };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["3tYNDS"]);
    items[1] = obj;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    const items = [intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["9BGJ1m"])];
    return items;
  },
  parent: require("MobileSetting").MobileSetting.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = require("../../../../utils/AnalyticsUtils.tsx");
    obj = { enabled: NumberResult === require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = require("../../UserSettings.tsx") /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS, label: null, subLabel: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["6eXLcJ"]);
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[2] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ohhhDK);
    const items = [obj, ];
    obj = { value: require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: null };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["3tYNDS"]);
    items[1] = obj;
    return items;
  }
};
const result = require("create").fileFinishedImporting("modules/user_settings/defs/native/ChatGestureSettings.tsx");

export default radio;
export { useSwipeToReplySettingValue };
export const getSwipeToReplySettingValue = function getSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = require("../../UserSettings.tsx") /* explicitContentFromProto */.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.getSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
};