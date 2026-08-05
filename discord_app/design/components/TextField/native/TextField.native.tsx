import { InputAttachmentContainer } from "../../Input/native/useInputAttachments.native.tsx";
import { useInputClearButton } from "../../Input/native/useInputClearButton.native.tsx";
import { BaseTextField } from "BaseTextField.native.tsx";
import { useTextFieldState } from "useTextField.native.tsx";
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
  let obj = useTextFieldState /* useTextFieldState */;
  const textField = obj.useTextField(onClear, ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton /* useInputClearButton */.useInputClearButtonConfig(onClear, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    obj = { trailing: null, trailingPressableProps: null };
    ({ content: obj3[0], pressableProps: obj3[1] } = inputClearButtonConfig);
    tmp5 = obj;
  }
  const obj2 = useInputClearButton /* useInputClearButton */;
  const inputAttachments = InputAttachmentContainer /* InputAttachmentContainer */.useInputAttachments(onClear, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(inputProps);
  obj.ref = innerRef;
  obj.leading = leading;
  obj.trailing = trailing;
  obj.inputStyle = inputStyle;
  return jsx(BaseTextField /* BaseTextField */.BaseTextField, {});
});
const result = require("useTextFieldState").fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;