// === Module 7626: TextField ===

// Module 7626 (TextField)
import useTextField from "useTextField" /* 7627 */;
import useInputClearButton from "useInputClearButton" /* 7628 */;
import useInputRevealButton from "useInputRevealButton" /* 7632 */;
import useInputAttachments from "useInputAttachments" /* 7637 */;
import BaseTextField from "BaseTextField" /* 7641 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export function TextField(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const textField = useTextField.useTextField(merged, ref.ref);
  ({ inputProps, state, innerRef } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(merged, state);
  let inputRevealButtonConfig = useInputRevealButton.useInputRevealButtonConfig(merged, state);
  if (inputRevealButtonConfig == null) {
    inputRevealButtonConfig = inputClearButtonConfig;
  }
  let tmp7;
  if (null != inputRevealButtonConfig) {
    ({ content: obj4.trailing, pressableProps: obj4.trailingPressableProps } = inputRevealButtonConfig);
    tmp7 = { trailing: null, trailingPressableProps: null };
    const obj5 = { trailing: null, trailingPressableProps: null };
  }
  const inputAttachments = useInputAttachments.useInputAttachments(merged, tmp7);
  ({ leading, trailing, inputStyle } = inputAttachments);
  const obj6 = {};
  const merged1 = Object.assign(inputProps);
  obj6.ref = innerRef;
  obj6.leading = leading;
  obj6.trailing = trailing;
  obj6.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
}