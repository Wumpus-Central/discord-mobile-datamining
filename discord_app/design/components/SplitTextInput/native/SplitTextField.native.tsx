// === Module 6462: SplitTextField ===

// Module 6462 (SplitTextField)
import c from "c" /* 576 */;
import useTextField from "useTextField" /* 6108 */;
import useInputClearButton from "useInputClearButton" /* 6109 */;
import useInputAttachments from "useInputAttachments" /* 6110 */;
import InputFieldContainer from "InputFieldContainer" /* 6112 */;
import BaseTextField from "BaseTextField" /* 6114 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((round, arg1) => {
  const cResult = c.c(16);
  if (cResult[0] === round.round) {
    if (cResult[1] === round.size) {
      let tmp4 = cResult[2];
    }
    const inputStyles = InputFieldContainer.useInputStyles(tmp4);
    const tmpResult = InputFieldContainer;
    const textField = useTextField.useTextField(round, arg1);
    ({ innerRef, inputProps, state } = textField);
    const tmpResult5 = useTextField;
    const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(round, state);
    if (cResult[3] !== inputClearButtonConfig) {
      let tmp11;
      if (null != inputClearButtonConfig) {
        ({ content: obj6.trailing, pressableProps: obj6.trailingPressableProps } = inputClearButtonConfig);
        tmp11 = { trailing: null, trailingPressableProps: null };
        const obj2 = { trailing: null, trailingPressableProps: null };
      }
      cResult[3] = inputClearButtonConfig;
      cResult[4] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[4];
    }
    const tmpResult6 = useInputClearButton;
    const inputAttachments = useInputAttachments.useInputAttachments(round, tmp9);
    ({ trailing, inputStyle } = inputAttachments);
    let tmp14 = null != round.leadingText;
    if (tmp14) {
      tmp14 = round.leadingText.length > 0;
    }
    if (cResult[5] === tmp14) {
      if (cResult[6] === round.leadingPressableProps) {
        if (cResult[7] === round.leadingText) {
          if (cResult[8] === inputStyles) {
            let tmp15 = cResult[9];
          }
          if (cResult[10] === inputStyle) {
            if (cResult[11] === innerRef) {
              if (cResult[12] === inputProps) {
                if (cResult[13] === tmp15) {
                  if (cResult[14] === trailing) {
                    let tmp22 = cResult[15];
                  }
                  return tmp22;
                }
              }
            }
          }
          const obj3 = {};
          const merged = Object.assign(inputProps);
          obj3.ref = innerRef;
          obj3.leading = tmp15;
          obj3.trailing = trailing;
          obj3.inputStyle = inputStyle;
          const tmp27 = jsx(BaseTextField.BaseTextField, {});
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
    if (tmp14) {
      const obj4 = { style: inputStyles.splitBorder, children: null };
      const obj5 = {
        style(pressed) {
              let obj;
              if (pressed.pressed) {
                obj = { opacity: 0.2 };
              }
              const items = [obj];
              return items;
            }
      };
      const merged1 = Object.assign(round.leadingPressableProps);
      obj5.children = useInputAttachments.renderInputAttachment(undefined, round.leadingText, inputStyles.text);
      obj4.children = <React2 style={function style(pressed) {
        let obj;
        if (pressed.pressed) {
          obj = { opacity: 0.2 };
        }
        const items = [obj];
        return items;
      }} />;
      tmp16 = <React3 style={inputStyles.splitBorder}>{null}</React3>;
      const tmpResult8 = useInputAttachments;
    }
    cResult[5] = tmp14;
    cResult[6] = round.leadingPressableProps;
    cResult[7] = round.leadingText;
    cResult[8] = inputStyles;
    cResult[9] = tmp16;
    tmp15 = tmp16;
    const tmpResult7 = useInputAttachments;
  }
  const obj7 = { size: round.size, round: round.round };
  cResult[0] = round.round;
  cResult[1] = round.size;
  cResult[2] = obj7;
  tmp4 = obj7;
}) : ((size, arg1) => {
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
}));