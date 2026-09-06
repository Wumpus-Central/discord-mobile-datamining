// _runtime/metro/01862__.js
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
    disabled = toolbarContext.isNextDisabled;
  }
  const items = [onPress];
  obj = {
    accessibilityHint: "Moves focus to the next field",
    accessibilityLabel: "Next",
    disabled,
    rippleRadius,
    style,
    testID: onPress(1854).TEST_ID_KEYBOARD_TOOLBAR_NEXT,
    theme,
    onPress: useCallback((isDefaultPrevented) => {
      if (onPress != null) {
        tmp(isDefaultPrevented);
      }
      if (!isDefaultPrevented.isDefaultPrevented()) {
        const KeyboardController = _mod1828.KeyboardController;
        KeyboardController.setFocusTo("next");
      }
    }, items),
    children: null,
  };
  if (children == null) {
    obj = { disabled, theme, type: "next" };
    children = <icon disabled={disabled} theme={theme} type="next" />;
  }
  obj.children = children;
  return (
    <button
      accessibilityHint="Moves focus to the next field"
      accessibilityLabel="Next"
      disabled={disabled}
      rippleRadius={rippleRadius}
      style={style}
      testID={onPress(1854).TEST_ID_KEYBOARD_TOOLBAR_NEXT}
      theme={theme}
      onPress={useCallback((isDefaultPrevented) => {
        if (onPress != null) {
          tmp(isDefaultPrevented);
        }
        if (!isDefaultPrevented.isDefaultPrevented()) {
          const KeyboardController = _mod1828.KeyboardController;
          KeyboardController.setFocusTo("next");
        }
      }, items)}
    >
      {null}
    </button>
  );
}
