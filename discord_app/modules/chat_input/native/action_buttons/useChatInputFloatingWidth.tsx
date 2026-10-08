// === Module 11976: useChatInputFloatingWidth ===

// Module 11976 (useChatInputFloatingWidth)
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import timing from "timing" /* 5091 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(11652).CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG;
let closure_4 = { code: "function useChatInputFloatingWidthTsx1(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}" };
const __initData = { code: "function useChatInputFloatingWidthTsx2(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useChatInputFloatingWidth(expanded) {
  const cResult = expanded(collapsedWidth[3]).c(7);
  expanded = expanded.expanded;
  collapsedWidth = expanded.collapsedWidth;
  const expandedWidth = expanded.expandedWidth;
  const enterDelayMs = expanded.enterDelayMs;
  let num = 0;
  if (undefined !== enterDelayMs) {
    num = enterDelayMs;
  }
  let obj = expanded(collapsedWidth[3]);
  let num2 = 0;
  if (expanded) {
    num2 = 1;
  }
  const sharedValue = expanded(collapsedWidth[4]).useSharedValue(num2);
  if (cResult[0] === num) {
    if (cResult[1] === expanded) {
      if (cResult[2] === sharedValue) {
        let tmp5 = cResult[3];
        let tmp6 = cResult[4];
      }
      const effect = expandedWidth.useEffect(tmp5, tmp6);
      const fn2 = function w() {
        const obj = { width: null };
        const diff = expandedWidth - collapsedWidth;
        obj.width = collapsedWidth + diff * sharedValue.get();
        return obj;
      };
      let obj2 = { collapsedWidth, expandedWidth, progress: sharedValue };
      fn2.__closure = obj2;
      fn2.__workletHash = 2289574047387;
      fn2.__initData = sharedValue;
      const animatedStyle = tmp(tmp2[4]).useAnimatedStyle(fn2);
      if (cResult[5] !== animatedStyle) {
        let obj3 = { animatedStyle };
        cResult[5] = animatedStyle;
        cResult[6] = obj3;
        let tmp11 = obj3;
      } else {
        tmp11 = cResult[6];
      }
      return tmp11;
    }
  }
  const fn = function l() {
    if (expanded) {
      if (0 > 0) {
        const obj2 = ReanimatedRexport;
        const result = sharedValue.set(obj2.withDelay(tmp2, timing.withTiming(1, closure_3, "respect-motion-settings")));
      }
    }
    let num2 = 0;
    if (expanded) {
      num2 = 1;
    }
    const result1 = sharedValue.set(timing.withTiming(num2, closure_3, "respect-motion-settings"));
  };
  const items = [expanded, num, sharedValue];
  cResult[0] = num;
  cResult[1] = expanded;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  cResult[4] = items;
  tmp6 = items;
  tmp5 = fn;
}) : (function useChatInputFloatingWidth(expanded) {
  expanded = expanded.expanded;
  const collapsedWidth = expanded.collapsedWidth;
  const expandedWidth = expanded.expandedWidth;
  let num = expanded.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  let num2 = 0;
  if (expanded) {
    num2 = 1;
  }
  sharedValue = expanded(collapsedWidth[4]).useSharedValue(num2);
  const items = [expanded, num, sharedValue];
  const effect = expandedWidth.useEffect(() => {
    if (expanded) {
      if (0 > 0) {
        const obj2 = ReanimatedRexport;
        const result = sharedValue.set(obj2.withDelay(tmp2, timing.withTiming(1, closure_3, "respect-motion-settings")));
      }
    }
    let num2 = 0;
    if (expanded) {
      num2 = 1;
    }
    const result1 = sharedValue.set(timing.withTiming(num2, closure_3, "respect-motion-settings"));
  }, items);
  let obj2 = { animatedStyle: null };
  let obj = expanded(collapsedWidth[4]);
  const fn = function u() {
    const obj = { width: null };
    const diff = expandedWidth - collapsedWidth;
    obj.width = collapsedWidth + diff * sharedValue.get();
    return obj;
  };
  fn.__closure = { collapsedWidth, expandedWidth, progress: sharedValue };
  fn.__workletHash = 11629489974776;
  fn.__initData = __initData;
  obj2.animatedStyle = expanded(collapsedWidth[4]).useAnimatedStyle(fn);
  return obj2;
});