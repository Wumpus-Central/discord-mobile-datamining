// === Module 16132: useChannelListSpecs ===

// Module 16132 (useChannelListSpecs)
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10993 */;
import noop from "module_19" /* 19 */;

const require = fn;
const RedesignChannelListConstants = fn(10118);
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: hasOwnProperty } = RedesignChannelListConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(16133).useRedesignGuildHeaderHeight(banner);
  height = height(1477)().height;
  const tmp2 = height(16017)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(16133);
  const fontScale = redesignGuildHeaderHeight(4982).useFontScale();
  closure_4 = tmp4;
  const top = height(1611)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(closure_2 / React4, height * hasOwnProperty);
    }
    return { bannerHeight: roundToNearestPixelDefault(num), bannerWidth: roundToNearestPixelDefault(closure_2), headerHeight: roundToNearestPixelDefault(redesignGuildHeaderHeight), fontScale, listTop: roundToNearestPixelDefault(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: roundToNearestPixelDefault(24), listViewportHeight: roundToNearestPixelDefault(height - top) };
  }, items);
};