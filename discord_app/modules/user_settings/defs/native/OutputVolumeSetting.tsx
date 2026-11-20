// === Module 16533: OutputVolumeSetting ===

// Module 16533 (OutputVolumeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 5690 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10845 */;
import MediaEngineStore from "MediaEngineStore" /* 2131 */;

require = fn;
const SettingBuilders = fn(11817);
const volumeSlider = SettingBuilders.createVolumeSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xPHVBs);
  },
  parent: fn(8592).MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useOutputVolumeSettingValue() {
    items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => outputVolume.getOutputVolume());
  },
  onValueChange: AudioActionCreatorsDefault.setOutputVolume,
  useSearchTerms() {
    const intl = util.intl;
    items = [intl.string(util.t["3182VD"]), ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["DGq/PR"]);
    return items;
  },
  usePredicate() {
    return MobileAudioOutputExperimentDefault.useConfig({ location: "OutputVolumeSetting" }).audioOutputPresent;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default volumeSlider;