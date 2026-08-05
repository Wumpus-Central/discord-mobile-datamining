// discord_app/modules/user_settings/defs/native/AndroidNotificationSoundsSetting.tsx
import _initializeAndroidNotificationSettingsStore from "_initializeAndroidNotificationSettingsStore";
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { set } from "../../../../utils/PlatformUtils.tsx";

let obj1;
let setAndroidNotificationSoundsEnabled;
({ useAndroidNotificationSoundsEnabled: obj1, setAndroidNotificationSoundsEnabled } = _initializeAndroidNotificationSettingsStore);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["1CWknJ"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
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
    const tmp2 = require;
    const isIOSResult = set.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !tmp2(14542).hasAndroidNotificationChannels();
      const tmp2Result = tmp2(14542);
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
    return intl.string(getSystemLocale.t["1CWknJ"]);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
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
    const tmp2 = require;
    const isIOSResult = set.isIOS();
    let tmp5 = !isIOSResult;
    if (!isIOSResult) {
      tmp5 = !tmp2(14542).hasAndroidNotificationChannels();
      const tmp2Result = tmp2(14542);
    }
    if (tmp5) {
      tmp5 = null != tmp;
    }
    return tmp5;
  }
};
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidNotificationSoundsSetting.tsx");

export default toggle;