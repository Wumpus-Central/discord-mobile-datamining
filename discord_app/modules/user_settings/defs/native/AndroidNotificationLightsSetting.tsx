// === Module 14800: toggle ===

// Module 14800 (toggle)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import hasAndroidNotificationChannels from "hasAndroidNotificationChannels" /* 14790 */;
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore" /* 14788 */;
import createToggle from "createToggle" /* 10669 */;

({ useAndroidNotificationLightsEnabled: obj1, setAndroidNotificationLightsEnabled } = _initializeAndroidNotificationSettingsStore);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.E3xHUp);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: function useAndroidNotificationLightsSettingValue() {
    let flag = callback();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationLightsEnabled,
  usePredicate: function useHasAndroidNotificationLightsSetting() {
    const tmp = callback();
    const isIOSResult = obj1322.isIOS();
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
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationLightsSetting.tsx");

export default toggle;