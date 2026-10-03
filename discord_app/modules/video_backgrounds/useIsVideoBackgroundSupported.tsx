// discord_app/modules/video_backgrounds/useIsVideoBackgroundSupported.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../_runtime/00576_c.js";
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
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
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [MediaEngineStore];
      return initialize.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
    };
