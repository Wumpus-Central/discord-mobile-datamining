// === Module 14606: toggle ===

// Module 14606 (toggle)
import initialize from "initialize" /* 589 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import trackDeviceChangedDefault from "trackDeviceChanged" /* 9654 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import "createToggle";

require = fn;
let createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.BbESsg);
  },
  parent: require("MobileUserSettings").MobileUserSettings.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
  },
  onValueChange: function onAdvancedVoiceActivitySettingValueChange(vadUseKrisp) {
    mode = mode.getMode();
    const obj = { vadUseKrisp };
    obj.setMode(mode, obj);
  },
  useDescription: function useAdvancedVoiceActivitySettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.LoOB1F);
  },
  usePredicate: function useHasAdvancedVoiceActivitySetting() {
    const items = [closure_3];
    return initialize.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
};
createToggle = createToggle.createToggle(createToggle);
const result = require("obj132").fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default createToggle;