// === Module 15039: toggle ===

// Module 15039 (toggle)
import set from "set" /* 2 */;
import set2 from "set" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import hasAndroidNotificationChannels from "hasAndroidNotificationChannels" /* 15028 */;
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore" /* 15026 */;
import createToggle from "createToggle" /* 10988 */;

({ useAndroidNotificationVibrationsEnabled: obj1, setAndroidNotificationVibrationsEnabled } = _initializeAndroidNotificationSettingsStore);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["lFg/O1"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: function useAndroidNotificationVibrationsSettingValue() {
    let flag = callback();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationVibrationsEnabled,
  usePredicate: function useHasAndroidNotificationVibrationsSetting() {
    const tmp = callback();
    const tmp2 = require;
    const isIOSResult = set2.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !hasAndroidNotificationChannels.hasAndroidNotificationChannels();
      const tmp2Result = hasAndroidNotificationChannels;
    }
    if (tmp5) {
      tmp5 = null != tmp;
    }
    return tmp5;
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["lFg/O1"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: function useAndroidNotificationVibrationsSettingValue() {
    let flag = callback();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationVibrationsEnabled,
  usePredicate: function useHasAndroidNotificationVibrationsSetting() {
    const tmp = callback();
    const tmp2 = require;
    const isIOSResult = set2.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !hasAndroidNotificationChannels.hasAndroidNotificationChannels();
      const tmp2Result = hasAndroidNotificationChannels;
    }
    if (tmp5) {
      tmp5 = null != tmp;
    }
    return tmp5;
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationVibrationsSetting.tsx");

export default toggle;