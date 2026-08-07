// discord_app/modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx
import noop from "noop";
import { CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG as closure_3 } from "TextAreaCta";

const require = arg1;
let closure_4 = { code: "function useChatInputFloatingWidthTsx1(){const{collapsedWidth,expandedWidth,progress}=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};}" };
let result = require("module_4162").fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default function useChatInputFloatingWidth(expanded) {
  expanded = expanded.expanded;
  const collapsedWidth = expanded.collapsedWidth;
  const expandedWidth = expanded.expandedWidth;
  let num = expanded.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  let sharedValue;
  let obj = expanded(collapsedWidth[2]);
  let num2 = 0;
  if (expanded) {
    num2 = 1;
  }
  sharedValue = obj.useSharedValue(num2);
  const items = [expanded, num, sharedValue];
  const effect = expandedWidth.useEffect(() => {
    if (expanded) {
      if (0 > 0) {
        const obj2 = expanded(collapsedWidth[2]);
        const result = sharedValue.set(obj2.withDelay(tmp2, expanded(collapsedWidth[3]).withTiming(1, num, "respect-motion-settings")));
        const obj3 = expanded(collapsedWidth[3]);
      }
    }
    let num2 = 0;
    if (expanded) {
      num2 = 1;
    }
    const result1 = sharedValue.set(expanded(collapsedWidth[3]).withTiming(num2, num, "respect-motion-settings"));
  }, items);
  obj = { animatedStyle: null };
  const fn = function p() {
    const diff = expandedWidth - collapsedWidth;
    return { width: collapsedWidth + diff * sharedValue.get() };
  };
  fn.__closure = { collapsedWidth, expandedWidth, progress: sharedValue };
  fn.__workletHash = 2289574047387;
  fn.__initData = sharedValue;
  obj[0] = expanded(collapsedWidth[2]).useAnimatedStyle(fn);
  return obj;
};