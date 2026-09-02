// === Module 11967: ? ===

// Module 11967
import ThemesDefault from "Themes" /* 709 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c3 = importAllResult;
let closure_5 = createCacheKey.createStyles((height) => {
  let obj = { expressionButton: null, expressionButtonIconTint: null };
  obj = { borderRadius: ThemesDefault.radii.sm, height, width: height, alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  obj = { tintColor: ThemesDefault.colors.CHAT_INPUT_ICON_DEFAULT_TINT };
  obj[1] = obj;
  return obj;
});
const memoResult = importAllResult.memo((active) => {
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  let showKeyboardIcon = active.showKeyboardIcon;
  if (showKeyboardIcon === undefined) {
    showKeyboardIcon = flag;
  }
  const onPress = active.onPress;
  let obj = onPress(4197);
  const token = obj.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const token1 = onPress(4197).useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ICON_SIZE);
  const obj2 = onPress(4197);
  const tmp3 = importDefault;
  const token2 = onPress(4197).useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = callback(token);
  const bound = Math.max(0, (token2 - token) / 2);
  const items = [onPress];
  callback = importAllResult.useCallback(() => {
    onPress(undefined);
  }, items);
  const obj3 = onPress(4197);
  obj = { ref: importAllResult.useRef(null), style: items1, hitSlop: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityState: null, onPress: null, children: null };
  items1 = [tmp7.expressionButton, active.style];
  let tmp12;
  if (bound > 0) {
    tmp12 = bound;
  }
  obj[2] = tmp12;
  const intl = tmp(1233).intl;
  obj[4] = intl.string(onPress(1233).t.iZ7Mz9);
  obj[5] = { expanded: flag };
  obj[6] = callback;
  obj = { size: token1, style: tmp7.expressionButtonIconTint, source: tmp3(showKeyboardIcon ? 11105 : 8238) };
  obj[7] = jsx(onPress(1296).Icon, { size: token1, style: tmp7.expressionButtonIconTint, source: tmp3(showKeyboardIcon ? 11105 : 8238) });
  return jsx(onPress(5076).PressableOpacity, { size: token1, style: tmp7.expressionButtonIconTint, source: tmp3(showKeyboardIcon ? 11105 : 8238) });
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputExpressionButton.tsx");

export default memoResult;