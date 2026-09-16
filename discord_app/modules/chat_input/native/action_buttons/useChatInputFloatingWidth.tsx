// === Module 12401: useChatInputFloatingWidth ===

// Module 12401 (useChatInputFloatingWidth)
import ReanimatedRexport from "ReanimatedRexport" /* 4374 */;
import timing from "timing" /* 4639 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(12104).CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG;
let closure_4 = { code: "function useChatInputFloatingWidthTsx1(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default function useChatInputFloatingWidth(expanded) {
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
  sharedValue = expanded(collapsedWidth[2]).useSharedValue(num2);
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
  let obj = expanded(collapsedWidth[2]);
  const fn = function p() {
    const obj = { width: null };
    const diff = expandedWidth - collapsedWidth;
    obj.width = collapsedWidth + diff * sharedValue.get();
    return obj;
  };
  fn.__closure = { collapsedWidth, expandedWidth, progress: sharedValue };
  fn.__workletHash = 2289574047387;
  fn.__initData = sharedValue;
  obj2.animatedStyle = expanded(collapsedWidth[2]).useAnimatedStyle(fn);
  return obj2;
};