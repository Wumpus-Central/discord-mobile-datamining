// discord_app/modules/video_backgrounds/useIsVideoBackgroundSupported.tsx
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../_runtime/00576_react.js";
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function n() {
          return isVideoBackgroundSupportedDefault(MediaEngineStore);
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
      return obj.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
    };
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default tmp2;
