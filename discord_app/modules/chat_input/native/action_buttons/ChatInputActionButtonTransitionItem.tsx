// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx
import c from "../../../../../_runtime/00576_c.js";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const StyleSheet = fn(17).StyleSheet;
const CHAT_INPUT_TIMING_CONFIG = fn(11576).CHAT_INPUT_TIMING_CONFIG;
const jsx = fn(21).jsx;
const styles = StyleSheet.create({
  transitionItem: { position: "absolute" },
  transitionItemCentered: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
let closure_7 = {
  code: "function ChatInputActionButtonTransitionItemTsx1(finished){const{runOnJS,cleanup}=this.__closure;if(finished===true){runOnJS(cleanup)();}}",
};
const __initData = {
  code: "function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{opacity:visible.get()};}",
};
let closure_9 = {
  code: "function ChatInputActionButtonTransitionItemTsx3(finished){const{runOnJS,cleanup}=this.__closure;if(finished===true){runOnJS(cleanup)();}}",
};
const __initData2 = {
  code: "function ChatInputActionButtonTransitionItemTsx4(){const{visible}=this.__closure;return{opacity:visible.get()};}",
};
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (state) => {
      const cResult = state(sharedValue[5]).c(13);
      state = state.state;
      const cleanup = state.cleanup;
      const children = state.children;
      const tmp4 = state === state(sharedValue[6]).TransitionStates.YEETED;
      let obj = state(sharedValue[5]);
      const tmp = state;
      let num = 1;
      if (tmp4) {
        num = 0;
      }
      sharedValue = state(sharedValue[7]).useSharedValue(num);
      if (cResult[0] === cleanup) {
        if (cResult[1] === state) {
          if (cResult[2] === sharedValue) {
            let tmp6 = cResult[3];
            let tmp7 = cResult[4];
          }
          const effect = noop.useEffect(tmp6, tmp7);
          const fn2 = function b() {
            return { opacity: sharedValue.get() };
          };
          const obj3 = { visible: sharedValue };
          fn2.__closure = obj3;
          fn2.__workletHash = 13386937038500;
          fn2.__initData = __initData;
          const animatedStyle = tmp(tmp2[7]).useAnimatedStyle(fn2);
          if (cResult[5] !== animatedStyle) {
            const items = [closure_6.transitionItem, animatedStyle];
            cResult[5] = animatedStyle;
            cResult[6] = items;
            let tmp12 = items;
          } else {
            tmp12 = cResult[6];
          }
          if (cResult[7] !== !tmp4) {
            let str = "none";
            if (tmp14) {
              str = "auto";
            }
            const obj4 = { pointerEvents: str, accessibilityElementsHidden: !tmp14, importantForAccessibility: null };
            let str2 = "no-hide-descendants";
            if (tmp14) {
              str2 = "auto";
            }
            obj4.importantForAccessibility = str2;
            cResult[7] = tmp14;
            cResult[8] = obj4;
            let tmp15 = obj4;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] === children) {
            if (cResult[10] === tmp12) {
              if (cResult[11] === tmp15) {
                let tmp16 = cResult[12];
              }
              return tmp16;
            }
          }
          const obj5 = { style: tmp12 };
          const merged = Object.assign(tmp15);
          obj5.children = children;
          const tmp22 = jsx(cleanup(tmp2[7]).View, { style: tmp12 });
          cResult[9] = children;
          cResult[10] = tmp12;
          cResult[11] = tmp15;
          cResult[12] = tmp22;
          tmp16 = tmp22;
          let tmpResult = tmp(tmp2[7]);
        }
      }
      let fn = function p() {
        if (state === native.TransitionStates.YEETED) {
          const tmpResult = timing;
          const fn = function t(arg0) {
            if (true === arg0) {
              state(sharedValue[7]).runOnJS(cleanup)();
              const obj = state(sharedValue[7]);
            }
          };
          let obj = { runOnJS: ReanimatedRexport.runOnJS, cleanup };
          fn.__closure = obj;
          fn.__workletHash = 10965161938750;
          fn.__initData = __initData;
          const result = sharedValue.set(
            tmpResult.withTiming(0, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings", fn),
          );
        } else {
          const result1 = sharedValue.set(timing.withTiming(1, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings"));
          const tmpResult2 = timing;
        }
      };
      const items1 = [state, sharedValue, cleanup];
      cResult[0] = cleanup;
      cResult[1] = state;
      cResult[2] = sharedValue;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      const obj2 = state(sharedValue[7]);
    }
  : (state) => {
      state = state.state;
      const cleanup = state.cleanup;
      let sharedValue;
      const tmp3 = state === state(sharedValue[6]).TransitionStates.YEETED;
      let num = 1;
      if (tmp3) {
        num = 0;
      }
      sharedValue = state(sharedValue[7]).useSharedValue(num);
      const items = [state, sharedValue, cleanup];
      const effect = noop.useEffect(() => {
        if (state === native.TransitionStates.YEETED) {
          const tmpResult = timing;
          const fn = function t(arg0) {
            if (true === arg0) {
              state(sharedValue[7]).runOnJS(cleanup)();
              const obj = state(sharedValue[7]);
            }
          };
          let obj = { runOnJS: ReanimatedRexport.runOnJS, cleanup };
          fn.__closure = obj;
          fn.__workletHash = 12574891324796;
          fn.__initData = __initData;
          const result = sharedValue.set(
            tmpResult.withTiming(0, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings", fn),
          );
        } else {
          const result1 = sharedValue.set(timing.withTiming(1, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings"));
          const tmpResult2 = timing;
        }
      }, items);
      let obj = state(sharedValue[7]);
      let fn = function v() {
        return { opacity: sharedValue.get() };
      };
      fn.__closure = { visible: sharedValue };
      fn.__workletHash = 3550175919586;
      fn.__initData = __initData2;
      const animatedStyle = state(sharedValue[7]).useAnimatedStyle(fn);
      const obj2 = { style: null };
      const items1 = [closure_6.transitionItem, animatedStyle];
      obj2.style = items1;
      let str = "none";
      if (!tmp3) {
        str = "auto";
      }
      const obj3 = { pointerEvents: str, accessibilityElementsHidden: !!tmp3, importantForAccessibility: null };
      let str2 = "no-hide-descendants";
      if (!tmp3) {
        str2 = "auto";
      }
      obj3.importantForAccessibility = str2;
      const merged = Object.assign(obj3);
      obj2.children = state.children;
      return jsx(cleanup(sharedValue[7]).View, { style: null });
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(13);
      ({ state, cleanup, bounceEnterDelayMs, children } = arg0);
      const tmp3 = state !== native.TransitionStates.YEETED;
      const tmp4 = state !== native.TransitionStates.ENTERED;
      if (cResult[0] === bounceEnterDelayMs) {
        if (cResult[1] === cleanup) {
          if (cResult[2] === tmp3) {
            if (cResult[3] === tmp4) {
              let tmp5 = cResult[4];
            }
            ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(tmp5));
            if (cResult[5] !== animatedStyle) {
              const items = [closure_6.transitionItemCentered, animatedStyle];
              cResult[5] = animatedStyle;
              cResult[6] = items;
              let tmp8 = items;
            } else {
              tmp8 = cResult[6];
            }
            if (cResult[7] !== isInteractive) {
              let str = "none";
              if (isInteractive) {
                str = "auto";
              }
              const obj2 = {
                pointerEvents: str,
                accessibilityElementsHidden: !isInteractive,
                importantForAccessibility: null,
              };
              let str2 = "no-hide-descendants";
              if (isInteractive) {
                str2 = "auto";
              }
              obj2.importantForAccessibility = str2;
              cResult[7] = isInteractive;
              cResult[8] = obj2;
              let tmp10 = obj2;
            } else {
              tmp10 = cResult[8];
            }
            if (cResult[9] === children) {
              if (cResult[10] === tmp8) {
                if (cResult[11] === tmp10) {
                  let tmp11 = cResult[12];
                }
                return tmp11;
              }
            }
            const obj3 = { style: tmp8 };
            const merged = Object.assign(tmp10);
            obj3.children = children;
            const tmp16 = jsx(ReanimatedRexportDefault.View, { style: tmp8 });
            cResult[9] = children;
            cResult[10] = tmp8;
            cResult[11] = tmp10;
            cResult[12] = tmp16;
            tmp11 = tmp16;
            const tmp7 = useChatInputFloatingBounceDefault(tmp5);
          }
        }
      }
      const obj4 = {
        visible: tmp3,
        initiallyVisible: tmp4,
        enterDelayMs: bounceEnterDelayMs,
        onExitComplete: cleanup,
        interactiveDuringEnter: true,
      };
      cResult[0] = bounceEnterDelayMs;
      cResult[1] = cleanup;
      cResult[2] = tmp3;
      cResult[3] = tmp4;
      cResult[4] = obj4;
      tmp5 = obj4;
    }
  : (state) => {
      state = state.state;
      ({ cleanup, bounceEnterDelayMs, children } = state);
      const obj = {
        visible: state !== native.TransitionStates.YEETED,
        initiallyVisible: state !== native.TransitionStates.ENTERED,
        enterDelayMs: bounceEnterDelayMs,
        onExitComplete: cleanup,
        interactiveDuringEnter: true,
      };
      ({ isInteractive, animatedStyle } = useChatInputFloatingBounceDefault(obj));
      const obj2 = { style: null };
      const items = [closure_6.transitionItemCentered, animatedStyle];
      obj2.style = items;
      let str = "none";
      if (isInteractive) {
        str = "auto";
      }
      const obj3 = { pointerEvents: str, accessibilityElementsHidden: !isInteractive, importantForAccessibility: null };
      let str2 = "no-hide-descendants";
      if (isInteractive) {
        str2 = "auto";
      }
      obj3.importantForAccessibility = str2;
      const merged = Object.assign(obj3);
      obj2.children = children;
      return jsx(ReanimatedRexportDefault.View, { style: null });
    };
ReactCompilerGating = fn(558);
function interactivityProps(isInteractive) {
  let str = "none";
  if (isInteractive) {
    str = "auto";
  }
  const obj = { pointerEvents: str, accessibilityElementsHidden: !isInteractive, importantForAccessibility: null };
  let str2 = "no-hide-descendants";
  if (isInteractive) {
    str2 = "auto";
  }
  obj.importantForAccessibility = str2;
  return obj;
}
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(6);
      ({ state, cleanup, children, withBounce, bounceEnterDelayMs } = arg0);
      let num = 0;
      let num2 = 0;
      if (undefined !== bounceEnterDelayMs) {
        num2 = bounceEnterDelayMs;
      }
      if (cResult[0] === num2) {
        if (cResult[1] === children) {
          if (cResult[2] === cleanup) {
            if (cResult[3] === state) {
              if (cResult[4] === tmp2) {
                return cResult[5];
              }
            }
          }
        }
      }
      if (undefined !== withBounce && withBounce) {
        const obj2 = { state, cleanup, bounceEnterDelayMs: num2, children };
        let tmp3Result = (
          <closure_12 state={state} cleanup={cleanup} bounceEnterDelayMs={num2}>
            {children}
          </closure_12>
        );
      } else {
        const obj3 = { state, cleanup, children };
        tmp3Result = (
          <closure_11 state={state} cleanup={cleanup}>
            {children}
          </closure_11>
        );
      }
      cResult[num] = num2;
      cResult[1] = children;
      cResult[2] = cleanup;
      cResult[3] = state;
      cResult[4] = undefined !== withBounce && withBounce;
      num = 5;
      cResult[5] = tmp3Result;
    }
  : (bounceEnterDelayMs) => {
      ({ state, cleanup, children, withBounce } = bounceEnterDelayMs);
      if (withBounce === undefined) {
        withBounce = false;
      }
      let num = bounceEnterDelayMs.bounceEnterDelayMs;
      if (num === undefined) {
        num = 0;
      }
      if (withBounce) {
        const obj2 = { state, cleanup, bounceEnterDelayMs: num, children };
        let tmpResult = (
          <closure_12 state={state} cleanup={cleanup} bounceEnterDelayMs={num}>
            {children}
          </closure_12>
        );
      } else {
        const obj = { state, cleanup, children };
        tmpResult = (
          <closure_11 state={state} cleanup={cleanup}>
            {children}
          </closure_11>
        );
      }
      return tmpResult;
    };
export { interactivityProps };
