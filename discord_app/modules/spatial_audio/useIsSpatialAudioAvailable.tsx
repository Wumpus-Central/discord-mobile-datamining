// === Module 13395: useIsSpatialAudioAvailable ===

// Module 13395 (useIsSpatialAudioAvailable)
import apexExperimentDefault from "apexExperiment" /* 13396 */;
import closure_3 from "_detectH265HardwareDecode" /* 4496 */;
import { Features } from "DesktopSources" /* 4509 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/spatial_audio/useIsSpatialAudioAvailable.tsx");

export default function useIsSpatialAudioAvailable(location) {
  let obj = apexExperimentDefault;
  obj = { location };
  let enabled = obj.useConfig(obj).enabled;
  const items = [closure_3];
  if (enabled) {
    enabled = obj3.useStateFromStores(items, () => closure_3.supports(constants.SPATIAL_AUDIO));
  }
  return enabled;
};
export const isSpatialAudioAvailable = function isSpatialAudioAvailable(RTCConnectionStore) {
  let obj = apexExperimentDefault;
  obj = { location: RTCConnectionStore };
  let enabled = obj.getConfig(obj).enabled;
  if (enabled) {
    enabled = closure_3.supports(Features.SPATIAL_AUDIO);
  }
  return enabled;
};