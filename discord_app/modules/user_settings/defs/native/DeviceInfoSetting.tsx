// discord_app/modules/user_settings/defs/native/DeviceInfoSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { DCDDeviceManager } from "../../../../utils/native/DeviceUtils.tsx";
import { getClientInfo } from "CopyClientInfoSetting.tsx";

let obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = getClientInfo /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(DCDDeviceManager /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = DCDDeviceManager /* DCDDeviceManager */;
    const obj3 = getClientInfo /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DCDDeviceManager /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = getClientInfo /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(DCDDeviceManager /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = DCDDeviceManager /* DCDDeviceManager */;
    const obj3 = getClientInfo /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(DCDDeviceManager /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;