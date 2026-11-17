// === Module 11674: NoiseCancellationUtils ===

// Module 11674 (NoiseCancellationUtils)
import initialize from "initialize" /* 504 */;
import getEffectiveNoiseCancellationDefault from "getEffectiveNoiseCancellation" /* 11675 */;
import MediaEngineStore from "MediaEngineStore" /* 2133 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export function getNoiseCancellationDeferredToSystem() {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
}
export function useNoiseCancellationDeferredToSystem() {
  items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => {
    systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
    return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
  });
}