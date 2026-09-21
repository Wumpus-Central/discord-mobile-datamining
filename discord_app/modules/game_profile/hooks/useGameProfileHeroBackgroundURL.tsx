// === Module 8989: useGameProfileHeroBackgroundURL ===

// Module 8989 (useGameProfileHeroBackgroundURL)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileHeroBackgroundURL.tsx");

export default function useGameProfileHeroBackgroundURL(arg0, arg1) {
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
};