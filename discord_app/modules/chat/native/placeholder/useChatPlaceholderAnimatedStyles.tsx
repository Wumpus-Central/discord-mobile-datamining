// === Module 12336: useChatPlaceholderAnimatedStyles ===

// Module 12336 (useChatPlaceholderAnimatedStyles)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import timing from "timing" /* 5092 */;
import timingPresets from "timingPresets" /* 5095 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
let TIMING_CONFIG = { duration: 1300, easing: fn(1200).STANDARD_EASING };
const __initData = { code: "function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else{if(!animated||useReducedMotion){return{opacity:0.7};}}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}" };
const __initData2 = { code: "function useChatPlaceholderAnimatedStylesTsx2(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChatPlaceholderAnimatedStyles(visible) {
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
  stateFromStores = visible(animated[4]).useStateFromStores(tmp4, tmp5);
  const tmpResult = visible(animated[4]);
  const fn2 = function _() {
    if (visible) {
      if (animated) {
        if (!stateFromStores) {
          let obj = { opacity: null };
          const obj2 = ReanimatedRexport;
          const obj3 = ReanimatedRexport;
          const withTimingResult = timing.withTiming(0.3, timingPresets.timingNone);
          const withTimingResult1 = timing.withTiming(0.7, obj);
          obj.opacity = obj2.withRepeat(obj3.withSequence(withTimingResult, withTimingResult1, timing.withTiming(0.3, obj)), -1);
        }
      }
      obj = { opacity: 0.7 };
    } else {
      return { opacity: 0 };
    }
  };
  const tmpResult2 = visible(animated[5]);
  fn2.__closure = { visible, animated, useReducedMotion: stateFromStores, withRepeat: visible(animated[5]).withRepeat, withSequence: visible(animated[5]).withSequence, withTiming: visible(animated[6]).withTiming, timingNone: visible(animated[7]).timingNone, TIMING_CONFIG };
  fn2.__workletHash = 7324174224540;
  fn2.__initData = __initData;
  return tmpResult2.useAnimatedStyle(fn2);
}) : (function useChatPlaceholderAnimatedStyles(visible) {
  visible = visible.visible;
  const animated = visible.animated;
  let stateFromStores;
  TIMING_CONFIG = visible(animated[4]);
  const items = [stateFromStores];
  stateFromStores = TIMING_CONFIG.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  const fn = function h() {
    if (visible) {
      if (animated) {
        if (!stateFromStores) {
          let obj = { opacity: null };
          const obj2 = ReanimatedRexport;
          const obj3 = ReanimatedRexport;
          const withTimingResult = timing.withTiming(0.3, timingPresets.timingNone);
          const withTimingResult1 = timing.withTiming(0.7, obj);
          obj.opacity = obj2.withRepeat(obj3.withSequence(withTimingResult, withTimingResult1, timing.withTiming(0.3, obj)), -1);
        }
      }
      obj = { opacity: 0.7 };
    } else {
      return { opacity: 0 };
    }
  };
  let obj2 = visible(animated[5]);
  fn.__closure = { visible, animated, useReducedMotion: stateFromStores, withRepeat: visible(animated[5]).withRepeat, withSequence: visible(animated[5]).withSequence, withTiming: visible(animated[6]).withTiming, timingNone: visible(animated[7]).timingNone, TIMING_CONFIG };
  fn.__workletHash = 4078218656505;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});