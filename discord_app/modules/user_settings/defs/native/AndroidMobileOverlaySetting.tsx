// discord_app/modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx
import getUserAgnosticState from "getUserAgnosticState";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["9CSZJm"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [getUserAgnosticState];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: require("dispatcher").setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Wfoivk);
  },
  usePredicate: require("getUserAgnosticState").isMobileOverlaySupported
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default createToggle;