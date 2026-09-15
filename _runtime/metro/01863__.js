// _runtime/metro/01863__.js
import _mod1829 from "01829__.js";
import disabledDefault from "../01856_disabled.js";
import _modDef1857 from "01857__.js";
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
    icon = _modDef1857;
  }
  const toolbarContext = onPress(1862).useToolbarContext();
  const theme = toolbarContext.theme;
  if (disabled == null) {
    disabled = toolbarContext.isNextDisabled;
  }
  const items = [onPress];
  const obj2 = {
    accessibilityHint: "Moves focus to the next field",
    accessibilityLabel: "Next",
    disabled,
    rippleRadius,
    style,
    testID: null,
    theme: null,
    onPress: null,
    children: null,
  };
  const obj = onPress(1862);
  obj2.testID = onPress(1855).TEST_ID_KEYBOARD_TOOLBAR_NEXT;
  obj2.theme = theme;
  obj2.onPress = useCallback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = _mod1829.KeyboardController;
      KeyboardController.setFocusTo("next");
    }
  }, items);
  if (children == null) {
    const obj3 = { disabled, theme, type: "next" };
    children = <icon disabled={disabled} theme={theme} type="next" />;
  }
  obj2.children = children;
  return (
    <button
      accessibilityHint="Moves focus to the next field"
      accessibilityLabel="Next"
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
