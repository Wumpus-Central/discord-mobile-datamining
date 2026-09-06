// discord_app/modules/chat_input/native/action_buttons/ChatInputRightActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread.tsx";
import ChatInputActionButtonTransitionItem from "ChatInputActionButtonTransitionItem.tsx";
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function LeftSlot(state) {
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  let obj = {
    visible: state !== native.TransitionStates.YEETED,
    initiallyVisible: state !== native.TransitionStates.ENTERED,
    enterDelayMs,
    onExitComplete: cleanup,
  };
  ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(obj));
  obj = { style: null };
  const items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  obj.style = items;
  const tmp = useChatInputFloatingBounceDefault(obj);
  const merged = Object.assign(ChatInputActionButtonTransitionItem.interactivityProps(isInteractive));
  obj.children = React5(ChatInputActionButtonGiftOrThreadDefault, {
    canStartThreads: false,
    channel,
    onPress,
    styleButton: "PX_16",
    shouldShowThread: "setRequestSession",
  });
  return React5(ReanimatedRexportDefault.View, obj);
}
const View = fn(17).View;
const enterDelayMs = fn(11962).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  let obj = { container: null, leftSlot: null };
  obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP };
  obj.container = obj;
  obj.leftSlot = { alignItems: "center", justifyContent: "center" };
  return obj;
});
const forwardRefResult = noop.forwardRef((channel, ref) => {
  channel = channel.channel;
  const onPressAction = channel.onPressAction;
  noop = undefined;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  let obj = channel(4262);
  const token = obj.useToken(onPressAction(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj1 = channel(4262);
  const sum = token + 2 * obj1.useToken(onPressAction(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp6 = closure_9();
  _slicedToArray = tmp6;
  const tmp7 = _slicedToArray(noop.useState(true), 2);
  noop = tmp7[1];
  const imperativeHandle = noop.useImperativeHandle(
    ref,
    () => ({
      onDismissActions() {
        return closure_1_4(false);
      },
      onShowActions() {
        return closure_1_4(true);
      },
    }),
    [],
  );
  const items = [channel, onPressAction, sum, tmp6.leftSlot];
  const memo = noop.useMemo(() => ({}), []);
  obj = { style: tmp6.container, children: null };
  let tmp14Result = null;
  if (shouldShowGiftButton) {
    let tmp15;
    if (tmp7[0]) {
      tmp15 = memo;
    }
    obj = { item: tmp15, renderItem: tmp10 };
    tmp14Result = closure_7(tmp(4271).TransitionItem, obj);
  }
  const items1 = [tmp14Result];
  obj1 = {
    active: keyboardType === channel(1609).KeyboardTypes.EXPRESSION,
    showKeyboardIcon,
    onPress: onPressExpression,
  };
  items1[1] = closure_7(onPressAction(12174), obj1);
  obj.children = items1;
  return closure_8(View, obj);
});
forwardRefResult.displayName = "ChatInputRightActions";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default noop.memo(forwardRefResult);
