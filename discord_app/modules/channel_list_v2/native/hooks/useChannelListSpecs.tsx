import noop from "noop";
import hairlineWidth from "hairlineWidth";

let c4;
let c5;
const require = arg1;
({ STICKY_BANNER_ASPECT_RATIO: c4, BANNER_MAX_HEIGHT_PERCENTAGE: c5 } = hairlineWidth);
const result = require("GuildInfoHeader").fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(15138).useRedesignGuildHeaderHeight(banner);
  height = height(1474)().height;
  const tmp2 = height(14953)();
  const dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(15138);
  const fontScale = redesignGuildHeaderHeight(4610).useFontScale();
  let closure_4 = tmp4;
  const top = height(1581)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(tmp2 / closure_4, height * top);
    }
    return { bannerHeight: height(tmp2[7])(num), bannerWidth: height(tmp2[7])(tmp2), headerHeight: height(tmp2[7])(redesignGuildHeaderHeight), fontScale, listTop: height(tmp2[7])(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: height(tmp2[7])(24), listViewportHeight: height(tmp2[7])(height - top) };
  }, items);
};