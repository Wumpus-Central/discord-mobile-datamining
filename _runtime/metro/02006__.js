// _runtime/metro/02006__.js
import _mod1971 from "01971__.js";
import disabledDefault from "../01998_disabled.js";
import _modDef1999 from "01999__.js";
import noop from "00019__.js";

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
    icon = _modDef1999;
  }
  const toolbarContext = onPress(2004).useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isPrevDisabled;
  }
  items = [onPress];
  const obj2 = {
    accessibilityHint: "Moves focus to the previous field",
    accessibilityLabel: "Previous",
    disabled,
    rippleRadius,
    style,
    testID: null,
    theme: null,
    onPress: null,
    children: null,
  };
  const obj = onPress(2004);
  obj2.testID = onPress(1997).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS;
  obj2.theme = theme;
  obj2.onPress = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = _mod1971.KeyboardController;
      KeyboardController.setFocusTo("prev");
    }
  }, items);
  if (children == null) {
    const obj3 = { disabled, theme, type: "prev" };
    children = <icon disabled={disabled} theme={theme} type="prev" />;
  }
  obj2.children = children;
  return (
    <button
      accessibilityHint="Moves focus to the previous field"
      accessibilityLabel="Previous"
      disabled={disabled}
      rippleRadius={rippleRadius}
      style={style}
      testID={null}
      theme={null}
      onPress={null}
    >
      {null}
    </button>
  );
}
