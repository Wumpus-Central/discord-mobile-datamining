// === Module 13100: useIsSpatialAudioAvailable ===

// Module 13100 (useIsSpatialAudioAvailable)
import apexExperimentDefault from "apexExperiment" /* 13101 */;
import _detectH265HardwareDecode from "_detectH265HardwareDecode" /* 4497 */;
import { Features } from "DesktopSources" /* 4529 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/spatial_audio/useIsSpatialAudioAvailable.tsx");

export default function useIsSpatialAudioAvailable(location) {
  const obj = { location };
  let enabled = obj.useConfig(obj).enabled;
  const items = [closure_3];
  if (enabled) {
    enabled = obj3.useStateFromStores(items, () => closure_3.supports(constants.SPATIAL_AUDIO));
  }
  return enabled;
};
export const isSpatialAudioAvailable = function isSpatialAudioAvailable(RTCConnectionStore) {
  const obj = { location: RTCConnectionStore };
  let enabled = obj.getConfig(obj).enabled;
  if (enabled) {
    enabled = closure_3.supports(Features.SPATIAL_AUDIO);
  }
  return enabled;
};