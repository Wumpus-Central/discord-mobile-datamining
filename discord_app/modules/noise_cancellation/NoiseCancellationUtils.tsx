// discord_app/modules/noise_cancellation/NoiseCancellationUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import getEffectiveNoiseCancellationDefault from "getEffectiveNoiseCancellation.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export const getNoiseCancellationDeferredToSystem = function getNoiseCancellationDeferredToSystem(MediaEngineStore) {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
};
export const useNoiseCancellationDeferredToSystem = function useNoiseCancellationDeferredToSystem() {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => {
    systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
    return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
  });
};
