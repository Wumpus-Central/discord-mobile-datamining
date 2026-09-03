// === Module 13719: useSpatialAudioControlState ===

// Module 13719 (useSpatialAudioControlState)
import apexExperimentDefault from "apexExperiment" /* 13720 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "_detectH265HardwareDecode" /* 4529 */;
import DesktopSources from "DesktopSources" /* 4542 */;

const require = arg1;
({ Features: c5, SpatialAudioStatus: closure_6 } = DesktopSources);
let obj = { HIDDEN: "HIDDEN", AVAILABLE: "AVAILABLE", BLOCKED_MONO_OUTPUT: "BLOCKED_MONO_OUTPUT", BLOCKED_INIT_FAILED: "BLOCKED_INIT_FAILED", BLOCKED_HRTF_FAILED: "BLOCKED_HRTF_FAILED" };
const result = require("set").fileFinishedImporting("modules/spatial_audio/useSpatialAudioControlState.tsx");

export default function useSpatialAudioControlState(location) {
  obj = supported(status[3]);
  obj = { location };
  const enabled = obj.useConfig(obj).enabled;
  const items = [closure_4];
  const stateFromStoresObject = enabled(status[4]).useStateFromStoresObject(items, () => ({ supported: closure_4.supports(constants.SPATIAL_AUDIO), status: closure_4.getSpatialAudioStatus() }));
  supported = stateFromStoresObject.supported;
  status = stateFromStoresObject.status;
  const items1 = [enabled, supported, status];
  return React.useMemo(() => {
    let tmp = enabled;
    if (enabled) {
      tmp = supported;
    }
    if (tmp) {
      if (closure_1_6.MONO_OUTPUT === tmp2) {
        let HIDDEN = closure_1_7.BLOCKED_MONO_OUTPUT;
      } else if (tmp4.INIT_FAILED === tmp2) {
        HIDDEN = closure_1_7.BLOCKED_INIT_FAILED;
      } else if (tmp4.HRTF_FAILED === tmp2) {
        HIDDEN = closure_1_7.BLOCKED_HRTF_FAILED;
      } else {
        HIDDEN = closure_1_7.AVAILABLE;
      }
    } else {
      HIDDEN = closure_1_7.HIDDEN;
    }
    return HIDDEN;
  }, items1);
};
export const SpatialAudioControlState = obj;
export const isSpatialAudioBlocked = function isSpatialAudioBlocked(arg0) {
  const items = [, ];
  ({ HIDDEN: arr[0], AVAILABLE: arr[1] } = obj);
  return !items.includes(arg0);
};
export const isSpatialAudioEligible = function isSpatialAudioEligible(RTCConnectionStore) {
  obj = apexExperimentDefault;
  obj = { location: RTCConnectionStore };
  let enabled = obj.getConfig(obj).enabled;
  if (enabled) {
    enabled = closure_4.supports(constants.SPATIAL_AUDIO);
  }
  return enabled;
};