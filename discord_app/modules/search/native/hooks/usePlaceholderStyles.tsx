// === Module 16483: useFullscreenPlaceholderCount ===

// Module 16483 (useFullscreenPlaceholderCount)
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import closure_3 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import { FADE_LAYOUT_ANIMATION_DURATION as closure_4 } from "MessageEmbedTypes" /* 7633 */;

const require = arg1;
let closure_5 = { code: "function usePlaceholderStylesTsx1(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}" };
const result = require("set").fileFinishedImporting("modules/search/native/hooks/usePlaceholderStyles.tsx");

export const useFullscreenPlaceholderCount = function useFullscreenPlaceholderCount(arg0) {
  ({ placeholderHeight, numColumns } = arg0);
  return Math.ceil(useWindowDimensionsDefault({ ignoreKeyboard: true }).height / placeholderHeight) * numColumns;
};
export const usePlaceholderAnimatedStyle = function usePlaceholderAnimatedStyle(visible) {
  const _require = visible;
  let obj = _require(586);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  class A {
    constructor() {
      obj = { opacity: null };
      tmp = closure_0;
      if (closure_1) {
        num5 = 0;
        if (tmp) {
          num5 = 1;
        }
        obj[0] = num5;
        tmp5 = obj;
      } else {
        tmp2 = closure_0;
        tmp3 = closure_1_2;
        if (tmp) {
          tmp2Result = tmp2(tmp3[4]);
          tmp6 = closure_0;
          tmp7 = closure_1_2;
          obj5 = closure_0(closure_1_2[4]);
          tmp8 = closure_0;
          tmp9 = closure_1_2;
          obj6 = closure_0(closure_1_2[5]);
          num2 = 0.5;
          tmp11 = closure_0;
          tmp12 = closure_1_2;
          withTimingResult = obj6.withTiming(0.5, { duration: 0 });
          obj7 = closure_0(closure_1_2[5]);
          obj = { duration: 1300, easing: null };
          tmp13 = closure_0;
          tmp14 = closure_1_2;
          obj[1] = closure_0(closure_1_2[6]).STANDARD_EASING;
          num3 = 1;
          tmp16 = closure_0;
          tmp17 = closure_1_2;
          withTimingResult1 = obj7.withTiming(1, obj);
          obj9 = closure_0(closure_1_2[5]);
          obj1 = { duration: 1300, easing: null };
          tmp18 = closure_0;
          tmp19 = closure_1_2;
          obj1[1] = closure_0(closure_1_2[6]).STANDARD_EASING;
          num4 = -1;
          obj[0] = tmp2Result.withRepeat(obj5.withSequence(withTimingResult, withTimingResult1, obj9.withTiming(0.5, obj1)), -1);
          tmp5 = obj;
        } else {
          tmp2Result1 = tmp2(tmp3[5]);
          obj2 = { duration: null };
          tmp4 = closure_1_4;
          obj2[0] = closure_1_4;
          num = 0;
          obj[0] = tmp2Result1.withTiming(0, obj2);
          tmp5 = obj;
        }
      }
      return tmp5;
    }
  }
  obj = { useReducedMotion: stateFromStores, visible, withRepeat: _require(4217).withRepeat, withSequence: _require(4217).withSequence, withTiming: _require(4479).withTiming, STANDARD_EASING: _require(1296).STANDARD_EASING, FADE_LAYOUT_ANIMATION_DURATION: closure_4 };
  A.__closure = obj;
  A.__workletHash = 9750536800906;
  A.__initData = closure_5;
  return _require(4217).useAnimatedStyle(A);
};