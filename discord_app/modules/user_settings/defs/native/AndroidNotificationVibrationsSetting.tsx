// discord_app/modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx
import react from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import notifications_NotificationSettingsUtils from "../../../notifications/NotificationSettingsUtils.tsx";
import SettingsNotificationUtils from "../../notifications/native/SettingsNotificationUtils.tsx";
import MobileNotifSettings from "../../notifications/native/codegen/MobileNotifSettings.tsx";
import AndroidNotificationSettingsStore from "../../notifications/native/stores/AndroidNotificationSettingsStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders_mod from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c2;
let setAndroidNotificationVibrationsEnabled;
({ useAndroidNotificationVibrationsEnabled: c2, setAndroidNotificationVibrationsEnabled } =
  AndroidNotificationSettingsStore);
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      const tmp4 = React2();
      if (cResult[0] !== tmp4) {
        const tmpResult = PlatformUtils;
        let tmp7 = !tmpResult.isIOS();
        tmpResult.isIOS();
        if (tmp7) {
          const tmpResult2 = SettingsNotificationUtils;
          tmp7 = !tmpResult2.hasAndroidNotificationChannels();
        }
        if (tmp7) {
          tmp7 = null != tmp4;
        }
        cResult[0] = tmp4;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      return tmp5;
    }
  : () => {
      const tmp = React2();
      const obj = PlatformUtils;
      let tmp5 = !obj.isIOS();
      obj.isIOS();
      if (tmp5) {
        const tmp2Result = SettingsNotificationUtils;
        tmp5 = !tmp2Result.hasAndroidNotificationChannels();
      }
      if (tmp5) {
        tmp5 = null != tmp;
      }
      return tmp5;
    };
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["lFg/O1"]);
  },
  useValue: () => {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationVibrationsEnabled,
};
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let SettingBuilders = SettingBuilders_mod;
const createToggle = SettingBuilders.createToggle;
const obj2 = {
  parent: MobileUserSettings.NOTIFICATIONS,
  usePredicate() {
    let tmp = closure_3();
    const obj = notifications_NotificationSettingsUtils;
    if (tmp) {
      tmp = !obj.useIsDeclarativeSettingsUIAvailable("AndroidNotificationVibrationsSetting");
    }
    return tmp;
  },
};
const merged = Object.assign(obj);
const toggle = createToggle(obj2);
SettingBuilders = SettingBuilders_mod;
const createToggle2 = SettingBuilders.createToggle;
const obj3 = {
  parent: MobileNotifSettings.MobileNotifSettings.NOTIFICATIONS_REDESIGN,
  usePredicate() {
    let isDeclarativeSettingsUIAvailable = closure_3();
    const obj = notifications_NotificationSettingsUtils;
    if (isDeclarativeSettingsUIAvailable) {
      isDeclarativeSettingsUIAvailable = obj.useIsDeclarativeSettingsUIAvailable(
        "RedesignAndroidNotificationVibrationsSetting",
      );
    }
    return isDeclarativeSettingsUIAvailable;
  },
};
const merged1 = Object.assign(obj);
const toggle2 = createToggle2(obj3);
const result1 = size.fileFinishedImporting(
  "modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx",
);

export default toggle;
export const RedesignAndroidNotificationVibrationsSetting = toggle2;
