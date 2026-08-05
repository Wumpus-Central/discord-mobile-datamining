// discord_app/modules/user_settings/defs/native/DeviceInfoSetting.tsx
import createToggle from "createToggle";

let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require("CopyClientInfoSetting.tsx") /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require("../../../../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require("../../../../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */;
    const obj3 = require("CopyClientInfoSetting.tsx") /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require("../../../../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["+ynK0W"]);
  },
  parent: null,
  IconComponent: require("MobilePhoneSettingsIcon").MobilePhoneSettingsIcon,
  useTrailing: function useDeviceInfo() {
    const obj = require("CopyClientInfoSetting.tsx") /* getClientInfo */;
    const clientInfoString = obj.getClientInfoString(require("../../../../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */.getDeviceInfo());
    const obj2 = require("../../../../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */;
    const obj3 = require("CopyClientInfoSetting.tsx") /* getClientInfo */;
    return "" + clientInfoString + " (" + obj3.getClientInfoString(require("../../../../utils/native/DeviceUtils.tsx") /* DCDDeviceManager */.getSystemVersion()) + ")";
  },
  usePredicate: require("explicitContentFromProto").DeveloperMode.useSetting
});
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/DeviceInfoSetting.tsx");

export default createStaticResult;