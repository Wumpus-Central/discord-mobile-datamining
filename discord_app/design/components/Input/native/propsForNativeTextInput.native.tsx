// === Module 7174: propsForNativeTextInput ===

// Module 7174 (propsForNativeTextInput)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let closure_0 = ["disabled", "centered", "round", "clearable", "revealable"];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/propsForNativeTextInput.native.tsx");

export function propsForNativeTextInput(inputProps) {
  ({ disabled, centered, round, clearable, revealable } = inputProps);
  return _objectWithoutProperties(inputProps, closure_0);
}