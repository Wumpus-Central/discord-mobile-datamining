// === Module 14666: useChatInputFloatingWidth ===

// Module 14666 (useChatInputFloatingWidth)
import _mod1655 from "module_1655" /* 1655 */;
import timing_timing from "timing/timing" /* 5548 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = fn(13804).CHAT_INPUT_FLOATING_SLIDE_TIMING_CONFIG;
let closure_4 = { code: "(function useChatInputFloatingWidthTsx1(){let[collapsedWidth,expandedWidth,progress]=this.__closure;return{width:collapsedWidth+(expandedWidth-collapsedWidth)*progress.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingWidth.tsx");

export default function useChatInputFloatingWidth(expanded) {
  expanded = expanded.expanded;
  _require = expanded;
  let num = expanded.enterDelayMs;
  ({ collapsedWidth, expandedWidth } = expanded);
  if (num === undefined) {
    num = 0;
  }
  dependencyMap = num;
  noop = undefined;
  let num2 = 0;
  if (expanded) {
    num2 = 1;
  }
  const sharedValue = require("module_1655").useSharedValue(num2);
  noop = sharedValue;
  items = [expanded, num, sharedValue];
  const effect = noop.useEffect(() => {
    if (c0) {
      if (c1 > 0) {
        const obj2 = _mod1655;
        const result = _undefined.set(obj2.withDelay(tmp2, timing_timing.withTiming(1, closure_3, "respect-motion-settings")));
      }
    }
    let num2 = 0;
    if (c0) {
      num2 = 1;
    }
    const result1 = _undefined.set(timing_timing.withTiming(num2, closure_3, "respect-motion-settings"));
  }, items);
  let obj = require("module_1655");
  const items1 = [closure_4, collapsedWidth, expandedWidth, sharedValue];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items1;
  function useChatInputFloatingWidthTsx1() {
    const obj = { width: null };
    const diff = c1 - c0;
    obj.width = c0 + diff * _undefined.get();
    return obj;
  }
  const items2 = [tmp6, tmp7, tmp8];
  useChatInputFloatingWidthTsx1.__closure = items2;
  useChatInputFloatingWidthTsx1.__workletHash = 7676837604130;
  useChatInputFloatingWidthTsx1.__initData = tmp5;
  const tmpResult = require("module_1655");
  return { animatedStyle: require("module_1655").useAnimatedStyle(useChatInputFloatingWidthTsx1) };
};