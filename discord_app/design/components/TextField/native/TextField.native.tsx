// discord_app/design/components/TextField/native/TextField.native.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((onClear, ref) => {
  let innerRef;
  let inputProps;
  let inputStyle;
  let leading;
  let state;
  let trailing;
  let obj = require("useTextField.native.tsx") /* useTextFieldState */;
  const textField = obj.useTextField(onClear, ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = require("../../Input/native/useInputClearButton.native.tsx") /* useInputClearButton */.useInputClearButtonConfig(onClear, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    obj = { trailing: null, trailingPressableProps: null };
    ({ content: obj3[0], pressableProps: obj3[1] } = inputClearButtonConfig);
    tmp5 = obj;
  }
  const obj2 = require("../../Input/native/useInputClearButton.native.tsx") /* useInputClearButton */;
  const inputAttachments = require("../../Input/native/useInputAttachments.native.tsx") /* InputAttachmentContainer */.useInputAttachments(onClear, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(inputProps);
  obj.ref = innerRef;
  obj.leading = leading;
  obj.trailing = trailing;
  obj.inputStyle = inputStyle;
  return jsx(require("BaseTextField.native.tsx") /* BaseTextField */.BaseTextField, {});
});
const result = require("useTextFieldState").fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;