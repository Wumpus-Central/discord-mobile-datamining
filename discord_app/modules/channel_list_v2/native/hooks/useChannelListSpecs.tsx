// discord_app/modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx
import roundToNearestPixelDefault from "../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const RedesignChannelListConstants = fn(9577);
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: hasOwnProperty } =
  RedesignChannelListConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(15767).useRedesignGuildHeaderHeight(banner);
  height = height(1479)({ ignoreKeyboard: true }).height;
  const tmp2 = height(15654)();
  dependencyMap = tmp2;
  const obj = redesignGuildHeaderHeight(15767);
  const fontScale = redesignGuildHeaderHeight(5288).useFontScale();
  closure_4 = tmp4;
  const top = height(1613)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(closure_2 / React4, height * hasOwnProperty);
    }
    return {
      bannerHeight: roundToNearestPixelDefault(num),
      bannerWidth: roundToNearestPixelDefault(closure_2),
      headerHeight: roundToNearestPixelDefault(redesignGuildHeaderHeight),
      fontScale,
      listTop: roundToNearestPixelDefault(num + redesignGuildHeaderHeight),
      listBottom: 0,
      listPaddingBottom: roundToNearestPixelDefault(24),
      listViewportHeight: roundToNearestPixelDefault(height - top),
    };
  }, items);
}
