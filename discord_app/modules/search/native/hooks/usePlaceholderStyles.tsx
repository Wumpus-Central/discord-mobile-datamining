// === Module 16837: usePlaceholderStyles ===

// Module 16837 (usePlaceholderStyles)
import react from "react" /* 576 */;
import native from "native" /* 1188 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import timing from "timing" /* 4897 */;
import SearchConstants from "SearchConstants" /* 7524 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const FADE_LAYOUT_ANIMATION_DURATION = SearchConstants.FADE_LAYOUT_ANIMATION_DURATION;
let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = { code: "function usePlaceholderStylesTsx1(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}" };
const __initData2 = { code: "function usePlaceholderStylesTsx2(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let numColumns;
  let placeholderHeight;
  const obj = react;
  const cResult = obj.c(1);
  ({ placeholderHeight, numColumns } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { ignoreKeyboard: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  return Math.ceil(useWindowDimensionsDefault(first).height / placeholderHeight) * numColumns;
}) : ((arg0) => {
  let numColumns;
  let placeholderHeight;
  ({ placeholderHeight, numColumns } = arg0);
  return Math.ceil(useWindowDimensionsDefault({ ignoreKeyboard: true }).height / placeholderHeight) * numColumns;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  let duration;
  let tmp4;
  let tmp5;
  let useReducedMotion;
  _require = visible;
  let obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function c() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = fn;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const fn2 = function s() {
    let tmp5;
    const obj = { opacity: null };
    if (stateFromStores) {
      let num5 = 0;
      if (visible) {
        num5 = 1;
      }
      obj.opacity = num5;
      tmp5 = obj;
    } else if (visible) {
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj4 = timing;
      const withTimingResult = obj4.withTiming(0.5, { duration: 0 });
      const obj2 = { duration: 1300, easing: native.STANDARD_EASING };
      const withTiming = timing.withTiming;
      timing;
      const withTimingResult1 = withTiming(1, obj2);
      const obj3 = { duration: 1300, easing: native.STANDARD_EASING };
      const withTiming2 = timing.withTiming;
      timing;
      obj.opacity = withRepeat(withSequence(withTimingResult, withTimingResult1, withTiming2(0.5, obj3)), -1);
      tmp5 = obj;
    } else {
      const obj5 = { duration };
      const tmp2Result2 = timing;
      obj.opacity = tmp2Result2.withTiming(0, obj5);
      tmp5 = obj;
    }
    return tmp5;
  };
  const tmpResult2 = require("ReanimatedRexport");
  let obj2 = { useReducedMotion: stateFromStores, visible, withRepeat: tmp(4618).withRepeat, withSequence: tmp(4618).withSequence, withTiming: tmp(4897).withTiming, STANDARD_EASING: tmp(1188).STANDARD_EASING, FADE_LAYOUT_ANIMATION_DURATION };
  fn2.__closure = obj2;
  fn2.__workletHash = 9750536800906;
  fn2.__initData = __initData;
  return tmpResult2.useAnimatedStyle(fn2);
}) : ((visible) => {
  let duration;
  let useReducedMotion;
  _require = visible;
  let obj = require("get initialized");
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = require("ReanimatedRexport");
  const fn = function u() {
    let tmp5;
    const obj = { opacity: null };
    if (stateFromStores) {
      let num5 = 0;
      if (visible) {
        num5 = 1;
      }
      obj.opacity = num5;
      tmp5 = obj;
    } else if (visible) {
      const withRepeat = ReanimatedRexport.withRepeat;
      ReanimatedRexport;
      const withSequence = ReanimatedRexport.withSequence;
      ReanimatedRexport;
      const obj4 = timing;
      const withTimingResult = obj4.withTiming(0.5, { duration: 0 });
      const obj2 = { duration: 1300, easing: native.STANDARD_EASING };
      const withTiming = timing.withTiming;
      timing;
      const withTimingResult1 = withTiming(1, obj2);
      const obj3 = { duration: 1300, easing: native.STANDARD_EASING };
      const withTiming2 = timing.withTiming;
      timing;
      obj.opacity = withRepeat(withSequence(withTimingResult, withTimingResult1, withTiming2(0.5, obj3)), -1);
      tmp5 = obj;
    } else {
      const obj5 = { duration };
      const tmp2Result2 = timing;
      obj.opacity = tmp2Result2.withTiming(0, obj5);
      tmp5 = obj;
    }
    return tmp5;
  };
  let obj3 = { useReducedMotion: stateFromStores, visible, withRepeat: require("ReanimatedRexport").withRepeat, withSequence: require("ReanimatedRexport").withSequence, withTiming: require("timing").withTiming, STANDARD_EASING: require("native").STANDARD_EASING, FADE_LAYOUT_ANIMATION_DURATION };
  fn.__closure = obj3;
  fn.__workletHash = 11204424128649;
  fn.__initData = __initData2;
  return obj2.useAnimatedStyle(fn);
});
const result = size.fileFinishedImporting("modules/search/native/hooks/usePlaceholderStyles.tsx");

export const useFullscreenPlaceholderCount = tmp2;
export const usePlaceholderAnimatedStyle = tmp3;