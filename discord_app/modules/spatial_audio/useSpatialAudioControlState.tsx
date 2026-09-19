// === Module 14088: useSpatialAudioControlState ===

// Module 14088 (useSpatialAudioControlState)
import SpatialAudioForVoiceExperimentDefault from "SpatialAudioForVoiceExperiment" /* 14089 */;
import noop from "module_19" /* 19 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

const require = fn;
const Constants = fn(4781);
({ Features: hasOwnProperty, SpatialAudioStatus: metroRequire } = Constants);
const SpatialAudioControlState = { HIDDEN: "HIDDEN", AVAILABLE: "AVAILABLE", BLOCKED_MONO_OUTPUT: "BLOCKED_MONO_OUTPUT", BLOCKED_INIT_FAILED: "BLOCKED_INIT_FAILED", BLOCKED_HRTF_FAILED: "BLOCKED_HRTF_FAILED" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/spatial_audio/useSpatialAudioControlState.tsx");

export default function useSpatialAudioControlState(location) {
  const enabled = supported(status[3]).useConfig({ location }).enabled;
  const obj = supported(status[3]);
  const obj2 = { location };
  const items = [MediaEngineStore];
  const stateFromStoresObject = enabled(status[4]).useStateFromStoresObject(items, () => ({ supported: MediaEngineStore.supports(constants.SPATIAL_AUDIO), status: MediaEngineStore.getSpatialAudioStatus() }));
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
};
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