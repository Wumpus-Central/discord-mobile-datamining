// === Module 15493: AndroidNotificationVibrationsSetting ===

// Module 15493 (AndroidNotificationVibrationsSetting)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import AndroidNotificationSettingsStore from "AndroidNotificationSettingsStore" /* 15480 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const SettingsNotificationUtils = tmp2(15482);
({ useAndroidNotificationVibrationsEnabled: c2, setAndroidNotificationVibrationsEnabled } = AndroidNotificationSettingsStore);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["lFg/O1"]);
  },
  parent: SettingsConstants.MobileUserSettings.NOTIFICATIONS,
  useValue: function useAndroidNotificationVibrationsSettingValue() {
    let flag = React2();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationVibrationsEnabled,
  usePredicate: function useHasAndroidNotificationVibrationsSetting() {
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
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;