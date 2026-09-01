// === Module 11067: useSwipeToReplySettingValue ===

// Module 11067 (useSwipeToReplySettingValue)
import set from "set" /* 2 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import create from "create" /* 1306 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7884 */;
import ME from "ME" /* 676 */;
import createToggle from "createToggle" /* 11068 */;

function useSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = explicitContentFromProto.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
}
({ AnalyticEvents: c3, AnalyticsSections: c4 } = ME);
const radio = createToggle.createRadio({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["9BGJ1m"])];
    return items;
  },
  parent: MobileUserSettings.MobileUserSettings.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = expandEventPropertiesDefault;
    obj = { enabled: NumberResult === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = explicitContentFromProto.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS, label: null, subLabel: null };
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t["6eXLcJ"]);
    const intl2 = getSystemLocale.intl;
    obj[2] = intl2.string(getSystemLocale.t.ohhhDK);
    const items = [obj, ];
    obj = { value: create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: null };
    const intl3 = getSystemLocale.intl;
    obj[1] = intl3.string(getSystemLocale.t["3tYNDS"]);
    items[1] = obj;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t["9BGJ1m"])];
    return items;
  },
  parent: MobileUserSettings.MobileUserSettings.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = expandEventPropertiesDefault;
    obj = { enabled: NumberResult === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, location: obj };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = explicitContentFromProto.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = { value: create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS, label: null, subLabel: null };
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t["6eXLcJ"]);
    const intl2 = getSystemLocale.intl;
    obj[2] = intl2.string(getSystemLocale.t.ohhhDK);
    const items = [obj, ];
    obj = { value: create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: null };
    const intl3 = getSystemLocale.intl;
    obj[1] = intl3.string(getSystemLocale.t["3tYNDS"]);
    items[1] = obj;
    return items;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ChatGestureSettings.tsx");

export default radio;
export { useSwipeToReplySettingValue };
export const getSwipeToReplySettingValue = function getSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = explicitContentFromProto.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.getSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = create.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
};