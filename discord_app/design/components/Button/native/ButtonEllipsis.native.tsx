// === Module 5616: ButtonEllipsis ===

// Module 5616 (ButtonEllipsis)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let Easing;
let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const ELLIPSIS_APPEAR_TIMING = { duration: 500, easing: Easing.inOut(ReanimatedRexport.Easing.quad) };
Easing = ReanimatedRexport.Easing;
let closure_7 = createStyles.createStyles((arg0, arg1, backgroundColor) => {
  let num;
  let num2;
  let num3;
  if ("lg" === arg0) {
    num = 4;
    num2 = 8;
  } else {
    if ("md" !== arg0) {
      if ("sm" !== arg0) {
        num = 4;
        if ("xs" === arg0) {
          num = 3;
          num2 = 5;
        }
      }
    }
    num = 4;
    num2 = 6;
  }
  const circle = { width: num2, height: num2, borderRadius: nativeDefault.radii.round, marginEnd: num3, backgroundColor };
  num3 = 0;
  if (2 !== arg1) {
    num3 = num;
  }
  return { circle };
});
function withEllipsisAnimation(arg0, sharedValue) {
  const withDelay = ReanimatedRexport.withDelay;
  const result = 166.66666666666666 * arg0;
  ReanimatedRexport;
  const withRepeat = ReanimatedRexport.withRepeat;
  ReanimatedRexport;
  const obj = timing;
  return withDelay(result, withRepeat(obj.withTiming(sharedValue, obj, "animate-always"), -1, true));
}
let obj2 = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: ReanimatedRexport.withDelay, withRepeat: ReanimatedRexport.withRepeat, withTiming: timing.withTiming, ELLIPSIS_APPEAR_TIMING };
withEllipsisAnimation.__closure = obj2;
withEllipsisAnimation.__workletHash = 2181731162311;
withEllipsisAnimation.__initData = { code: "function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){const{ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING}=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));}" };
const __initData = { code: "function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const __initData2 = { code: "function ButtonEllipsisNativeTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((offset) => {
  let items;
  let sharedValue1;
  let variant;
  const tmp2 = sharedValue1;
  let obj = offset(sharedValue1[8]);
  const cResult = obj.c(7);
  offset = offset.offset;
  ({ variant, size } = offset);
  let obj2 = offset(sharedValue1[9]);
  const tmp4 = closure_7(size, offset, obj2.useForegroundColor(variant));
  const obj3 = offset(sharedValue1[3]);
  const sharedValue = obj3.useSharedValue(0.4);
  const obj4 = offset(sharedValue1[3]);
  sharedValue1 = obj4.useSharedValue(0.75);
  if (cResult[0] === offset) {
    if (cResult[1] === sharedValue) {
      let tmp7;
      if (cResult[2] === sharedValue1) {
        tmp7 = cResult[3];
      }
      const tmpResult = offset(tmp2[10]);
      const mountLayoutEffect = tmpResult.useMountLayoutEffect(tmp7);
      const tmpResult2 = offset(tmp2[3]);
      class A {
        constructor() {
          let items;
          const obj = { opacity: sharedValue.get(), transform: items };
          items = [{ scale: sharedValue1.get() }];
          ({ scale: sharedValue1.get() });
          return obj;
        }
      }
      const obj5 = { opacity: sharedValue, scale: sharedValue1 };
      A.__closure = obj5;
      A.__workletHash = 13371762734705;
      A.__initData = __initData;
      const animatedStyle = tmpResult2.useAnimatedStyle(A);
      if (cResult[4] === animatedStyle) {
        let tmp11;
        if (cResult[5] === tmp4.circle) {
          tmp11 = cResult[6];
        }
        return tmp11;
      }
      const tmp13 = sharedValue;
      const obj6 = { style: items };
      items = [tmp4.circle, animatedStyle];
      const tmp14 = closure_4(sharedValue(tmp2[3]).View, obj6);
      cResult[4] = animatedStyle;
      cResult[5] = tmp4.circle;
      cResult[6] = tmp14;
      tmp11 = tmp14;
    }
  }
  const fn = function n() {
    if (typeof withEllipsisAnimation === "function") {
      const withDelay = ReanimatedRexport.withDelay;
      const result = 166.66666666666666 * offset;
      ReanimatedRexport;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj = timing;
      tmp2(withDelay(result, withRepeat(obj.withTiming(1, obj, "animate-always"), -1, true)));
      const tmp10 = obj;
      if (typeof tmp3 === "function") {
        const withDelay2 = ReanimatedRexport.withDelay;
        const result1 = 166.66666666666666 * offset;
        ReanimatedRexport;
        const withRepeat2 = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const tmp5Result4 = timing;
        tmp13(withDelay2(result1, withRepeat2(tmp5Result4.withTiming(1, tmp10, "animate-always"), -1, true)));
        return () => {
          const obj = offset(sharedValue1[3]);
          obj.cancelAnimation(sharedValue);
          const obj2 = offset(sharedValue1[3]);
          obj2.cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  cResult[0] = offset;
  cResult[1] = sharedValue;
  cResult[2] = sharedValue1;
  cResult[3] = fn;
  tmp7 = fn;
}) : ((offset) => {
  let items;
  let variant;
  offset = offset.offset;
  let sharedValue1;
  ({ variant, size } = offset);
  let obj = offset(sharedValue1[9]);
  const tmp = closure_7(size, offset, obj.useForegroundColor(variant));
  let obj2 = offset(sharedValue1[3]);
  const sharedValue = obj2.useSharedValue(0.4);
  const obj3 = offset(sharedValue1[3]);
  sharedValue1 = obj3.useSharedValue(0.75);
  const obj4 = offset(sharedValue1[10]);
  const mountLayoutEffect = obj4.useMountLayoutEffect(() => {
    if (typeof withEllipsisAnimation === "function") {
      const withDelay = ReanimatedRexport.withDelay;
      const result = 166.66666666666666 * offset;
      ReanimatedRexport;
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      let obj = timing;
      tmp2(withDelay(result, withRepeat(obj.withTiming(1, obj, "animate-always"), -1, true)));
      const tmp10 = obj;
      if (typeof tmp3 === "function") {
        const withDelay2 = ReanimatedRexport.withDelay;
        const result1 = 166.66666666666666 * offset;
        ReanimatedRexport;
        const withRepeat2 = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const tmp5Result4 = timing;
        tmp13(withDelay2(result1, withRepeat2(tmp5Result4.withTiming(1, tmp10, "animate-always"), -1, true)));
        return () => {
          const obj = offset(sharedValue1[3]);
          obj.cancelAnimation(sharedValue);
          const obj2 = offset(sharedValue1[3]);
          obj2.cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const fn = function y() {
    let items;
    const obj = { opacity: sharedValue.get(), transform: items };
    items = [{ scale: sharedValue1.get() }];
    ({ scale: sharedValue1.get() });
    return obj;
  };
  fn.__closure = { opacity: sharedValue, scale: sharedValue1 };
  fn.__workletHash = 13160478370544;
  fn.__initData = __initData2;
  const obj5 = offset(sharedValue1[3]);
  const animatedStyle = obj5.useAnimatedStyle(fn);
  const obj6 = { style: items };
  items = [tmp.circle, animatedStyle];
  return closure_4(sharedValue(sharedValue1[3]).View, obj6);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let items;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { flexDirection: "row" };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const obj3 = { style: first, children: items };
    const obj4 = { offset: 0 };
    const merged = Object.assign(arg0);
    items = [React3(closure_11, obj4), , ];
    const obj5 = { offset: 1 };
    const merged1 = Object.assign(arg0);
    items[1] = React3(closure_11, obj5);
    const obj6 = { offset: 2 };
    const merged2 = Object.assign(arg0);
    items[2] = React3(closure_11, obj6);
    const tmp17 = hasOwnProperty(View, obj3);
    cResult[1] = arg0;
    cResult[2] = tmp17;
    tmp3 = tmp17;
  } else {
    tmp3 = cResult[2];
  }
  return tmp3;
}) : ((arg0) => {
  let items;
  const obj = { style: { flexDirection: "row" }, children: items };
  const obj2 = { offset: 0 };
  const merged = Object.assign(arg0);
  items = [React3(closure_11, obj2), , ];
  const obj3 = { offset: 1 };
  const merged1 = Object.assign(arg0);
  items[1] = React3(closure_11, obj3);
  const obj4 = { offset: 2 };
  const merged2 = Object.assign(arg0);
  items[2] = React3(closure_11, obj4);
  return hasOwnProperty(View, obj);
});
let result = size.fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

export const Ellipsis = tmp4;