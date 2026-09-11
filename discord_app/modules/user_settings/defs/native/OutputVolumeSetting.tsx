// === Module 15312: OutputVolumeSetting ===

// Module 15312 (OutputVolumeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9179 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10072 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
fn(11562);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xPHVBs);
  },
  parent: fn(8049).MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useOutputVolumeSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => outputVolume.getOutputVolume());
  },
  onValueChange: AudioActionCreatorsDefault.setOutputVolume,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["3182VD"]), ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["DGq/PR"]);
    return items;
  },
  usePredicate() {
    return MobileAudioOutputExperimentDefault.useConfig({ location: "OutputVolumeSetting" }).audioOutputPresent;
  }
};
SettingBuilders = SettingBuilders.createVolumeSlider(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default SettingBuilders;