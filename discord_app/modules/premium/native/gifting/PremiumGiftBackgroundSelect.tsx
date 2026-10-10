// === Module 10185: PremiumGiftBackgroundSelect ===

// Module 10185 (PremiumGiftBackgroundSelect)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import timing from "timing" /* 5093 */;
import NativeGiftContext from "NativeGiftContext" /* 10054 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4850 */;

require = fn;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
let closure_8 = ReanimatedRexport.createAnimatedComponent(fn(17).ScrollView);
const createStyles = fn(5092);
let obj = { scrollView: { flex: 1, marginTop: nativeDefault.space.PX_24 }, contentContainer: { justifyContent: "center" } };
let closure_9 = createStyles.createStyles(obj);
const __initData = { code: "function PremiumGiftBackgroundSelectTsx1(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
const __initData2 = { code: "function PremiumGiftBackgroundSelectTsx2(){const{STANDARD_EASING,withTiming,visibility}=this.__closure;const animationSettings={easing:STANDARD_EASING,duration:100};return{opacity:withTiming(visibility.get()?1:0,animationSettings)};}" };
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftBackgroundSelect(arg0) {
  const cResult = first(sharedValue[8]).c(25);
  ({ giftStyle, withConsistentHeight } = arg0);
  const tmp5 = closure_9();
  const width = require("useWindowDimensions")().width;
  [first, importDefault] = noop.useState();
  let obj = first(sharedValue[8]);
  const tmp6 = importDefault;
  sharedValue = first(sharedValue[4]).useSharedValue(false);
  if (cResult[0] === first) {
    if (cResult[1] === sharedValue) {
      let tmp10 = cResult[2];
      let tmp11 = cResult[3];
    }
    const effect = noop.useEffect(tmp10, tmp11);
    const fn2 = function p() {
      let num = 0;
      if (sharedValue.get()) {
        num = 1;
      }
      const obj2 = { opacity: null };
      const obj = timing;
      obj2.opacity = obj.withTiming(num, { easing: native.STANDARD_EASING, duration: 100 });
      return obj2;
    };
    const obj3 = { STANDARD_EASING: tmp(tmp2[11]).STANDARD_EASING, withTiming: tmp(tmp2[10]).withTiming, visibility: sharedValue };
    fn2.__closure = obj3;
    fn2.__workletHash = 5743780040676;
    fn2.__initData = __initData;
    const animatedStyle = tmp(tmp2[4]).useAnimatedStyle(fn2);
    if (cResult[4] === giftStyle) {
      if (cResult[5] === tmp4) {
        let tmp15 = cResult[6];
      }
      if (cResult[7] !== first) {
        const fn3 = function k(arg0) {
          if (null == first) {
            closure_1(arg0);
          }
        };
        cResult[7] = first;
        cResult[8] = fn3;
        let tmp18 = fn3;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === first) {
        if (cResult[10] === width) {
          let tmp19 = cResult[11];
        }
        if (cResult[12] === tmp5.contentContainer) {
          if (cResult[13] === tmp19) {
            let tmp22 = cResult[14];
          }
          if (cResult[15] === animatedStyle) {
            if (cResult[16] === tmp5.scrollView) {
              let tmp23 = cResult[17];
            }
            if (cResult[18] === tmp18) {
              if (cResult[19] === tmp22) {
                if (cResult[20] === tmp23) {
                  let tmp24 = cResult[21];
                }
                if (cResult[22] === tmp15) {
                  if (cResult[23] === tmp24) {
                    let tmp28 = cResult[24];
                  }
                  return tmp28;
                }
                const obj4 = { children: null };
                const items = [tmp15, tmp24];
                obj4.children = items;
                const tmp31 = closure_7(closure_6, obj4);
                cResult[22] = tmp15;
                cResult[23] = tmp24;
                cResult[24] = tmp31;
                tmp28 = tmp31;
              }
            }
            const obj5 = { onContentSizeChange: tmp18, contentContainerStyle: tmp22, style: tmp23, horizontal: true, showsHorizontalScrollIndicator: false };
            const tmp27 = closure_5(closure_8, obj5);
            cResult[18] = tmp18;
            cResult[19] = tmp22;
            cResult[20] = tmp23;
            cResult[21] = tmp27;
            tmp24 = tmp27;
          }
          const items1 = [tmp5.scrollView, animatedStyle];
          cResult[15] = animatedStyle;
          cResult[16] = tmp5.scrollView;
          cResult[17] = items1;
          tmp23 = items1;
        }
        const items2 = [tmp5.contentContainer, tmp19];
        cResult[12] = tmp5.contentContainer;
        cResult[13] = tmp19;
        cResult[14] = items2;
        tmp22 = items2;
      }
      const tmp21 = null != first && first < width && { flex: 1 };
      cResult[9] = first;
      cResult[10] = width;
      cResult[11] = tmp21;
      tmp19 = tmp21;
    }
    const obj6 = { giftStyle, withConsistentHeight: tmp4 };
    const tmp17 = closure_5(tmp6(tmp2[12]), obj6);
    cResult[4] = giftStyle;
    cResult[5] = tmp4;
    cResult[6] = tmp17;
    tmp15 = tmp17;
    const tmpResult2 = tmp(tmp2[4]);
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
  const tmpResult = first(sharedValue[4]);
}) : (function GiftBackgroundSelect(giftStyle) {
  let flag = giftStyle.withConsistentHeight;
  if (flag === undefined) {
    flag = true;
  }
  first = undefined;
  importDefault = undefined;
  let sharedValue;
  const tmp = closure_9();
  [first, importDefault] = noop.useState();
  sharedValue = first(sharedValue[4]).useSharedValue(false);
  const items = [first, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(null != first);
  }, items);
  let obj = first(sharedValue[4]);
  class N {
    constructor() {
      tmp = closure_0;
      tmp2 = closure_2;
      obj = closure_0(closure_2[10]);
      num = 0;
      if (closure_2.get()) {
        num = 1;
      }
      obj1 = { opacity: null };
      obj4 = { easing: tmp(tmp2[11]).STANDARD_EASING, duration: 100 };
      obj1.opacity = obj.withTiming(num, obj4);
      return obj1;
    }
  }
  let obj2 = first(sharedValue[4]);
  N.__closure = { STANDARD_EASING: first(sharedValue[11]).STANDARD_EASING, withTiming: first(sharedValue[10]).withTiming, visibility: sharedValue };
  N.__workletHash = 8385596820679;
  N.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(N);
  const items1 = [closure_5(require("PremiumGiftBackgroundAnimation"), { giftStyle: giftStyle.giftStyle, withConsistentHeight: flag }), ];
  const obj4 = {
    onContentSizeChange(arg0) {
      if (null == first) {
        closure_1(arg0);
      }
    },
    contentContainerStyle: null,
    style: null,
    horizontal: true,
    showsHorizontalScrollIndicator: false
  };
  const items2 = [tmp.contentContainer, ];
  let obj5 = null != first;
  if (obj5) {
    obj5 = first < require("useWindowDimensions")().width;
  }
  if (obj5) {
    obj5 = { flex: 1 };
  }
  const obj6 = { children: null };
  items2[1] = obj5;
  obj4.contentContainerStyle = items2;
  const items3 = [tmp.scrollView, animatedStyle];
  obj4.style = items3;
  items1[1] = closure_5(closure_8, obj4);
  obj6.children = items1;
  return closure_7(closure_6, obj6);
});
let closure_12 = tmp3;
ReactCompilerGating = fn(558);
let obj3 = { flex: 1, marginTop: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftBackgroundSelect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGiftBackgroundSelect() {
  const cResult = c.c(3);
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  ({ giftStyle, setGiftStyle } = nativeGiftContext);
  if (cResult[0] === giftStyle) {
    if (cResult[1] === setGiftStyle) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  const tmp4 = hasOwnProperty(closure_12, { giftStyle, setGiftStyle });
  cResult[0] = giftStyle;
  cResult[1] = setGiftStyle;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function PremiumGiftBackgroundSelect() {
  const nativeGiftContext = NativeGiftContext.useNativeGiftContext();
  return hasOwnProperty(closure_12, { giftStyle: nativeGiftContext.giftStyle, setGiftStyle: nativeGiftContext.setGiftStyle });
});
export const GiftBackgroundSelect = tmp3;