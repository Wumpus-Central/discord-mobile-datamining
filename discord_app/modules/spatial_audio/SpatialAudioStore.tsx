// discord_app/modules/spatial_audio/SpatialAudioStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import Storage2 from "../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import SentryUtilsDefault from "../../utils/SentryUtils.native.tsx";
import SpatialAudioForVoiceExperimentDefault from "../voice_panel/SpatialAudioForVoiceExperiment.tsx";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import apply from "../../../_runtime/00012_apply.js";

require = fn;
function applyActiveOptions(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isSpatial3;
  obj = SpatialAudioForVoiceExperimentDefault;
  const config = obj.getConfig({ location: "SpatialAudioStore" });
  ({ enabled, positioningModel } = config);
  const obj2 = apply;
  const mediaEngine = MediaEngineStore.getMediaEngine();
  let str = "";
  if (mediaEngine.getSpatialAudioVersion() >= metroImportDefault) {
    str = positioningModel;
  }
  const cloneDeepResult = apply.cloneDeep(DEFAULT_SPATIAL_AUDIO_OPTIONS);
  const obj5 = { positioning: { model: str } };
  mergeResult = obj2.merge(cloneDeepResult, obj5, apply.cloneDeep(isSpatial));
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
    if (tmpResult2.isEqual(mergeResult, mergeResult)) {
      return false;
    }
    tmpResult2 = apply;
  }
  const isSpatial2 = mergeResult.isSpatial;
  isSpatial3 = isSpatial2;
  const mediaEngine1 = MediaEngineStore.getMediaEngine();
  mediaEngine1.setAudioMixerOptions(mergeResult);
  if (!isSpatial2) {
    global = SpatialAudioStatus.UNKNOWN;
  }
  mediaEngine1.eachConnection(
    (setSpatialAudioEnabled) => setSpatialAudioEnabled.setSpatialAudioEnabled(isSpatial3),
    constants2.DEFAULT,
  );
  const rTCConnection = RTCConnectionStore.getRTCConnection();
  if (rTCConnection != null) {
    const result = rTCConnection.setSpatialAudioEnabled(isSpatial2);
  }
  isSpatial3 = mergeResult.isSpatial;
  if (isSpatial3) {
    isSpatial3 = global === SpatialAudioStatus.ACTIVE;
  }
  const mediaEngine2 = MediaEngineStore.getMediaEngine();
  mediaEngine2.eachConnection(
    (setSpatialAudioActive) => setSpatialAudioActive.setSpatialAudioActive(isSpatial),
    constants2.DEFAULT,
  );
  const rTCConnection1 = RTCConnectionStore.getRTCConnection();
  if (rTCConnection1 != null) {
    const result1 = rTCConnection1.setSpatialAudioActive(isSpatial3);
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
const SpatialAudioConstants = fn(5692);
const DEFAULT_SPATIAL_AUDIO_OPTIONS = SpatialAudioConstants.DEFAULT_SPATIAL_AUDIO_OPTIONS;
({ MIN_POSITIONING_SPATIAL_AUDIO_VERSION: metroImportDefault, SpatialAudioOverrideSource } = SpatialAudioConstants);
const Constants = fn(5539);
({ Features: closure_9, MediaEngineContextTypes: closure_10, SpatialAudioStatus } = Constants);
let obj = {};
let isSpatial = {};
let NONE = SpatialAudioOverrideSource.NONE;
apply.cloneDeep(DEFAULT_SPATIAL_AUDIO_OPTIONS);
let global = SpatialAudioStatus.UNKNOWN;
const set = new Set();
let defaultOn = false;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class SpatialAudioStore extends DeviceSettingsStore {}
const prototype = SpatialAudioStore.prototype;
prototype["initialize"] = function initialize(enabled) {
  const self = this;
  enabled = undefined;
  if (enabled != null) {
    enabled = enabled.enabled;
  }
  closure_12 = { enabled };
  self.waitFor(ApexExperimentStore, MediaEngineStore, RTCConnectionStore);
  items = [ApexExperimentStore];
  self.syncWith(items, handleExperimentChange);
  let mediaEngine = MediaEngineStore.getMediaEngine();
  mediaEngine.on(self(5560).MediaEngineEvent.Connection, (setSpatialAudioEnabled) => {
    const result = setSpatialAudioEnabled.setSpatialAudioEnabled(closure_1_15.isSpatial);
    isSpatial = closure_1_15.isSpatial;
    if (isSpatial) {
      isSpatial = global === constants.ACTIVE;
    }
    const result1 = setSpatialAudioEnabled.setSpatialAudioActive(isSpatial);
  });
  mediaEngine.on(self(5560).MediaEngineEvent.SpatialAudioStatus, (arg0) => {
    let flag = arg0 !== global;
    if (flag) {
      global = arg0;
      isSpatial = mergeResult.isSpatial;
      if (isSpatial) {
        isSpatial = global === SpatialAudioStatus.ACTIVE;
      }
      const mediaEngine = MediaEngineStore.getMediaEngine();
      mediaEngine.eachConnection(
        (setSpatialAudioActive) => setSpatialAudioActive.setSpatialAudioActive(isSpatial),
        constants2.DEFAULT,
      );
      const rTCConnection = RTCConnectionStore.getRTCConnection();
      flag = true;
      if (rTCConnection != null) {
        const result = rTCConnection.setSpatialAudioActive(isSpatial);
        flag = true;
      }
    }
    let flag2 = flag;
    if (flag2) {
      if (arg0 === SpatialAudioStatus.INIT_FAILED) {
        flag2 = true;
        if (!set.has(arg0)) {
          set.add(arg0);
          const _HermesInternal = HermesInternal;
          obj = { tags: null, fingerprint: null, extra: null };
          const obj2 = { spatialAudioStatus: SpatialAudioStatus[arg0] };
          obj.tags = obj2;
          items = ["spatial-audio-failed", SpatialAudioStatus[arg0]];
          obj.fingerprint = items;
          const obj5 = { spatialAudioVersion: null, positioningModel: null };
          const combined = "Spatial audio failed: " + tmp12;
          const mediaEngine1 = MediaEngineStore.getMediaEngine();
          obj5.spatialAudioVersion = mediaEngine1.getSpatialAudioVersion();
          obj5.positioningModel = mergeResult.positioning.model;
          obj.extra = obj5;
          SentryUtilsDefault.captureMessage(combined, obj);
          flag2 = true;
        }
      } else {
        flag2 = true;
      }
    }
    if (flag2) {
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
  return closure_13;
};
prototype["getSpatialAudioOverrideSource"] = function getSpatialAudioOverrideSource() {
  return NONE;
};
prototype["getSpatialAudioStatus"] = function getSpatialAudioStatus() {
  return global;
};
prototype["getExperimentPositioningModel"] = function getExperimentPositioningModel(arg0) {
  const mediaEngine = MediaEngineStore.getMediaEngine();
  let str = "";
  if (mediaEngine.getSpatialAudioVersion() >= metroImportDefault) {
    str = arg0;
  }
  return str;
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
  },
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
    if (obj.isEmpty(overrides.overrides)) {
      let source = SpatialAudioOverrideSource.NONE;
    } else {
      source = overrides.source;
    }
    NONE = source;
    applyActiveOptions();
    obj = apply;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    let tmp = null == channelId.channelId;
    if (tmp) {
      const UNKNOWN = SpatialAudioStatus.UNKNOWN;
      let flag = UNKNOWN !== global;
      if (flag) {
        global = UNKNOWN;
        isSpatial = mergeResult.isSpatial;
        if (isSpatial) {
          isSpatial = global === tmp2.ACTIVE;
        }
        const mediaEngine = MediaEngineStore.getMediaEngine();
        mediaEngine.eachConnection(
          (setSpatialAudioActive) => setSpatialAudioActive.setSpatialAudioActive(isSpatial),
          constants2.DEFAULT,
        );
        const rTCConnection = RTCConnectionStore.getRTCConnection();
        flag = true;
        if (rTCConnection != null) {
          const result = rTCConnection.setSpatialAudioActive(isSpatial);
          flag = true;
        }
      }
      tmp = flag;
    }
    return tmp;
  },
  LOGOUT: function handleLogout() {
    closure_13 = {};
    NONE = SpatialAudioOverrideSource.NONE;
    applyActiveOptions();
  },
};
const spatialAudioStore = new SpatialAudioStore(DispatcherDefault, obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioStore.tsx");

export default spatialAudioStore;
