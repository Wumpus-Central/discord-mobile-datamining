// === Module 14969: AutoVoiceSensitivitySetting ===

// Module 14969 (AutoVoiceSensitivitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9269 */;
import MediaEngineStore from "MediaEngineStore" /* 1993 */;

require = fn;
const SettingBuilders = fn(11175);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Z4oaN0);
  },
  parent: fn(7582).MobileUserSettings.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    const mode = MediaEngineStore.getMode();
    AudioActionCreatorsDefault.setMode(mode, { autoThreshold });
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default toggle;