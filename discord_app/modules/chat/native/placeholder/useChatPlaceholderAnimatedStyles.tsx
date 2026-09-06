// discord_app/modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
let obj = { duration: 1300, easing: fn(1178).STANDARD_EASING };
const __initData = {
  code: "function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default function useChatPlaceholderAnimatedStyles(visible) {
  visible = visible.visible;
  const animated = visible.animated;
  let stateFromStores;
  let __closure = visible(animated[2]);
  const items = [stateFromStores];
  stateFromStores = __closure.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  const fn = function c() {
    if (visible) {
      if (animated) {
        if (!stateFromStores) {
          obj = { opacity: null };
          const obj2 = ReanimatedRexport;
          const obj3 = ReanimatedRexport;
          const withTimingResult = timing.withTiming(0.3, timingPresets.timingNone);
          const withTimingResult1 = timing.withTiming(0.7, obj);
          obj.opacity = obj2.withRepeat(
            obj3.withSequence(withTimingResult, withTimingResult1, timing.withTiming(0.3, obj)),
            -1,
          );
        }
      }
      obj = { opacity: 0.7 };
    } else {
      return { opacity: 0 };
    }
  };
  __closure = {
    visible,
    animated,
    useReducedMotion: stateFromStores,
    withRepeat: visible(animated[3]).withRepeat,
    withSequence: visible(animated[3]).withSequence,
    withTiming: visible(animated[4]).withTiming,
    timingNone: visible(animated[5]).timingNone,
    TIMING_CONFIG: __closure,
  };
  fn.__closure = __closure;
  fn.__workletHash = 3375288363194;
  fn.__initData = __initData;
  return visible(animated[3]).useAnimatedStyle(fn);
}
