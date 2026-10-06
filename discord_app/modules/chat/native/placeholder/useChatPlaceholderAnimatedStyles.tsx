// === Module 12320: useChatPlaceholderAnimatedStyles ===

// Module 12320 (useChatPlaceholderAnimatedStyles)
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import timingPresets from "timingPresets" /* 4900 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let TIMING_CONFIG = { duration: 1300, easing: native.STANDARD_EASING };
const __initData = { code: "function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else{if(!animated||useReducedMotion){return{opacity:0.7};}}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}" };
const __initData2 = { code: "function useChatPlaceholderAnimatedStylesTsx2(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let animated;
  let stateFromStores;
  let tmp4;
  let tmp5;
  TIMING_CONFIG = visible(animated[3]);
  const cResult = TIMING_CONFIG.c(2);
  visible = visible.visible;
  animated = visible.animated;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores];
    const fn = function h() {
      return stateFromStores.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = visible(animated[4]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const fn2 = function _() {
    let obj;
    let obj5;
    let withRepeat;
    let withSequence;
    let withTimingResult;
    let withTimingResult1;
    if (visible) {
      if (animated) {
        let obj2;
        if (!stateFromStores) {
          obj2 = { opacity: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(0.3, obj)), -1) };
          withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          withSequence = ReanimatedRexport.withSequence;
          ReanimatedRexport;
          const obj3 = timing;
          withTimingResult = obj3.withTiming(0.3, timingPresets.timingNone);
          const obj4 = timing;
          withTimingResult1 = obj4.withTiming(0.7, obj);
          obj5 = timing;
        }
        obj = obj2;
      }
      obj2 = { opacity: 0.7 };
    } else {
      obj = { opacity: 0 };
    }
    return obj;
  };
  const tmpResult2 = visible(animated[5]);
  let obj2 = { visible, animated, useReducedMotion: stateFromStores, withRepeat: tmp(tmp2[5]).withRepeat, withSequence: tmp(tmp2[5]).withSequence, withTiming: tmp(tmp2[6]).withTiming, timingNone: tmp(tmp2[7]).timingNone, TIMING_CONFIG };
  fn2.__closure = obj2;
  fn2.__workletHash = 7324174224540;
  fn2.__initData = __initData;
  return tmpResult2.useAnimatedStyle(fn2);
}) : ((visible) => {
  visible = visible.visible;
  const animated = visible.animated;
  let stateFromStores;
  TIMING_CONFIG = visible(animated[4]);
  const items = [stateFromStores];
  stateFromStores = TIMING_CONFIG.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  let obj2 = visible(animated[5]);
  const fn = function h() {
    let obj;
    let obj5;
    let withRepeat;
    let withSequence;
    let withTimingResult;
    let withTimingResult1;
    if (visible) {
      if (animated) {
        let obj2;
        if (!stateFromStores) {
          obj2 = { opacity: withRepeat(withSequence(withTimingResult, withTimingResult1, obj5.withTiming(0.3, obj)), -1) };
          withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          withSequence = ReanimatedRexport.withSequence;
          ReanimatedRexport;
          const obj3 = timing;
          withTimingResult = obj3.withTiming(0.3, timingPresets.timingNone);
          const obj4 = timing;
          withTimingResult1 = obj4.withTiming(0.7, obj);
          obj5 = timing;
        }
        obj = obj2;
      }
      obj2 = { opacity: 0.7 };
    } else {
      obj = { opacity: 0 };
    }
    return obj;
  };
  let obj3 = { visible, animated, useReducedMotion: stateFromStores, withRepeat: visible(animated[5]).withRepeat, withSequence: visible(animated[5]).withSequence, withTiming: visible(animated[6]).withTiming, timingNone: visible(animated[7]).timingNone, TIMING_CONFIG };
  fn.__closure = obj3;
  fn.__workletHash = 4078218656505;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});
const result = size.fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default tmp2;