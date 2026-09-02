// === Module 1879: onPress ===

// Module 1879 (onPress)
import noopDefault from "noop" /* 19 */;
import disabledDefault from "disabled" /* 1871 */;
import itemsDefault from "items" /* 1872 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopDefault;
require("noop").useCallback;

export default function _default(icon) {
  ({ children, onPress } = icon);
  ({ disabled, button } = icon);
  ({ rippleRadius, style } = icon);
  if (button === undefined) {
    button = disabledDefault;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = itemsDefault;
  }
  let obj = onPress(1877);
  const toolbarContext = obj.useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isPrevDisabled;
  }
  const items = [onPress];
  obj = {
    accessibilityHint: "Moves focus to the previous field",
    accessibilityLabel: "Previous",
    disabled,
    rippleRadius,
    style,
    testID: onPress(1870).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS,
    theme,
    onPress: useCallback((isDefaultPrevented) => {
      if (onPress != null) {
        tmp(isDefaultPrevented);
      }
      if (!isDefaultPrevented.isDefaultPrevented()) {
        const KeyboardController = onPress(closure_1_2[5]).KeyboardController;
        KeyboardController.setFocusTo("prev");
      }
    }, items),
    children: null
  };
  if (children == null) {
    obj = { disabled: null, theme: null, type: "prev" };
    obj[0] = disabled;
    obj[1] = theme;
    children = tmp9(icon, obj);
  }
  obj[8] = children;
  return <button accessibilityHint="Moves focus to the previous field" accessibilityLabel="Previous" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={onPress(1870).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS} theme={theme} onPress={useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(closure_1_2[5]).KeyboardController;
      KeyboardController.setFocusTo("prev");
    }
  }, items)}>{null}</button>;
};