// === Module 11773: ? ===

// Module 11773
import ThemesDefault from "Themes" /* 712 */;
import map from "map" /* 4167 */;
import PressableBase from "PressableBase" /* 5036 */;
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

require = arg1;
let closure_5 = createCacheKey.createStyles((height, marginHorizontal) => {
  let obj = { actionButton: null, actionButtonIcon: null, actionButtonIconActive: null, actionButtonIconDisabled: null };
  obj = { borderRadius: ThemesDefault.radii.sm, height, width: height, marginHorizontal, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  obj[0] = obj;
  obj = { tintColor: ThemesDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT, width: ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE, height: ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE };
  obj[1] = obj;
  obj[2] = { tintColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  obj1 = { tintColor: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  obj[3] = { tintColor: ThemesDefault.colors.ICON_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(importAllResult.forwardRef((active, ref) => {
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, disabled, accessibilityState, activeStyle, activeIconStyle, onPress, accessible, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, IconComponent } = active);
  let obj = map;
  const token = obj.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const token1 = map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj2 = map;
  const tmp = require;
  const token2 = map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp6 = callback(token, token1);
  const flattenResult = StyleSheet.flatten(style);
  let height;
  if (flattenResult != null) {
    height = flattenResult.height;
  }
  let tmp9 = token;
  if (typeof height === "number") {
    tmp9 = height;
  }
  const bound = Math.max(0, (token2 - tmp9) / 2);
  obj = { ref, style: null, hitSlop: null, disabled: null, accessible: null, accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onPress: null, children: null };
  const items = [tmp6.actionButton, style, ];
  let tmp12 = flag;
  if (flag) {
    tmp12 = !disabled;
  }
  if (tmp12) {
    tmp12 = activeStyle;
  }
  items[2] = tmp12;
  obj[1] = items;
  let tmp13;
  if (bound > 0) {
    tmp13 = bound;
  }
  obj[2] = tmp13;
  obj[3] = disabled;
  obj[4] = accessible;
  obj = { disabled };
  const merged = Object.assign(accessibilityState);
  obj[6] = obj;
  obj[7] = accessibilityLabel;
  obj[8] = accessibilityHint;
  obj[9] = accessibilityActions;
  obj[10] = onAccessibilityAction;
  obj[11] = onPress;
  const items1 = [tmp6.actionButtonIcon, , , ];
  let actionButtonIconActive = flag;
  if (flag) {
    actionButtonIconActive = tmp6.actionButtonIconActive;
  }
  items1[1] = actionButtonIconActive;
  if (flag) {
    flag = activeIconStyle;
  }
  items1[2] = flag;
  if (disabled) {
    disabled = tmp6.actionButtonIconDisabled;
  }
  items1[3] = disabled;
  obj[12] = <IconComponent size="custom" style={items1} />;
  return jsx(PressableBase.PressableOpacity, { disabled });
}));
const result = require("set").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButton.tsx");

export default memoResult;