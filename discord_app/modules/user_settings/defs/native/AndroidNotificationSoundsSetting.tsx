// === Module 14802: toggle ===

// Module 14802 (toggle)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import hasAndroidNotificationChannels from "hasAndroidNotificationChannels" /* 14790 */;
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore" /* 14788 */;
import createToggle from "createToggle" /* 10669 */;

({ useAndroidNotificationSoundsEnabled: obj1, setAndroidNotificationSoundsEnabled } = _initializeAndroidNotificationSettingsStore);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1CWknJ"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: function useAndroidNotificationSoundsSettingValue() {
    let flag = callback();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: setAndroidNotificationSoundsEnabled,
  usePredicate: function useHasAndroidNotificationSoundsSetting() {
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
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationSoundsSetting.tsx");

export default toggle;