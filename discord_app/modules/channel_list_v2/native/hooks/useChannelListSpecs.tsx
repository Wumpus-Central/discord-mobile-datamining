// discord_app/modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx
import closure_3 from "../../../../../_runtime/00019_noop.js";
import hairlineWidth from "../RedesignChannelListConstants.tsx";

const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: c4, BANNER_MAX_HEIGHT_PERCENTAGE: c5 } = hairlineWidth);
const result = require("set").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

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
      num = Math.min(dependencyMap / closure_4, height * top);
    }
    return {
      bannerHeight: height(10993)(num),
      bannerWidth: height(10993)(dependencyMap),
      headerHeight: height(10993)(redesignGuildHeaderHeight),
      fontScale,
      listTop: height(10993)(num + redesignGuildHeaderHeight),
      listBottom: 0,
      listPaddingBottom: height(10993)(24),
      listViewportHeight: height(10993)(height - top),
    };
  }, items);
}
