// discord_app/modules/search/native/hooks/usePlaceholderStyles.tsx
import native from "../../../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const duration = fn(7878).FADE_LAYOUT_ANIMATION_DURATION;
const __initData = {
  code: "function usePlaceholderStylesTsx1(){const{useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION}=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/usePlaceholderStyles.tsx");

export const useFullscreenPlaceholderCount = function useFullscreenPlaceholderCount(arg0) {
  ({ placeholderHeight, numColumns } = arg0);
  return Math.ceil(useWindowDimensionsDefault({ ignoreKeyboard: true }).height / placeholderHeight) * numColumns;
};
export const usePlaceholderAnimatedStyle = function usePlaceholderAnimatedStyle(visible) {
  _require = visible;
  let obj = require("initialize");
  const items = [AccessibilityStore];
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
        obj.opacity = num5;
        tmp5 = obj;
      } else {
        tmp2 = closure_0;
        tmp3 = closure_2;
        if (tmp) {
          tmp2Result = tmp2(tmp3[4]);
          tmp6 = closure_0;
          tmp7 = closure_2;
          obj5 = closure_0(closure_2[4]);
          tmp8 = closure_0;
          tmp9 = closure_2;
          obj6 = closure_0(closure_2[5]);
          num2 = 0.5;
          tmp11 = closure_0;
          tmp12 = closure_2;
          withTimingResult = obj6.withTiming(0.5, { duration: 0 });
          obj7 = closure_0(closure_2[5]);
          obj = { duration: 1300, easing: null };
          tmp13 = closure_0;
          tmp14 = closure_2;
          obj.easing = closure_0(closure_2[6]).STANDARD_EASING;
          num3 = 1;
          tmp16 = closure_0;
          tmp17 = closure_2;
          withTimingResult1 = obj7.withTiming(1, obj);
          obj9 = closure_0(closure_2[5]);
          obj1 = { duration: 1300, easing: null };
          tmp18 = closure_0;
          tmp19 = closure_2;
          obj1.easing = closure_0(closure_2[6]).STANDARD_EASING;
          num4 = -1;
          obj.opacity = tmp2Result.withRepeat(
            obj5.withSequence(withTimingResult, withTimingResult1, obj9.withTiming(0.5, obj1)),
            -1,
          );
          tmp5 = obj;
        } else {
          tmp2Result1 = tmp2(tmp3[5]);
          obj2 = { duration: null };
          tmp4 = closure_4;
          obj2.duration = closure_4;
          num = 0;
          obj.opacity = tmp2Result1.withTiming(0, obj2);
          tmp5 = obj;
        }
      }
      return tmp5;
    }
  }
  obj = {
    useReducedMotion: stateFromStores,
    visible,
    withRepeat: require("ReanimatedRexport").withRepeat,
    withSequence: require("ReanimatedRexport").withSequence,
    withTiming: require("timing").withTiming,
    STANDARD_EASING: require("native").STANDARD_EASING,
    FADE_LAYOUT_ANIMATION_DURATION: duration,
  };
  A.__closure = obj;
  A.__workletHash = 9750536800906;
  A.__initData = __initData;
  return require("ReanimatedRexport").useAnimatedStyle(A);
};
