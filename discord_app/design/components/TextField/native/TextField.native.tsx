// === Module 6174: TextField ===

// Module 6174 (TextField)
import useTextFieldState from "useTextFieldState" /* 6175 */;
import useInputClearButton from "useInputClearButton" /* 6176 */;
import InputAttachmentContainer from "InputAttachmentContainer" /* 6180 */;
import BaseTextField from "BaseTextField" /* 6183 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const forwardRefResult = importAllResult.forwardRef((onClear, ref) => {
  let obj = useTextFieldState;
  const textField = obj.useTextField(onClear, ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(onClear, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    obj = { trailing: null, trailingPressableProps: null };
    ({ content: obj3[0], pressableProps: obj3[1] } = inputClearButtonConfig);
    tmp5 = obj;
  }
  const obj2 = useInputClearButton;
  const inputAttachments = InputAttachmentContainer.useInputAttachments(onClear, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(inputProps);
  obj.ref = innerRef;
  obj.leading = leading;
  obj.trailing = trailing;
  obj.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
});
const result = require("set").fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;