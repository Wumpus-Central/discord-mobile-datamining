// === Module 8356: useUserProfileBannerHeight ===

// Module 8356 (useUserProfileBannerHeight)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import Constants from "Constants" /* 6904 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const BANNER_ASPECT_RATIO = Constants.BANNER_ASPECT_RATIO;
const result = size.fileFinishedImporting("modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useUserProfileBannerHeight(arg0) {
  const cResult = c.c(2);
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  if (cResult[0] !== bound) {
    const _Math2 = Math;
    const rounded = Math.round(bound / BANNER_ASPECT_RATIO);
    cResult[0] = bound;
    cResult[1] = rounded;
    let tmp4 = rounded;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (function useUserProfileBannerHeight(arg0) {
  const width = useWindowDimensionsDefault().width;
  let bound = width;
  if (null != arg0) {
    const _Math = Math;
    bound = Math.min(width, arg0);
  }
  return Math.round(bound / BANNER_ASPECT_RATIO);
});