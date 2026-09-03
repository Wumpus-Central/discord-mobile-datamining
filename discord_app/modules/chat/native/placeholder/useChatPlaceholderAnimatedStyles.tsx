// === Module 12413: useChatPlaceholderAnimatedStyles ===

// Module 12413 (useChatPlaceholderAnimatedStyles)
import closure_2 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;

const require = arg1;
let obj = { duration: 1300, easing: require("Button").STANDARD_EASING };
let closure_4 = { code: "function useChatPlaceholderAnimatedStylesTsx1(){const{visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG}=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};}" };
const result = require("set").fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default function useChatPlaceholderAnimatedStyles(visible) {
  visible = visible.visible;
  const animated = visible.animated;
  let stateFromStores;
  obj = visible(animated[2]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores.useReducedMotion);
  const fn = function c() {
    if (visible) {
      if (animated) {
        if (!stateFromStores) {
          obj = { opacity: null };
          const obj2 = visible(animated[3]);
          const obj3 = visible(animated[3]);
          const obj4 = visible(animated[4]);
          const withTimingResult = visible(animated[4]).withTiming(0.3, visible(animated[5]).timingNone);
          const obj5 = visible(animated[4]);
          const withTimingResult1 = visible(animated[4]).withTiming(0.7, closure_1_3);
          obj[0] = obj2.withRepeat(obj3.withSequence(withTimingResult, withTimingResult1, visible(animated[4]).withTiming(0.3, closure_1_3)), -1);
          const obj6 = visible(animated[4]);
        }
      }
      obj = { opacity: 0.7 };
    } else {
      return { opacity: 0 };
    }
  };
  obj = { visible, animated, useReducedMotion: stateFromStores, withRepeat: visible(animated[3]).withRepeat, withSequence: visible(animated[3]).withSequence, withTiming: visible(animated[4]).withTiming, timingNone: visible(animated[5]).timingNone, TIMING_CONFIG: obj };
  fn.__closure = obj;
  fn.__workletHash = 3375288363194;
  fn.__initData = closure_4;
  return visible(animated[3]).useAnimatedStyle(fn);
};