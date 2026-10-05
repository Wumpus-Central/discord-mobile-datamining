// discord_app/modules/noise_cancellation/NoiseCancellationUtils.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import getEffectiveNoiseCancellationDefault from "getEffectiveNoiseCancellation.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

function getNoiseCancellationDeferredToSystem() {
  let obj = MediaEngineStore;
  if (MediaEngineStore === undefined) {
    obj = MediaEngineStore;
  }
  const systemMicrophoneMode = obj.getSystemMicrophoneMode();
  return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
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
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [MediaEngineStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => {
        systemMicrophoneMode = systemMicrophoneMode.getSystemMicrophoneMode();
        return !getEffectiveNoiseCancellationDefault(true, systemMicrophoneMode);
      });
    };
const result = size.fileFinishedImporting("modules/noise_cancellation/NoiseCancellationUtils.tsx");

export { getNoiseCancellationDeferredToSystem };
export const useNoiseCancellationDeferredToSystem = tmp2;
