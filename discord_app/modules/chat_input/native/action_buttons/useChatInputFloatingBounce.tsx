// discord_app/modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ChatInputConstants from "../ChatInputConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let num4,
  num5,
  num6,
  obj1,
  set,
  set2,
  set2Result,
  set3,
  set3Result,
  set4,
  set4Result,
  str,
  str2,
  str3,
  str4,
  tmp11,
  tmp14,
  tmp15,
  tmp16,
  tmp17,
  tmp19,
  tmp2,
  tmp20,
  tmp22,
  tmp23,
  tmp24,
  tmp25,
  tmp26,
  tmp27,
  tmp28,
  tmp30,
  tmp31,
  tmp33,
  tmp34,
  tmp36,
  tmp37,
  tmp38,
  tmp40,
  tmp42,
  tmp43,
  tmp6,
  tmp8,
  visible;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({
  CHAT_INPUT_FLOATING_BOUNCE_SPRING_CONFIG: closure_4,
  CHAT_INPUT_FLOATING_COLLAPSED_SCALE: hasOwnProperty,
  CHAT_INPUT_FLOATING_ENTER_OPACITY_TIMING_CONFIG: metroRequire,
  CHAT_INPUT_FLOATING_EXIT_TIMING_CONFIG: metroImportDefault,
} = ChatInputConstants);
const __initData = {
  code: "function useChatInputFloatingBounceTsx1(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}",
};
const __initData2 = {
  code: "function useChatInputFloatingBounceTsx2(finished_0){const{runOnJS,handleExitFinished}=this.__closure;if(finished_0===true){runOnJS(handleExitFinished)();}}",
};
let closure_10 = {
  code: "function useChatInputFloatingBounceTsx3(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}",
};
let closure_11 = {
  code: "function useChatInputFloatingBounceTsx4(finished){const{runOnJS,setEnterFinished}=this.__closure;if(finished===true){runOnJS(setEnterFinished)(true);}}",
};
let closure_12 = {
  code: "function useChatInputFloatingBounceTsx5(finished_0){const{runOnJS,handleExitFinished}=this.__closure;if(finished_0===true){runOnJS(handleExitFinished)();}}",
};
const __initData3 = {
  code: "function useChatInputFloatingBounceTsx6(){const{opacity,scale}=this.__closure;return{opacity:opacity.get(),transform:[{scale:scale.get()}]};}",
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      let enterDelayMs;
      let initiallyVisible;
      let onExitComplete;
      let tmp18;
      let tmp = visible;
      let obj = visible(onExitComplete[4]);
      const cResult = obj.c(12);
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
      let num2 = 0;
      const tmp4 = undefined !== interactiveDuringEnter && interactiveDuringEnter;
      const useSharedValue = tmp(onExitComplete[5]).useSharedValue;
      tmp(onExitComplete[5]);
      if (initiallyVisible) {
        num2 = 1;
      }
      const sharedValue = useSharedValue(num2);
      let num3 = 1;
      const useSharedValue2 = tmp(onExitComplete[5]).useSharedValue;
      tmp(onExitComplete[5]);
      if (!initiallyVisible) {
        num3 = setEnterFinished;
      }
      const sharedValue2 = useSharedValue2(num3);
      let obj2 = sharedValue;
      const tmp9 = num(sharedValue.useState(initiallyVisible), 2);
      setEnterFinished = tmp11;
      const first = tmp9[0];
      const tmp12 = num(sharedValue.useState(visible), 2);
      if (visible !== tmp12[0]) {
        tmp12[1](visible);
        if (!visible) {
          tmp9[1](false);
        }
      }
      let closure_6 = obj2.useRef(onExitComplete);
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
        tmp18 = items;
      } else {
        class P {
          constructor() {
            closure_6.current = onExitComplete;
            return;
          }
        }
        tmp18 = cResult[2];
      }
      const effect = obj2.useEffect(P, tmp18);
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
          handleExitFinished = function handleExitFinished() {
            /* body not rendered: F141916 */
          };
          tmp = handleExitFinished;
          if (tmp) {
            tmp19 = visible;
            tmp20 = onExitComplete;
            tmp21 = visible(onExitComplete[6]);
            tmp22 = closure_6;
            fn2 = function n() {
              /* body not rendered: F141917 */
            };
            obj1 = { runOnJS: null, setEnterFinished: null };
            tmp23 = visible;
            tmp24 = onExitComplete;
            withTiming2 = tmp21.withTiming;
            obj1.runOnJS = visible(onExitComplete[5]).runOnJS;
            tmp25 = closure_5;
            obj1.setEnterFinished = closure_5;
            fn2.__closure = obj1;
            num3 = 9490441890617;
            fn2.__workletHash = 9490441890617;
            tmp26 = closure_1_8;
            fn2.__initData = closure_1_8;
            str3 = "respect-motion-settings";
            num4 = 1;
            tmp27 = tmp21;
            num5 = 1;
            str4 = "respect-motion-settings";
            tmp28 = fn2;
            withTiming2Result = withTiming2(1, closure_6, "respect-motion-settings", fn2);
            tmp31 = enterDelayMs;
            num6 = 0;
            withDelayResult = withTiming2Result;
            tmp30 = closure_3;
            set3 = closure_3.set;
            if (enterDelayMs > 0) {
              tmp33 = visible;
              tmp34 = onExitComplete;
              obj4 = visible(onExitComplete[5]);
              withDelayResult = obj4.withDelay(tmp31, withTiming2Result);
            }
            set3Result = set3(withDelayResult);
            tmp36 = visible;
            tmp37 = onExitComplete;
            obj5 = visible(onExitComplete[7]);
            tmp38 = closure_4;
            withSpringResult = obj5.withSpring(1, closure_4, "respect-motion-settings");
            withDelayResult1 = withSpringResult;
            tmp40 = closure_4;
            set4 = closure_4.set;
            if (tmp31 > 0) {
              tmp42 = visible;
              tmp43 = onExitComplete;
              obj6 = visible(onExitComplete[5]);
              withDelayResult1 = obj6.withDelay(tmp31, withSpringResult);
            }
            set4Result = set4(withDelayResult1);
          } else {
            tmp2 = closure_3;
            tmp3 = visible;
            tmp4 = onExitComplete;
            set = closure_3.set;
            tmp5 = visible(onExitComplete[6]);
            tmp6 = closure_1_7;
            fn = function t() {
              /* body not rendered: F141918 */
            };
            obj = { runOnJS: null, handleExitFinished: null };
            tmp7 = visible;
            tmp8 = onExitComplete;
            withTiming = tmp5.withTiming;
            obj.runOnJS = visible(onExitComplete[5]).runOnJS;
            obj.handleExitFinished = handleExitFinished;
            fn.__closure = obj;
            num = 415624141708;
            fn.__workletHash = 415624141708;
            tmp9 = closure_1_9;
            fn.__initData = closure_1_9;
            str = "respect-motion-settings";
            num2 = 0;
            tmp10 = tmp5;
            tmp11 = closure_1_7;
            str2 = "respect-motion-settings";
            tmp12 = fn;
            result = set(withTiming(0, closure_1_7, "respect-motion-settings", fn));
            tmp14 = closure_4;
            tmp15 = visible;
            tmp16 = onExitComplete;
            set2 = closure_4.set;
            obj2 = visible(onExitComplete[6]);
            tmp17 = closure_5;
            set2Result = set2(obj2.withTiming(closure_5, closure_1_7, "respect-motion-settings"));
          }
          return;
        }
      }
      const items1 = [visible, num, sharedValue, sharedValue2];
      cResult[3] = num;
      cResult[4] = sharedValue;
      cResult[5] = sharedValue2;
      cResult[6] = visible;
      cResult[7] = L;
      cResult[8] = items1;
    }
  : (visible) => {
      let tmpResult2;
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
      let sharedValue2;
      setEnterFinished = undefined;
      let closure_6;
      let tmp = visible;
      let num2 = 0;
      const useSharedValue = visible(num[5]).useSharedValue;
      visible(num[5]);
      if (initiallyVisible) {
        num2 = 1;
      }
      sharedValue = useSharedValue(num2);
      let num3 = 1;
      const useSharedValue2 = tmp(num[5]).useSharedValue;
      tmp(num[5]);
      if (!initiallyVisible) {
        num3 = setEnterFinished;
      }
      sharedValue2 = useSharedValue2(num3);
      let obj = sharedValue;
      const tmp7 = onExitComplete(sharedValue.useState(initiallyVisible), 2);
      setEnterFinished = tmp9;
      const first = tmp7[0];
      const tmp10 = onExitComplete(sharedValue.useState(visible), 2);
      if (visible !== tmp10[0]) {
        tmp10[1](visible);
        if (!visible) {
          tmp7[1](false);
        }
      }
      let tmp13 = visible;
      if (!flag) {
        tmp13 = visible && first;
      }
      closure_6 = obj.useRef(onExitComplete);
      let items = [onExitComplete];
      const effect = obj.useEffect(() => {
        closure_6.current = onExitComplete;
      }, items);
      const items1 = [visible, num, sharedValue, sharedValue2];
      const effect1 = obj.useEffect(() => {
        function handleExitFinished() {
          const current = ref.current;
          let currentResult;
          if (current != null) {
            currentResult = current();
          }
          return currentResult;
        }
        const tmp = handleExitFinished;
        if (tmp) {
          const fn2 = function f(arg0) {
            if (true === arg0) {
              const obj = visible(num[5]);
              obj.runOnJS(setEnterFinished)(true);
            }
          };
          const tmp21 = visible(num[6]);
          const withTiming2 = tmp21.withTiming;
          fn2.__closure = { runOnJS: visible(num[5]).runOnJS, setEnterFinished };
          fn2.__workletHash = 9427689669436;
          fn2.__initData = __initData;
          const obj3 = { runOnJS: visible(num[5]).runOnJS, setEnterFinished };
          const withTiming2Result = withTiming2(1, ref, "respect-motion-settings", fn2);
          let withDelayResult = withTiming2Result;
          set3 = sharedValue.set;
          if (num > 0) {
            const obj4 = visible(num[5]);
            withDelayResult = obj4.withDelay(tmp31, withTiming2Result);
          }
          set3(withDelayResult);
          const obj5 = visible(num[7]);
          const withSpringResult = obj5.withSpring(1, sharedValue2, "respect-motion-settings");
          let withDelayResult1 = withSpringResult;
          set4 = sharedValue2.set;
          if (num > 0) {
            const obj6 = visible(num[5]);
            withDelayResult1 = obj6.withDelay(tmp31, withSpringResult);
          }
          set4(withDelayResult1);
        } else {
          set = sharedValue.set;
          const fn = function l(arg0) {
            if (true === arg0) {
              const obj = ReanimatedRexport;
              obj.runOnJS(handleExitFinished)();
            }
          };
          const tmp5 = visible(num[6]);
          let obj = { runOnJS: visible(num[5]).runOnJS, handleExitFinished };
          const withTiming = tmp5.withTiming;
          fn.__closure = obj;
          num = 7653642511115;
          fn.__workletHash = 7653642511115;
          fn.__initData = __initData2;
          const result = set(withTiming(0, closure_1_7, "respect-motion-settings", fn));
          set2 = sharedValue2.set;
          const obj2 = visible(num[6]);
          set2(obj2.withTiming(setEnterFinished, closure_1_7, "respect-motion-settings"));
        }
      }, items1);
      let obj2 = { animatedStyle: tmpResult2.useAnimatedStyle(D), isInteractive: tmp13 };
      tmpResult2 = tmp(num[5]);
      class D {
        constructor() {
          let items;
          const obj = { opacity: sharedValue.get(), transform: items };
          items = [{ scale: sharedValue2.get() }];
          ({ scale: sharedValue2.get() });
          return obj;
        }
      }
      D.__closure = { opacity: sharedValue, scale: sharedValue2 };
      D.__workletHash = 8572799637180;
      D.__initData = __initData3;
      return obj2;
    };
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/useChatInputFloatingBounce.tsx");

export default tmp3;
