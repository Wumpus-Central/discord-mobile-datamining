// === Module 13027: ChatInputActionButtonTransitionItem ===

// Module 13027 (ChatInputActionButtonTransitionItem)
import _modDef1652 from "module_1652" /* 1652 */;
import _mod1705 from "module_1705" /* 1705 */;
import native from "native" /* 5207 */;
import timing_timing from "timing/timing" /* 5378 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 13029 */;
import noop from "module_19" /* 19 */;

require = fn;
function FadeTransitionItem(state) {
  state = state.state;
  _require = state;
  const cleanup = state.cleanup;
  let sharedValue;
  const tmp3 = state === require("native").TransitionStates.YEETED;
  let num = 1;
  if (tmp3) {
    num = 0;
  }
  sharedValue = require("module_1652").useSharedValue(num);
  items = [state, sharedValue, cleanup];
  const effect = noop.useEffect(() => {
    if (c0 === native.TransitionStates.YEETED) {
      const tmpResult = timing_timing;
      items = [closure_7, _mod1705.scheduleOnRN, cleanup];
      c0 = undefined;
      c1 = undefined;
      [tmp11, tmp12, tmp13] = items;
      class ChatInputActionButtonTransitionItemTsx1 {
        constructor(arg0) {
          if (true === arg0) {
            tmp = closure_0;
            tmp2 = closure_1;
            tmp3 = closure_0(closure_1);
          }
          return;
        }
      }
      const items1 = [tmp12, tmp13];
      ChatInputActionButtonTransitionItemTsx1.__closure = items1;
      ChatInputActionButtonTransitionItemTsx1.__workletHash = 2879120786854;
      ChatInputActionButtonTransitionItemTsx1.__initData = tmp11;
      const result = sharedValue.set(tmpResult.withTiming(0, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings", ChatInputActionButtonTransitionItemTsx1));
    } else {
      const result1 = sharedValue.set(timing_timing.withTiming(1, CHAT_INPUT_TIMING_CONFIG, "respect-motion-settings"));
      const tmpResult2 = timing_timing;
    }
  }, items);
  const obj = require("module_1652");
  let items1 = [closure_8, sharedValue];
  _require = undefined;
  [tmp6, tmp7] = items1;
  class ChatInputActionButtonTransitionItemTsx2 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp7];
  ChatInputActionButtonTransitionItemTsx2.__closure = items2;
  ChatInputActionButtonTransitionItemTsx2.__workletHash = 10652693384285;
  ChatInputActionButtonTransitionItemTsx2.__initData = tmp6;
  const animatedStyle = require("module_1652").useAnimatedStyle(ChatInputActionButtonTransitionItemTsx2);
  const obj2 = { style: null };
  const items3 = [closure_6.transitionItem, animatedStyle];
  obj2.style = items3;
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
  return jsx(cleanup(sharedValue[5]).View, { style: null });
}
function BounceTransitionItem(state) {
  state = state.state;
  ({ cleanup, bounceEnterDelayMs, children } = state);
  const obj = { visible: state !== native.TransitionStates.YEETED, initiallyVisible: state !== native.TransitionStates.ENTERED, enterDelayMs: bounceEnterDelayMs, onExitComplete: cleanup, interactiveDuringEnter: true };
  ({ isInteractive, animatedStyle } = useChatInputFloatingBounceDefault(obj));
  const obj2 = { style: null };
  items = [closure_6.transitionItemCentered, animatedStyle];
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
  return jsx(_modDef1652.View, { style: null });
}
const StyleSheet = fn(17).StyleSheet;
const CHAT_INPUT_TIMING_CONFIG = fn(13028).CHAT_INPUT_TIMING_CONFIG;
const jsx = fn(21).jsx;
const styles = StyleSheet.create({ transitionItem: { position: "absolute" }, transitionItemCentered: { position: "absolute", top: 0, bottom: 0, left: 0, right: 0, alignItems: "center", justifyContent: "center" } });
let closure_7 = { code: "(function ChatInputActionButtonTransitionItemTsx1(finished){let[scheduleOnRN,cleanup]=this.__closure;if(finished===true){scheduleOnRN(cleanup);}})" };
let closure_8 = { code: "(function ChatInputActionButtonTransitionItemTsx2(){let[visible]=this.__closure;return{opacity:visible.get()};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx");

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
    const obj2 = { state, cleanup, bounceEnterDelayMs: num, children };
    let tmpResult = <BounceTransitionItem state={state} cleanup={cleanup} bounceEnterDelayMs={num}>{children}</BounceTransitionItem>;
  } else {
    const obj = { state, cleanup, children };
    tmpResult = <FadeTransitionItem state={state} cleanup={cleanup}>{children}</FadeTransitionItem>;
  }
  return tmpResult;
};
export function interactivityProps(isInteractive) {
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