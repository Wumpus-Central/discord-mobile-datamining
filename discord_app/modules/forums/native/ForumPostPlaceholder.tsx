// === Module 11641: ForumPostPlaceholder ===

// Module 11641 (ForumPostPlaceholder)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import timing from "timing" /* 4891 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { postPlaceholder: { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 } };
let closure_7 = createStyles.createStyles(obj);
let c8 = 0.55;
let c9 = 1000;
const __initData = { code: "function ForumPostPlaceholderTsx1(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}" };
const __initData2 = { code: "function ForumPostPlaceholderTsx2(){const{reducedMotion,ROW_OPACITY_END,withDelay,INITIAL_DELAY_MS,withRepeat,withSequence,withTiming,timingConfig}=this.__closure;if(reducedMotion){return{opacity:ROW_OPACITY_END};}return{opacity:withDelay(INITIAL_DELAY_MS,withRepeat(withSequence(withTiming(ROW_OPACITY_END,timingConfig),withTiming(1,timingConfig)),-1,true))};}" };
const ReactCompilerGating = fn(558);
let obj3 = { height: 2 * nativeDefault.space.PX_64, marginBottom: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumPostPlaceholder.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(576).c(8);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function w() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class T {
      constructor() {
        obj = { timingConfig: null };
        obj1 = { duration: 1000 + 500 * Math.random(), easing: null };
        Easing = closure_0(closure_1_2[9]).Easing;
        obj1.easing = Easing.inOut(closure_0(closure_1_2[9]).Easing.sin);
        obj.timingConfig = obj1;
        return obj;
      }
    }
    cResult[2] = T;
  } else {
    class T {
      constructor() {
        obj = { timingConfig: null };
        obj1 = { duration: 1000 + 500 * Math.random(), easing: null };
        Easing = closure_0(closure_1_2[9]).Easing;
        obj1.easing = Easing.inOut(closure_0(closure_1_2[9]).Easing.sin);
        obj.timingConfig = obj1;
        return obj;
      }
    }
  }
  const timingConfig = _slicedToArray(noop.useState(T), 1)[0].timingConfig;
  const tmpResult = stateFromStores(504);
  class I {
    constructor() {
      obj = { opacity: null };
      if (closure_0) {
        tmp8 = c8;
        obj.opacity = c8;
        tmp7 = obj;
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj2 = closure_0(closure_2[9]);
        tmp3 = c9;
        obj3 = closure_0(closure_2[9]);
        obj4 = closure_0(closure_2[9]);
        obj5 = closure_0(closure_2[10]);
        tmp4 = c8;
        tmp5 = timingConfig;
        withTimingResult = obj5.withTiming(c8, timingConfig);
        obj6 = closure_0(closure_2[10]);
        num = 1;
        flag = true;
        num2 = -1;
        obj.opacity = obj2.withDelay(c9, obj3.withRepeat(obj4.withSequence(withTimingResult, obj6.withTiming(1, timingConfig)), -1, true));
        tmp7 = obj;
      }
      return tmp7;
    }
  }
  const tmpResult2 = stateFromStores(4612);
  I.__closure = { reducedMotion: stateFromStores, ROW_OPACITY_END: v055, withDelay: stateFromStores(4612).withDelay, INITIAL_DELAY_MS, withRepeat: stateFromStores(4612).withRepeat, withSequence: stateFromStores(4612).withSequence, withTiming: stateFromStores(4891).withTiming, timingConfig };
  I.__workletHash = 9488742940898;
  I.__initData = __initData;
  const animatedStyle = tmpResult2.useAnimatedStyle(I);
  if (cResult[3] !== tmp4.postPlaceholder) {
    class T {
      constructor() {
        obj = { timingConfig: null };
        obj1 = { duration: 1000 + 500 * Math.random(), easing: null };
        Easing = closure_0(closure_1_2[9]).Easing;
        obj1.easing = Easing.inOut(closure_0(closure_1_2[9]).Easing.sin);
        obj.timingConfig = obj1;
        return obj;
      }
    }
    let obj3 = { variant: "secondary", style: tmp4.postPlaceholder };
    const tmp12 = jsx(tmp(5995).Card, { variant: "secondary", style: tmp4.postPlaceholder });
    cResult[3] = tmp4.postPlaceholder;
    cResult[4] = tmp12;
  } else {
    class T {
      constructor() {
        obj = { timingConfig: null };
        obj1 = { duration: 1000 + 500 * Math.random(), easing: null };
        Easing = closure_0(closure_1_2[9]).Easing;
        obj1.easing = Easing.inOut(closure_0(closure_1_2[9]).Easing.sin);
        obj.timingConfig = obj1;
        return obj;
      }
    }
  }
  if (cResult[5] === animatedStyle) {
    class T {
      constructor() {
        obj = { timingConfig: null };
        obj1 = { duration: 1000 + 500 * Math.random(), easing: null };
        Easing = closure_0(closure_1_2[9]).Easing;
        obj1.easing = Easing.inOut(closure_0(closure_1_2[9]).Easing.sin);
        obj.timingConfig = obj1;
        return obj;
      }
    }
    return tmp13;
  }
  tmp13 = jsx(timingConfig(4612).View, { style: animatedStyle, pointerEvents: "none", children: tmp11 });
  cResult[5] = animatedStyle;
  cResult[6] = tmp11;
  cResult[7] = tmp13;
  let obj2 = { reducedMotion: stateFromStores, ROW_OPACITY_END: v055, withDelay: stateFromStores(4612).withDelay, INITIAL_DELAY_MS, withRepeat: stateFromStores(4612).withRepeat, withSequence: stateFromStores(4612).withSequence, withTiming: stateFromStores(4891).withTiming, timingConfig };
}) : (() => {
  const tmp = closure_7();
  const items = [AccessibilityStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const timingConfig = _slicedToArray(noop.useState(() => {
    const obj = { timingConfig: null };
    const obj2 = { duration: 1000 + 500 * Math.random(), easing: null };
    const Easing = stateFromStores(4612).Easing;
    obj2.easing = Easing.inOut(stateFromStores(4612).Easing.sin);
    obj.timingConfig = obj2;
    return obj;
  }), 1)[0].timingConfig;
  let obj = stateFromStores(504);
  const fn = function _() {
    const obj = { opacity: null };
    if (stateFromStores) {
      obj.opacity = opacity;
      let tmp7 = obj;
    } else {
      const obj2 = ReanimatedRexport;
      const obj3 = ReanimatedRexport;
      const obj4 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(opacity, timingConfig);
      obj.opacity = obj2.withDelay(c9, obj3.withRepeat(obj4.withSequence(withTimingResult, timing.withTiming(1, timingConfig)), -1, true));
      tmp7 = obj;
    }
    return tmp7;
  };
  let obj2 = stateFromStores(4612);
  fn.__closure = { reducedMotion: stateFromStores, ROW_OPACITY_END: v055, withDelay: stateFromStores(4612).withDelay, INITIAL_DELAY_MS, withRepeat: stateFromStores(4612).withRepeat, withSequence: stateFromStores(4612).withSequence, withTiming: stateFromStores(4891).withTiming, timingConfig };
  fn.__workletHash = 13857107900577;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let obj4 = { style: animatedStyle, pointerEvents: "none", children: jsx(stateFromStores(5995).Card, { variant: "secondary", style: tmp.postPlaceholder }) };
  return jsx(timingConfig(4612).View, { style: animatedStyle, pointerEvents: "none", children: jsx(stateFromStores(5995).Card, { variant: "secondary", style: tmp.postPlaceholder }) });
}));