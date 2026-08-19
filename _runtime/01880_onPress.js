// === Module 1880: onPress ===

// Module 1880 (onPress)
import noopDefault from "noop" /* 19 */;
import disabledDefault from "disabled" /* 1873 */;
import itemsDefault from "items" /* 1874 */;
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
  let obj = onPress(1879);
  const toolbarContext = obj.useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isNextDisabled;
  }
  const items = [onPress];
  obj = {
    accessibilityHint: "Moves focus to the next field",
    accessibilityLabel: "Next",
    disabled,
    rippleRadius,
    style,
    testID: onPress(1872).TEST_ID_KEYBOARD_TOOLBAR_NEXT,
    theme,
    onPress: useCallback((isDefaultPrevented) => {
      if (onPress != null) {
        tmp(isDefaultPrevented);
      }
      if (!isDefaultPrevented.isDefaultPrevented()) {
        const KeyboardController = onPress(closure_1_2[5]).KeyboardController;
        KeyboardController.setFocusTo("next");
      }
    }, items),
    children: null
  };
  if (children == null) {
    obj = { disabled: null, theme: null, type: "next" };
    obj[0] = disabled;
    obj[1] = theme;
    children = tmp9(icon, obj);
  }
  obj[8] = children;
  return <button accessibilityHint="Moves focus to the next field" accessibilityLabel="Next" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={onPress(1872).TEST_ID_KEYBOARD_TOOLBAR_NEXT} theme={theme} onPress={useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(closure_1_2[5]).KeyboardController;
      KeyboardController.setFocusTo("next");
    }
  }, items)}>{null}</button>;
};