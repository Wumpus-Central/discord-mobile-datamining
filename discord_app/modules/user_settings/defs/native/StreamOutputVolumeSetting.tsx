// discord_app/modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import BaseConnectionEvent from "../../../../../discord_common/js/packages/media-engine/index.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import MobileAudioOutputExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.pEAl4b);
  },
  parent: fn(7975).MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useStreamVolumeSettingValue() {
    let items = [ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
    return initialize.useStateFromStores(items, () => {
      const items = [ApplicationStreamingStore, AuthenticationStore];
      [obj, obj2] = items;
      const lastActiveStream = obj.getLastActiveStream();
      let tmp2 = null;
      if (null != lastActiveStream) {
        tmp2 = null;
        if (lastActiveStream.ownerId !== obj2.getId()) {
          tmp2 = lastActiveStream;
        }
      }
      let num = 0;
      if (null != tmp2) {
        num = localVolume.getLocalVolume(tmp2.ownerId, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
      }
      return num;
    });
  },
  onValueChange: function onStreamValueSettingValueChange(arg0) {
    const items = [ApplicationStreamingStore, AuthenticationStore];
    [obj, obj2] = items;
    const lastActiveStream = obj.getLastActiveStream();
    let tmp2 = null;
    if (null != lastActiveStream) {
      tmp2 = null;
      if (lastActiveStream.ownerId !== obj2.getId()) {
        tmp2 = lastActiveStream;
      }
    }
    _modDef38(null != tmp2, "Can not set stream volume without active stream");
    AudioActionCreatorsDefault.setLocalVolume(tmp2.ownerId, arg0, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
  },
  usePredicate: function useHasStreamVolumeSetting() {
    const obj = MobileAudioOutputExperimentDefault;
    let items = [ApplicationStreamingStore, AuthenticationStore];
    return (
      initialize.useStateFromStores(items, () => {
        const items = [ApplicationStreamingStore, AuthenticationStore];
        [obj, obj2] = items;
        const lastActiveStream = obj.getLastActiveStream();
        let tmp2 = null;
        if (null != lastActiveStream) {
          tmp2 = null;
          if (lastActiveStream.ownerId !== obj2.getId()) {
            tmp2 = lastActiveStream;
          }
        }
        return null != tmp2;
      }) && obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent
    );
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["3182VD"])];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["DGq/PR"]);
    return items;
  },
};
SettingBuilders = SettingBuilders.createVolumeSlider(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default SettingBuilders;
