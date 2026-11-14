// === Module 2008: ? ===

// Module 2008
import _mod1974 from "module_1974" /* 1974 */;
import disabledDefault from "disabled" /* 2001 */;
import _modDef2002 from "module_2002" /* 2002 */;
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
    icon = _modDef2002;
  }
  const toolbarContext = onPress(2007).useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isNextDisabled;
  }
  items = [onPress];
  const obj2 = { accessibilityHint: "Moves focus to the next field", accessibilityLabel: "Next", disabled, rippleRadius, style, testID: null, theme: null, onPress: null, children: null };
  const obj = onPress(2007);
  obj2.testID = onPress(2000).TEST_ID_KEYBOARD_TOOLBAR_NEXT;
  obj2.theme = theme;
  obj2.onPress = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = _mod1974.KeyboardController;
      KeyboardController.setFocusTo("next");
    }
  }, items);
  if (children == null) {
    const obj3 = { disabled, theme, type: "next" };
    children = <icon disabled={disabled} theme={theme} type="next" />;
  }
  obj2.children = children;
  return <button accessibilityHint="Moves focus to the next field" accessibilityLabel="Next" disabled={disabled} rippleRadius={rippleRadius} style={style} testID={null} theme={null} onPress={null}>{null}</button>;
};