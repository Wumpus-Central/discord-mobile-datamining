// === Module 5616: ButtonEllipsis ===

// Module 5616 (ButtonEllipsis)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const ELLIPSIS_APPEAR_TIMING = { duration: 500, easing: null };
const Easing = fn(4618).Easing;
ELLIPSIS_APPEAR_TIMING.easing = Easing.inOut(fn(4618).Easing.quad);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles((arg0, arg1, backgroundColor) => {
  if ("lg" === arg0) {
    let num = 4;
    let num2 = 8;
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
  const circle = { width: num2, height: num2, borderRadius: nativeDefault.radii.round, marginEnd: null, backgroundColor: null };
  let num3 = 0;
  if (2 !== arg1) {
    num3 = num;
  }
  circle.marginEnd = num3;
  circle.backgroundColor = backgroundColor;
  return { circle };
});
function withEllipsisAnimation(arg0, value) {
  const obj = ReanimatedRexport;
  const result = 166.66666666666666 * arg0;
  const obj2 = ReanimatedRexport;
  return obj.withDelay(result, obj2.withRepeat(timing.withTiming(value, obj, "animate-always"), -1, true));
}
withEllipsisAnimation.__closure = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: fn(4618).withDelay, withRepeat: fn(4618).withRepeat, withTiming: fn(4897).withTiming, ELLIPSIS_APPEAR_TIMING };
withEllipsisAnimation.__workletHash = 2181731162311;
withEllipsisAnimation.__initData = { code: "function withEllipsisAnimation_ButtonEllipsisNativeTsx1(offset,value){const{ELLIPSIS_APPEAR_DURATION,withDelay,withRepeat,withTiming,ELLIPSIS_APPEAR_TIMING}=this.__closure;const animationTimeMs=ELLIPSIS_APPEAR_DURATION;const animationStaggerTimeMs=animationTimeMs/3;return withDelay(offset*animationStaggerTimeMs,withRepeat(withTiming(value,ELLIPSIS_APPEAR_TIMING,'animate-always'),-1,true));}" };
const __initData = { code: "function ButtonEllipsisNativeTsx2(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const __initData2 = { code: "function ButtonEllipsisNativeTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((offset) => {
  const cResult = offset(sharedValue1[8]).c(7);
  offset = offset.offset;
  ({ variant, size } = offset);
  let obj = offset(sharedValue1[8]);
  const tmp4 = closure_7(size, offset, offset(sharedValue1[9]).useForegroundColor(variant));
  let obj2 = offset(sharedValue1[9]);
  const sharedValue = offset(sharedValue1[3]).useSharedValue(0.4);
  let obj3 = offset(sharedValue1[3]);
  sharedValue1 = offset(sharedValue1[3]).useSharedValue(0.75);
  if (cResult[0] === offset) {
    if (cResult[1] === sharedValue) {
      if (cResult[2] === sharedValue1) {
        let tmp7 = cResult[3];
      }
      const mountLayoutEffect = tmp(tmp2[10]).useMountLayoutEffect(tmp7);
      const tmpResult = tmp(tmp2[10]);
      class A {
        constructor() {
          obj = { opacity: closure_1.get(), transform: null };
          obj1 = { scale: closure_2.get() };
          items = [];
          items[0] = obj1;
          obj.transform = items;
          return obj;
        }
      }
      const obj5 = { opacity: sharedValue, scale: sharedValue1 };
      A.__closure = obj5;
      A.__workletHash = 13371762734705;
      A.__initData = __initData;
      const animatedStyle = tmp(tmp2[3]).useAnimatedStyle(A);
      if (cResult[4] === animatedStyle) {
        if (cResult[5] === tmp4.circle) {
          let tmp11 = cResult[6];
        }
        return tmp11;
      }
      const obj6 = { style: null };
      let items = [tmp4.circle, animatedStyle];
      obj6.style = items;
      const tmp14 = closure_4(sharedValue(tmp2[3]).View, obj6);
      cResult[4] = animatedStyle;
      cResult[5] = tmp4.circle;
      cResult[6] = tmp14;
      tmp11 = tmp14;
      const tmpResult2 = tmp(tmp2[3]);
    }
  }
  const fn = function n() {
    if (typeof withEllipsisAnimation === "function") {
      let obj = ReanimatedRexport;
      const result = 166.66666666666666 * offset;
      const obj2 = ReanimatedRexport;
      tmp2(obj.withDelay(result, obj2.withRepeat(timing.withTiming(1, obj, "animate-always"), -1, true)));
      if (typeof tmp3 === "function") {
        const result1 = 166.66666666666666 * offset;
        const tmp5Result = ReanimatedRexport;
        const tmp5Result3 = ReanimatedRexport;
        tmp11(tmp5Result.withDelay(result1, tmp5Result3.withRepeat(timing.withTiming(1, tmp8, "animate-always"), -1, true)));
        return () => {
          offset(sharedValue1[3]).cancelAnimation(sharedValue);
          const obj = offset(sharedValue1[3]);
          offset(sharedValue1[3]).cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp8 = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  };
  cResult[0] = offset;
  cResult[1] = sharedValue;
  cResult[2] = sharedValue1;
  cResult[3] = fn;
  tmp7 = fn;
  const obj4 = offset(sharedValue1[3]);
}) : ((offset) => {
  offset = offset.offset;
  let sharedValue1;
  ({ variant, size } = offset);
  let obj = offset(sharedValue1[9]);
  const tmp = closure_7(size, offset, offset(sharedValue1[9]).useForegroundColor(variant));
  const sharedValue = offset(sharedValue1[3]).useSharedValue(0.4);
  let obj2 = offset(sharedValue1[3]);
  sharedValue1 = offset(sharedValue1[3]).useSharedValue(0.75);
  let obj3 = offset(sharedValue1[3]);
  const mountLayoutEffect = offset(sharedValue1[10]).useMountLayoutEffect(() => {
    if (typeof withEllipsisAnimation === "function") {
      let obj = ReanimatedRexport;
      const result = 166.66666666666666 * offset;
      const obj2 = ReanimatedRexport;
      tmp2(obj.withDelay(result, obj2.withRepeat(timing.withTiming(1, obj, "animate-always"), -1, true)));
      if (typeof tmp3 === "function") {
        const result1 = 166.66666666666666 * offset;
        const tmp5Result = ReanimatedRexport;
        const tmp5Result3 = ReanimatedRexport;
        tmp11(tmp5Result.withDelay(result1, tmp5Result3.withRepeat(timing.withTiming(1, tmp8, "animate-always"), -1, true)));
        return () => {
          offset(sharedValue1[3]).cancelAnimation(sharedValue);
          const obj = offset(sharedValue1[3]);
          offset(sharedValue1[3]).cancelAnimation(closure_1_2);
        };
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp8 = obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  });
  const obj4 = offset(sharedValue1[10]);
  const fn = function y() {
    const obj = { opacity: sharedValue.get(), transform: null };
    const items = [{ scale: sharedValue1.get() }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { opacity: sharedValue, scale: sharedValue1 };
  fn.__workletHash = 13160478370544;
  fn.__initData = __initData2;
  const animatedStyle = offset(sharedValue1[3]).useAnimatedStyle(fn);
  const obj6 = { style: null };
  let items = [tmp.circle, animatedStyle];
  obj6.style = items;
  return closure_4(sharedValue(sharedValue1[3]).View, obj6);
});
ReactCompilerGating = fn(558);
let obj3 = { ELLIPSIS_APPEAR_DURATION: 500, withDelay: fn(4618).withDelay, withRepeat: fn(4618).withRepeat, withTiming: fn(4897).withTiming, ELLIPSIS_APPEAR_TIMING };
const size = fn(2);
let result = size.fileFinishedImporting("design/components/Button/native/ButtonEllipsis.native.tsx");

export const Ellipsis = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { flexDirection: "row" };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const obj3 = { style: first, children: null };
    const obj4 = { offset: 0 };
    const merged = Object.assign(arg0);
    const items = [React4(closure_11, obj4), , ];
    const obj5 = { offset: 1 };
    const merged1 = Object.assign(arg0);
    items[1] = React4(closure_11, obj5);
    const obj6 = { offset: 2 };
    const merged2 = Object.assign(arg0);
    items[2] = React4(closure_11, obj6);
    obj3.children = items;
    const tmp17 = hasOwnProperty(View, obj3);
    cResult[1] = arg0;
    cResult[2] = tmp17;
    let tmp3 = tmp17;
  } else {
    tmp3 = cResult[2];
  }
  return tmp3;
}) : ((arg0) => {
  const obj = { style: { flexDirection: "row" }, children: null };
  const merged = Object.assign(arg0);
  const items = [React4(closure_11, { offset: 0 }), , ];
  const merged1 = Object.assign(arg0);
  items[1] = React4(closure_11, { offset: 1 });
  const merged2 = Object.assign(arg0);
  items[2] = React4(closure_11, { offset: 2 });
  obj.children = items;
  return hasOwnProperty(View, obj);
});