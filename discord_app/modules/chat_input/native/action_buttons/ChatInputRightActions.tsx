// discord_app/modules/chat_input/native/action_buttons/ChatInputRightActions.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import ChatInputActionButtonTransitionItem from "ChatInputActionButtonTransitionItem.tsx";
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce.tsx";
import ChatInputActionButtonGiftOrThreadDefault from "ChatInputActionButtonGiftOrThread.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
class ChatInputRightActions {
  constructor(arg0) {
    channel = global.channel;
    ({ keyboardType, showKeyboardIcon, onPressAction } = global);
    ({ onPressExpression, suggestedExpressions } = global);
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    tmp = channel;
    tmp2 = closure_2;
    ({ shouldShowGiftButton, suggestedExpressionsRef, ref } = global);
    obj = channel(closure_2[7]);
    tmp3 = onPressAction;
    token = obj.useToken(onPressAction(closure_2[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
    obj2 = channel(closure_2[7]);
    sum = token + 2 * obj2.useToken(onPressAction(closure_2[6]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
    closure_2 = sum;
    tmp6 = closure_9();
    closure_3 = tmp6;
    tmp7 = closure_3(closure_4.useState(true), 2);
    [tmp8, closure_4] = tmp7;
    imperativeHandle = closure_4.useImperativeHandle(
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
    items = [, , ,];
    items[0] = channel;
    items[1] = onPressAction;
    items[2] = sum;
    items[3] = tmp6.leftSlot;
    memo = closure_4.useMemo(() => ({}), []);
    obj1 = { style: tmp6.container, children: null };
    tmp15Result = null;
    tmp12 = jsxs;
    tmp13 = View;
    if (shouldShowGiftButton) {
      tmp15 = jsx;
      tmp16 = undefined;
      if (tmp8) {
        tmp16 = memo;
      }
      obj7 = { item: null, renderItem: null };
      obj7.item = tmp16;
      obj7.renderItem = tmp11;
      tmp15Result = tmp15(tmp(tmp2[8]).TransitionItem, obj7);
    }
    items1 = [,];
    items1[0] = tmp15Result;
    if (null != suggestedExpressions) {
      tmp20 = jsx;
      obj8 = { ref: null, active: null, showKeyboardIcon: null, onPress: null, channel: null };
      obj8.ref = suggestedExpressionsRef;
      obj8.active = keyboardType === tmp(tmp2[10]).KeyboardTypes.EXPRESSION;
      obj8.showKeyboardIcon = showKeyboardIcon;
      obj8.onPress = onPressExpression;
      obj8.channel = channel;
      tmp21 = obj8;
      tmp22 = suggestedExpressions;
      merged = Object.assign(suggestedExpressions);
      tmp19 = jsx(tmp(tmp2[9]).EmojiSuggestionChatButton, obj8);
    } else {
      tmp17 = jsx;
      obj9 = { active: null, showKeyboardIcon: null, onPress: null };
      tmp3Result = tmp3(tmp2[11]);
      obj9.active = keyboardType === tmp(tmp2[10]).KeyboardTypes.EXPRESSION;
      obj9.showKeyboardIcon = showKeyboardIcon;
      obj9.onPress = onPressExpression;
      tmp19 = jsx(tmp3Result, obj9);
    }
    items1[1] = tmp19;
    obj1.children = items1;
    return tmp12(tmp13, obj1);
  }
}
function LeftSlot(state) {
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  const obj = {
    visible: state !== native.TransitionStates.YEETED,
    initiallyVisible: state !== native.TransitionStates.ENTERED,
    enterDelayMs,
    onExitComplete: cleanup,
  };
  ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault({
    visible: state !== native.TransitionStates.YEETED,
    initiallyVisible: state !== native.TransitionStates.ENTERED,
    enterDelayMs,
    onExitComplete: cleanup,
  }));
  const obj2 = { style: null };
  const items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  obj2.style = items;
  const tmp = useChatInputFloatingBounceDefault({
    visible: state !== native.TransitionStates.YEETED,
    initiallyVisible: state !== native.TransitionStates.ENTERED,
    enterDelayMs,
    onExitComplete: cleanup,
  });
  const merged = Object.assign(ChatInputActionButtonTransitionItem.interactivityProps(isInteractive));
  obj2.children = React5(ChatInputActionButtonGiftOrThreadDefault, {
    canStartThreads: false,
    channel,
    onPress,
    styleButton: "flexDirection",
    shouldShowThread: "flag_cx",
  });
  return React5(ReanimatedRexportDefault.View, obj2);
}
const View = fn(17).View;
const enterDelayMs = fn(12806).CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
const React7 = createStyles.createStyles(() => {
  const obj = {
    container: {
      flexDirection: "row",
      alignItems: "center",
      gap: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP,
    },
    leftSlot: { alignItems: "center", justifyContent: "center" },
  };
  return obj;
});
ChatInputRightActions.displayName = "ChatInputRightActions";
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default noop.memo(ChatInputRightActions);
