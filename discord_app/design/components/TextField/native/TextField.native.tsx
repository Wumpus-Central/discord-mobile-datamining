// === Module 6613: TextField ===

// Module 6613 (TextField)
import useTextField from "useTextField" /* 6614 */;
import useInputClearButton from "useInputClearButton" /* 6615 */;
import useInputAttachments from "useInputAttachments" /* 6619 */;
import BaseTextField from "BaseTextField" /* 6623 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = noop.forwardRef((onClear, arg1) => {
  let obj = useTextField;
  const textField = obj.useTextField(onClear, arg1);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(onClear, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    obj = { trailing: null, trailingPressableProps: null };
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp5 = obj;
  }
  const inputAttachments = useInputAttachments.useInputAttachments(onClear, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  obj = {};
  const merged = Object.assign(inputProps);
  obj.ref = innerRef;
  obj.leading = leading;
  obj.trailing = trailing;
  obj.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
});