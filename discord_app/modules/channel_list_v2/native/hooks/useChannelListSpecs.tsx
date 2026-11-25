// === Module 17801: useChannelListSpecs ===

// Module 17801 (useChannelListSpecs)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 11488 */;
import noop from "module_19" /* 19 */;

const require = fn;
const RedesignChannelListConstants = fn(6092);
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: hasOwnProperty } = RedesignChannelListConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(17802).useRedesignGuildHeaderHeight(banner);
  height = height(1494)({ ignoreKeyboard: true }).height;
  const tmp2 = height(17690)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(17802);
  const fontScale = redesignGuildHeaderHeight(5618).useFontScale();
  closure_4 = tmp4;
  const top = height(1628)().top;
  items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(closure_2 / React4, height * hasOwnProperty);
    }
    return { bannerHeight: roundToNearestPixelDefault(num), bannerWidth: roundToNearestPixelDefault(closure_2), headerHeight: roundToNearestPixelDefault(redesignGuildHeaderHeight), fontScale, listTop: roundToNearestPixelDefault(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: roundToNearestPixelDefault(24), listViewportHeight: roundToNearestPixelDefault(height - top) };
  }, items);
};