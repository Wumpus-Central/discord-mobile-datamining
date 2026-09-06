// discord_app/modules/user_settings/defs/native/ChatGestureSettings.tsx
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import Constants from "../../../../Constants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function useSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.useSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
}
({ AnalyticEvents: c3, AnalyticsSections: closure_4 } = Constants);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["Jf0C/c"]);
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["9BGJ1m"])];
    return items;
  },
  parent: SettingsConstants.MobileUserSettings.SWIPE_RIGHT_TO_LEFT,
  useValue: useSwipeToReplySettingValue,
  onValueChange: function onSwipeToReplyValueChange(arg0) {
    const NumberResult = Number(arg0);
    let obj = {
      enabled: NumberResult === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY,
      location: null,
    };
    obj = { section: constants2.SETTINGS_TEXT_AND_IMAGES };
    obj.location = obj;
    obj.track(constants.USER_SETTINGS_SWIPE_TO_REPLY_TOGGLE, obj);
    const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
    SwipeRightToLeftModeSetting.updateSetting(NumberResult);
  },
  useOptions: function useHasSwipeToReplySettingOptions() {
    let obj = {
      value: preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS,
      label: null,
      subLabel: null,
    };
    const intl = util.intl;
    obj.label = intl.string(util.t["6eXLcJ"]);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t.ohhhDK);
    const items = [obj];
    obj = { value: preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY, label: null };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t["3tYNDS"]);
    items[1] = obj;
    return items;
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ChatGestureSettings.tsx");

export default radio;
export { useSwipeToReplySettingValue };
export const getSwipeToReplySettingValue = function getSwipeToReplySettingValue() {
  const SwipeRightToLeftModeSetting = UserSettings.SwipeRightToLeftModeSetting;
  let SWIPE_RIGHT_TO_LEFT_REPLY = SwipeRightToLeftModeSetting.getSetting();
  if (SWIPE_RIGHT_TO_LEFT_REPLY === preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_UNSET) {
    SWIPE_RIGHT_TO_LEFT_REPLY = preloaded_user_settings.SwipeRightToLeftMode.SWIPE_RIGHT_TO_LEFT_REPLY;
  }
  return SWIPE_RIGHT_TO_LEFT_REPLY;
};
