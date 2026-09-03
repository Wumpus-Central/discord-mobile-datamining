// === Module 15968: useChannelListSpecs ===

// Module 15968 (useChannelListSpecs)
import closure_3 from "noop" /* 19 */;
import hairlineWidth from "hairlineWidth" /* 10227 */;

const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: c4, BANNER_MAX_HEIGHT_PERCENTAGE: c5 } = hairlineWidth);
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(15969).useRedesignGuildHeaderHeight(banner);
  height = height(1492)().height;
  const tmp2 = height(15855)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(15969);
  const fontScale = redesignGuildHeaderHeight(4936).useFontScale();
  closure_4 = tmp4;
  const top = height(1627)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(dependencyMap / closure_4, height * top);
    }
    return { bannerHeight: height(10955)(num), bannerWidth: height(10955)(dependencyMap), headerHeight: height(10955)(redesignGuildHeaderHeight), fontScale, listTop: height(10955)(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(10955)(24), listViewportHeight: height(10955)(height - top) };
  }, items);
};