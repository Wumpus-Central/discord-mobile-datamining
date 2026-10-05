// === Module 13638: useSpatialAudioControlState ===

// Module 13638 (useSpatialAudioControlState)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 13639 */;
import react from "react" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import Constants from "Constants" /* 4915 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
({ Features: hasOwnProperty, SpatialAudioStatus: metroRequire } = Constants);
const SpatialAudioControlState = { HIDDEN: "HIDDEN", AVAILABLE: "AVAILABLE", BLOCKED_MONO_OUTPUT: "BLOCKED_MONO_OUTPUT", BLOCKED_INIT_FAILED: "BLOCKED_INIT_FAILED", BLOCKED_HRTF_FAILED: "BLOCKED_HRTF_FAILED" };
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((location) => {
  let HIDDEN;
  let tmp4;
  let tmp5;
  let tmp6;
  let obj = react2;
  const cResult = obj.c(7);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj3 = SpatialAudioForVoiceExperimentDefault;
  let supported = obj3.useConfig(tmp4).enabled;
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
    tmp6 = A;
    tmp5 = items;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  const status = stateFromStoresObject.status;
  if (supported) {
    supported = stateFromStoresObject.supported;
  }
  if (cResult[4] === status) {
    let tmp9;
    if (cResult[5] === supported) {
      tmp9 = cResult[6];
    }
    return tmp9;
  }
  if (supported) {
    if (metroRequire.MONO_OUTPUT === status) {
      HIDDEN = obj.BLOCKED_MONO_OUTPUT;
    } else if (metroRequire.INIT_FAILED === status) {
      HIDDEN = obj.BLOCKED_INIT_FAILED;
    } else if (metroRequire.HRTF_FAILED === status) {
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
  tmp9 = HIDDEN;
}) : ((location) => {
  let status;
  let supported;
  let obj = supported(status[3]);
  const obj2 = { location };
  const enabled = obj.useConfig(obj2).enabled;
  const items = [MediaEngineStore];
  const obj3 = enabled(status[6]);
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => {
    const obj = { supported: MediaEngineStore.supports(constants.SPATIAL_AUDIO), status: MediaEngineStore.getSpatialAudioStatus() };
    return obj;
  });
  supported = stateFromStoresObject.supported;
  status = stateFromStoresObject.status;
  const items1 = [enabled, supported, status];
  return react.useMemo(() => {
    let HIDDEN;
    const tmp = enabled && supported;
    if (tmp) {
      if (metroRequire.MONO_OUTPUT === status) {
        HIDDEN = obj.BLOCKED_MONO_OUTPUT;
      } else if (metroRequire.INIT_FAILED === status) {
        HIDDEN = obj.BLOCKED_INIT_FAILED;
      } else if (metroRequire.HRTF_FAILED === status) {
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
const result = size.fileFinishedImporting("modules/spatial_audio/useSpatialAudioControlState.tsx");

export default tmp3;
export { SpatialAudioControlState };
export const isSpatialAudioBlocked = function isSpatialAudioBlocked(arg0) {
  const items = [, ];
  ({ HIDDEN: arr[0], AVAILABLE: arr[1] } = obj);
  return !items.includes(arg0);
};
export const isSpatialAudioEligible = function isSpatialAudioEligible(RTCConnectionStore) {
  const obj = SpatialAudioForVoiceExperimentDefault;
  const obj2 = { location: RTCConnectionStore };
  const enabled = obj.getConfig(obj2).enabled && MediaEngineStore.supports(hasOwnProperty.SPATIAL_AUDIO);
  return enabled;
};