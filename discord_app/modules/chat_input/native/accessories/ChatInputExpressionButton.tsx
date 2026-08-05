// discord_app/modules/chat_input/native/accessories/ChatInputExpressionButton.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let c3 = importAllResult;
let closure_5 = createCacheKey.createStyles((arg0, arg1, height) => {
  const radii = importDefault(712).radii;
  if (arg0) {
    let round = radii.sm;
    let tmp4 = tmp;
  } else {
    round = radii.round;
    tmp4 = tmp;
  }
  let obj = { borderRadius: round, height, width: height };
  if (arg0) {
    obj = { alignItems: "center", justifyContent: "center" };
  } else {
    obj = { paddingHorizontal: null, paddingVertical: null };
    obj[0] = tmp4(712).modules.mobile.CHAT_INPUT_PILL_PADDING;
    obj[1] = tmp4(712).modules.mobile.CHAT_INPUT_PILL_PADDING;
  }
  obj = { expressionButton: null, expressionButtonIconPosition: null, expressionButtonIconTint: null };
  const merged = Object.assign(obj);
  obj[0] = obj;
  obj[1] = { position: "absolute", left: tmp4(712).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_LEFT, top: tmp4(712).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_TOP };
  const obj1 = { position: "absolute", left: tmp4(712).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_LEFT, top: tmp4(712).modules.mobile.CHAT_INPUT_EXPRESSION_OFFSET_TOP };
  obj[2] = { tintColor: tmp4(712).colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  return obj;
});
const memoResult = importAllResult.memo((active) => {
  let chatInputFloating;
  let enabled;
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  let showKeyboardIcon = active.showKeyboardIcon;
  if (showKeyboardIcon === undefined) {
    showKeyboardIcon = flag;
  }
  const onPress = active.onPress;
  let obj = onPress(1348);
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputExpressionButton" });
  ({ enabled, chatInputFloating } = mobileVisualRefreshConfig);
  const token = onPress(3989).useToken(importDefault(712).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = onPress(3989);
  const tmp4 = importDefault;
  const token1 = onPress(3989).useToken(importDefault(712).modules.mobile.CHAT_INPUT_PILL_PADDING);
  const obj3 = onPress(3989);
  const token2 = onPress(3989).useToken(importDefault(712).modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH);
  const obj4 = onPress(3989);
  const token3 = onPress(3989).useToken(importDefault(712).modules.mobile.CHAT_INPUT_ICON_SIZE);
  const obj5 = onPress(3989);
  let diff = token;
  const token4 = onPress(3989).useToken(importDefault(712).modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  if (!enabled) {
    diff = token - 2 * (token1 + token2);
  }
  const tmp11 = callback(enabled, chatInputFloating, diff);
  const bound = Math.max(0, (token4 - diff) / 2);
  const items = [onPress];
  callback = importAllResult.useCallback(() => {
    onPress(undefined);
  }, items);
  const obj6 = onPress(3989);
  obj = { ref: importAllResult.useRef(null), style: items1, hitSlop: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
  items1 = [tmp11.expressionButton, active.style];
  let tmp16;
  if (bound > 0) {
    tmp16 = bound;
  }
  obj[2] = tmp16;
  const intl = tmp(1236).intl;
  obj[4] = intl.string(onPress(1236).t.iZ7Mz9);
  obj[5] = { expanded: flag };
  obj[6] = callback;
  obj = { size: token3, style: null, source: null };
  let expressionButtonIconPosition = !enabled;
  if (!enabled) {
    expressionButtonIconPosition = tmp11.expressionButtonIconPosition;
  }
  const items2 = [expressionButtonIconPosition, tmp11.expressionButtonIconTint];
  obj[1] = items2;
  obj[2] = tmp4(showKeyboardIcon ? 10104 : 7577);
  obj[7] = jsx(onPress(1297).Icon, { size: token3, style: null, source: null });
  return jsx(onPress(4812).PressableOpacity, { size: token3, style: null, source: null });
});
const result = require("createCacheKey").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default memoResult;