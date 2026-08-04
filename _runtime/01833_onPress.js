// _runtime/01833_onPress.js
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
require("noop").useCallback;

export default function _default(icon) {
  let button;
  let children;
  let disabled;
  let onPress;
  let rippleRadius;
  let style;
  ({ children, onPress } = icon);
  ({ disabled, button } = icon);
  ({ rippleRadius, style } = icon);
  if (button === undefined) {
    button = importDefault(1825);
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = importDefault(1826);
  }
  let obj = onPress(1831);
  const toolbarContext = obj.useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isPrevDisabled;
  }
  const items = [onPress];
  obj = { accessibilityHint: "Moves focus to the previous field", accessibilityLabel: "Previous", disabled, rippleRadius, style, testID: null, theme: null, onPress: null, children: null };
  obj[5] = onPress(1824).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS;
  obj[6] = theme;
  obj[7] = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(outer1_2[5]).KeyboardController;
      KeyboardController.setFocusTo("prev");
    }
  }, items);
  if (children == null) {
    obj = { disabled: null, theme: null, type: "prev" };
    obj[0] = disabled;
    obj[1] = theme;
    children = tmp9(icon, obj);
  }
  obj[8] = children;
  return <button accessibilityHint="Moves focus to the previous field" accessibilityLabel="Previous" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={null} theme={null} onPress={null}>{null}</button>;
};