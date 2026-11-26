// === Module 2008: ? ===

// Module 2008
import _mod1973 from "module_1973" /* 1973 */;
import disabledDefault from "disabled" /* 2000 */;
import _modDef2001 from "module_2001" /* 2001 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(19).useCallback;
const jsx = fn(21).jsx;

export default function _default(icon) {
  ({ children, onPress } = icon);
  ({ disabled, button } = icon);
  ({ rippleRadius, style } = icon);
  if (button === undefined) {
    button = disabledDefault;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = _modDef2001;
  }
  const toolbarContext = onPress(2006).useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isPrevDisabled;
  }
  items = [onPress];
  const obj2 = { accessibilityHint: "Moves focus to the previous field", accessibilityLabel: "Previous", disabled, rippleRadius, style, testID: null, theme: null, onPress: null, children: null };
  const obj = onPress(2006);
  obj2.testID = onPress(1999).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS;
  obj2.theme = theme;
  obj2.onPress = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = _mod1973.KeyboardController;
      KeyboardController.setFocusTo("prev");
    }
  }, items);
  if (children == null) {
    const obj3 = { disabled, theme, type: "prev" };
    children = <icon disabled={disabled} theme={theme} type="prev" />;
  }
  obj2.children = children;
  return <button accessibilityHint="Moves focus to the previous field" accessibilityLabel="Previous" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={null} theme={null} onPress={null}>{null}</button>;
};