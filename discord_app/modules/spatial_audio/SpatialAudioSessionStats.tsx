// discord_app/modules/spatial_audio/SpatialAudioSessionStats.tsx
import SpatialAudioForVoiceExperimentDefault from "../voice_panel/SpatialAudioForVoiceExperiment.tsx";
import classifyOutputDeviceDefault from "../media_engine/classifyOutputDevice.tsx";
import ApexExperimentStore from "../experiments/apex/ApexExperimentStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SpatialAudioStore from "SpatialAudioStore.tsx";

const require = fn;
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
const metroImportDefault = fn(5690).SpatialAudioOverrideSource;
const Constants = fn(5537);
({ DEFAULT_DEVICE_ID: closure_8, Features: closure_9, SpatialAudioStatus: closure_10 } = Constants);
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
let closure_12 = {
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
const dependencyMap = Object.values(fn(5721).OutputDeviceClass);
const size = fn(2);
let result = size.fileFinishedImporting("modules/spatial_audio/SpatialAudioSessionStats.tsx");
class SpatialAudioSessionStats {
  constructor() {
    TimeStampProducer = global;
    if (global === undefined) {
      tmp = closure_0;
      tmp2 = closure_2;
      TimeStampProducer = closure_0(closure_2[8]).TimeStampProducer;
    }
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    tmp4 = closure_2;
    tmp3 = closure_1;
    obj2 = closure_1(closure_2[7]);
    config = obj2.getConfig({ location: "SpatialAudioSessionStats" }, { autoTrackExposure: false });
    id = closure_4.getId();
    assignment = undefined;
    if (null != id) {
      tmp8 = closure_3;
      str = "user";
      assignment = closure_3.getAssignment("user", id, tmp3(tmp4[7]).definition.name);
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
      status: closure_6.getSpatialAudioStatus(),
      outputDeviceId: closure_5.getOutputDeviceId(),
      outputDevices: closure_5.getOutputDevices(),
      overrideSource: closure_6.getSpatialAudioOverrideSource(),
      isSpatial: closure_6.getSpatialAudioOverrides().isSpatial,
      userSetting: closure_6.getUserAgnosticState().enabled,
      userEnabled: closure_6.isSpatialAudioEnabled(),
      supported: closure_5.supports(Features.SPATIAL_AUDIO),
    };
    obj.current = takeSnapshot(obj5, obj.experiment.enabled);
    obj.frozen = false;
    map = new Map();
    obj.durations = map;
    obj.lastOverrideSource = closure_7.NONE;
    obj.anyOverride = false;
    obj.outputClassAtStart = closure_0(tmp4[6]).OutputDeviceClass.UNKNOWN;
    obj.numOutputClassChanges = 0;
    obj.numStatusChanges = 0;
    obj.numMonoTransitions = 0;
    obj.numUserToggles = 0;
    obj.firstFailureStatus = null;
    obj.maxRemoteAudioSources = 0;
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
  const values = Object.values(closure_12);
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
  obj.output_device_is_default = self.current.outputDeviceId === React5;
  obj.max_remote_audio_sources = self.maxRemoteAudioSources;
  const values2 = Object.values(closure_12);
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
      self.add(closure_12[state], bound);
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
