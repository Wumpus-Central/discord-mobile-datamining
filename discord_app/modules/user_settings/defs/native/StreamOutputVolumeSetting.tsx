// discord_app/modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx
import _modDef38 from "../../../../../_runtime/metro/00038__.js";
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import BaseConnectionEvent from "../../../../../discord_common/js/packages/media-engine/index.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import MobileAudioOutputExperimentDefault from "../../../media_engine/MobileAudioOutputExperiment.tsx";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let localVolume;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
        const fn = function l() {
          let obj;
          let obj2;
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
        };
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let localVolume;
      const obj = get_initialized;
      let items = [ApplicationStreamingStore, AuthenticationStore, MediaEngineStore];
      return obj.useStateFromStores(items, () => {
        let obj;
        let obj2;
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
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = MobileAudioOutputExperimentDefault;
        const config = obj2.getConfig({ location: "StreamOutputVolumeSetting" });
        cResult[0] = config;
        first = config;
      } else {
        first = cResult[0];
      }
      const audioOutputPresent = first.audioOutputPresent;
      let items = [ApplicationStreamingStore, AuthenticationStore];
      const tmpResult = get_initialized;
      const tmp7 =
        tmpResult.useStateFromStores(items, () => {
          let obj;
          let obj2;
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
        }) && audioOutputPresent;
      return tmp7;
    }
  : () => {
      const obj = MobileAudioOutputExperimentDefault;
      const audioOutputPresent = obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
      const obj2 = get_initialized;
      let items = [ApplicationStreamingStore, AuthenticationStore];
      const tmp =
        obj2.useStateFromStores(items, () => {
          let obj;
          let obj2;
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
        }) && audioOutputPresent;
      return tmp;
    };
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.pEAl4b);
  },
  parent: MobileUserSettings.VOICE,
  maximum: 200,
  useValue: tmp2,
  onValueChange: function onStreamValueSettingValueChange(arg0) {
    let obj;
    let obj2;
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
    const obj3 = AudioActionCreatorsDefault;
    obj3.setLocalVolume(tmp2.ownerId, arg0, BaseConnectionEvent.MediaEngineContextTypes.STREAM);
  },
  usePredicate: tmp3,
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t["3182VD"])];
    const intl2 = intl3.intl;
    items[1] = intl2.string(intl3.t["DGq/PR"]);
    return items;
  },
};
const volumeSlider = SettingBuilders.createVolumeSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default volumeSlider;
