// === Module 9687: NoiseCancellationUtils ===

// Module 9687 (NoiseCancellationUtils)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import getEffectiveNoiseCancellationDefault from "getEffectiveNoiseCancellation" /* 9688 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;

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
export const useNoiseCancellationDeferredToSystem = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => {
    systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
    return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
  });
});