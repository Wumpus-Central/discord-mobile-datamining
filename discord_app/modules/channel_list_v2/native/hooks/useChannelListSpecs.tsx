// discord_app/modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx
import c from "../../../../../_runtime/00576_c.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import useFontScale from "../../../screen/native/useFontScale.tsx";
import roundToNearestPixelDefault from "../../../voice_panel/native/utils/roundToNearestPixel.tsx";
import useChannelListWidthDefault from "../useChannelListWidth.tsx";
import RedesignGuildHeader from "../RedesignGuildHeader.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const RedesignChannelListConstants = fn(11697);
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: hasOwnProperty } =
  RedesignChannelListConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (banner) => {
      const cResult = c.c(19);
      const redesignGuildHeaderHeight = RedesignGuildHeader.useRedesignGuildHeaderHeight(banner);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { ignoreKeyboard: true };
        cResult[0] = obj3;
        let first = obj3;
      } else {
        first = cResult[0];
      }
      const height = useWindowDimensionsDefault(first).height;
      const tmp7 = useChannelListWidthDefault();
      const fontScale = useFontScale.useFontScale();
      let num2 = 0;
      if (tmp9) {
        const _Math = Math;
        num2 = Math.min(tmp7 / React4, height * hasOwnProperty);
      }
      const diff = height - useSafeAreaInsetsDefault().top;
      if (cResult[1] !== num2) {
        const tmp14 = roundToNearestPixelDefault(num2);
        cResult[1] = num2;
        cResult[2] = tmp14;
        let tmp13 = tmp14;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] !== tmp7) {
        const tmp16 = roundToNearestPixelDefault(tmp7);
        cResult[3] = tmp7;
        cResult[4] = tmp16;
        let tmp15 = tmp16;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] !== redesignGuildHeaderHeight) {
        const tmp18 = roundToNearestPixelDefault(redesignGuildHeaderHeight);
        cResult[5] = redesignGuildHeaderHeight;
        cResult[6] = tmp18;
        let tmp17 = tmp18;
      } else {
        tmp17 = cResult[6];
      }
      const sum = num2 + redesignGuildHeaderHeight;
      if (cResult[7] !== sum) {
        const tmp21 = roundToNearestPixelDefault(sum);
        cResult[7] = sum;
        cResult[8] = tmp21;
        let tmp20 = tmp21;
      } else {
        tmp20 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = roundToNearestPixelDefault(24);
        cResult[9] = tmp23;
        let tmp22 = tmp23;
      } else {
        tmp22 = cResult[9];
      }
      if (cResult[10] !== diff) {
        const tmp25 = roundToNearestPixelDefault(diff);
        cResult[10] = diff;
        cResult[11] = tmp25;
        let tmp24 = tmp25;
      } else {
        tmp24 = cResult[11];
      }
      if (cResult[12] === fontScale) {
        if (cResult[13] === tmp13) {
          if (cResult[14] === tmp15) {
            if (cResult[15] === tmp17) {
              if (cResult[16] === tmp20) {
                if (cResult[17] === tmp24) {
                  let tmp26 = cResult[18];
                }
                return tmp26;
              }
            }
          }
        }
      }
      const obj4 = {
        bannerHeight: tmp13,
        bannerWidth: tmp15,
        headerHeight: tmp17,
        fontScale,
        listTop: tmp20,
        listBottom: 0,
        listPaddingBottom: tmp22,
        listViewportHeight: tmp24,
      };
      cResult[12] = fontScale;
      cResult[13] = tmp13;
      cResult[14] = tmp15;
      cResult[15] = tmp17;
      cResult[16] = tmp20;
      cResult[17] = tmp24;
      cResult[18] = obj4;
      tmp26 = obj4;
      tmp9 = null != banner.banner;
      const tmpResult = useFontScale;
    }
  : (banner) => {
      redesignGuildHeaderHeight = redesignGuildHeaderHeight(16055).useRedesignGuildHeaderHeight(banner);
      height = height(1484)({ ignoreKeyboard: true }).height;
      const tmp2 = height(15943)();
      dependencyMap = tmp2;
      const obj = redesignGuildHeaderHeight(16055);
      const fontScale = redesignGuildHeaderHeight(5602).useFontScale();
      closure_4 = tmp4;
      const top = height(1618)().top;
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
    };
