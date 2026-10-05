// === Module 11128: ChatGestureSettings ===

// Module 11128 (ChatGestureSettings)
import intl4 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import UserSettings from "UserSettings" /* 2028 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const MobileUserSettings = SettingsConstants.MobileUserSettings;
({ AnalyticEvents: c3, AnalyticsSections: closure_4 } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
}) : (() => {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
});
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t["9BGJ1m"])];
    return items;
  },
  parent: MobileUserSettings.SWIPE_RIGHT_TO_LEFT,
  useValue: tmp3,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    let obj3;
    const NumberResult = Number(arg0);
    const SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
    const obj2 = { enabled: NumberResult === SWIPE_RIGHT_TO_LEFT_REPLY, location: obj3 };
    obj3 = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    const obj = AnalyticsUtilsDefault;
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj2);
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let intl;
    let intl2;
    let intl3;
    const obj = { value: preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS, label: intl.string(intl4.t["6eXLcJ"]), subLabel: intl2.string(intl4.t.ohhhDK) };
    intl = intl4.intl;
    intl2 = intl4.intl;
    const items = [obj, ];
    const obj2 = { value: preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: intl3.string(intl4.t["3tYNDS"]) };
    intl3 = intl4.intl;
    items[1] = obj2;
    return items;
  }
};
const radio = SettingBuilders.createRadio(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatGestureSettings.tsx");

export default radio;
export const useSwipeToReplySettingValue = tmp3;
export const getSwipeToReplySettingValue = function getSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.getSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
};