// === Module 7131: propsForNativeTextInput ===

// Module 7131 (propsForNativeTextInput)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

let closure_0 = ["disabled", "centered", "round", "clearable"];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/propsForNativeTextInput.native.tsx");

export const propsForNativeTextInput = function propsForNativeTextInput(inputProps) {
  ({ disabled, centered, round, clearable } = inputProps);
  return _objectWithoutProperties(inputProps, closure_0);
};