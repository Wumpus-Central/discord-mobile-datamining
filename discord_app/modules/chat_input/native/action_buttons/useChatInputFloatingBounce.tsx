// === Module 11750: useChatInputFloatingBounce ===

// Module 11750 (useChatInputFloatingBounce)
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import TextAreaCta from "TextAreaCta" /* 11472 */;

const require = arg1;
({ CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG: c4, CHAT_INPUT_FLOATING_COLLAPSED_SCALE: c5, CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG: closure_6, CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG: error } = TextAreaCta);
let closure_8 = { code: "function useChatInputFloatingBounceTsx1(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}" };
let closure_9 = { code: "function useChatInputFloatingBounceTsx2(finished){const{runOnJS,handleExitFinished}=this.__closure;if(finished===true){runOnJS(handleExitFinished)();}}" };
let closure_10 = { code: "function useChatInputFloatingBounceTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let result = require("set").fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx");

export default function useChatInputFloatingBounce(visible) {
  visible = visible.visible;
  let initiallyVisible = visible.initiallyVisible;
  if (initiallyVisible === undefined) {
    initiallyVisible = visible;
  }
  let num = visible.enterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  const onExitComplete = visible.onExitComplete;
  let flag = visible.interactiveDuringEnter;
  if (flag === undefined) {
    flag = false;
  }
  let sharedValue;
  let sharedValue1;
  closure_5 = undefined;
  closure_6 = undefined;
  let obj = visible(num[3]);
  let num2 = 0;
  if (initiallyVisible) {
    num2 = 1;
  }
  sharedValue = obj.useSharedValue(num2);
  let tmpResult = tmp(tmp2[3]);
  let num3 = 1;
  if (!initiallyVisible) {
    num3 = closure_5;
  }
  sharedValue1 = tmpResult.useSharedValue(num3);
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
  let items = [onExitComplete];
  const effect = obj3.useEffect(() => {
    closure_6.current = onExitComplete;
  }, items);
  const items1 = [visible, num, sharedValue, sharedValue1];
  const effect1 = obj3.useEffect(() => {
    function handleExitFinished(arg0) {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    }
    if (handleExitFinished) {
      const obj4 = visible(num[4]);
      class I {
        constructor(arg0) {
          if (true === arg0) {
            tmp = handleExitFinished;
            tmp2 = closure_1_1;
            obj = handleExitFinished(closure_1_1[3]);
            tmp3 = closure_5;
            tmp4 = obj.runOnJS(closure_5)(true);
          }
          return;
        }
      }
      let obj = { runOnJS: null, setEnterFinished: null };
      obj[0] = visible(num[3]).runOnJS;
      obj[1] = closure_5;
      I.__closure = obj;
      I.__workletHash = 9490441890617;
      I.__initData = closure_1_8;
      const withTimingResult = obj4.withTiming(1, closure_6, "respect-motion-settings", I);
      let withDelayResult = withTimingResult;
      if (num > 0) {
        withDelayResult = visible(num[3]).withDelay(tmp28, withTimingResult);
        const obj6 = visible(num[3]);
      }
      const result = sharedValue.set(withDelayResult);
      const withSpringResult = visible(num[5]).withSpring(1, sharedValue1, "respect-motion-settings");
      let withDelayResult1 = withSpringResult;
      if (num > 0) {
        withDelayResult1 = visible(num[3]).withDelay(tmp28, withSpringResult);
        const obj8 = visible(num[3]);
      }
      const result1 = sharedValue1.set(withDelayResult1);
      const obj7 = visible(num[5]);
    } else {
      class I {
        constructor(arg0) {
          if (true === arg0) {
            tmp = handleExitFinished;
            tmp2 = closure_1_1;
            obj = handleExitFinished(closure_1_1[3]);
            tmp3 = closure_5;
            tmp4 = obj.runOnJS(closure_5)(true);
          }
          return;
        }
      }
      const fn = function f(arg0) {
        if (true === arg0) {
          visible(num[3]).runOnJS(handleExitFinished)();
          const obj = visible(num[3]);
        }
      };
      obj = { runOnJS: null, handleExitFinished: null };
      obj[0] = visible(num[3]).runOnJS;
      obj[1] = handleExitFinished;
      fn.__closure = obj;
      fn.__workletHash = 6186469155404;
      fn.__initData = closure_1_9;
      const result2 = sharedValue.set(obj.withTiming(0, closure_1_7, "respect-motion-settings", fn));
      const result3 = sharedValue1.set(visible(6186469155404[4]).withTiming(closure_5, closure_1_7, "respect-motion-settings"));
      const obj3 = visible(6186469155404[4]);
    }
  }, items1);
  obj = { animatedStyle: null, isInteractive: null };
  tmpResult = tmp(tmp2[3]);
  class J {
    constructor() {
      obj = { opacity: closure_3.get(), transform: null };
      obj = { scale: closure_4.get() };
      items = [];
      items[0] = obj;
      obj[1] = items;
      return obj;
    }
  }
  J.__closure = { opacity: sharedValue, scale: sharedValue1 };
  J.__workletHash = 8631256891065;
  J.__initData = closure_10;
  obj[0] = tmpResult.useAnimatedStyle(J);
  obj[1] = tmp10;
  return obj;
};