// _runtime/metro/01867__.js
import Fragment from "../react/00021_Fragment.js";
import KeyboardController2 from "../01835_KeyboardController.js";
import "react";
import react from "../00019_react.js";
import react_native from "../00017_react-native.js";

let StyleSheet;
let c3;
let closure_4;
let hasOwnProperty;
({ useCallback: c3, useMemo: closure_4 } = react);
({ StyleSheet, Text: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
const doneButtonContainer = StyleSheet.create({
  doneButton: { fontWeight: "600", fontSize: 15 },
  doneButtonContainer: { marginRight: 16, marginLeft: 8 },
});

export default function _default(rippleRadius) {
  let button;
  let children;
  let doneButton;
  let keyboardState;
  let onPress;
  let text;
  let theme;
  ({ children, onPress } = rippleRadius);
  let num = rippleRadius.rippleRadius;
  if (num === undefined) {
    num = 28;
  }
  ({ button, text } = rippleRadius);
  if (button === undefined) {
    const tmp = keyboardState;
    button = keyboardState(theme[3]);
  }
  theme = undefined;
  let obj = onPress(theme[4]);
  keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  const obj2 = onPress(theme[5]);
  theme = obj2.useToolbarContext().theme;
  let items = [keyboardState, theme];
  const items1 = [onPress];
  const tmp4 = closure_4(() => {
    const items = [doneButton.doneButton];
    const obj = { color: theme[keyboardState].primary };
    items[1] = obj;
    return items;
  }, items);
  const tmp5 = closure_3((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = KeyboardController2.KeyboardController;
      KeyboardController.dismiss();
    }
  }, items1);
  if (children == null) {
    children = text;
  }
  if (children == null) {
    children = "Done";
  }
  return (
    <button
      accessibilityHint="Closes the keyboard"
      accessibilityLabel="Done"
      rippleRadius={num}
      style={doneButtonContainer.doneButtonContainer}
      testID={onPress(theme[7]).TEST_ID_KEYBOARD_TOOLBAR_DONE}
      theme={theme}
      onPress={tmp5}
    >
      {null}
    </button>
  );
}
