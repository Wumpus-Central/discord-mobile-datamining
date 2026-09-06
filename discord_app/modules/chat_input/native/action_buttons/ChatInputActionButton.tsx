// === Module 12239: ChatInputActionButton ===

// Module 12239 (ChatInputActionButton)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import noop from "module_19" /* 19 */;

const Pressables = tmp(5123);
require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles((height, marginHorizontal) => {
  let obj = { actionButton: null, actionButtonIcon: null, actionButtonIconActive: null, actionButtonIconDisabled: null };
  const size = { borderRadius: nativeDefault.radii.sm, height, width: height, marginHorizontal, flexShrink: 0, flexDirection: "row", alignItems: "center", justifyContent: "center" };
  obj.actionButton = size;
  const size1 = { tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT, width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE };
  obj.actionButtonIcon = size1;
  obj = { tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  obj.actionButtonIconActive = obj;
  obj = { tintColor: nativeDefault.colors.ICON_MUTED };
  obj.actionButtonIconDisabled = obj;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButton.tsx");

export default noop.memo(noop.forwardRef((active, ref) => {
  let flag = active.active;
  if (flag === undefined) {
    flag = false;
  }
  ({ style, disabled, accessibilityState, activeStyle, activeIconStyle, onPress, accessible, accessibilityLabel, accessibilityHint, accessibilityActions, onAccessibilityAction, IconComponent } = active);
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const token1 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const token2 = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_BUTTON_MIN_TOUCH_TARGET_SIZE);
  const tmp6 = closure_5(token, token1);
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
  obj.style = items;
  let tmp13;
  if (bound > 0) {
    tmp13 = bound;
  }
  obj.hitSlop = tmp13;
  obj.disabled = disabled;
  obj.accessible = accessible;
  obj = { disabled };
  const merged = Object.assign(accessibilityState);
  obj.accessibilityState = obj;
  obj.accessibilityLabel = accessibilityLabel;
  obj.accessibilityHint = accessibilityHint;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  obj.onPress = onPress;
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
  obj.children = <IconComponent size="custom" style={items1} />;
  return jsx(Pressables.PressableOpacity, { disabled });
}));