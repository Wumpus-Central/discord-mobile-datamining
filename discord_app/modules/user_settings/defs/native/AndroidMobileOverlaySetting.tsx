// discord_app/modules/user_settings/defs/native/AndroidMobileOverlaySetting.tsx
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import dispatcherDefault from "dispatcher" /* 12555 */;
import closure_2 from "getUserAgnosticState" /* 12548 */;
import createToggle from "createToggle" /* 10669 */;

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