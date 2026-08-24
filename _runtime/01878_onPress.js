// _runtime/01878_onPress.js
import noopDefault from "00019_noop.js";
import noop from "00019_noop.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
noopDefault;
({ useCallback: c3, useMemo: c4 } = noop);
({ StyleSheet, Text: c5 } = get_ActivityIndicator);
const styles = StyleSheet.create({ doneButton: { fontWeight: "600", fontSize: 15 }, doneButtonContainer: { marginRight: 16, marginLeft: 8 } });

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
  keyboardState = undefined;
  theme = undefined;
  let obj = onPress(theme[4]);
  keyboardState = obj.useKeyboardState((appearance) => appearance.appearance);
  theme = onPress(theme[5]).useToolbarContext().theme;
  let items = [keyboardState, theme];
  const items1 = [onPress];
  const obj2 = onPress(theme[5]);
  obj = { accessibilityHint: "Closes the keyboard", accessibilityLabel: "Done", rippleRadius: num, style: doneButtonContainer.doneButtonContainer, testID: null, theme: null, onPress: null, children: null };
  const tmp4 = callback2(() => {
    const items = [closure_1_7.doneButton, { color: theme[keyboardState].primary }];
    return items;
  }, items);
  obj[4] = onPress(theme[7]).TEST_ID_KEYBOARD_TOOLBAR_DONE;
  obj[5] = theme;
  obj[6] = callback((isDefaultPrevented) => {
    if (onPress != null) {
      tmp(isDefaultPrevented);
    }
    if (!isDefaultPrevented.isDefaultPrevented()) {
      const KeyboardController = onPress(theme[6]).KeyboardController;
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
  obj[2] = children;
  obj[7] = <closure_5 maxFontSizeMultiplier={1.3} style={tmp4}>{null}</closure_5>;
  return <button maxFontSizeMultiplier={1.3} style={tmp4}>{null}</button>;
};