// === Module 16860: AutoVoiceSensitivitySetting ===

// Module 16860 (AutoVoiceSensitivitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5996 */;
import MediaEngineStore from "MediaEngineStore" /* 2132 */;

require = fn;
const SettingBuilders = fn(11962);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Z4oaN0);
  },
  parent: fn(9555).MobileUserSettings.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    const mode = MediaEngineStore.getMode();
    AudioActionCreatorsDefault.setMode(mode, { autoThreshold });
  },
  useSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default toggle;