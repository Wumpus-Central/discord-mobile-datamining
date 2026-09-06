// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function FadeTransitionItem(state) {
  state = state.state;
  const cleanup = state.cleanup;
  let sharedValue;
  const tmp3 = state === state(sharedValue[4]).TransitionStates.YEETED;
  let obj = state(sharedValue[5]);
  let num = 1;
  if (tmp3) {
    num = 0;
  }
  sharedValue = obj.useSharedValue(num);
  const items = [state, sharedValue, cleanup];
  const effect = noop.useEffect(() => {
    if (state === native.TransitionStates.YEETED) {
      let tmpResult = tmp(4561);
      const fn = function t(arg0) {
        if (true === arg0) {
          state(sharedValue[5]).runOnJS(cleanup)();
          const obj = state(sharedValue[5]);
        }
      };
      let obj = { runOnJS: tmp(4296).runOnJS, cleanup };
      fn.__closure = obj;
      fn.__workletHash = 10965161938750;
      fn.__initData = __initData;
      const result = sharedValue.set(tmpResult.withTiming(0, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings", fn));
    } else {
      tmpResult = tmp(4561);
      const result1 = sharedValue.set(tmpResult.withTiming(1, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings"));
    }
  }, items);
  class T {
    constructor() {
      obj = { opacity: closure_2.get() };
      return obj;
    }
  }
  T.__closure = { visible: sharedValue };
  T.__workletHash = 13386937038500;
  T.__initData = __initData;
  const animatedStyle = state(sharedValue[5]).useAnimatedStyle(T);
  obj = { style: null };
  const items1 = [closure_6.transitionItem, animatedStyle];
  obj.style = items1;
  let str = "none";
  if (!tmp3) {
    str = "auto";
  }
  obj = { pointerEvents: str, accessibilityElementsHidden: !tmp8, importantForAccessibility: null };
  let str2 = "no-hide-descendants";
  if (!tmp3) {
    str2 = "auto";
  }
  obj.importantForAccessibility = str2;
  const merged = Object.assign(obj);
  obj.children = state.children;
  return jsx(cleanup(sharedValue[5]).View, {
    pointerEvents: str,
    accessibilityElementsHidden: !tmp8,
    importantForAccessibility: null,
  });
}
function BounceTransitionItem(state) {
  state = state.state;
  ({ cleanup, bounceEnterDelayMs, children } = state);
  let obj = {
    visible: state !== native.TransitionStates.YEETED,
    initiallyVisible: state !== native.TransitionStates.ENTERED,
    enterDelayMs: bounceEnterDelayMs,
    onExitComplete: cleanup,
    interactiveDuringEnter: true,
  };
  ({ isInteractive, animatedStyle } = useChatInputFloatingBounceDefault(obj));
  obj = { style: null };
  const items = [closure_6.transitionItemCentered, animatedStyle];
  obj.style = items;
  let str = "none";
  if (isInteractive) {
    str = "auto";
  }
  obj = { pointerEvents: str, accessibilityElementsHidden: !isInteractive, importantForAccessibility: null };
  let str2 = "no-hide-descendants";
  if (isInteractive) {
    str2 = "auto";
  }
  obj.importantForAccessibility = str2;
  const merged = Object.assign(obj);
  obj.children = children;
  return jsx(ReanimatedRexportDefault.View, {
    pointerEvents: str,
    accessibilityElementsHidden: !isInteractive,
    importantForAccessibility: null,
  });
}
const StyleSheet = fn(17).StyleSheet;
const CHAT_INPUT_TIMING_CONFIG = fn(11962).CHAT_INPUT_TIMING_CONFIG;
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
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx",
);

export default function ChatInputActionButtonTransitionItem(bounceEnterDelayMs) {
  ({ state, cleanup, children, withBounce } = bounceEnterDelayMs);
  if (withBounce === undefined) {
    withBounce = false;
  }
  let num = bounceEnterDelayMs.bounceEnterDelayMs;
  if (num === undefined) {
    num = 0;
  }
  if (withBounce) {
    let obj = { state, cleanup, bounceEnterDelayMs: num, children };
    let tmpResult = tmp(BounceTransitionItem, obj);
  } else {
    obj = { state, cleanup, children };
    tmpResult = tmp(FadeTransitionItem, obj);
  }
  return tmpResult;
}
export const interactivityProps = function interactivityProps(isInteractive) {
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
};
