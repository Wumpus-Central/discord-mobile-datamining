// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import _modDef4217 from "../../../reanimated/ReanimatedRexport.tsx";
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { StyleSheet } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { CHAT_INPUT_TIMING_CONFIG } from "../ChatInputConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
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
  const effect = React.useEffect(() => {
    if (state === state(sharedValue[4]).TransitionStates.YEETED) {
      let tmpResult = tmp(tmp2[6]);
      const fn = function t(arg0) {
        if (true === arg0) {
          closure_1_0(closure_1_2[5]).runOnJS(closure_1)();
          const obj = closure_1_0(closure_1_2[5]);
        }
      };
      let obj = { runOnJS: null, cleanup: null };
      obj[0] = tmp(tmp2[5]).runOnJS;
      obj[1] = cleanup;
      fn.__closure = obj;
      fn.__workletHash = 10965161938750;
      fn.__initData = closure_1_7;
      const result = sharedValue.set(tmpResult.withTiming(0, closure_1_4, "respect-motion-settings", fn));
    } else {
      tmpResult = tmp(tmp2[6]);
      const result1 = sharedValue.set(tmpResult.withTiming(1, closure_1_4, "respect-motion-settings"));
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
  T.__initData = closure_8;
  const animatedStyle = state(sharedValue[5]).useAnimatedStyle(T);
  obj = { style: items1 };
  items1 = [closure_6.transitionItem, animatedStyle];
  let str = "none";
  if (!tmp3) {
    str = "auto";
  }
  obj = { pointerEvents: str, accessibilityElementsHidden: !tmp8, importantForAccessibility: null };
  let str2 = "no-hide-descendants";
  if (!tmp3) {
    str2 = "auto";
  }
  obj[2] = str2;
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
    visible: state !== ManaContext.TransitionStates.YEETED,
    initiallyVisible: state !== ManaContext.TransitionStates.ENTERED,
    enterDelayMs: bounceEnterDelayMs,
    onExitComplete: cleanup,
    interactiveDuringEnter: true,
  };
  const tmp = useChatInputFloatingBounceDefault;
  ({ isInteractive, animatedStyle } = useChatInputFloatingBounceDefault(obj));
  obj = { style: items };
  items = [closure_6.transitionItemCentered, animatedStyle];
  let str = "none";
  if (isInteractive) {
    str = "auto";
  }
  obj = { pointerEvents: str, accessibilityElementsHidden: !isInteractive, importantForAccessibility: null };
  let str2 = "no-hide-descendants";
  if (isInteractive) {
    str2 = "auto";
  }
  obj[2] = str2;
  const merged = Object.assign(obj);
  obj.children = children;
  return jsx(_modDef4217.View, {
    pointerEvents: str,
    accessibilityElementsHidden: !isInteractive,
    importantForAccessibility: null,
  });
}
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
let closure_8 = {
  code: "function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{opacity:visible.get()};}",
};
let result = require("set").fileFinishedImporting(
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
    let obj = { state: null, cleanup: null, bounceEnterDelayMs: null, children: null };
    obj[0] = state;
    obj[1] = cleanup;
    obj[2] = num;
    obj[3] = children;
    let tmpResult = tmp(BounceTransitionItem, obj);
  } else {
    obj = { state: null, cleanup: null, children: null };
    obj[0] = state;
    obj[1] = cleanup;
    obj[2] = children;
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
  obj[2] = str2;
  return obj;
};
