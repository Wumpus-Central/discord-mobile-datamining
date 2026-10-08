// discord_app/modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _modDef2891 from "../../../notifications/NotificationSettings.messages.js";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import MobileNotifSettings from "../../notifications/native/codegen/MobileNotifSettings.tsx";
import AndroidNotificationSettingsStore from "../../notifications/native/stores/AndroidNotificationSettingsStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ useAndroidMessageNotificationsEnabled: c3, setAndroidMessageNotificationsEnabled } =
  AndroidNotificationSettingsStore);
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useHasAndroidMessageNotificationsSetting() {
      const cResult = c.c(2);
      const tmp4 = React3();
      if (cResult[0] !== tmp4) {
        let isAndroidResult = PlatformUtils.isAndroid();
        if (isAndroidResult) {
          isAndroidResult = null != tmp4;
        }
        cResult[0] = tmp4;
        cResult[1] = isAndroidResult;
        let tmp5 = isAndroidResult;
        const tmpResult = PlatformUtils;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : function useHasAndroidMessageNotificationsSetting() {
      const tmp = React3();
      let isAndroidResult = PlatformUtils.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = null != tmp;
      }
      return isAndroidResult;
    };
function useAndroidMessageNotificationsSettingValue() {
  let flag = React3();
  if (flag == null) {
    flag = false;
  }
  return flag;
}
let closure_4 = tmp4;
const obj = {
  useValue: useAndroidMessageNotificationsSettingValue,
  onValueChange: setAndroidMessageNotificationsEnabled,
};
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(util.t["zViLy+"]);
};
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  let tmp = closure_4();
  if (tmp) {
    tmp = !obj.useIsDeclarativeSettingsUIAvailable("AndroidMessageNotificationsSetting");
  }
  return tmp;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef2891.odJXYJ);
};
obj3.useDescription = function useDescription() {
  const intl = util.intl;
  return intl.string(_modDef2891["+jwUmI"]);
};
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  let isDeclarativeSettingsUIAvailable = closure_4();
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable(
      "RedesignAndroidMessageNotificationsSetting",
    );
  }
  return isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidMessageNotificationsSetting.tsx");

export default toggle;
export { useAndroidMessageNotificationsSettingValue };
export const useHasAndroidMessageNotificationsSetting = tmp4;
export const RedesignAndroidMessageNotificationsSetting = toggle1;
