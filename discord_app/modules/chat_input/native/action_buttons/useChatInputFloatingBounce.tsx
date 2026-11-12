// === Module 13700: useChatInputFloatingBounce ===

// Module 13700 (useChatInputFloatingBounce)
import _mod1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import timing_timing from "timing/timing" /* 5485 */;
import spring_spring from "spring/spring" /* 5876 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ChatInputConstants = fn(13699);
({ CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG: closure_4, CHAT_INPUT_FLOATING_COLLAPSED_SCALE: hasOwnProperty, CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG: closure_6, CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG: metroImportDefault } = ChatInputConstants);
let closure_8 = { code: "(function useChatInputFloatingBounceTsx1(finished){let[scheduleOnRN,setEnterFinished]=this.__closure;if(finished===true){scheduleOnRN(setEnterFinished,true);}})" };
let closure_9 = { code: "(function useChatInputFloatingBounceTsx2(finished){let[scheduleOnRN,handleExitFinished]=this.__closure;if(finished===true){scheduleOnRN(handleExitFinished);}})" };
let closure_10 = { code: "(function useChatInputFloatingBounceTsx3(){let[opacity,scale]=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx");

export default function useChatInputFloatingBounce(visible) {
  visible = visible.visible;
  _require = visible;
  let initiallyVisible = visible.initiallyVisible;
  if (initiallyVisible === undefined) {
    initiallyVisible = visible;
  }
  let num = visible.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  dependencyMap = num;
  const onExitComplete = visible.onExitComplete;
  let flag = visible.interactiveDuringEnter;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  let sharedValue1;
  closure_5 = undefined;
  closure_6 = undefined;
  let num2 = 0;
  if (initiallyVisible) {
    num2 = 1;
  }
  sharedValue = require("module_1652").useSharedValue(num2);
  let obj = require("module_1652");
  let num3 = 1;
  if (!initiallyVisible) {
    num3 = closure_5;
  }
  sharedValue1 = require("module_1652").useSharedValue(num3);
  const tmp5 = onExitComplete(sharedValue.useState(initiallyVisible), 2);
  closure_5 = tmp6;
  const tmp7 = onExitComplete(sharedValue.useState(visible), 2);
  if (visible !== tmp7[0]) {
    tmp7[1](visible);
    if (!visible) {
      tmp6(false);
    }
  }
  let tmp10 = visible;
  if (!flag) {
    let first = visible;
    if (visible) {
      first = tmp5[0];
    }
    tmp10 = first;
  }
  closure_6 = obj3.useRef(onExitComplete);
  items = [onExitComplete];
  const effect = obj3.useEffect(() => {
    closure_6.current = onExitComplete;
  }, items);
  let items1 = [visible, num, sharedValue, sharedValue1];
  const effect1 = obj3.useEffect(() => {
    if (c0) {
      const obj3 = timing_timing;
      items = [closure_8, _mod1705.scheduleOnRN, closure_5];
      c0 = undefined;
      c1 = undefined;
      [tmp29, tmp30, tmp31] = items;
      function useChatInputFloatingBounceTsx1(arg0) {
        if (true === arg0) {
          _undefined(c1, true);
        }
      }
      const items1 = [tmp30, tmp31];
      useChatInputFloatingBounceTsx1.__closure = items1;
      useChatInputFloatingBounceTsx1.__workletHash = 11139071316621;
      useChatInputFloatingBounceTsx1.__initData = tmp29;
      const withTimingResult = obj3.withTiming(1, timestampProducer, "respect-motion-settings", useChatInputFloatingBounceTsx1);
      let withDelayResult = withTimingResult;
      if (c1 > 0) {
        withDelayResult = _mod1652.withDelay(tmp37, withTimingResult);
      }
      const result = sharedValue.set(withDelayResult);
      const withSpringResult = spring_spring.withSpring(1, React4, "respect-motion-settings");
      let withDelayResult1 = withSpringResult;
      if (c1 > 0) {
        withDelayResult1 = _mod1652.withDelay(tmp37, withSpringResult);
      }
      const result1 = sharedValue1.set(withDelayResult1);
    } else {
      const obj = timing_timing;
      const items2 = [
        closure_9,
        _mod1705.scheduleOnRN,
        function handleExitFinished() {
            const current = ref.current;
            let currentResult;
            if (current != null) {
              currentResult = current();
            }
            return currentResult;
          }
      ];
      c0 = undefined;
      c1 = undefined;
      [tmp9, tmp10, tmp11] = items2;
      function useChatInputFloatingBounceTsx2(arg0) {
        if (true === arg0) {
          _undefined(c1);
        }
      }
      const items3 = [tmp10, tmp11];
      useChatInputFloatingBounceTsx2.__closure = items3;
      useChatInputFloatingBounceTsx2.__workletHash = 14048912962804;
      useChatInputFloatingBounceTsx2.__initData = tmp9;
      const result2 = sharedValue.set(obj.withTiming(0, metroImportDefault, "respect-motion-settings", useChatInputFloatingBounceTsx2));
      const result3 = sharedValue1.set(timing_timing.withTiming(hasOwnProperty, metroImportDefault, "respect-motion-settings"));
    }
  }, items1);
  const tmpResult = require("module_1652");
  let items2 = [closure_10, sharedValue, sharedValue1];
  _require = undefined;
  dependencyMap = undefined;
  [tmp14, tmp15, tmp16] = items2;
  function useChatInputFloatingBounceTsx3() {
    const obj = { opacity: _undefined.get(), transform: null };
    items = [{ scale: _undefined2.get() }];
    obj.transform = items;
    return obj;
  }
  let items3 = [tmp15, tmp16];
  useChatInputFloatingBounceTsx3.__closure = items3;
  useChatInputFloatingBounceTsx3.__workletHash = 19796400512;
  useChatInputFloatingBounceTsx3.__initData = tmp14;
  const tmpResult2 = require("module_1652");
  return { animatedStyle: require("module_1652").useAnimatedStyle(useChatInputFloatingBounceTsx3), isInteractive: tmp10 };
};