// discord_app/modules/chat_input/native/action_buttons/ChatInputRightActions.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { CHAT_INPUT_FLOATING_BOUNCE_ENTER_DELAY_MS as closure_6 } from "TextAreaCta";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
function LeftSlot(state) {
  let animatedStyle;
  let channel;
  let cleanup;
  let isInteractive;
  let onPress;
  let slotWidth;
  let wrapperStyle;
  state = state.state;
  ({ cleanup, channel, onPress, slotWidth, wrapperStyle } = state);
  let obj = { visible: state !== require(4538) /* wrapChildrenDefault */.TransitionStates.YEETED, initiallyVisible: state !== require(4538) /* wrapChildrenDefault */.TransitionStates.ENTERED, enterDelayMs: closure_6, onExitComplete: cleanup };
  ({ animatedStyle, isInteractive } = importDefault(11421)(obj));
  obj = { style: items };
  items = [wrapperStyle, { width: slotWidth }, animatedStyle];
  const tmp = importDefault(11421)(obj);
  const merged = Object.assign(require(11420) /* FadeTransitionItem */.interactivityProps(isInteractive));
  obj.children = callback2(importDefault(11419), { canStartThreads: false, channel, onPress, styleButton: "ct", shouldShowThread: "dragon" });
  return callback2(importDefault(4054).View, obj);
}
let c4 = importAllResult;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { container: null, leftSlot: null };
  obj = { flexDirection: "row", alignItems: "center", gap: importDefault(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_GAP };
  obj[0] = obj;
  obj[1] = { alignItems: "center", justifyContent: "center" };
  return obj;
});
const forwardRefResult = importAllResult.forwardRef((channel, ref) => {
  let keyboardType;
  let onPressExpression;
  let shouldShowGiftButton;
  let showKeyboardIcon;
  channel = channel.channel;
  const onPressAction = channel.onPressAction;
  let dependencyMap;
  let callback;
  let importAllResult;
  ({ keyboardType, showKeyboardIcon, shouldShowGiftButton, onPressExpression } = channel);
  let obj = channel(3897);
  const token = obj.useToken(onPressAction(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj1 = channel(3897);
  const sum = token + 2 * obj1.useToken(onPressAction(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
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
    tmp14Result = callback2(tmp(4538).TransitionItem, obj);
    const tmp14 = callback2;
  }
  const items1 = [tmp14Result, ];
  obj1 = { active: null, showKeyboardIcon: null, onPress: null };
  obj1[0] = keyboardType === channel(1579).KeyboardTypes.EXPRESSION;
  obj1[1] = showKeyboardIcon;
  obj1[2] = onPressExpression;
  items1[1] = callback2(onPressAction(11365), obj1);
  obj[1] = items1;
  return closure_8(View, obj);
});
forwardRefResult.displayName = "ChatInputRightActions";
const memoResult = importAllResult.memo(forwardRefResult);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputRightActions.tsx");

export default memoResult;