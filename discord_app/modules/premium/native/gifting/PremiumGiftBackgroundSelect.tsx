// === Module 10574: PremiumGiftBackgroundSelect ===

// Module 10574 (PremiumGiftBackgroundSelect)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import timing from "timing" /* 4897 */;
import NativeGiftContext from "NativeGiftContext" /* 10443 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = ReanimatedRexport.createAnimatedComponent(ScrollView);
let obj = { scrollView: obj2, contentContainer: { justifyContent: "center" } };
obj2 = { flex: 1, marginTop: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
const __initData2 = { code: "function PremiumGiftBackgroundSelectTsx2(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let first;
  let giftStyle;
  let items;
  let sharedValue;
  let withConsistentHeight;
  let obj = first(sharedValue[8]);
  const cResult = obj.c(25);
  ({ giftStyle, withConsistentHeight } = arg0);
  const tmp5 = closure_9();
  const width = require("useWindowDimensions")().width;
  const tmp7 = _slicedToArray(react.useState(), 2);
  first = tmp7[0];
  const tmp6 = importDefault;
  importDefault = tmp7[1];
  const tmpResult = first(sharedValue[4]);
  sharedValue = tmpResult.useSharedValue(false);
  if (cResult[0] === first) {
    let tmp10;
    let tmp11;
    if (cResult[1] === sharedValue) {
      tmp10 = cResult[2];
      tmp11 = cResult[3];
    }
    const effect = react.useEffect(tmp10, tmp11);
    const fn2 = function p() {
      let obj2;
      const withTiming = timing.withTiming;
      let num = 0;
      timing;
      if (sharedValue.get()) {
        num = 1;
      }
      const obj = { opacity: withTiming(num, obj2) };
      obj2 = { easing: native.STANDARD_EASING, duration: 100 };
      return obj;
    };
    const obj3 = { STANDARD_EASING: first(sharedValue[11]).STANDARD_EASING, withTiming: first(sharedValue[10]).withTiming, visibility: sharedValue };
    const useAnimatedStyle = tmp(sharedValue[4]).useAnimatedStyle;
    first(sharedValue[4]);
    fn2.__closure = obj3;
    let num = 5743780040676;
    fn2.__workletHash = 5743780040676;
    fn2.__initData = __initData;
    const animatedStyle = useAnimatedStyle(fn2);
    if (cResult[4] === giftStyle) {
      let tmp16;
      let tmp19;
      if (cResult[5] === (undefined === withConsistentHeight || withConsistentHeight)) {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== first) {
        const fn3 = function x(arg0) {
          if (null == first) {
            closure_1(arg0);
          }
        };
        cResult[7] = first;
        cResult[8] = fn3;
        tmp19 = fn3;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === first) {
        let tmp20;
        if (cResult[10] === width) {
          tmp20 = cResult[11];
        }
        if (cResult[12] === tmp5.contentContainer) {
          let tmp23;
          if (cResult[13] === tmp20) {
            tmp23 = cResult[14];
          }
          if (cResult[15] === animatedStyle) {
            let tmp24;
            if (cResult[16] === tmp5.scrollView) {
              tmp24 = cResult[17];
            }
            if (cResult[18] === tmp19) {
              if (cResult[19] === tmp23) {
                let tmp25;
                if (cResult[20] === tmp24) {
                  tmp25 = cResult[21];
                }
                if (cResult[22] === tmp16) {
                  let tmp29;
                  if (cResult[23] === tmp25) {
                    tmp29 = cResult[24];
                  }
                  return tmp29;
                }
                const obj4 = { children: items };
                items = [tmp16, tmp25];
                const tmp32 = closure_7(closure_6, obj4);
                cResult[22] = tmp16;
                cResult[23] = tmp25;
                cResult[24] = tmp32;
                tmp29 = tmp32;
              }
            }
            const obj5 = { onContentSizeChange: tmp19, contentContainerStyle: tmp23, style: tmp24, horizontal: true, showsHorizontalScrollIndicator: false };
            const tmp28 = closure_5(closure_8, obj5);
            cResult[18] = tmp19;
            cResult[19] = tmp23;
            cResult[20] = tmp24;
            cResult[21] = tmp28;
            tmp25 = tmp28;
          }
          const items1 = [tmp5.scrollView, animatedStyle];
          cResult[15] = animatedStyle;
          cResult[16] = tmp5.scrollView;
          cResult[17] = items1;
          tmp24 = items1;
        }
        const items2 = [tmp5.contentContainer, tmp20];
        cResult[12] = tmp5.contentContainer;
        cResult[13] = tmp20;
        cResult[14] = items2;
        tmp23 = items2;
      }
      const tmp22 = null != first && first < width && { flex: 1 };
      cResult[9] = first;
      cResult[10] = width;
      cResult[11] = tmp22;
      tmp20 = tmp22;
    }
    const obj6 = { giftStyle, withConsistentHeight: undefined === withConsistentHeight || withConsistentHeight };
    const tmp18 = closure_5(tmp6(sharedValue[12]), obj6);
    cResult[4] = giftStyle;
    cResult[5] = undefined === withConsistentHeight || withConsistentHeight;
    cResult[6] = tmp18;
    tmp16 = tmp18;
  }
  const fn = function l() {
    const result = sharedValue.set(null != first);
  };
  const items3 = [first, sharedValue];
  cResult[0] = first;
  cResult[1] = sharedValue;
  cResult[2] = fn;
  cResult[3] = items3;
  tmp11 = items3;
  tmp10 = fn;
}) : ((withConsistentHeight) => {
  let closure_1;
  let first;
  let items2;
  let items3;
  let flag = withConsistentHeight.withConsistentHeight;
  const giftStyle = withConsistentHeight.giftStyle;
  if (flag === undefined) {
    flag = true;
  }
  first = undefined;
  importDefault = undefined;
  let sharedValue;
  const tmp = closure_9();
  const width = require("useWindowDimensions")().width;
  [first, importDefault] = react.useState();
  let obj = first(sharedValue[4]);
  sharedValue = obj.useSharedValue(false);
  const items = [first, sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(null != first);
  }, items);
  let obj2 = first(sharedValue[4]);
  class C {
    constructor() {
      let obj2;
      const withTiming = timing.withTiming;
      let num = 0;
      timing;
      if (sharedValue.get()) {
        num = 1;
      }
      const obj = { opacity: withTiming(num, obj2) };
      obj2 = { easing: native.STANDARD_EASING, duration: 100 };
      return obj;
    }
  }
  C.__closure = { STANDARD_EASING: first(sharedValue[11]).STANDARD_EASING, withTiming: first(sharedValue[10]).withTiming, visibility: sharedValue };
  C.__workletHash = 8385596820679;
  C.__initData = __initData2;
  ({ STANDARD_EASING: first(sharedValue[11]).STANDARD_EASING, withTiming: first(sharedValue[10]).withTiming, visibility: sharedValue });
  const animatedStyle = obj2.useAnimatedStyle(C);
  const items1 = [closure_5(require("PremiumGiftBackgroundAnimation"), { giftStyle, withConsistentHeight: flag }), ];
  const obj4 = {
    onContentSizeChange(arg0) {
      if (null == first) {
        closure_1(arg0);
      }
    },
    contentContainerStyle: items2,
    style: items3,
    horizontal: true,
    showsHorizontalScrollIndicator: false
  };
  items2 = [tmp.contentContainer, ];
  const obj5 = null != first && first < width && { flex: 1 };
  const obj6 = { children: items1 };
  items2[1] = obj5;
  items3 = [tmp.scrollView, animatedStyle];
  items1[1] = closure_5(closure_8, obj4);
  return closure_7(closure_6, obj6);
});
let closure_12 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let giftStyle;
  let setGiftStyle;
  const obj = react2;
  const cResult = obj.c(3);
  const obj2 = NativeGiftContext;
  const nativeGiftContext = obj2.useNativeGiftContext();
  ({ giftStyle, setGiftStyle } = nativeGiftContext);
  if (cResult[0] === giftStyle) {
    let tmp3;
    if (cResult[1] === setGiftStyle) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = hasOwnProperty(closure_12, { giftStyle, setGiftStyle });
  cResult[0] = giftStyle;
  cResult[1] = setGiftStyle;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (() => {
  const obj = NativeGiftContext;
  const nativeGiftContext = obj.useNativeGiftContext();
  const obj2 = { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle };
  return hasOwnProperty(closure_12, obj2);
});
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default tmp4;
export const GiftBackgroundSelect = tmp3;