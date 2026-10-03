// discord_app/modules/noise_cancellation/NoiseCancellationUtils.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import getEffectiveNoiseCancellationDefault from "getEffectiveNoiseCancellation.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
function getNoiseCancellationDeferredToSystem() {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export { getNoiseCancellationDeferredToSystem };
export const useNoiseCancellationDeferredToSystem = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function n() {
          systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
          return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [MediaEngineStore];
      return initialize.useStateFromStores(items, () => {
        systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
        return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
      });
    };
