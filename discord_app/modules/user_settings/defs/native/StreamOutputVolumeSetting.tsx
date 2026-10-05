// === Module 15070: StreamOutputVolumeSetting ===

// Module 15070 (StreamOutputVolumeSetting)
import _modDef38 from "module_38" /* 38 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4945 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9306 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 9660 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
  const tmp7 = tmpResult.useStateFromStores(items, () => {
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
}) : (() => {
  const obj = MobileAudioOutputExperimentDefault;
  const audioOutputPresent = obj.getConfig({ location: "StreamOutputVolumeSetting" }).audioOutputPresent;
  const obj2 = get_initialized;
  let items = [ApplicationStreamingStore, AuthenticationStore];
  const tmp = obj2.useStateFromStores(items, () => {
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
});
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
    const items = [intl.string(intl3.t["3182VD"]), ];
    const intl2 = intl3.intl;
    items[1] = intl2.string(intl3.t["DGq/PR"]);
    return items;
  }
};
const volumeSlider = SettingBuilders.createVolumeSlider(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/StreamOutputVolumeSetting.tsx");

export default volumeSlider;