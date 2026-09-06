// === Module 12430: LeftSlot ===

// Module 12430 (LeftSlot)
import ThemesDefault from "Themes" /* 576 */;
import ManaContext from "ManaContext" /* 4271 */;
import _modDef4296 from "module_4296" /* 4296 */;
import renderChatInputActionButtonGiftAndThreadDefault from "renderChatInputActionButtonGiftAndThread" /* 12245 */;
import FadeTransitionItem from "FadeTransitionItem" /* 12246 */;
import useChatInputFloatingBounceDefault from "useChatInputFloatingBounce" /* 12247 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS as closure_6 } from "TextAreaCta" /* 11962 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function LeftSlot(state) {
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  let obj = { visible: state !== ManaContext.TransitionStates.YEETED, initiallyVisible: state !== ManaContext.TransitionStates.ENTERED, enterDelayMs: closure_6, onExitComplete: cleanup };
  ({ animatedStyle, isInteractive } = useChatInputFloatingBounceDefault(obj));
  obj = { style: items };
  items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  const tmp = useChatInputFloatingBounceDefault(obj);
  const merged = Object.assign(FadeTransitionItem.interactivityProps(isInteractive));
  obj.children = callback2(renderChatInputActionButtonGiftAndThreadDefault, { canStartThreads: false, channel, onPress, styleButton: "PX_16", shouldShowThread: "setRequestSession" });
  return callback2(_modDef4296.View, obj);
}
let c4 = importAllResult;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { container: null, leftSlot: null };
  obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP };
  obj[0] = obj;
  obj[1] = { alignItems: "center", justifyContent: "center" };
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  channel = channel.channel;
  const onPressAction = channel.onPressAction;
  dependencyMap = undefined;
  let callback;
  importAllResult = undefined;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  let obj = channel(4262);
  const token = obj.useToken(onPressAction(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  obj1 = channel(4262);
  const sum = token + 2 * obj1.useToken(onPressAction(576).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  dependencyMap = sum;
  const tmp6 = callback3();
  callback = tmp6;
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
    tmp14Result = callback2(tmp(4271).TransitionItem, obj);
    const tmp14 = callback2;
  }
  const items1 = [tmp14Result, ];
  obj1 = { active: keyboardType === channel(1609).KeyboardTypes.EXPRESSION, showKeyboardIcon, onPress: onPressExpression };
  items1[1] = callback2(onPressAction(12174), obj1);
  obj[1] = items1;
  return closure_8(View, obj);
});
forwardRefResult.displayName = "ChatInputRightActions";
const memoResult = importAllResult.memo(forwardRefResult);
const result = require("set").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default memoResult;