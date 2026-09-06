// === Module 15558: ? ===

// Module 15558
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4539 */;
import getClientInfo from "getClientInfo" /* 15557 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 15559 */;
import createToggle from "createToggle" /* 11468 */;

let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = getClientInfo;
    const clientInfoString = obj.getClientInfoString(DCDDeviceManager.getDeviceInfo());
    const obj2 = DCDDeviceManager;
    const obj3 = getClientInfo;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DCDDeviceManager.getSystemVersion()) + ")";
  },
  usePredicate: explicitContentFromProto.DeveloperMode.useSetting
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: MobilePhoneSettingsIcon.MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = getClientInfo;
    const clientInfoString = obj.getClientInfoString(DCDDeviceManager.getDeviceInfo());
    const obj2 = DCDDeviceManager;
    const obj3 = getClientInfo;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DCDDeviceManager.getSystemVersion()) + ")";
  },
  usePredicate: explicitContentFromProto.DeveloperMode.useSetting
});
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;