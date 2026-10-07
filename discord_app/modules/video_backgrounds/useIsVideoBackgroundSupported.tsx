// === Module 9675: useIsVideoBackgroundSupported ===

// Module 9675 (useIsVideoBackgroundSupported)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import isVideoBackgroundSupportedDefault from "isVideoBackgroundSupported" /* 8099 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_backgrounds/useIsVideoBackgroundSupported.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const items = [MediaEngineStore];
  return initialize.useStateFromStores(items, () => isVideoBackgroundSupportedDefault(MediaEngineStore));
});