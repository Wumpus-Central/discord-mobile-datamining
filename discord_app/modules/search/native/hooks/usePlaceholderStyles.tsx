// === Module 16837: usePlaceholderStyles ===

// Module 16837 (usePlaceholderStyles)
import c from "c" /* 576 */;
import native from "native" /* 1188 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const require = globalThis.__r;

require = fn;
const FADE_LAYOUT_ANIMATION_DURATION = fn(7524).FADE_LAYOUT_ANIMATION_DURATION;
fn(558);
const __initData = { code: "function usePlaceholderStylesTsx1(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}" };
const __initData2 = { code: "function usePlaceholderStylesTsx2(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}" };
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(1);
  ({ placeholderHeight, numColumns } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  return Math.ceil(useWindowDimensionsDefault(first).height / placeholderHeight) * numColumns;
}) : ((arg0) => {
  ({ placeholderHeight, numColumns } = arg0);
  return Math.ceil(useWindowDimensionsDefault({ ignoreKeyboard: true }).height / placeholderHeight) * numColumns;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/usePlaceholderStyles.tsx");

export const useFullscreenPlaceholderCount = tmp2;
export const usePlaceholderAnimatedStyle = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  _require = visible;
  const cResult = require("c").c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  const tmpResult = require("initialize");
  const fn2 = function s() {
    const obj = { opacity: null };
    if (stateFromStores) {
      let num5 = 0;
      if (closure_0) {
        num5 = 1;
      }
      obj.opacity = num5;
      let tmp5 = obj;
    } else if (closure_0) {
      const tmp2Result = ReanimatedRexport;
      const obj5 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(0.5, { duration: 0 });
      const obj2 = { duration: 1300, easing: native.STANDARD_EASING };
      const withTimingResult1 = timing.withTiming(1, obj2);
      const obj3 = { duration: 1300, easing: native.STANDARD_EASING };
      obj.opacity = tmp2Result.withRepeat(obj5.withSequence(withTimingResult, withTimingResult1, timing.withTiming(0.5, obj3)), -1);
      tmp5 = obj;
    } else {
      const obj4 = { duration };
      obj.opacity = timing.withTiming(0, obj4);
      tmp5 = obj;
      const tmp2Result2 = timing;
    }
    return tmp5;
  };
  const tmpResult2 = require("ReanimatedRexport");
  fn2.__closure = { useReducedMotion: stateFromStores, visible, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, STANDARD_EASING: require("native").STANDARD_EASING, FADE_LAYOUT_ANIMATION_DURATION };
  fn2.__workletHash = 9750536800906;
  fn2.__initData = __initData;
  return tmpResult2.useAnimatedStyle(fn2);
}) : ((visible) => {
  _require = visible;
  const items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = require("initialize");
  const fn = function u() {
    const obj = { opacity: null };
    if (stateFromStores) {
      let num5 = 0;
      if (closure_0) {
        num5 = 1;
      }
      obj.opacity = num5;
      let tmp5 = obj;
    } else if (closure_0) {
      const tmp2Result = ReanimatedRexport;
      const obj5 = ReanimatedRexport;
      const withTimingResult = timing.withTiming(0.5, { duration: 0 });
      const obj2 = { duration: 1300, easing: native.STANDARD_EASING };
      const withTimingResult1 = timing.withTiming(1, obj2);
      const obj3 = { duration: 1300, easing: native.STANDARD_EASING };
      obj.opacity = tmp2Result.withRepeat(obj5.withSequence(withTimingResult, withTimingResult1, timing.withTiming(0.5, obj3)), -1);
      tmp5 = obj;
    } else {
      const obj4 = { duration };
      obj.opacity = timing.withTiming(0, obj4);
      tmp5 = obj;
      const tmp2Result2 = timing;
    }
    return tmp5;
  };
  let obj2 = require("ReanimatedRexport");
  fn.__closure = { useReducedMotion: stateFromStores, visible, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, STANDARD_EASING: require("native").STANDARD_EASING, FADE_LAYOUT_ANIMATION_DURATION };
  fn.__workletHash = 11204424128649;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});