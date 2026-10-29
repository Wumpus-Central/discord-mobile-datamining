// === Module 1883: ? ===

// Module 1883
import _mod1848 from "module_1848" /* 1848 */;
import disabledDefault from "disabled" /* 1875 */;
import _modDef1876 from "module_1876" /* 1876 */;
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
    icon = _modDef1876;
  }
  const toolbarContext = onPress(1881).useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isPrevDisabled;
  }
  const items = [onPress];
  const obj2 = { accessibilityHint: "Moves focus to the previous field", accessibilityLabel: "Previous", disabled, rippleRadius, style, testID: null, theme: null, onPress: null, children: null };
  const obj = onPress(1881);
  obj2.testID = onPress(1874).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS;
  obj2.theme = theme;
  obj2.onPress = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = _mod1848.KeyboardController;
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