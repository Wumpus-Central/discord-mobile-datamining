// === Module 12688: ChatInputRightActions ===

// Module 12688 (ChatInputRightActions)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4467 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4493 */;
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread" /* 12502 */;
import ChatInputActionButtonTransitionItem from "ChatInputActionButtonTransitionItem" /* 12503 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 12504 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function LeftSlot(state) {
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  const obj = { visible: state !== native.TransitionStates.YEETED, initiallyVisible: state !== native.TransitionStates.ENTERED, enterDelayMs, onExitComplete: cleanup };
  ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault({ visible: state !== native.TransitionStates.YEETED, initiallyVisible: state !== native.TransitionStates.ENTERED, enterDelayMs, onExitComplete: cleanup }));
  const obj2 = { style: null };
  const items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  obj2.style = items;
  const tmp = useChatInputFloatingBounceDefault({ visible: state !== native.TransitionStates.YEETED, initiallyVisible: state !== native.TransitionStates.ENTERED, enterDelayMs, onExitComplete: cleanup });
  const merged = Object.assign(ChatInputActionButtonTransitionItem.interactivityProps(isInteractive));
  obj2.children = React5(ChatInputActionButtonGiftOrThreadDefault, { canStartThreads: false, channel, onPress, styleButton: "flex", shouldShowThread: "simple-action" });
  return React5(ReanimatedRexportDefault.View, obj2);
}
const View = fn(17).View;
const enterDelayMs = fn(12219).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4757);
let closure_9 = createStyles.createStyles(() => {
  const obj = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP }, leftSlot: { alignItems: "center", justifyContent: "center" } };
  return obj;
});
const forwardRefResult = noop.forwardRef((channel, arg1) => {
  channel = channel.channel;
  const onPressAction = channel.onPressAction;
  noop = undefined;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  const token = channel(4458).useToken(onPressAction(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj = channel(4458);
  const tmp3 = onPressAction;
  const sum = token + 2 * channel(4458).useToken(onPressAction(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp6 = closure_9();
  _slicedToArray = tmp6;
  const tmp7 = _slicedToArray(noop.useState(true), 2);
  noop = tmp7[1];
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
    onDismissActions() {
      return closure_1_4(false);
    },
    onShowActions() {
      return closure_1_4(true);
    }
  }), []);
  const items = [channel, onPressAction, sum, tmp6.leftSlot];
  const memo = noop.useMemo(() => ({}), []);
  const obj3 = { style: tmp6.container, children: null };
  let tmp14Result = null;
  if (shouldShowGiftButton) {
    let tmp15;
    if (tmp7[0]) {
      tmp15 = memo;
    }
    const obj4 = { item: tmp15, renderItem: tmp10 };
    tmp14Result = closure_7(tmp(4467).TransitionItem, obj4);
  }
  const items1 = [tmp14Result, ];
  const obj5 = { active: null, showKeyboardIcon: null, onPress: null };
  const obj2 = channel(4458);
  obj5.active = keyboardType === channel(1610).KeyboardTypes.EXPRESSION;
  obj5.showKeyboardIcon = showKeyboardIcon;
  obj5.onPress = onPressExpression;
  items1[1] = closure_7(tmp3(12431), obj5);
  obj3.children = items1;
  return closure_8(View, obj3);
});
forwardRefResult.displayName = "ChatInputRightActions";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default noop.memo(forwardRefResult);