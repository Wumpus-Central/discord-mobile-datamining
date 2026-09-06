// === Module 1860: ? ===

// Module 1860
import _mod1828 from "module_1828" /* 1828 */;
import "module_19";

require = fn;
const noop = fn(19);
({ useCallback: c3, useMemo: closure_4 } = noop);
get_ActivityIndicator = fn(17);
({ StyleSheet, Text: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const doneButtonContainer = StyleSheet.create({ doneButton: { fontWeight: "600", fontSize: 15 }, doneButtonContainer: { marginRight: 16, marginLeft: 8 } });

export default function _default(rippleRadius) {
  ({ children, onPress } = rippleRadius);
  let num = rippleRadius.rippleRadius;
  if (num === undefined) {
    num = 28;
  }
  ({ button, text } = rippleRadius);
  if (button === undefined) {
    button = keyboardState(theme[3]);
  }
  theme = undefined;
  let obj = onPress(theme[4]);
  keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  theme = onPress(theme[5]).useToolbarContext().theme;
  let items = [keyboardState, theme];
  const items1 = [onPress];
  const obj2 = onPress(theme[5]);
  obj = { accessibilityHint: "Closes the keyboard", accessibilityLabel: "Done", rippleRadius: num, style: doneButtonContainer.doneButtonContainer, testID: null, theme: null, onPress: null, children: null };
  const tmp4 = closure_4(() => {
    const items = [doneButton.doneButton, { color: theme[keyboardState].primary }];
    return items;
  }, items);
  obj.testID = onPress(theme[7]).TEST_ID_KEYBOARD_TOOLBAR_DONE;
  obj.theme = theme;
  obj.onPress = closure_3((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = _mod1828.KeyboardController;
      KeyboardController.dismiss();
    }
  }, items1);
  obj = { maxFontSizeMultiplier: 1.3, style: tmp4, children: null };
  if (children == null) {
    children = text;
  }
  if (children == null) {
    children = "Done";
  }
  obj.children = children;
  obj.children = <closure_5 maxFontSizeMultiplier={1.3} style={tmp4}>{null}</closure_5>;
  return <button maxFontSizeMultiplier={1.3} style={tmp4}>{null}</button>;
};