// === Module 6455: SplitTextField ===

// Module 6455 (SplitTextField)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useTextField from "useTextField" /* 6101 */;
import useInputClearButton from "useInputClearButton" /* 6102 */;
import useInputAttachments from "useInputAttachments" /* 6103 */;
import InputFieldContainer from "InputFieldContainer" /* 6105 */;
import BaseTextField2 from "BaseTextField" /* 6107 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ Pressable: c2, View: c3 } = react_native);
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((round, arg1) => {
  let innerRef;
  let inputProps;
  let inputStyle;
  let state;
  let tmpResult8;
  let trailing;
  let obj = react2;
  const cResult = obj.c(16);
  if (cResult[0] === round.round) {
    let tmp4;
    let tmp9;
    if (cResult[1] === round.size) {
      tmp4 = cResult[2];
    }
    const tmpResult = InputFieldContainer;
    const inputStyles = tmpResult.useInputStyles(tmp4);
    const tmpResult5 = useTextField;
    const textField = tmpResult5.useTextField(round, arg1);
    ({ innerRef, inputProps, state } = textField);
    const tmpResult6 = useInputClearButton;
    const inputClearButtonConfig = tmpResult6.useInputClearButtonConfig(round, state);
    if (cResult[3] !== inputClearButtonConfig) {
      let tmp11;
      if (null != inputClearButtonConfig) {
        const obj2 = { trailing: null, trailingPressableProps: null };
        ({ content: obj6.trailing, pressableProps: obj6.trailingPressableProps } = inputClearButtonConfig);
        tmp11 = obj2;
      }
      cResult[3] = inputClearButtonConfig;
      cResult[4] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    const tmpResult7 = useInputAttachments;
    const inputAttachments = tmpResult7.useInputAttachments(round, tmp9);
    ({ trailing, inputStyle } = inputAttachments);
    if (cResult[5] === (null != round.leadingText && round.leadingText.length > 0)) {
      if (cResult[6] === round.leadingPressableProps) {
        if (cResult[7] === round.leadingText) {
          let tmp15;
          if (cResult[8] === inputStyles) {
            tmp15 = cResult[9];
          }
          if (cResult[10] === inputStyle) {
            if (cResult[11] === innerRef) {
              if (cResult[12] === inputProps) {
                if (cResult[13] === tmp15) {
                  let tmp22;
                  if (cResult[14] === trailing) {
                    tmp22 = cResult[15];
                  }
                  return tmp22;
                }
              }
            }
          }
          const BaseTextField = BaseTextField2.BaseTextField;
          const merged = Object.assign(inputProps);
          const tmp27 = <BaseTextField ref={innerRef} leading={tmp15} trailing={trailing} inputStyle={inputStyle} />;
          cResult[10] = inputStyle;
          cResult[11] = innerRef;
          cResult[12] = inputProps;
          cResult[13] = tmp15;
          cResult[14] = trailing;
          cResult[15] = tmp27;
          tmp22 = tmp27;
        }
      }
    }
    let tmp16 = null;
    if (null != round.leadingText && round.leadingText.length > 0) {
      ({
        style(pressed) {
              let obj;
              if (pressed.pressed) {
                obj = { opacity: 0.2 };
              }
              const items = [obj];
              return items;
            },
        children: tmpResult8.renderInputAttachment(undefined, round.leadingText, inputStyles.text)
      });
      const merged1 = Object.assign(round.leadingPressableProps);
      tmp16 = <_false style={inputStyles.splitBorder}>{null}</_false>;
      tmpResult8 = useInputAttachments;
    }
    cResult[5] = null != round.leadingText && round.leadingText.length > 0;
    cResult[6] = round.leadingPressableProps;
    cResult[7] = round.leadingText;
    cResult[8] = inputStyles;
    cResult[9] = tmp16;
    tmp15 = tmp16;
  }
  const obj7 = { size: round.size, round: round.round };
  cResult[0] = round.round;
  cResult[1] = round.size;
  cResult[2] = obj7;
  tmp4 = obj7;
}) : ((size, arg1) => {
  let innerRef;
  let inputProps;
  let inputStyle;
  let state;
  let tmpResult2;
  let trailing;
  let obj = InputFieldContainer;
  const obj2 = { size: size.size, round: size.round };
  const inputStyles = obj.useInputStyles(obj2);
  const obj3 = useTextField;
  const textField = obj3.useTextField(size, arg1);
  ({ inputProps, innerRef, state } = textField);
  const obj4 = useInputClearButton;
  const inputClearButtonConfig = obj4.useInputClearButtonConfig(size, state);
  let tmp6;
  if (null != inputClearButtonConfig) {
    const obj6 = { trailing: null, trailingPressableProps: null };
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp6 = obj6;
  }
  const tmpResult = useInputAttachments;
  const inputAttachments = tmpResult.useInputAttachments(size, tmp6);
  let tmp8 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != size.leadingText) {
    tmp8 = null;
    if (size.leadingText.length > 0) {
      ({
        style(pressed) {
              let obj;
              if (pressed.pressed) {
                obj = { opacity: 0.2 };
              }
              const items = [obj];
              return items;
            },
        children: tmpResult2.renderInputAttachment(undefined, size.leadingText, inputStyles.text)
      });
      const merged = Object.assign(size.leadingPressableProps);
      tmp8 = <_false style={inputStyles.splitBorder}>{null}</_false>;
      tmpResult2 = useInputAttachments;
    }
  }
  const BaseTextField = BaseTextField2.BaseTextField;
  const merged1 = Object.assign(inputProps);
  return <BaseTextField ref={innerRef} leading={tmp8} trailing={trailing} inputStyle={inputStyle} />;
}));
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = forwardRefResult;