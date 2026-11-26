// discord_app/modules/spatial_audio/SpatialAudioSessionStats.tsx
import SpatialAudioForVoiceExperimentDefault from "../voice_panel/SpatialAudioForVoiceExperiment.tsx";
import classifyOutputDeviceDefault from "../media_engine/classifyOutputDevice.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SpatialAudioStore from "SpatialAudioStore.tsx";

const require = fn;
function requestNativeStats() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_19 = async function _requestNativeStats() {
  value = {};
  mediaEngine = mediaEngine.getMediaEngine();
  await mediaEngine.getSpatialAudioStats(true);
  value.stats = value;
  value.answeredInTime = true;
  return value;
};
let closure_20 = async function _readNativeStats() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "+95" };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_0 = tmp7;
          closure_128_0 = undefined;
          const promise = new Promise((arg0) => {
            const timeout = setTimeout(() => closure_0({ stats: null, answeredInTime: false }), 1000);
          });
          c3 = 2;
          items = [requestNativeStats(), promise];
          c1 = 3;
          c4 = 1;
          const obj4 = { value: Promise.race(items), done: false };
          return obj4;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        const _clearTimeout4 = clearTimeout;
        clearTimeout(closure_128_0);
        throw closure_2;
      } else if (2 === tmp7) {
        c3 = 0;
        const _clearTimeout3 = clearTimeout;
        clearTimeout(closure_128_0);
        c4 = 3;
        const obj5 = { value: { stats: null, answeredInTime: false }, done: true };
        return obj5;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        const _clearTimeout2 = clearTimeout;
        clearTimeout(closure_128_0);
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        c3 = 0;
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_128_0);
        c4 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp27) {
      closure_2 = tmp27;
      if (tmp4 === c3) {
        c4 = tmp3;
        throw tmp27;
      } else if (tmp2 === tmp29) {
        c1 = tmp2;
      } else {
        c1 = tmp;
      }
    }
  }
};
let closure_21 = async function _answeredInTime() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    await value;
    return value.answeredInTime;
  })();
};
function takeSnapshot(isSpatial, arg1) {
  obj = {};
  const merged = Object.assign(isSpatial);
  isSpatial = isSpatial.isSpatial;
  if (isSpatial == null) {
    if (arg1) {
      obj.state = OFF_UNSUPPORTED;
      obj.outputClass = classifyOutputDeviceDefault(isSpatial.outputDevices[isSpatial.outputDeviceId]);
      return obj;
    }
    if (false === isSpatial.isSpatial) {
      OFF_UNSUPPORTED = obj.OFF_OVERRIDE;
    } else {
      OFF_UNSUPPORTED = arg1 ? tmp2.OFF_USER : tmp2.OFF_EXPERIMENT;
    }
  }
  if (isSpatial.supported) {
    const status = isSpatial.status;
    if (constants3.ACTIVE === status) {
      OFF_UNSUPPORTED = obj.ACTIVE;
    } else if (constants3.MONO_OUTPUT === status) {
      OFF_UNSUPPORTED = obj.ACTIVE_MONO;
    } else if (constants3.INIT_FAILED === status) {
      OFF_UNSUPPORTED = obj.FAILED_INIT;
    } else if (constants3.HRTF_FAILED === status) {
      OFF_UNSUPPORTED = obj.FAILED_HRTF;
    } else {
      OFF_UNSUPPORTED = obj.IDLE;
    }
  } else {
    OFF_UNSUPPORTED = obj.OFF_UNSUPPORTED;
  }
}
const React6 = fn(5998).SpatialAudioOverrideSource;
const Constants = fn(5855);
({ DEFAULT_DEVICE_ID: closure_10, Features: closure_11, SpatialAudioStatus: closure_12 } = Constants);
let obj = {
  OFF_UNSUPPORTED: "off_unsupported",
  OFF_EXPERIMENT: "off_experiment",
  OFF_USER: "off_user",
  OFF_OVERRIDE: "off_override",
  IDLE: "idle",
  ACTIVE: "active",
  ACTIVE_MONO: "active_mono",
  FAILED_INIT: "failed_init",
  FAILED_HRTF: "failed_hrtf",
};
let closure_14 = {
  [obj.OFF_UNSUPPORTED]: "duration_off_unsupported_ms",
  [obj.OFF_EXPERIMENT]: "duration_off_experiment_ms",
  [obj.OFF_USER]: "duration_off_user_ms",
  [obj.OFF_OVERRIDE]: "duration_off_override_ms",
  [obj.IDLE]: "duration_idle_ms",
  [obj.ACTIVE]: "duration_active_ms",
  [obj.ACTIVE_MONO]: "duration_active_mono_ms",
  [obj.FAILED_INIT]: "duration_failed_init_ms",
  [obj.FAILED_HRTF]: "duration_failed_hrtf_ms",
};
const dependencyMap = Object.values(fn(6034).OutputDeviceClass);
let closure_16 = {
  mixUs: "mix_us",
  positioningUs: "positioning_us",
  renderUs: "render_us",
  reflectionsSimUs: "reflections_sim_us",
};
let closure_17 = ["mean", "p75", "p95", "p99", "max"];
const size = fn(2);
let result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioSessionStats.tsx");
class SpatialAudioSessionStats {
  constructor() {
    TimeStampProducer = global;
    if (global === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      TimeStampProducer = closure_0(closure_2[10]).TimeStampProducer;
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    tmp4 = closure_2;
    tmp3 = closure_1;
    obj2 = closure_1(closure_2[9]);
    config = obj2.getConfig({ location: "SpatialAudioSessionStats" }, { autoTrackExposure: false });
    id = closure_6.getId();
    assignment = undefined;
    if (null != id) {
      tmp8 = closure_5;
      str = "user";
      assignment = closure_5.getAssignment("user", id, tmp3(tmp4[9]).definition.name);
    }
    obj1 = { enabled: config.enabled, positioningModel: config.positioningModel, variantId: null };
    variantId = null;
    if (null != assignment) {
      variantId = null;
      if (!assignment.useAsEligibility) {
        variantId = assignment.variantId;
      }
    }
    obj1.variantId = variantId;
    obj.experiment = obj1;
    obj5 = {
      status: closure_8.getSpatialAudioStatus(),
      outputDeviceId: closure_7.getOutputDeviceId(),
      outputDevices: closure_7.getOutputDevices(),
      overrideSource: closure_8.getSpatialAudioOverrideSource(),
      isSpatial: closure_8.getSpatialAudioOverrides().isSpatial,
      userSetting: closure_8.getUserAgnosticState().enabled,
      userEnabled: closure_8.isSpatialAudioEnabled(),
      supported: closure_7.supports(Features.SPATIAL_AUDIO),
    };
    obj.current = takeSnapshot(obj5, obj.experiment.enabled);
    obj.frozen = false;
    map = new Map();
    obj.durations = map;
    obj.lastOverrideSource = closure_9.NONE;
    obj.anyOverride = false;
    obj.outputClassAtStart = closure_0(tmp4[8]).OutputDeviceClass.UNKNOWN;
    obj.numOutputClassChanges = 0;
    obj.numStatusChanges = 0;
    obj.numMonoTransitions = 0;
    obj.numUserToggles = 0;
    obj.firstFailureStatus = null;
    obj.maxRemoteAudioSources = 0;
    obj.nativeWindowIsWhole = Promise.resolve(false);
    obj.handleStoreChange = function handleStoreChange() {
      obj = {
        status: SpatialAudioStore.getSpatialAudioStatus(),
        outputDeviceId: MediaEngineStore.getOutputDeviceId(),
        outputDevices: MediaEngineStore.getOutputDevices(),
        overrideSource: SpatialAudioStore.getSpatialAudioOverrideSource(),
        isSpatial: SpatialAudioStore.getSpatialAudioOverrides().isSpatial,
        userSetting: SpatialAudioStore.getUserAgnosticState().enabled,
        userEnabled: SpatialAudioStore.isSpatialAudioEnabled(),
        supported: MediaEngineStore.supports(constants2.SPATIAL_AUDIO),
      };
      const current = obj.current;
      if (!tmp) {
        obj.update(obj);
      }
    };
    obj.refreshExperiment = function refreshExperiment() {
      const config = SpatialAudioForVoiceExperimentDefault.getConfig(
        { location: "SpatialAudioSessionStats" },
        { autoTrackExposure: false },
      );
      const id = AuthenticationStore.getId();
      let assignment;
      if (null != id) {
        assignment = ApexExperimentStore.getAssignment(
          "user",
          id,
          SpatialAudioForVoiceExperimentDefault.definition.name,
        );
      }
      const obj3 = { enabled: config.enabled, positioningModel: config.positioningModel, variantId: null };
      let variantId = null;
      if (null != assignment) {
        variantId = null;
        if (!assignment.useAsEligibility) {
          variantId = assignment.variantId;
        }
      }
      obj3.variantId = variantId;
      obj.experiment = obj3;
      obj.update({
        status: SpatialAudioStore.getSpatialAudioStatus(),
        outputDeviceId: MediaEngineStore.getOutputDeviceId(),
        outputDevices: MediaEngineStore.getOutputDevices(),
        overrideSource: SpatialAudioStore.getSpatialAudioOverrideSource(),
        isSpatial: SpatialAudioStore.getSpatialAudioOverrides().isSpatial,
        userSetting: SpatialAudioStore.getUserAgnosticState().enabled,
        userEnabled: SpatialAudioStore.isSpatialAudioEnabled(),
        supported: MediaEngineStore.supports(constants2.SPATIAL_AUDIO),
      });
      const obj4 = {
        status: SpatialAudioStore.getSpatialAudioStatus(),
        outputDeviceId: MediaEngineStore.getOutputDeviceId(),
        outputDevices: MediaEngineStore.getOutputDevices(),
        overrideSource: SpatialAudioStore.getSpatialAudioOverrideSource(),
        isSpatial: SpatialAudioStore.getSpatialAudioOverrides().isSpatial,
        userSetting: SpatialAudioStore.getUserAgnosticState().enabled,
        userEnabled: SpatialAudioStore.isSpatialAudioEnabled(),
        supported: MediaEngineStore.supports(constants2.SPATIAL_AUDIO),
      };
    };
    obj.timestampProducer = TimeStampProducer;
    timestampProducer = obj.timestampProducer;
    obj.lastTimestamp = timestampProducer.now();
    resetCountersResult = obj.resetCounters();
    return obj;
  }
}
const prototype = SpatialAudioSessionStats.prototype;
prototype["start"] = function start() {
  SpatialAudioStore.addChangeListener(this.handleStoreChange);
  MediaEngineStore.addChangeListener(this.handleStoreChange);
  ApexExperimentStore.addChangeListener(this.refreshExperiment);
  this.resetNativeStats();
};
prototype["stop"] = function stop() {
  SpatialAudioStore.removeChangeListener(this.handleStoreChange);
  MediaEngineStore.removeChangeListener(this.handleStoreChange);
  ApexExperimentStore.removeChangeListener(this.refreshExperiment);
};
prototype["freeze"] = function freeze() {
  this.accrue();
  this.frozen = true;
};
prototype["restartForFragment"] = function restartForFragment(maxRemoteAudioSources) {
  this.refreshExperiment();
  const durations = this.durations;
  durations.clear();
  this.resetCounters();
  this.maxRemoteAudioSources = maxRemoteAudioSources;
  this.frozen = false;
  timestampProducer = this.timestampProducer;
  this.lastTimestamp = timestampProducer.now();
};
prototype["setRemoteAudioSourceCount"] = function setRemoteAudioSourceCount(self) {
  this.maxRemoteAudioSources = Math.max(this.maxRemoteAudioSources, self);
};
prototype["shouldReport"] = function shouldReport() {
  const self = this;
  this.refreshExperiment();
  let supported = this.current.supported;
  if (supported) {
    supported = null != self.experiment.variantId || self.anyOverride;
    const tmp3 = null != self.experiment.variantId || self.anyOverride;
  }
  return supported;
};
prototype["getStats"] = function getStats() {
  const self = this;
  this.refreshExperiment();
  const experiment = this.experiment;
  const positioningModel = experiment.positioningModel;
  const userSetting = this.current.userSetting;
  obj = {
    experiment_variant_id: experiment.variantId,
    experiment_enabled: experiment.enabled,
    positioning_model_experiment: null,
    mixer_override_source: null,
    any_non_experiment_override: null,
    user_setting: null,
    num_user_toggles: null,
    spatial_supported: null,
    duration_connected_ms: null,
    num_status_changes: null,
    num_mono_transitions: null,
    first_failure_status: null,
    output_class_at_start: null,
    num_output_class_changes: null,
    output_device_is_default: null,
    max_remote_audio_sources: null,
  };
  let str = "ahead";
  if ("" !== positioningModel) {
    str = positioningModel;
  }
  obj.positioning_model_experiment = str;
  ({ lastOverrideSource: obj.mixer_override_source, anyOverride: obj.any_non_experiment_override } = self);
  let str2 = "unset";
  if (null != userSetting) {
    let str3 = "off";
    if (userSetting) {
      str3 = "on";
    }
    str2 = str3;
  }
  obj.user_setting = str2;
  obj.num_user_toggles = self.numUserToggles;
  obj.spatial_supported = self.current.supported;
  const values = Object.values(closure_14);
  obj.duration_connected_ms = values.reduce((acc, item) => {
    const durations = self.durations;
    let num = durations.get(item);
    if (num == null) {
      num = 0;
    }
    return acc + num;
  }, 0);
  ({
    numStatusChanges: obj.num_status_changes,
    numMonoTransitions: obj.num_mono_transitions,
    firstFailureStatus: obj.first_failure_status,
    outputClassAtStart: obj.output_class_at_start,
    numOutputClassChanges: obj.num_output_class_changes,
  } = self);
  obj.output_device_is_default = self.current.outputDeviceId === refs;
  obj.max_remote_audio_sources = self.maxRemoteAudioSources;
  const values2 = Object.values(closure_14);
  for (const item10047 of values2) {
    let durations = self.durations;
    let num = durations.get(item10047);
    if (num == null) {
      num = 0;
    }
    obj[item10047] = num;
    continue;
  }
  const iter = dependencyMap[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let _HermesInternal = HermesInternal;
    items = ["duration_output_" + nextResult + "_ms"];
    let _HermesInternal2 = HermesInternal;
    items[1] = "duration_active_output_" + nextResult + "_ms";
    for (const item10072 of items) {
      let durations2 = self.durations;
      let num2 = durations2.get(item10072);
      if (num2 == null) {
        num2 = 0;
      }
      obj[item10072] = num2;
      continue;
    }
    continue;
  }
  return obj;
};
prototype["takeNativeStats"] = function takeNativeStats() {
  const self = this;
  return (async () => {
    closure_1 = tmp2;
    closure_0 = tmp3;
    items = [self.nativeWindowIsWhole, self.resetNativeStats()];
    await Promise.all(items);
    closure_128_0 = value;
    closure_128_1 = v3(closure_128_0, 2);
    closure_128_2 = closure_128_1[0];
    const stats = closure_128_1[1].stats;
    let tmp8 = null;
    if (closure_128_2) {
      tmp8 = stats;
    }
    return (function getNativeStatsFields(mixFrames) {
      mixFrames = undefined;
      if (mixFrames != null) {
        mixFrames = mixFrames.mixFrames;
      }
      if (mixFrames == null) {
        mixFrames = null;
      }
      obj = {
        mix_frames: mixFrames,
        mix_frames_over_budget: null,
        reflections_sim_runs: null,
        max_sources: null,
        max_audible_sources: null,
        max_pinned_sources: null,
        positioning_model_effective: null,
      };
      let mixFramesOverBudget;
      if (mixFrames != null) {
        mixFramesOverBudget = mixFrames.mixFramesOverBudget;
      }
      if (mixFramesOverBudget == null) {
        mixFramesOverBudget = null;
      }
      obj.mix_frames_over_budget = mixFramesOverBudget;
      let reflectionsSimRuns;
      if (mixFrames != null) {
        reflectionsSimRuns = mixFrames.reflectionsSimRuns;
      }
      if (reflectionsSimRuns == null) {
        reflectionsSimRuns = null;
      }
      obj.reflections_sim_runs = reflectionsSimRuns;
      let maxSources;
      if (mixFrames != null) {
        maxSources = mixFrames.maxSources;
      }
      if (maxSources == null) {
        maxSources = null;
      }
      obj.max_sources = maxSources;
      let maxAudibleSources;
      if (mixFrames != null) {
        maxAudibleSources = mixFrames.maxAudibleSources;
      }
      if (maxAudibleSources == null) {
        maxAudibleSources = null;
      }
      obj.max_audible_sources = maxAudibleSources;
      let maxPinnedSources;
      if (mixFrames != null) {
        maxPinnedSources = mixFrames.maxPinnedSources;
      }
      if (maxPinnedSources == null) {
        maxPinnedSources = null;
      }
      obj.max_pinned_sources = maxPinnedSources;
      let positioningModel;
      if (mixFrames != null) {
        positioningModel = mixFrames.positioningModel;
      }
      if (positioningModel == null) {
        positioningModel = null;
      }
      obj.positioning_model_effective = positioningModel;
      const keys = Object.keys(closure_1_16);
      const iter = keys[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp12 = closure_1_16[nextResult];
        let tmp13;
        if (mixFrames != null) {
          tmp13 = mixFrames[tmp10];
        }
        let tmp15 = tmp13;
        for (const item10045 of closure_1_17) {
          let _HermesInternal = HermesInternal;
          let rounded = null;
          let combined = "" + tmp12 + "_" + item10045;
          if (null != tmp15) {
            let _Math = Math;
            rounded = Math.round(tmp15[item10045]);
          }
          obj[combined] = rounded;
          continue;
        }
        continue;
      }
      return obj;
    })(tmp8);
  })();
};
prototype["dropNativeStats"] = function dropNativeStats() {
  this.resetNativeStats();
};
prototype["resetNativeStats"] = function resetNativeStats() {
  const tmp = (function readNativeStats() {
    const self = this;
    const apply = closure_1_20.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })();
  this.nativeWindowIsWhole = (function answeredInTime() {
    const self = this;
    const apply = closure_1_21.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(tmp);
  return tmp;
};
prototype["resetCounters"] = function resetCounters() {
  const self = this;
  this.lastOverrideSource = this.current.overrideSource;
  this.anyOverride = this.current.overrideSource !== constants.NONE;
  this.outputClassAtStart = this.current.outputClass;
  this.numOutputClassChanges = 0;
  this.numStatusChanges = 0;
  this.numMonoTransitions = 0;
  this.numUserToggles = 0;
  state = null;
  if (this.isFailure(this.current.state)) {
    state = self.current.state;
  }
  self.firstFailureStatus = state;
};
prototype["isFailure"] = function isFailure(state) {
  return state === obj.FAILED_INIT || state === obj.FAILED_HRTF;
};
prototype["add"] = function add(arg0, arg1) {
  ({ durations, durations: durations2 } = this);
  let num = durations2.get(arg0);
  if (num == null) {
    num = 0;
  }
  const result = durations.set(arg0, num + arg1);
};
prototype["accrue"] = function accrue() {
  const self = this;
  timestampProducer = this.timestampProducer;
  const nowResult = timestampProducer.now();
  const bound = Math.max(0, nowResult - this.lastTimestamp);
  this.lastTimestamp = nowResult;
  if (!this.frozen) {
    if (0 !== bound) {
      ({ state, outputClass } = self.current);
      self.add(closure_14[state], bound);
      const _HermesInternal2 = HermesInternal;
      self.add("duration_output_" + outputClass + "_ms", bound);
      if (state === obj.ACTIVE) {
        const _HermesInternal = HermesInternal;
        self.add("duration_active_output_" + outputClass + "_ms", bound);
      }
    }
  }
};
prototype["update"] = function update(arg0) {
  const self = this;
  this.accrue();
  const current = this.current;
  const tmp2 = takeSnapshot(arg0, this.experiment.enabled);
  this.current = tmp2;
  if (tmp2.status !== current.status) {
    self.numStatusChanges = self.numStatusChanges + 1;
    if (tmp2.status === constants3.MONO_OUTPUT) {
      self.numMonoTransitions = self.numMonoTransitions + 1;
    }
  }
  if (tmp4) {
    self.firstFailureStatus = tmp2.state;
  }
  if (tmp2.outputClass !== current.outputClass) {
    self.numOutputClassChanges = self.numOutputClassChanges + 1;
  }
  if (tmp2.userSetting !== current.userSetting) {
    self.numUserToggles = self.numUserToggles + 1;
  }
  if (tmp2.overrideSource !== constants.NONE) {
    self.lastOverrideSource = tmp2.overrideSource;
    self.anyOverride = true;
  }
  tmp4 = null == self.firstFailureStatus && self.isFailure(tmp2.state);
};

export default SpatialAudioSessionStats;
