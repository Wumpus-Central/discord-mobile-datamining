// === Module 15249: AutoVoiceSensitivitySetting ===

// Module 15249 (AutoVoiceSensitivitySetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9089 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Z4oaN0);
  },
  parent: fn(7975).MobileUserSettings.VOICE,
  useValue: function useAutoVoiceSensitivitySettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => modeOptions.getModeOptions().autoThreshold);
  },
  onValueChange: function onAutoVoiceSensitivitySettingValueChange(autoThreshold) {
    const mode = MediaEngineStore.getMode();
    const obj = { autoThreshold };
    obj.setMode(mode, obj);
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutoVoiceSensitivitySetting.tsx");

export default SettingBuilders;