// === Module 8395: useGameProfileHeroBackgroundURL ===

// Module 8395 (useGameProfileHeroBackgroundURL)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileHeroBackgroundURL.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((screenshotUrls, size) => {
  const cResult = c.c(9);
  let screenshotURL = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return Math.random();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = _slicedToArray(noop.useState(first), 1)[0];
  if (cResult[1] === size) {
    if (cResult[2] === screenshotUrls) {
      let tmp5 = cResult[3];
    }
    if (null == tmp5) {
      screenshotUrls = screenshotUrls.screenshotUrls;
      let num2;
      if (screenshotUrls != null) {
        num2 = screenshotUrls.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp5 = null;
      if (0 !== num2) {
        if (cResult[4] === size) {
          if (cResult[5] === screenshotUrls) {
            if (cResult[6] === first1) {
            }
          }
        }
        const _Math = screenshotURL.Math;
        screenshotURL = screenshotUrls.getScreenshotURL(_Math.floor(first1 * num2), size);
        cResult[4] = size;
        cResult[5] = screenshotUrls;
        cResult[6] = first1;
        cResult[7] = num2;
        cResult[8] = screenshotURL;
      }
    }
    return tmp5;
  }
  const bannerURL = screenshotUrls.getBannerURL(size);
  cResult[1] = size;
  cResult[2] = screenshotUrls;
  cResult[3] = bannerURL;
  tmp5 = bannerURL;
}) : ((arg0, arg1) => {
  let bannerURL = arg0;
  closure_1 = arg1;
  const first = _slicedToArray(noop.useState(() => Math.random()), 1)[0];
  const items = [arg1, arg0, first];
  return noop.useMemo(() => {
    bannerURL = bannerURL.getBannerURL(closure_1);
    if (null != bannerURL) {
      return bannerURL;
    } else {
      const screenshotUrls = obj.screenshotUrls;
      let num;
      if (screenshotUrls != null) {
        num = screenshotUrls.length;
      }
      if (num == null) {
        num = 0;
      }
      let screenshotURL = null;
      if (0 !== num) {
        const _Math = Math;
        screenshotURL = obj.getScreenshotURL(Math.floor(first * num), closure_1);
      }
      return screenshotURL;
    }
  }, items);
});