// === Module 11877: useChatInputFloatingBounce ===

// Module 11877 (useChatInputFloatingBounce)
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ChatInputConstants = fn(11576);
({ CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG: closure_4, CHAT_INPUT_FLOATING_COLLAPSED_SCALE: hasOwnProperty, CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG: metroRequire, CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG: closure_7 } = ChatInputConstants);
const __initData = { code: "function useChatInputFloatingBounceTsx1(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}" };
const __initData2 = { code: "function useChatInputFloatingBounceTsx2(finished_0){const{runOnJS,handleExitFinished}=this.__closure;if(finished_0===true){runOnJS(handleExitFinished)();}}" };
let closure_10 = { code: "function useChatInputFloatingBounceTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
let closure_11 = { code: "function useChatInputFloatingBounceTsx4(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}" };
let closure_12 = { code: "function useChatInputFloatingBounceTsx5(finished_0){const{runOnJS,handleExitFinished}=this.__closure;if(finished_0===true){runOnJS(handleExitFinished)();}}" };
const __initData3 = { code: "function useChatInputFloatingBounceTsx6(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((visible) => {
  const cResult = visible(onExitComplete[4]).c(12);
  visible = visible.visible;
  ({ initiallyVisible, enterDelayMs, onExitComplete } = visible);
  const interactiveDuringEnter = visible.interactiveDuringEnter;
  if (undefined === initiallyVisible) {
    initiallyVisible = visible;
  }
  let num = 0;
  if (undefined !== enterDelayMs) {
    num = enterDelayMs;
  }
  let obj = visible(onExitComplete[4]);
  const tmp4 = undefined !== interactiveDuringEnter && interactiveDuringEnter;
  let num2 = 0;
  if (initiallyVisible) {
    num2 = 1;
  }
  const sharedValue = visible(onExitComplete[5]).useSharedValue(num2);
  const tmpResult = visible(onExitComplete[5]);
  let num3 = 1;
  if (!initiallyVisible) {
    num3 = setEnterFinished;
  }
  const sharedValue1 = visible(onExitComplete[5]).useSharedValue(num3);
  const tmp7 = num(sharedValue.useState(initiallyVisible), 2);
  setEnterFinished = tmp8;
  const tmp9 = num(sharedValue.useState(visible), 2);
  if (visible !== tmp9[0]) {
    tmp9[1](visible);
    if (!visible) {
      tmp8(false);
    }
  }
  if (!tmp4) {
    let first = visible;
    if (visible) {
      first = tmp7[0];
    }
  }
  closure_6 = obj4.useRef(onExitComplete);
  if (cResult[0] !== onExitComplete) {
    class P {
      constructor() {
        closure_6.current = onExitComplete;
        return;
      }
    }
    let items = [onExitComplete];
    cResult[0] = onExitComplete;
    cResult[1] = P;
    cResult[2] = items;
    let tmp15 = items;
  } else {
    class P {
      constructor() {
        closure_6.current = onExitComplete;
        return;
      }
    }
    tmp15 = cResult[2];
  }
  const effect = obj4.useEffect(P, tmp15);
  if (cResult[3] === num) {
    class P {
      constructor() {
        closure_6.current = onExitComplete;
        return;
      }
    }
  }
  class L {
    constructor() {
      handleExitFinished = function handleExitFinished() { ... };
      if (handleExitFinished) {
        tmp17 = visible;
        tmp18 = onExitComplete;
        obj4 = visible(onExitComplete[6]);
        tmp19 = closure_6;
        fn2 = function n() { ... };
        obj1 = { runOnJS: null, setEnterFinished: null };
        tmp20 = visible;
        tmp21 = onExitComplete;
        obj1.runOnJS = visible(onExitComplete[5]).runOnJS;
        tmp22 = closure_5;
        obj1.setEnterFinished = closure_5;
        fn2.__closure = obj1;
        num3 = 9490441890617;
        fn2.__workletHash = 9490441890617;
        tmp23 = closure_1_8;
        fn2.__initData = closure_1_8;
        str3 = "respect-motion-settings";
        num4 = 1;
        tmp24 = obj4;
        num5 = 1;
        str4 = "respect-motion-settings";
        tmp25 = fn2;
        withTimingResult = obj4.withTiming(1, closure_6, "respect-motion-settings", fn2);
        tmp28 = enterDelayMs;
        num6 = 0;
        withDelayResult = withTimingResult;
        tmp27 = closure_3;
        if (enterDelayMs > 0) {
          tmp30 = visible;
          tmp31 = onExitComplete;
          obj6 = visible(onExitComplete[5]);
          withDelayResult = obj6.withDelay(tmp28, withTimingResult);
        }
        result = closure_3.set(withDelayResult);
        tmp33 = visible;
        tmp34 = onExitComplete;
        obj7 = visible(onExitComplete[7]);
        tmp35 = closure_4;
        withSpringResult = obj7.withSpring(1, closure_4, "respect-motion-settings");
        withDelayResult1 = withSpringResult;
        tmp37 = closure_4;
        if (tmp28 > 0) {
          tmp39 = visible;
          tmp40 = onExitComplete;
          obj8 = visible(onExitComplete[5]);
          withDelayResult1 = obj8.withDelay(tmp28, withSpringResult);
        }
        result1 = closure_4.set(withDelayResult1);
      } else {
        tmp = closure_3;
        tmp2 = visible;
        tmp3 = onExitComplete;
        obj = visible(onExitComplete[6]);
        tmp4 = closure_1_7;
        fn = function t() { ... };
        obj9 = { runOnJS: null, handleExitFinished: null };
        tmp5 = visible;
        tmp6 = onExitComplete;
        obj9.runOnJS = visible(onExitComplete[5]).runOnJS;
        obj9.handleExitFinished = handleExitFinished;
        fn.__closure = obj9;
        num = 415624141708;
        fn.__workletHash = 415624141708;
        tmp7 = closure_1_9;
        fn.__initData = closure_1_9;
        str = "respect-motion-settings";
        num2 = 0;
        tmp8 = obj;
        tmp9 = closure_1_7;
        str2 = "respect-motion-settings";
        tmp10 = fn;
        result2 = closure_3.set(obj.withTiming(0, closure_1_7, "respect-motion-settings", fn));
        tmp12 = closure_4;
        tmp13 = visible;
        tmp14 = onExitComplete;
        obj3 = visible(onExitComplete[6]);
        tmp15 = closure_5;
        result3 = closure_4.set(obj3.withTiming(closure_5, closure_1_7, "respect-motion-settings"));
      }
      return;
    }
  }
  const items1 = [visible, num, sharedValue, sharedValue1];
  cResult[3] = num;
  cResult[4] = sharedValue;
  cResult[5] = sharedValue1;
  cResult[6] = visible;
  cResult[7] = L;
  cResult[8] = items1;
  const tmpResult2 = visible(onExitComplete[5]);
}) : ((visible) => {
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
  setEnterFinished = undefined;
  closure_6 = undefined;
  let num2 = 0;
  if (initiallyVisible) {
    num2 = 1;
  }
  sharedValue = visible(num[5]).useSharedValue(num2);
  let obj = visible(num[5]);
  let num3 = 1;
  if (!initiallyVisible) {
    num3 = setEnterFinished;
  }
  sharedValue1 = visible(num[5]).useSharedValue(num3);
  const tmp5 = onExitComplete(sharedValue.useState(initiallyVisible), 2);
  setEnterFinished = tmp6;
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
    function handleExitFinished() {
      const current = ref.current;
      let currentResult;
      if (current != null) {
        currentResult = current();
      }
      return currentResult;
    }
    if (handleExitFinished) {
      const obj4 = visible(num[6]);
      const fn2 = function f(arg0) {
        if (true === arg0) {
          visible(num[5]).runOnJS(setEnterFinished)(true);
          const obj = visible(num[5]);
        }
      };
      const obj2 = { runOnJS: visible(num[5]).runOnJS, setEnterFinished };
      fn2.__closure = obj2;
      fn2.__workletHash = 9427689669436;
      fn2.__initData = __initData;
      const withTimingResult = obj4.withTiming(1, ref, "respect-motion-settings", fn2);
      let withDelayResult = withTimingResult;
      if (num > 0) {
        withDelayResult = visible(num[5]).withDelay(tmp28, withTimingResult);
        const obj6 = visible(num[5]);
      }
      const result = sharedValue.set(withDelayResult);
      const withSpringResult = visible(num[7]).withSpring(1, sharedValue1, "respect-motion-settings");
      let withDelayResult1 = withSpringResult;
      if (num > 0) {
        withDelayResult1 = visible(num[5]).withDelay(tmp28, withSpringResult);
        const obj8 = visible(num[5]);
      }
      const result1 = sharedValue1.set(withDelayResult1);
      const obj7 = visible(num[7]);
    } else {
      let obj = visible(num[6]);
      const fn = function l(arg0) {
        if (true === arg0) {
          ReanimatedRexport.runOnJS(handleExitFinished)();
        }
      };
      const obj5 = { runOnJS: visible(num[5]).runOnJS, handleExitFinished };
      fn.__closure = obj5;
      fn.__workletHash = 7653642511115;
      fn.__initData = __initData2;
      const result2 = sharedValue.set(obj.withTiming(0, closure_1_7, "respect-motion-settings", fn));
      const result3 = sharedValue1.set(visible(7653642511115[6]).withTiming(setEnterFinished, closure_1_7, "respect-motion-settings"));
      const obj3 = visible(7653642511115[6]);
    }
  }, items1);
  let obj2 = { animatedStyle: null, isInteractive: null };
  const tmpResult = visible(num[5]);
  class D {
    constructor() {
      obj = { opacity: closure_3.get(), transform: null };
      obj1 = { scale: closure_4.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  D.__closure = { opacity: sharedValue, scale: sharedValue1 };
  D.__workletHash = 8572799637180;
  D.__initData = __initData3;
  obj2.animatedStyle = visible(num[5]).useAnimatedStyle(D);
  obj2.isInteractive = tmp10;
  return obj2;
});