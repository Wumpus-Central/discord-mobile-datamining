// === Module 16959: DeviceInfoSetting ===

// Module 16959 (DeviceInfoSetting)
import util from "util" /* 1125 */;
import UserSettings from "UserSettings" /* 4800 */;
import DeviceUtils from "DeviceUtils" /* 4929 */;
import CopyClientInfoSetting from "CopyClientInfoSetting" /* 16958 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 16960 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = CopyClientInfoSetting;
    const clientInfoString = obj.getClientInfoString(DeviceUtils.getDeviceInfo());
    const obj3 = CopyClientInfoSetting;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DeviceUtils.getSystemVersion()) + ")";
  },
  usePredicate: UserSettings.DeveloperMode.useSetting
};
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = CopyClientInfoSetting;
    const clientInfoString = obj.getClientInfoString(DeviceUtils.getDeviceInfo());
    const obj3 = CopyClientInfoSetting;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DeviceUtils.getSystemVersion()) + ")";
  },
  usePredicate: UserSettings.DeveloperMode.useSetting
});