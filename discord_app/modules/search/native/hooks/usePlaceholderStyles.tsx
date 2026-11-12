// discord_app/modules/search/native/hooks/usePlaceholderStyles.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import native from "../../../../design/void/native.tsx";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import _mod1652 from "../../../../../_runtime/metro/01652__.js";
import timing_timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
let closure_4 = fn(8999).FADE_LAYOUT_ANIMATION_DURATION;
let closure_5 = {
  code: "(function usePlaceholderStylesTsx1(){let[useReducedMotion,visible,withRepeat,withSequence,withTiming,STANDARD_EASING,FADE_LAYOUT_ANIMATION_DURATION]=this.__closure;if(useReducedMotion){return{opacity:visible?1:0};}if(visible){return{opacity:withRepeat(withSequence(withTiming(0.5,{duration:0}),withTiming(1,{duration:1300,easing:STANDARD_EASING}),withTiming(0.5,{duration:1300,easing:STANDARD_EASING})),-1)};}return{opacity:withTiming(0,{duration:FADE_LAYOUT_ANIMATION_DURATION})};})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/hooks/usePlaceholderStyles.tsx");

export function useFullscreenPlaceholderCount(arg0) {
  ({ placeholderHeight, numColumns } = arg0);
  return Math.ceil(useWindowDimensionsDefault({ ignoreKeyboard: true }).height / placeholderHeight) * numColumns;
}
export function usePlaceholderAnimatedStyle(visible) {
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => _undefined2.useReducedMotion);
  const items1 = [
    easing,
    stateFromStores,
    visible,
    _mod1652.withRepeat,
    _mod1652.withSequence,
    timing_timing.withTiming,
    native.STANDARD_EASING,
    _undefined3,
  ];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9] = items1;
  function usePlaceholderStylesTsx1() {
    const obj = { opacity: null };
    if (c0) {
      let num5 = 0;
      if (c1) {
        num5 = 1;
      }
      obj.opacity = num5;
      let tmp4 = obj;
    } else if (c1) {
      const obj2 = { duration: 1300, easing };
      const obj3 = { duration: 1300, easing };
      const tmp8 = _undefined3(0.5, { duration: 0 });
      obj.opacity = _undefined(_undefined2(tmp8, _undefined3(1, obj2), _undefined3(0.5, obj3)), -1);
      tmp4 = obj;
      const tmp10 = _undefined3(1, obj2);
    } else {
      const obj4 = { duration };
      obj.opacity = _undefined3(0, obj4);
      tmp4 = obj;
    }
    return tmp4;
  }
  const items2 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9];
  usePlaceholderStylesTsx1.__closure = items2;
  usePlaceholderStylesTsx1.__workletHash = 3033147489043;
  usePlaceholderStylesTsx1.__initData = tmp2;
  return _mod1652.useAnimatedStyle(usePlaceholderStylesTsx1);
}
