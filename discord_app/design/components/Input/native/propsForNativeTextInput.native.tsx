// discord_app/design/components/Input/native/propsForNativeTextInput.native.tsx
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import size from "../../../../../_runtime/metro/00002__.js";

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
