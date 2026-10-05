// === Module 13638: useSpatialAudioControlState ===

// Module 13638 (useSpatialAudioControlState)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 13639 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;

require = fn;
const Constants = fn(4915);
({ Features: hasOwnProperty, SpatialAudioStatus: metroRequire } = Constants);
const SpatialAudioControlState = { HIDDEN: "HIDDEN", AVAILABLE: "AVAILABLE", BLOCKED_MONO_OUTPUT: "BLOCKED_MONO_OUTPUT", BLOCKED_INIT_FAILED: "BLOCKED_INIT_FAILED", BLOCKED_HRTF_FAILED: "BLOCKED_HRTF_FAILED" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/spatial_audio/useSpatialAudioControlState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  const obj = c;
  const cResult = obj.c(7);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  let supported = SpatialAudioForVoiceExperimentDefault.useConfig(tmp4).enabled;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MediaEngineStore];
    class A {
      constructor() {
        obj = { supported: closure_1_4.supports(closure_1_5.SPATIAL_AUDIO), status: closure_1_4.getSpatialAudioStatus() };
        return obj;
      }
    }
    cResult[2] = items;
    cResult[3] = A;
    let tmp6 = A;
    let tmp5 = items;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp5, tmp6);
  const status = stateFromStoresObject.status;
  if (supported) {
    supported = stateFromStoresObject.supported;
  }
  if (cResult[4] === status) {
    if (cResult[5] === supported) {
      return cResult[6];
    }
  }
  if (supported) {
    if (constants2.MONO_OUTPUT === status) {
      let HIDDEN = obj.BLOCKED_MONO_OUTPUT;
    } else if (constants2.INIT_FAILED === status) {
      HIDDEN = obj.BLOCKED_INIT_FAILED;
    } else if (constants2.HRTF_FAILED === status) {
      HIDDEN = obj.BLOCKED_HRTF_FAILED;
    } else {
      HIDDEN = obj.AVAILABLE;
    }
  } else {
    HIDDEN = obj.HIDDEN;
  }
  cResult[4] = status;
  cResult[5] = supported;
  cResult[6] = HIDDEN;
  const tmpResult = initialize;
}) : ((location) => {
  const enabled = supported(status[3]).useConfig({ location }).enabled;
  const obj = supported(status[3]);
  const obj2 = { location };
  const items = [MediaEngineStore];
  const stateFromStoresObject = enabled(status[6]).useStateFromStoresObject(items, () => ({ supported: MediaEngineStore.supports(constants.SPATIAL_AUDIO), status: MediaEngineStore.getSpatialAudioStatus() }));
  supported = stateFromStoresObject.supported;
  status = stateFromStoresObject.status;
  const items1 = [enabled, supported, status];
  return noop.useMemo(() => {
    let tmp = enabled;
    if (enabled) {
      tmp = supported;
    }
    if (tmp) {
      if (constants2.MONO_OUTPUT === status) {
        let HIDDEN = obj.BLOCKED_MONO_OUTPUT;
      } else if (constants2.INIT_FAILED === status) {
        HIDDEN = obj.BLOCKED_INIT_FAILED;
      } else if (constants2.HRTF_FAILED === status) {
        HIDDEN = obj.BLOCKED_HRTF_FAILED;
      } else {
        HIDDEN = obj.AVAILABLE;
      }
    } else {
      HIDDEN = obj.HIDDEN;
    }
    return HIDDEN;
  }, items1);
});
export { SpatialAudioControlState };
export const isSpatialAudioBlocked = function isSpatialAudioBlocked(arg0) {
  const items = [, ];
  ({ HIDDEN: arr[0], AVAILABLE: arr[1] } = obj);
  return !items.includes(arg0);
};
export const isSpatialAudioEligible = function isSpatialAudioEligible(RTCConnectionStore) {
  let enabled = SpatialAudioForVoiceExperimentDefault.getConfig({ location: RTCConnectionStore }).enabled;
  if (enabled) {
    enabled = MediaEngineStore.supports(constants.SPATIAL_AUDIO);
  }
  return enabled;
};