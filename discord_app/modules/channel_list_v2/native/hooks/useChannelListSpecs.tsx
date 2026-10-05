// === Module 16058: useChannelListSpecs ===

// Module 16058 (useChannelListSpecs)
import react2 from "react" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useFontScale from "useFontScale" /* 5602 */;
import roundToNearestPixelDefault from "roundToNearestPixel" /* 10725 */;
import useChannelListWidthDefault from "useChannelListWidth" /* 15947 */;
import RedesignGuildHeader from "RedesignGuildHeader" /* 16059 */;
import react from "react" /* 19 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11697 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
({ STICKY_BANNER_ASPECT_RATIO: closure_4, BANNER_MAX_HEIGHT_PERCENTAGE: hasOwnProperty } = RedesignChannelListConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((banner) => {
  let first;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp20;
  let tmp22;
  let tmp24;
  const obj = react2;
  const cResult = obj.c(19);
  const obj2 = RedesignGuildHeader;
  const redesignGuildHeaderHeight = obj2.useRedesignGuildHeaderHeight(banner);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { ignoreKeyboard: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const height = useWindowDimensionsDefault(first).height;
  const tmp7 = useChannelListWidthDefault();
  const tmpResult = useFontScale;
  const fontScale = tmpResult.useFontScale();
  let num2 = 0;
  const tmp9 = null != banner.banner;
  const top = useSafeAreaInsetsDefault().top;
  if (tmp9) {
    const _Math = Math;
    num2 = Math.min(tmp7 / React3, height * hasOwnProperty);
  }
  const diff = height - top;
  if (cResult[1] !== num2) {
    const tmp14 = roundToNearestPixelDefault(num2);
    cResult[1] = num2;
    cResult[2] = tmp14;
    tmp13 = tmp14;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] !== tmp7) {
    const tmp16 = roundToNearestPixelDefault(tmp7);
    cResult[3] = tmp7;
    cResult[4] = tmp16;
    tmp15 = tmp16;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== redesignGuildHeaderHeight) {
    const tmp18 = roundToNearestPixelDefault(redesignGuildHeaderHeight);
    cResult[5] = redesignGuildHeaderHeight;
    cResult[6] = tmp18;
    tmp17 = tmp18;
  } else {
    tmp17 = cResult[6];
  }
  const sum = num2 + redesignGuildHeaderHeight;
  if (cResult[7] !== sum) {
    const tmp21 = roundToNearestPixelDefault(sum);
    cResult[7] = sum;
    cResult[8] = tmp21;
    tmp20 = tmp21;
  } else {
    tmp20 = cResult[8];
  }
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp23 = roundToNearestPixelDefault(24);
    cResult[9] = tmp23;
    tmp22 = tmp23;
  } else {
    tmp22 = cResult[9];
  }
  if (cResult[10] !== diff) {
    const tmp25 = roundToNearestPixelDefault(diff);
    cResult[10] = diff;
    cResult[11] = tmp25;
    tmp24 = tmp25;
  } else {
    tmp24 = cResult[11];
  }
  if (cResult[12] === fontScale) {
    if (cResult[13] === tmp13) {
      if (cResult[14] === tmp15) {
        if (cResult[15] === tmp17) {
          if (cResult[16] === tmp20) {
            let tmp26;
            if (cResult[17] === tmp24) {
              tmp26 = cResult[18];
            }
            return tmp26;
          }
        }
      }
    }
  }
  const obj4 = { bannerHeight: tmp13, bannerWidth: tmp15, headerHeight: tmp17, fontScale, listTop: tmp20, listBottom: 0, listPaddingBottom: tmp22, listViewportHeight: tmp24 };
  cResult[12] = fontScale;
  cResult[13] = tmp13;
  cResult[14] = tmp15;
  cResult[15] = tmp17;
  cResult[16] = tmp20;
  cResult[17] = tmp24;
  cResult[18] = obj4;
  tmp26 = obj4;
}) : ((banner) => {
  let closure_2;
  let height;
  let redesignGuildHeaderHeight;
  let obj = redesignGuildHeaderHeight(16059);
  redesignGuildHeaderHeight = obj.useRedesignGuildHeaderHeight(banner);
  height = height(1484)({ ignoreKeyboard: true }).height;
  const tmp2 = height(15947)();
  dependencyMap = tmp2;
  const obj2 = redesignGuildHeaderHeight(5602);
  const fontScale = obj2.useFontScale();
  let closure_4 = tmp4;
  const top = height(1618)().top;
  const items = [null != banner.banner, tmp2, height, redesignGuildHeaderHeight, top, fontScale];
  return fontScale.useMemo(() => {
    let num = 0;
    if (closure_4) {
      const _Math = Math;
      num = Math.min(closure_2 / React3, height * hasOwnProperty);
    }
    const obj = { bannerHeight: roundToNearestPixelDefault(num), bannerWidth: roundToNearestPixelDefault(closure_2), headerHeight: roundToNearestPixelDefault(redesignGuildHeaderHeight), fontScale, listTop: roundToNearestPixelDefault(num + redesignGuildHeaderHeight), listBottom: 0, listPaddingBottom: roundToNearestPixelDefault(24), listViewportHeight: roundToNearestPixelDefault(height - top) };
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/hooks/useChannelListSpecs.tsx");

export default tmp3;