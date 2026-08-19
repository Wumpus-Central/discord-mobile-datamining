// === Module 14595: toggle ===

// Module 14595 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Z4oaN0);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    mode = mode.getMode();
    const obj = { autoThreshold };
    obj.setMode(mode, obj);
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.nuFtHH)];
    return items;
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default createToggle;