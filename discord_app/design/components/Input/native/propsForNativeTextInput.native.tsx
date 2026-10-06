// === Module 6115: _objectWithoutProperties ===

// Module 6115 (_objectWithoutProperties)
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import size from "module_2" /* 2 */;

let closure_0 = ["disabled", "centered", "round", "clearable"];
const result = size.fileFinishedImporting("design/components/Input/native/propsForNativeTextInput.native.tsx");

export const propsForNativeTextInput = function propsForNativeTextInput(inputProps) {
  let centered;
  let clearable;
  let disabled;
  let round;
  ({ disabled, centered, round, clearable } = inputProps);
  return _objectWithoutProperties(inputProps, closure_0);
};