// discord_app/modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx
import createToggle from "createToggle";

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.V6D0wU);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").NativePhoneIntegrationEnabled.useSetting,
  onValueChange: require("explicitContentFromProto").NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = require("../../../voice_calls/CallKitMetricCollectionExperiment.tsx").useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = require("../../../../utils/PlatformUtils.tsx") /* set */.isIOS();
      const obj2 = require("../../../../utils/PlatformUtils.tsx") /* set */;
    }
    return enabled;
  }
});
const obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.V6D0wU);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").NativePhoneIntegrationEnabled.useSetting,
  onValueChange: require("explicitContentFromProto").NativePhoneIntegrationEnabled.updateSetting,
  usePredicate() {
    let enabled = require("../../../voice_calls/CallKitMetricCollectionExperiment.tsx").useConfig({ location: "IOSNativePhoneIntegrationSetting" }).enabled;
    if (enabled) {
      enabled = require("../../../../utils/PlatformUtils.tsx") /* set */.isIOS();
      const obj2 = require("../../../../utils/PlatformUtils.tsx") /* set */;
    }
    return enabled;
  }
};
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/IOSNativePhoneIntegrationSetting.tsx");

export default toggle;