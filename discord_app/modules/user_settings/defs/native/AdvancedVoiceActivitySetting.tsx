// === Module 14779: AdvancedVoiceActivitySetting ===

// Module 14779 (AdvancedVoiceActivitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9093 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const SettingBuilders = fn(10993);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BbESsg);
  },
  parent: fn(7412).MobileUserSettings.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
  },
  onValueChange: function onAdvancedVoiceActivitySettingValueChange(vadUseKrisp) {
    const mode = MediaEngineStore.getMode();
    AudioActionCreatorsDefault.setMode(mode, { vadUseKrisp });
  },
  useDescription: function useAdvancedVoiceActivitySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.LoOB1F);
  },
  usePredicate: function useHasAdvancedVoiceActivitySetting() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default toggle;