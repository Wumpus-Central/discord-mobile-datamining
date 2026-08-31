// === Module 15685: useChannelListSpecs ===

// Module 15685 (useChannelListSpecs)
import closure_3 from "noop" /* 19 */;
import hairlineWidth from "hairlineWidth" /* 10162 */;

const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: c4, BANNER_MAX_HEIGHT_PERCENTAGE: c5 } = hairlineWidth);
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(15686).useRedesignGuildHeaderHeight(banner);
  height = height(1493)().height;
  const tmp2 = height(15573)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(15686);
  const fontScale = redesignGuildHeaderHeight(4903).useFontScale();
  closure_4 = tmp4;
  const top = height(1628)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(dependencyMap / closure_4, height * top);
    }
    return { bannerHeight: height(10692)(num), bannerWidth: height(10692)(dependencyMap), headerHeight: height(10692)(redesignGuildHeaderHeight), fontScale, listTop: height(10692)(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(10692)(24), listViewportHeight: height(10692)(height - top) };
  }, items);
};