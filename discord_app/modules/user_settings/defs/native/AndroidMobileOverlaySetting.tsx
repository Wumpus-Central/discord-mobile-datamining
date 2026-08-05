// discord_app/modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx
import getUserAgnosticState from "getUserAgnosticState";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["9CSZJm"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [getUserAgnosticState];
    return initialize /* initialize */.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: require("dispatcher").setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.Wfoivk);
  },
  usePredicate: require("getUserAgnosticState").isMobileOverlaySupported
};
createToggle = createToggle.createToggle(createToggle);
const result = require("initialize").fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default createToggle;