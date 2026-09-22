// === Module 7212: SplitTextField ===

// Module 7212 (SplitTextField)
import useTextField from "useTextField" /* 6858 */;
import useInputClearButton from "useInputClearButton" /* 6859 */;
import useInputAttachments from "useInputAttachments" /* 6863 */;
import InputFieldContainer from "InputFieldContainer" /* 6865 */;
import BaseTextField from "BaseTextField" /* 6867 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = noop.forwardRef((size, arg1) => {
  const inputStyles = InputFieldContainer.useInputStyles({ size: size.size, round: size.round });
  const obj2 = { size: size.size, round: size.round };
  const textField = useTextField.useTextField(size, arg1);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(size, state);
  let tmp6;
  if (null != inputClearButtonConfig) {
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp6 = { trailing: null, trailingPressableProps: null };
    const obj6 = { trailing: null, trailingPressableProps: null };
  }
  const inputAttachments = useInputAttachments.useInputAttachments(size, tmp6);
  let tmp8 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != size.leadingText) {
    tmp8 = null;
    if (size.leadingText.length > 0) {
      const obj7 = { style: inputStyles.splitBorder, children: null };
      const obj8 = {
        style(pressed) {
              let obj;
              if (pressed.pressed) {
                obj = { opacity: 0.2 };
              }
              const items = [obj];
              return items;
            }
      };
      const merged = Object.assign(size.leadingPressableProps);
      obj8.children = useInputAttachments.renderInputAttachment(undefined, size.leadingText, inputStyles.text);
      obj7.children = <React2 style={function style(pressed) {
        let obj;
        if (pressed.pressed) {
          obj = { opacity: 0.2 };
        }
        const items = [obj];
        return items;
      }} />;
      tmp8 = <React3 style={inputStyles.splitBorder}>{null}</React3>;
      const tmpResult2 = useInputAttachments;
    }
  }
  const obj9 = {};
  const merged1 = Object.assign(inputProps);
  obj9.ref = innerRef;
  obj9.leading = tmp8;
  obj9.trailing = trailing;
  obj9.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
});