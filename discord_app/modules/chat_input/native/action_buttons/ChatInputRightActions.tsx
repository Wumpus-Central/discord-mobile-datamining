// === Module 11600: LeftSlot ===

// Module 11600 (LeftSlot)
import ThemesDefault from "Themes" /* 712 */;
import _modDef4115 from "module_4115" /* 4115 */;
import wrapChildrenDefault from "wrapChildrenDefault" /* 4668 */;
import renderChatInputActionButtonGiftAndThreadDefault from "renderChatInputActionButtonGiftAndThread" /* 11408 */;
import FadeTransitionItem from "FadeTransitionItem" /* 11409 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 11410 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS as closure_6 } from "TextAreaCta" /* 11149 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function LeftSlot(state) {
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  let obj = { visible: state !== wrapChildrenDefault.TransitionStates.YEETED, initiallyVisible: state !== wrapChildrenDefault.TransitionStates.ENTERED, enterDelayMs: closure_6, onExitComplete: cleanup };
  ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(obj));
  obj = { style: items };
  items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  const tmp = useChatInputFloatingBounceDefault(obj);
  const merged = Object.assign(FadeTransitionItem.interactivityProps(isInteractive));
  obj.children = callback2(renderChatInputActionButtonGiftAndThreadDefault, { canStartThreads: false, channel, onPress, styleButton: "ct", shouldShowThread: "#297071" });
  return callback2(_modDef4115.View, obj);
}
let c4 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  const obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP };
  obj[0] = obj;
  obj[1] = { alignItems: "center", justifyContent: "center" };
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  const onPressAction = channel.onPressAction;
  importAllResult = undefined;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  let obj = channel(4097);
  const token = obj.useToken(onPressAction(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  obj1 = channel(4097);
  const sum = token + 2 * obj1.useToken(onPressAction(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp6 = callback3();
  const callback = tmp6;
  const tmp7 = callback(importAllResult.useState(true), 2);
  importAllResult = tmp7[1];
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    onDismissActions() {
      return callback(false);
    },
    onShowActions() {
      return callback(true);
    }
  }), []);
  const items = [channel, onPressAction, sum, tmp6.leftSlot];
  const memo = importAllResult.useMemo(() => ({}), []);
  obj = { style: tmp6.container, children: null };
  let tmp14Result = null;
  if (shouldShowGiftButton) {
    let tmp15;
    if (tmp7[0]) {
      tmp15 = memo;
    }
    obj = { item: null, renderItem: null };
    obj[0] = tmp15;
    obj[1] = tmp10;
    tmp14Result = callback2(tmp(4668).TransitionItem, obj);
  }
  const items1 = [tmp14Result, ];
  obj1 = { active: keyboardType === channel(1627).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression };
  items1[1] = callback2(onPressAction(11352), obj1);
  obj[1] = items1;
  return callback(View, obj);
});
forwardRefResult.displayName = "ChatInputRightActions";
const memoResult = importAllResult.memo(forwardRefResult);
const result = require("obj132").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default memoResult;