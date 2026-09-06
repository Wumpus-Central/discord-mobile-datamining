// === Module 6967: SplitTextField ===

// Module 6967 (SplitTextField)
import useTextField from "useTextField" /* 6614 */;
import useInputClearButton from "useInputClearButton" /* 6615 */;
import InputFieldContainer from "InputFieldContainer" /* 6621 */;
import BaseTextField from "BaseTextField" /* 6623 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = noop.forwardRef((size, ref) => {
  let obj = { size: size.size, isRound: size.isRound };
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = useTextField;
  const textField = obj2.useTextField(size, ref);
  ({ inputProps, innerRef, state } = textField);
  let obj3 = useInputClearButton;
  const inputClearButtonConfig = obj3.useInputClearButtonConfig(size, state);
  let tmp6;
  if (null != inputClearButtonConfig) {
    obj = { trailing: null, trailingPressableProps: null };
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp6 = obj;
  }
  let tmpResult = tmp(6619);
  const inputAttachments = tmpResult.useInputAttachments(size, tmp6);
  let tmp8 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != size.leadingText) {
    tmp8 = null;
    if (size.leadingText.length > 0) {
      const obj1 = { style: inputStyles.splitBorder, children: null };
      obj2 = {
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
      tmpResult = tmp(6619);
      obj2.children = tmpResult.renderInputAttachment(undefined, size.leadingText, inputStyles.text);
      obj1.children = <React2 style={function style(pressed) {
        let obj;
        if (pressed.pressed) {
          obj = { opacity: 0.2 };
        }
        const items = [obj];
        return items;
      }} />;
      tmp8 = <React3 style={inputStyles.splitBorder}>{null}</React3>;
    }
  }
  obj3 = {};
  const merged1 = Object.assign(inputProps);
  obj3.ref = innerRef;
  obj3.leading = tmp8;
  obj3.trailing = trailing;
  obj3.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
});