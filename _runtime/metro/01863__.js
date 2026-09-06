// _runtime/metro/01863__.js
import _mod1828 from "01828__.js";
import disabledDefault from "../01855_disabled.js";
import _modDef1856 from "01856__.js";
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
    icon = _modDef1856;
  }
  let obj = onPress(1861);
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
    testID: onPress(1854).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS,
    theme,
    onPress: useCallback((isDefaultPrevented) => {
      if (onPress != null) {
        tmp(isDefaultPrevented);
      }
      if (!isDefaultPrevented.isDefaultPrevented()) {
        const KeyboardController = _mod1828.KeyboardController;
        KeyboardController.setFocusTo("prev");
      }
    }, items),
    children: null,
  };
  if (children == null) {
    obj = { disabled, theme, type: "prev" };
    children = tmp9(icon, obj);
  }
  obj.children = children;
  return (
    <button
      accessibilityHint="Moves focus to the previous field"
      accessibilityLabel="Previous"
      disabled={disabled}
      rippleRadius={rippleRadius}
      style={style}
      testID={onPress(1854).TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS}
      theme={theme}
      onPress={useCallback((isDefaultPrevented) => {
        if (onPress != null) {
          tmp(isDefaultPrevented);
        }
        if (!isDefaultPrevented.isDefaultPrevented()) {
          const KeyboardController = _mod1828.KeyboardController;
          KeyboardController.setFocusTo("prev");
        }
      }, items)}
    >
      {null}
    </button>
  );
}
