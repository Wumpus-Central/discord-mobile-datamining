// _runtime/metro/01869__.js
import react2 from "../00019_react.js";
import Fragment from "../react/00021_Fragment.js";
import KeyboardController2 from "../01835_KeyboardController.js";
import _modDef1862 from "01862__.js";
import _modDef1863 from "01863__.js";

const useCallback = react2.useCallback;
const jsx = Fragment.jsx;

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
    button = _modDef1862;
  }
  icon = icon.icon;
  if (icon === undefined) {
    icon = _modDef1863;
  }
  const obj = onPress(1868);
  const toolbarContext = obj.useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isNextDisabled;
  }
  const items = [onPress];
  const tmp8 = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = KeyboardController2.KeyboardController;
      KeyboardController.setFocusTo("next");
    }
  }, items);
  if (children == null) {
    children = <icon disabled={disabled} theme={theme} type="next" />;
  }
  return (
    <button
      accessibilityHint="Moves focus to the next field"
      accessibilityLabel="Next"
      disabled={disabled}
      rippleRadius={rippleRadius}
      style={style}
      testID={onPress(1861).TEST_ID_KEYBOARD_TOOLBAR_NEXT}
      theme={theme}
      onPress={tmp8}
    >
      {children}
    </button>
  );
}
