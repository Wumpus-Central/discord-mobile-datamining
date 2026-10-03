// === Module 11721: SearchBarBottomBorder ===

// Module 11721 (SearchBarBottomBorder)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { border: { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const __initData = { code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
const __initData2 = { code: "function SearchBarBottomBorderTsx2(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
const ReactCompilerGating = fn(558);
let obj3 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export const usePinnedSearchBarBottomBorder = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = num(576).c(16);
  ({ key, triggerScrollHeight } = arg0);
  num = 1;
  if (undefined !== triggerScrollHeight) {
    num = triggerScrollHeight;
  }
  const tmp4 = closure_5();
  let obj = num(576);
  const sharedValue = num(4612).useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function c() {
      const result = sharedValue.set(0);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === key) {
    if (cResult[3] === sharedValue) {
      let tmp7 = cResult[4];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if (cResult[5] !== sharedValue) {
      const fn2 = function h(offset) {
        const result = sharedValue.set(offset.offset);
      };
      cResult[5] = sharedValue;
      cResult[6] = fn2;
      let tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const fn3 = function w() {
      num = 0;
      if (sharedValue.get() > num) {
        num = 1;
      }
      return { opacity: spring.withSpring(num, springPresets.springStandard) };
    };
    const obj2 = { withSpring: tmp(5597).withSpring, scrollPosition: sharedValue, triggerScrollHeight: num, springStandard: tmp(5598).springStandard };
    fn3.__closure = obj2;
    fn3.__workletHash = 5466161440826;
    fn3.__initData = __initData;
    const animatedStyle = tmp(4612).useAnimatedStyle(fn3);
    if (cResult[7] === animatedStyle) {
      if (cResult[8] === tmp4.border) {
        let tmp13 = cResult[9];
      }
      if (cResult[10] === key) {
        if (cResult[11] === tmp13) {
          let tmp14 = cResult[12];
        }
        if (cResult[13] === tmp14) {
          if (cResult[14] === tmp10) {
            let tmp18 = cResult[15];
          }
          return tmp18;
        }
        const obj3 = { scrollHandler: tmp10, bottomBorderComponent: tmp14 };
        cResult[13] = tmp14;
        cResult[14] = tmp10;
        cResult[15] = obj3;
        tmp18 = obj3;
      }
      const obj4 = { style: tmp13 };
      const tmp17 = jsx(sharedValue(4612).View, { style: tmp13 }, key);
      cResult[10] = key;
      cResult[11] = tmp13;
      cResult[12] = tmp17;
      tmp14 = tmp17;
    }
    const items = [tmp4.border, animatedStyle];
    cResult[7] = animatedStyle;
    cResult[8] = tmp4.border;
    cResult[9] = items;
    tmp13 = items;
    const tmpResult2 = tmp(4612);
  }
  const items1 = [key, sharedValue];
  cResult[2] = key;
  cResult[3] = sharedValue;
  cResult[4] = items1;
  tmp7 = items1;
  const tmpResult = num(4612);
}) : ((arg0) => {
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  const tmp = closure_5();
  const sharedValue = triggerScrollHeight(4612).useSharedValue(0);
  const items = [key, sharedValue];
  const effect = noop.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = noop.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  let obj = triggerScrollHeight(4612);
  const fn = function p() {
    let num = 0;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    return { opacity: spring.withSpring(num, springPresets.springStandard) };
  };
  const obj2 = triggerScrollHeight(4612);
  fn.__closure = { withSpring: triggerScrollHeight(5597).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: triggerScrollHeight(5598).springStandard };
  fn.__workletHash = 17305021520857;
  fn.__initData = __initData2;
  const obj4 = { scrollHandler: callback, bottomBorderComponent: null };
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const obj5 = { style: null };
  const items2 = [tmp.border, animatedStyle];
  obj5.style = items2;
  obj4.bottomBorderComponent = jsx(sharedValue(4612).View, { style: null }, key);
  return obj4;
});