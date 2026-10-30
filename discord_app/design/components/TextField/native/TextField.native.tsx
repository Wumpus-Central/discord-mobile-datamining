// === Module 7083: TextField ===

// Module 7083 (TextField)
import useTextField from "useTextField" /* 7084 */;
import useInputClearButton from "useInputClearButton" /* 7085 */;
import useInputAttachments from "useInputAttachments" /* 7089 */;
import BaseTextField from "BaseTextField" /* 7093 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export function TextField(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const textField = useTextField.useTextField(merged, ref.ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(merged, state);
  let tmp6;
  if (null != inputClearButtonConfig) {
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp6 = { trailing: null, trailingPressableProps: null };
    const obj4 = { trailing: null, trailingPressableProps: null };
  }
  const inputAttachments = useInputAttachments.useInputAttachments(merged, tmp6);
  ({ leading, trailing, inputStyle } = inputAttachments);
  const obj5 = {};
  const merged1 = Object.assign(inputProps);
  obj5.ref = innerRef;
  obj5.leading = leading;
  obj5.trailing = trailing;
  obj5.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
}