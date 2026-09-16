// discord_app/modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx
import roundToNearestPixelDefault from "../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
const RedesignChannelListConstants = fn(10256);
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: hasOwnProperty } =
  RedesignChannelListConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default function useChannelListSpecs(banner) {
  redesignGuildHeaderHeight = redesignGuildHeaderHeight(height2[2]).useRedesignGuildHeaderHeight(banner);
  height = height(height2[3])().height;
  height2 = height(height2[3])({ ignoreKeyboard: true }).height;
  const tmp2 = height(height2[4])();
  noop = tmp2;
  const obj = redesignGuildHeaderHeight(height2[2]);
  const fontScale = redesignGuildHeaderHeight(height2[5]).useFontScale();
  closure_5 = tmp4;
  const top = height(height2[6])().top;
  const items = [null != banner.banner, tmp2, height, height2, redesignGuildHeaderHeight, top, fontScale];
  return noop.useMemo(() => {
    let num = 0;
    if (closure_5) {
      const _Math = Math;
      num = Math.min(closure_3 / React4, height2 * hasOwnProperty);
    }
    return {
      bannerHeight: roundToNearestPixelDefault(num),
      bannerWidth: roundToNearestPixelDefault(closure_3),
      headerHeight: roundToNearestPixelDefault(redesignGuildHeaderHeight),
      fontScale,
      listTop: roundToNearestPixelDefault(num + redesignGuildHeaderHeight),
      listBottom: 0,
      listPaddingBottom: roundToNearestPixelDefault(24),
      listViewportHeight: roundToNearestPixelDefault(height - top),
    };
  }, items);
}
