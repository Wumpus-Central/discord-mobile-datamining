// === Module 14866: ? ===

// Module 14866
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4066 */;
import DCDDeviceManager from "DCDDeviceManager" /* 4354 */;
import getClientInfo from "getClientInfo" /* 14865 */;
import MobilePhoneSettingsIcon from "MobilePhoneSettingsIcon" /* 14867 */;
import createToggle from "createToggle" /* 10669 */;

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