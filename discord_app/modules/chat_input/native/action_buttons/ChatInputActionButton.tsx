// discord_app/modules/chat_input/native/action_buttons/ChatInputActionButton.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_5 = createStyles.createStyles((height, marginHorizontal) => {
  const obj = {
    actionButton: null,
    actionButtonIcon: null,
    actionButtonIconActive: null,
    actionButtonIconDisabled: null,
  };
  const size = {
    borderRadius: nativeDefault.radii.sm,
    height,
    width: height,
    marginHorizontal,
    flexShrink: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };
  obj.actionButton = size;
  const size1 = {
    tintColor: nativeDefault.colors.CHAT_INPUT_ACTION_BUTTON_ICON_DEFAULT_TINT,
    width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE,
    height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE,
  };
  obj.actionButtonIcon = size1;
  obj.actionButtonIconActive = { tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  const obj2 = { tintColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT };
  obj.actionButtonIconDisabled = { tintColor: nativeDefault.colors.ICON_MUTED };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/action_buttons/ChatInputActionButton.tsx");

export default noop.memo(
  noop.forwardRef((active, ref) => {
    let flag = active.active;
    if (flag === undefined) {
      flag = false;
    }
    ({
      style,
      disabled,
      accessibilityState,
      activeStyle,
      activeIconStyle,
      onPress,
      accessible,
      accessibilityLabel,
      accessibilityHint,
      accessibilityActions,
      onAccessibilityAction,
      IconComponent,
    } = active);
    const token = useToken.useToken(nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
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
    const obj4 = {
      ref,
      style: null,
      hitSlop: null,
      disabled: null,
      accessible: null,
      accessibilityRole: "button",
      accessibilityState: null,
      accessibilityLabel: null,
      accessibilityHint: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
      onPress: null,
      children: null,
    };
    const items = [tmp6.actionButton, style];
    let tmp12 = flag;
    if (flag) {
      tmp12 = !disabled;
    }
    if (tmp12) {
      tmp12 = activeStyle;
    }
    items[2] = tmp12;
    obj4.style = items;
    let tmp13;
    if (bound > 0) {
      tmp13 = bound;
    }
    obj4.hitSlop = tmp13;
    obj4.disabled = disabled;
    obj4.accessible = accessible;
    const merged = Object.assign(accessibilityState);
    obj4.accessibilityState = { disabled };
    obj4.accessibilityLabel = accessibilityLabel;
    obj4.accessibilityHint = accessibilityHint;
    obj4.accessibilityActions = accessibilityActions;
    obj4.onAccessibilityAction = onAccessibilityAction;
    obj4.onPress = onPress;
    const items1 = [tmp6.actionButtonIcon, , ,];
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
    obj4.children = <IconComponent size="custom" style={items1} />;
    return jsx(Pressables.PressableOpacity, {
      ref,
      style: null,
      hitSlop: null,
      disabled: null,
      accessible: null,
      accessibilityRole: "button",
      accessibilityState: null,
      accessibilityLabel: null,
      accessibilityHint: null,
      accessibilityActions: null,
      onAccessibilityAction: null,
      onPress: null,
      children: null,
    });
  }),
);
