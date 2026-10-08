// discord_app/modules/clips/isClipsEnabled.tsx
import c from "../../../_runtime/00576_c.js";
import ClipsExperiment from "ClipsExperiment.tsx";
import ClipsStore from "ClipsStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  let clipsEnabled = ClipsExperiment.areClipsAvailable();
  if (clipsEnabled) {
    clipsEnabled = ClipsStore.getState().clipsSettings.clipsEnabled;
  }
  return clipsEnabled;
};
export const useIsClipsEnabled = ReactCompilerGating.isReactCompilerEnabled()
  ? function useIsClipsEnabled() {
      const cResult = c.c(2);
      let isClipsAvailable = ClipsExperiment.useIsClipsAvailable();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ClipsStore];
        const fn = function t() {
          return state.getState().clipsSettings.clipsEnabled;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (isClipsAvailable) {
        isClipsAvailable = tmpResult.useStateFromStores(tmp5, tmp6);
      }
      return isClipsAvailable;
    }
  : function useIsClipsEnabled() {
      let isClipsAvailable = ClipsExperiment.useIsClipsAvailable();
      const items = [ClipsStore];
      if (isClipsAvailable) {
        isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
      }
      return isClipsAvailable;
    };
