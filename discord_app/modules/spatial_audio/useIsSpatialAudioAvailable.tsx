// === Module 12903: useIsSpatialAudioAvailable ===

// Module 12903 (useIsSpatialAudioAvailable)
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { Features } from "DesktopSources";

const require = arg1;
const result = require("apexExperiment").fileFinishedImporting("modules/spatial_audio/useIsSpatialAudioAvailable.tsx");

export default function useIsSpatialAudioAvailable(location) {
  let obj = importDefault(12904);
  obj = { location };
  let enabled = obj.useConfig(obj).enabled;
  const items = [_detectH265HardwareDecode];
  if (enabled) {
    enabled = obj3.useStateFromStores(items, () => _detectH265HardwareDecode.supports(constants.SPATIAL_AUDIO));
  }
  return enabled;
};
export const isSpatialAudioAvailable = function isSpatialAudioAvailable(RTCConnectionStore) {
  let obj = importDefault(12904);
  obj = { location: RTCConnectionStore };
  let enabled = obj.getConfig(obj).enabled;
  if (enabled) {
    enabled = _detectH265HardwareDecode.supports(Features.SPATIAL_AUDIO);
  }
  return enabled;
};