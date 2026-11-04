// === Module 14427: useChatPlaceholderAnimatedStyles ===

// Module 14427 (useChatPlaceholderAnimatedStyles)
import initialize from "initialize" /* 504 */;
import _mod1652 from "module_1652" /* 1652 */;
import timing_timing from "timing/timing" /* 5378 */;
import timingPresets from "timingPresets" /* 5381 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

require = fn;
let obj = { duration: 1300, easing: fn(1187).STANDARD_EASING };
let closure_4 = { code: "(function useChatPlaceholderAnimatedStylesTsx1(){let[visible,animated,useReducedMotion,withRepeat,withSequence,withTiming,timingNone,TIMING_CONFIG]=this.__closure;if(!visible){return{opacity:0};}else if(!animated||useReducedMotion){return{opacity:0.7};}return{opacity:withRepeat(withSequence(withTiming(0.3,timingNone),withTiming(0.7,TIMING_CONFIG),withTiming(0.3,TIMING_CONFIG)),-1)};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx");

export default function useChatPlaceholderAnimatedStyles(arg0) {
  ({ visible, animated } = arg0);
  obj = initialize;
  items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => _undefined.useReducedMotion);
  const items1 = [_undefined3, visible, animated, stateFromStores, _mod1652.withRepeat, _mod1652.withSequence, timing_timing.withTiming, timingPresets.timingNone, obj];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  c5 = undefined;
  c6 = undefined;
  c7 = undefined;
  [tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10] = items1;
  function useChatPlaceholderAnimatedStylesTsx1() {
    if (c0) {
      if (c1) {
        if (!c2) {
          obj = { opacity: null };
          const tmp7 = _undefined4(0.3, c6);
          obj.opacity = _undefined2(_undefined3(tmp7, _undefined4(0.7, c7), _undefined4(0.3, c7)), -1);
          const tmp9 = _undefined4(0.7, c7);
        }
      }
      obj = { opacity: 0.7 };
    } else {
      return { opacity: 0 };
    }
  }
  const items2 = [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10];
  useChatPlaceholderAnimatedStylesTsx1.__closure = items2;
  useChatPlaceholderAnimatedStylesTsx1.__workletHash = 17414638142691;
  useChatPlaceholderAnimatedStylesTsx1.__initData = tmp2;
  return _mod1652.useAnimatedStyle(useChatPlaceholderAnimatedStylesTsx1);
};