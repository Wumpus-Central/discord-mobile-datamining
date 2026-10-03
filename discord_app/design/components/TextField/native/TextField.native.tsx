// === Module 6100: TextField ===

// Module 6100 (TextField)
import c from "c" /* 576 */;
import useTextField from "useTextField" /* 6101 */;
import useInputClearButton from "useInputClearButton" /* 6102 */;
import useInputAttachments from "useInputAttachments" /* 6103 */;
import BaseTextField from "BaseTextField" /* 6107 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(8);
  const textField = useTextField.useTextField(arg0, arg1);
  ({ innerRef, inputProps, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(arg0, state);
  if (cResult[0] !== inputClearButtonConfig) {
    let tmp8;
    if (null != inputClearButtonConfig) {
      ({ content: obj4.trailing, pressableProps: obj4.trailingPressableProps } = inputClearButtonConfig);
      tmp8 = { trailing: null, trailingPressableProps: null };
      const obj5 = { trailing: null, trailingPressableProps: null };
    }
    cResult[0] = inputClearButtonConfig;
    cResult[1] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  const inputAttachments = useInputAttachments.useInputAttachments(arg0, tmp6);
  ({ leading, trailing, inputStyle } = inputAttachments);
  if (cResult[2] === inputStyle) {
    if (cResult[3] === innerRef) {
      if (cResult[4] === inputProps) {
        if (cResult[5] === leading) {
          if (cResult[6] === trailing) {
            let tmp10 = cResult[7];
          }
          return tmp10;
        }
      }
    }
  }
  const obj6 = {};
  const merged = Object.assign(inputProps);
  obj6.ref = innerRef;
  obj6.leading = leading;
  obj6.trailing = trailing;
  obj6.inputStyle = inputStyle;
  const tmp12 = jsx(BaseTextField.BaseTextField, {});
  cResult[2] = inputStyle;
  cResult[3] = innerRef;
  cResult[4] = inputProps;
  cResult[5] = leading;
  cResult[6] = trailing;
  cResult[7] = tmp12;
  tmp10 = tmp12;
  const tmpResult = useInputAttachments;
}) : ((arg0, arg1) => {
  const textField = useTextField.useTextField(arg0, arg1);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(arg0, state);
  let tmp5;
  if (null != inputClearButtonConfig) {
    ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
    tmp5 = { trailing: null, trailingPressableProps: null };
    const obj4 = { trailing: null, trailingPressableProps: null };
  }
  const inputAttachments = useInputAttachments.useInputAttachments(arg0, tmp5);
  ({ leading, trailing, inputStyle } = inputAttachments);
  const obj5 = {};
  const merged = Object.assign(inputProps);
  obj5.ref = innerRef;
  obj5.leading = leading;
  obj5.trailing = trailing;
  obj5.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
}));