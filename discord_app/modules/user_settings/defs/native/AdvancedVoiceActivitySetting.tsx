// === Module 15260: AdvancedVoiceActivitySetting ===

// Module 15260 (AdvancedVoiceActivitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.BbESsg);
  },
  parent: fn(7975).MobileUserSettings.VOICE,
  useValue: function useAdvancedVoiceActivitySettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().vadUseKrisp);
  },
  onValueChange: function onAdvancedVoiceActivitySettingValueChange(vadUseKrisp) {
    const mode = MediaEngineStore.getMode();
    const obj = { vadUseKrisp };
    obj.setMode(mode, obj);
  },
  useDescription: function useAdvancedVoiceActivitySettingDescription() {
    const intl = util.intl;
    return intl.string(util.t.LoOB1F);
  },
  usePredicate: function useHasAdvancedVoiceActivitySetting() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => advancedVoiceActivitySupported.isAdvancedVoiceActivitySupported());
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AdvancedVoiceActivitySetting.tsx");

export default SettingBuilders;