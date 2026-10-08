// === Module 5242: SpatialAudioStore ===

// Module 5242 (SpatialAudioStore)
import initializeDefault from "initialize" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 5244 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1258 */;
import MediaEngineStore from "MediaEngineStore" /* 2011 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import apply from "module_12" /* 12 */;

require = fn;
function applyActiveOptions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isSpatial2;
  obj = apply;
  const cloneDeepResult = apply.cloneDeep(DEFAULT_SPATIAL_AUDIO_OPTIONS);
  mergeResult = obj.merge(cloneDeepResult, apply.cloneDeep(isSpatial));
  let enabled = SpatialAudioForVoiceExperimentDefault.getConfig({ location: "SpatialAudioStore" }).enabled;
  isSpatial = isSpatial.isSpatial;
  if (isSpatial == null) {
    if (enabled) {
      let enabled2 = obj.enabled;
      if (enabled2 == null) {
        enabled2 = defaultOn;
      }
      enabled = enabled2;
    }
    isSpatial = enabled;
  }
  if (isSpatial) {
    isSpatial = MediaEngineStore.supports(constants.SPATIAL_AUDIO);
  }
  mergeResult.isSpatial = isSpatial;
  if (!flag) {
    if (tmpResult.isEqual(mergeResult, mergeResult)) {
      return false;
    }
    tmpResult = apply;
  }
  isSpatial2 = mergeResult.isSpatial;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.setAudioMixerOptions(mergeResult);
  if (!isSpatial2) {
    global = SpatialAudioStatus.UNKNOWN;
  }
  mediaEngine.eachConnection((setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(isSpatial2), constants2.DEFAULT);
  const rTCConnection = RTCConnectionStore.getRTCConnection();
  if (rTCConnection != null) {
    const result = rTCConnection.setSpatialAudioEnabled(isSpatial2);
  }
  return true;
}
function handleExperimentChange() {
  let enabled = obj.enabled;
  if (enabled == null) {
    enabled = defaultOn;
  }
  obj = SpatialAudioForVoiceExperimentDefault;
  defaultOn = obj.getConfig({ location: "SpatialAudioStore" }).defaultOn;
  let tmp = applyActiveOptions();
  if (!tmp) {
    let enabled2 = obj.enabled;
    if (enabled2 == null) {
      enabled2 = defaultOn;
    }
    tmp = enabled2 !== enabled;
  }
  return tmp;
}
const DEFAULT_SPATIAL_AUDIO_OPTIONS = fn(5243).DEFAULT_SPATIAL_AUDIO_OPTIONS;
const Constants = fn(5115);
({ Features: closure_7, MediaEngineContextTypes: closure_8, SpatialAudioStatus } = Constants);
let obj = {};
let isSpatial = {};
apply.cloneDeep(DEFAULT_SPATIAL_AUDIO_OPTIONS);
let global = SpatialAudioStatus.UNKNOWN;
let defaultOn = false;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class SpatialAudioStore extends DeviceSettingsStore {
}
const prototype = SpatialAudioStore.prototype;
prototype["initialize"] = function initialize(enabled) {
  const self = this;
  enabled = undefined;
  if (enabled != null) {
    enabled = enabled.enabled;
  }
  closure_10 = { enabled };
  self.waitFor(ApexExperimentStore, MediaEngineStore, RTCConnectionStore);
  const items = [ApexExperimentStore];
  self.syncWith(items, handleExperimentChange);
  const mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.on(self(5135).MediaEngineEvent.Connection, (setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(isSpatial.isSpatial));
  mediaEngine.on(self(5135).MediaEngineEvent.SpatialAudioStatus, (arg0) => {
    let flag = arg0 !== global;
    if (flag) {
      global = arg0;
      flag = true;
    }
    if (flag) {
      self.emitChange();
    }
  });
  defaultOn = SpatialAudioForVoiceExperimentDefault.getConfig({ location: "SpatialAudioStore" }).defaultOn;
  applyActiveOptions(true);
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
prototype["isSpatialAudioEnabled"] = function isSpatialAudioEnabled() {
  let enabled = obj.enabled;
  if (enabled == null) {
    enabled = defaultOn;
  }
  return enabled;
};
prototype["isSpatialAudioActive"] = function isSpatialAudioActive() {
  return mergeResult.isSpatial;
};
prototype["getActiveSpatialAudioOptions"] = function getActiveSpatialAudioOptions() {
  return mergeResult;
};
prototype["getSpatialAudioOverrides"] = function getSpatialAudioOverrides() {
  return closure_11;
};
prototype["getSpatialAudioStatus"] = function getSpatialAudioStatus() {
  return global;
};
SpatialAudioStore.displayName = "SpatialAudioStore";
SpatialAudioStore.persistKey = "SpatialAudioStore";
let items = [
  function migrateFromMediaEngineStore() {
    const Storage = Storage2.Storage;
    value = Storage.get("MediaEngineStore");
    let tmp2;
    if (value != null) {
      tmp2 = value[constants2.DEFAULT];
    }
    let num;
    if (tmp2 != null) {
      num = tmp2.audioMixerSettingsVersion;
    }
    if (num == null) {
      num = 0;
    }
    if (num < 3) {
      obj = {};
    } else {
      let enabled;
      if (tmp2 != null) {
        const audioMixerSettings = tmp2.audioMixerSettings;
        if (audioMixerSettings != null) {
          enabled = audioMixerSettings.enabled;
        }
      }
      obj = false === enabled ? { enabled: false } : {};
    }
    return obj;
  }
];
SpatialAudioStore.migrations = items;
obj = {
  POST_CONNECTION_OPEN: function handlePostConnectionOpen() {
    return applyActiveOptions();
  },
  AUDIO_SET_SPATIAL_AUDIO_ENABLED: function handleSetSpatialAudioEnabled(enabled) {
    obj = {};
    const merged = Object.assign(obj);
    obj.enabled = enabled.enabled;
    applyActiveOptions();
  },
  AUDIO_SET_SPATIAL_AUDIO_OVERRIDES: function handleSetSpatialAudioOverrides(overrides) {
    overrides = overrides.overrides;
    applyActiveOptions();
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    if (null == channelId.channelId) {
      if (global !== SpatialAudioStatus.UNKNOWN) {
        global = SpatialAudioStatus.UNKNOWN;
      }
    }
    return false;
  },
  LOGOUT: function handleLogout() {
    closure_11 = {};
    applyActiveOptions();
  }
};
const spatialAudioStore = new SpatialAudioStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioStore.tsx");

export default spatialAudioStore;