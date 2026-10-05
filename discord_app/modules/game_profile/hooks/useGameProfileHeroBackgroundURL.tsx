// === Module 8362: useGameProfileHeroBackgroundURL ===

// Module 8362 (useGameProfileHeroBackgroundURL)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((screenshotUrls, size) => {
  let first;
  const obj = react2;
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      return Math.random();
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = _slicedToArray(react.useState(first), 1)[0];
  if (cResult[1] === size) {
    let tmp4;
    if (cResult[2] === screenshotUrls) {
      tmp4 = cResult[3];
    }
    if (null == tmp4) {
      screenshotUrls = screenshotUrls.screenshotUrls;
      let num2;
      if (screenshotUrls != null) {
        num2 = screenshotUrls.length;
      }
      if (num2 == null) {
        num2 = 0;
      }
      tmp4 = null;
      if (0 !== num2) {
        if (cResult[4] === size) {
          if (cResult[5] === screenshotUrls) {
            if (cResult[6] === first1) {
              let tmp7;
              if (cResult[7] === num2) {
                tmp7 = cResult[8];
              }
              tmp4 = tmp7;
            }
          }
        }
        const _Math = Math;
        const screenshotURL = screenshotUrls.getScreenshotURL(Math.floor(first1 * num2), size);
        cResult[4] = size;
        cResult[5] = screenshotUrls;
        cResult[6] = first1;
        cResult[7] = num2;
        cResult[8] = screenshotURL;
        tmp7 = screenshotURL;
      }
    }
    return tmp4;
  }
  const bannerURL = screenshotUrls.getBannerURL(size);
  cResult[1] = size;
  cResult[2] = screenshotUrls;
  cResult[3] = bannerURL;
  tmp4 = bannerURL;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const first = _slicedToArray(react.useState(() => Math.random()), 1)[0];
  const items = [arg1, arg0, first];
  return react.useMemo(() => {
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
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileHeroBackgroundURL.tsx");

export default tmp2;