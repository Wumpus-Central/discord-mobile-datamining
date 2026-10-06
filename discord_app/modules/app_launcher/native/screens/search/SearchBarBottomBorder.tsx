// === Module 11735: SearchBarBottomBorder ===

// Module 11735 (SearchBarBottomBorder)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5604 */;
import springPresets from "springPresets" /* 5605 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
const jsx = Fragment.jsx;
let obj = { border: obj2 };
obj2 = { borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1 };
let closure_5 = createStyles.createStyles(obj);
const __initData = { code: "function SearchBarBottomBorderTsx1(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
const __initData2 = { code: "function SearchBarBottomBorderTsx2(){const{withSpring,scrollPosition,triggerScrollHeight,springStandard}=this.__closure;return{opacity:withSpring(scrollPosition.get()>triggerScrollHeight?1:0,springStandard)};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let key;
  let num;
  let tmp6;
  let triggerScrollHeight;
  let obj = num(576);
  const cResult = obj.c(16);
  ({ key, triggerScrollHeight } = arg0);
  num = 1;
  if (undefined !== triggerScrollHeight) {
    num = triggerScrollHeight;
  }
  const tmp4 = closure_5();
  const tmpResult = num(4618);
  const sharedValue = tmpResult.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const fn = function c() {
      const result = sharedValue.set(0);
    };
    cResult[0] = sharedValue;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === key) {
    let tmp7;
    let tmp10;
    if (cResult[3] === sharedValue) {
      tmp7 = cResult[4];
    }
    const effect = react.useEffect(tmp6, tmp7);
    if (cResult[5] !== sharedValue) {
      const fn2 = function h(offset) {
        const result = sharedValue.set(offset.offset);
      };
      cResult[5] = sharedValue;
      cResult[6] = fn2;
      tmp10 = fn2;
    } else {
      tmp10 = cResult[6];
    }
    const fn3 = function w() {
      const withSpring = spring.withSpring;
      num = 0;
      spring;
      if (sharedValue.get() > num) {
        num = 1;
      }
      const obj = { opacity: withSpring(num, springPresets.springStandard) };
      return obj;
    };
    const obj2 = { withSpring: num(5604).withSpring, scrollPosition: sharedValue, triggerScrollHeight: num, springStandard: num(5605).springStandard };
    const useAnimatedStyle = num(4618).useAnimatedStyle;
    num(4618);
    fn3.__closure = obj2;
    fn3.__workletHash = 5466161440826;
    fn3.__initData = __initData;
    const animatedStyle = useAnimatedStyle(fn3);
    if (cResult[7] === animatedStyle) {
      let tmp14;
      if (cResult[8] === tmp4.border) {
        tmp14 = cResult[9];
      }
      if (cResult[10] === key) {
        let tmp15;
        if (cResult[11] === tmp14) {
          tmp15 = cResult[12];
        }
        if (cResult[13] === tmp15) {
          let tmp19;
          if (cResult[14] === tmp10) {
            tmp19 = cResult[15];
          }
          return tmp19;
        }
        const obj3 = { scrollHandler: tmp10, bottomBorderComponent: tmp15 };
        cResult[13] = tmp15;
        cResult[14] = tmp10;
        cResult[15] = obj3;
        tmp19 = obj3;
      }
      const tmp18 = jsx(sharedValue(4618).View, { style: tmp14 }, key);
      cResult[10] = key;
      cResult[11] = tmp14;
      cResult[12] = tmp18;
      tmp15 = tmp18;
    }
    const items = [tmp4.border, animatedStyle];
    cResult[7] = animatedStyle;
    cResult[8] = tmp4.border;
    cResult[9] = items;
    tmp14 = items;
  }
  const items1 = [key, sharedValue];
  cResult[2] = key;
  cResult[3] = sharedValue;
  cResult[4] = items1;
  tmp7 = items1;
}) : ((arg0) => {
  let key;
  let triggerScrollHeight;
  ({ key, triggerScrollHeight } = arg0);
  if (triggerScrollHeight === undefined) {
    triggerScrollHeight = 1;
  }
  const tmp = closure_5();
  let obj = triggerScrollHeight(4618);
  const sharedValue = obj.useSharedValue(0);
  const items = [key, sharedValue];
  const effect = react.useEffect(() => {
    const result = sharedValue.set(0);
  }, items);
  const items1 = [sharedValue];
  const callback = react.useCallback((offset) => {
    const result = sharedValue.set(offset.offset);
  }, items1);
  const fn = function p() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (sharedValue.get() > triggerScrollHeight) {
      num = 1;
    }
    const obj = { opacity: withSpring(num, springPresets.springStandard) };
    return obj;
  };
  const obj2 = triggerScrollHeight(4618);
  fn.__closure = { withSpring: triggerScrollHeight(5604).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: triggerScrollHeight(5605).springStandard };
  fn.__workletHash = 17305021520857;
  fn.__initData = __initData2;
  const obj4 = { scrollHandler: callback, bottomBorderComponent: null };
  ({ withSpring: triggerScrollHeight(5604).withSpring, scrollPosition: sharedValue, triggerScrollHeight, springStandard: triggerScrollHeight(5605).springStandard });
  const animatedStyle = obj2.useAnimatedStyle(fn);
  const items2 = [tmp.border, animatedStyle];
  return obj4;
});
let result = size.fileFinishedImporting("modules/app_launcher/native/screens/search/SearchBarBottomBorder.tsx");

export const usePinnedSearchBarBottomBorder = tmp2;