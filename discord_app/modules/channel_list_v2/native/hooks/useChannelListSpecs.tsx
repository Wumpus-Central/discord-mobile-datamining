// discord_app/modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import hairlineWidth from "../RedesignChannelListConstants.tsx";

const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: c4, BANNER_MAX_HEIGHT_PERCENTAGE: c5 } = hairlineWidth);
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(15395).useRedesignGuildHeaderHeight(banner);
  height = height(1494)().height;
  const tmp2 = height(15283)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(15395);
  const fontScale = redesignGuildHeaderHeight(4751).useFontScale();
  closure_4 = tmp4;
  const top = height(1629)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(dependencyMap / closure_4, height * top);
    }
    return { bannerHeight: height(11259)(num), bannerWidth: height(11259)(dependencyMap), headerHeight: height(11259)(redesignGuildHeaderHeight), fontScale, listTop: height(11259)(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(11259)(24), listViewportHeight: height(11259)(height - top) };
  }, items);
};