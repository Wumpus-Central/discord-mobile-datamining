// discord_app/modules/noise_cancellation/NoiseCancellationUtils.tsx
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { initialize } from "../../../discord_common/js/packages/flux/index.tsx";
import { set } from "getEffectiveNoiseCancellation.tsx";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export const getNoiseCancellationDeferredToSystem = function getNoiseCancellationDeferredToSystem(_detectH265HardwareDecode) {
  let obj = _detectH265HardwareDecode;
  if (_detectH265HardwareDecode === undefined) {
    obj = _detectH265HardwareDecode;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !set(true, systemMicrophoneMode);
};
export const useNoiseCancellationDeferredToSystem = function useNoiseCancellationDeferredToSystem() {
  const items = [_detectH265HardwareDecode];
  return initialize.useStateFromStores(items, () => {
    systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
    return !callback(table[1])(true, systemMicrophoneMode);
  });
};