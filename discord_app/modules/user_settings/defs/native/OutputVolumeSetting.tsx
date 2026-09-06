// discord_app/modules/user_settings/defs/native/OutputVolumeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import MobileAudioOutputExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xPHVBs);
  },
  parent: fn(7975).MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useOutputVolumeSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => outputVolume.getOutputVolume());
  },
  onValueChange: AudioActionCreatorsDefault.setOutputVolume,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["3182VD"])];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["DGq/PR"]);
    return items;
  },
  usePredicate() {
    return MobileAudioOutputExperimentDefault.useConfig({ location: "OutputVolumeSetting" }).audioOutputPresent;
  },
};
SettingBuilders = SettingBuilders.createVolumeSlider(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default SettingBuilders;
