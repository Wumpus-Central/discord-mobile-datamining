// discord_app/modules/clips/isClipsEnabled.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import ClipsExperiment from "ClipsExperiment.tsx";
import ClipsStore from "ClipsStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let state;
      let tmp5;
      let tmp6;
      const obj = react;
      const cResult = obj.c(2);
      const obj2 = ClipsExperiment;
      let isClipsAvailable = obj2.useIsClipsAvailable();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ClipsStore];
        const fn = function l() {
          return state.getState().clipsSettings.clipsEnabled;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      if (isClipsAvailable) {
        isClipsAvailable = tmpResult.useStateFromStores(tmp5, tmp6);
      }
      return isClipsAvailable;
    }
  : () => {
      let state;
      const obj = ClipsExperiment;
      let isClipsAvailable = obj.useIsClipsAvailable();
      const items = [ClipsStore];
      const obj2 = get_initialized;
      if (isClipsAvailable) {
        isClipsAvailable = obj2.useStateFromStores(items, () => state.getState().clipsSettings.clipsEnabled);
      }
      return isClipsAvailable;
    };
const result = size.fileFinishedImporting("modules/clips/isClipsEnabled.tsx");

export const isClipsEnabled = function isClipsEnabled() {
  const obj = ClipsExperiment;
  const clipsEnabled = obj.areClipsAvailable() && ClipsStore.getState().clipsSettings.clipsEnabled;
  return clipsEnabled;
};
export const useIsClipsEnabled = tmp2;
