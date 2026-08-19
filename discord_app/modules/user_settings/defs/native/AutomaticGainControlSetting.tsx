// === Module 14605: toggle ===

// Module 14605 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.cUMdH0);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAutomaticGainControlSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => automaticGainControl.getAutomaticGainControl());
  },
  onValueChange: require("handleAutomaticGainControlChange").handleAutomaticGainControlChange,
  useDescription: function useAutomaticGainControlSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6EjbvA"]);
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AutomaticGainControlSetting.tsx");

export default createToggle;