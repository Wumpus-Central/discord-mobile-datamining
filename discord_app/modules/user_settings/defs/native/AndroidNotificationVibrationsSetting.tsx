// discord_app/modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingsNotificationUtils from "../../notifications/native/SettingsNotificationUtils.tsx";
import MobileNotifSettings from "../../notifications/native/codegen/MobileNotifSettings.tsx";
import AndroidNotificationSettingsStore from "../../notifications/native/stores/AndroidNotificationSettingsStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ useAndroidNotificationVibrationsEnabled: c2, setAndroidNotificationVibrationsEnabled } =
  AndroidNotificationSettingsStore);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const tmp4 = React2();
      if (cResult[0] !== tmp4) {
        const isIOSResult = PlatformUtils.isIOS();
        let tmp7 = !isIOSResult;
        if (!isIOSResult) {
          tmp7 = !SettingsNotificationUtils.hasAndroidNotificationChannels();
          const tmpResult2 = SettingsNotificationUtils;
        }
        if (tmp7) {
          tmp7 = null != tmp4;
        }
        cResult[0] = tmp4;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
        const tmpResult = PlatformUtils;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const tmp = React2();
      const isIOSResult = PlatformUtils.isIOS();
      let tmp5 = !isIOSResult;
      if (!isIOSResult) {
        tmp5 = !SettingsNotificationUtils.hasAndroidNotificationChannels();
        const tmp2Result = SettingsNotificationUtils;
      }
      if (tmp5) {
        tmp5 = null != tmp;
      }
      return tmp5;
    };
const obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["lFg/O1"]);
  },
  useValue: null,
  onValueChange: null,
};
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
obj.useValue = () => {
  let flag = React2();
  if (flag == null) {
    flag = false;
  }
  return flag;
};
obj.onValueChange = setAndroidNotificationVibrationsEnabled;
let SettingBuilders = SettingBuilders_mod;
const obj2 = {};
const merged = Object.assign(obj);
obj2.parent = SettingsConstants.MobileUserSettings.NOTIFICATIONS;
obj2.usePredicate = function usePredicate() {
  let tmp = closure_3();
  if (tmp) {
    tmp = !obj.useIsDeclarativeSettingsUIAvailable("AndroidNotificationVibrationsSetting");
  }
  return tmp;
};
const toggle = SettingBuilders.createToggle(obj2);
let SettingBuilders = SettingBuilders_mod;
const obj3 = {};
const merged1 = Object.assign(obj);
obj3.parent = MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN;
obj3.usePredicate = function usePredicate() {
  let isDeclarativeSettingsUIAvailable = closure_3();
  if (isDeclarativeSettingsUIAvailable) {
    isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable(
      "RedesignAndroidNotificationVibrationsSetting",
    );
  }
  return isDeclarativeSettingsUIAvailable;
};
const toggle1 = SettingBuilders.createToggle(obj3);
const result1 = size.fileFinishedImporting(
  "modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx",
);

export default toggle;
export const RedesignAndroidNotificationVibrationsSetting = toggle1;
