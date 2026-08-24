// === Module 11402: ? ===

// Module 11402
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import map from "map" /* 4097 */;
import PressableBase from "PressableBase" /* 5433 */;
import importAllResult from "noop" /* 19 */;
import { StyleSheet } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
let closure_5 = createCacheKey.createStyles((arg0, height, marginHorizontal) => {
  const radii = ThemesDefault.radii;
  if (arg0) {
    let round = radii.sm;
    let tmp4 = tmp;
  } else {
    round = radii.round;
    tmp4 = tmp;
  }
  let obj = { borderRadius: round, height, width: height, marginHorizontal, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: null };
  let prop;
  if (!arg0) {
    prop = tmp4(712).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND;
  }
  obj = { actionButton: obj, actionButtonIcon: null, actionButtonIconActive: null, actionButtonIconDisabled: null };
  obj[8] = prop;
  obj = { tintColor: tmp4(712).colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT, width: tmp4(712).modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE, height: tmp4(712).modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE };
  obj[1] = obj;
  obj[2] = { tintColor: tmp4(712).colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  obj1 = { tintColor: tmp4(712).colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  obj[3] = { tintColor: tmp4(712).colors.ICON_MUTED };
  return obj;
});
const memoResult = importAllResult.memo(importAllResult.forwardRef((active, ref) => {
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, disabled, accessibilityState, activeStyle, activeIconStyle, onPress, accessible, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, IconComponent } = active);
  let obj = useIsMobileVisualRefreshExperimentEnabled;
  const mobileVisualRefreshConfig = obj.useMobileVisualRefreshConfig({ location: "ChatInputActionButton" });
  ({ enabled, chatInputFloating } = mobileVisualRefreshConfig);
  const token = map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const obj2 = map;
  const tmp = require;
  const token1 = map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const obj3 = map;
  const token2 = map.useToken(ThemesDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp7 = callback(enabled, token, token1);
  let tmp8;
  if (chatInputFloating) {
    const flattenResult = StyleSheet.flatten(style);
    let height;
    if (flattenResult != null) {
      height = flattenResult.height;
    }
    tmp8 = height;
  }
  let tmp13 = token;
  if (typeof tmp8 === "number") {
    tmp13 = tmp8;
  }
  const bound = Math.max(0, (token2 - tmp13) / 2);
  obj = { ref, style: null, hitSlop: null, disabled: null, accessible: null, accessibilityRole: "button", accessibilityState: null, accessibilityLabel: null, accessibilityHint: null, accessibilityActions: null, onAccessibilityAction: null, onPress: null, children: null };
  const items = [tmp7.actionButton, style, ];
  let tmp16 = flag;
  if (flag) {
    tmp16 = !disabled;
  }
  if (tmp16) {
    tmp16 = activeStyle;
  }
  items[2] = tmp16;
  obj[1] = items;
  let tmp17;
  if (bound > 0) {
    tmp17 = bound;
  }
  obj[2] = tmp17;
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
  const items1 = [tmp7.actionButtonIcon, , , ];
  let actionButtonIconActive = flag;
  if (flag) {
    actionButtonIconActive = tmp7.actionButtonIconActive;
  }
  items1[1] = actionButtonIconActive;
  if (flag) {
    flag = activeIconStyle;
  }
  items1[2] = flag;
  if (disabled) {
    disabled = tmp7.actionButtonIconDisabled;
  }
  items1[3] = disabled;
  obj[12] = <IconComponent size="custom" style={items1} />;
  return jsx(PressableBase.PressableOpacity, { disabled });
}));
const result = require("set").fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButton.tsx");

export default memoResult;