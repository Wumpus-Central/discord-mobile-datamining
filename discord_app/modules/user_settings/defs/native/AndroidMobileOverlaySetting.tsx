// === Module 14798: toggle ===

// Module 14798 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 9994 */;
import closure_2 from "getUserAgnosticState" /* 9983 */;
import createToggle from "createToggle" /* 10988 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["9CSZJm"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAndroidMobileOverlaySettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => enabled.getEnabled());
  },
  onValueChange: dispatcherDefault.setEnabled,
  useDescription: function useAndroidMobileOverlaySettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Wfoivk);
  },
  usePredicate: require("getUserAgnosticState").isMobileOverlaySupported
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx");

export default createToggle;