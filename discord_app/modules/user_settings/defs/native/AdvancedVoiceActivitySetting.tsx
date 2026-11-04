// === Module 17485: AdvancedVoiceActivitySetting ===

// Module 17485 (AdvancedVoiceActivitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 6050 */;
import MediaEngineStore from "MediaEngineStore" /* 2135 */;

require = fn;
const SettingBuilders = fn(11728);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BbESsg);
  },
  parent: fn(8573).MobileUserSettings.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    items = [MediaEngineStore];
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
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default toggle;