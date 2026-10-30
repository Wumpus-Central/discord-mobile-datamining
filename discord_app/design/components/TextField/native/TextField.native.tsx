// discord_app/design/components/TextField/native/TextField.native.tsx
import useTextField from "useTextField.native.tsx";
import useInputClearButton from "../../Input/native/useInputClearButton.native.tsx";
import useInputAttachments from "../../Input/native/useInputAttachments.native.tsx";
import BaseTextField from "BaseTextField.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
