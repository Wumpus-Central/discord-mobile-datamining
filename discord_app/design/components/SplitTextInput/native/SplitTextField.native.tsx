// === Module 6648: SplitTextField ===

// Module 6648 (SplitTextField)
import c from "c" /* 576 */;
import useTextField from "useTextField" /* 6293 */;
import useInputClearButton from "useInputClearButton" /* 6294 */;
import useInputAttachments from "useInputAttachments" /* 6298 */;
import InputFieldContainer from "InputFieldContainer" /* 6300 */;
import BaseTextField from "BaseTextField" /* 6302 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = ReactCompilerGating.isReactCompilerEnabled() ? (function SplitTextField(ref) {
  const cResult = c.c(19);
  if (cResult[0] !== ref) {
    const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
    cResult[0] = ref.ref;
    cResult[1] = tmp8;
    cResult[2] = ref.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  if (cResult[3] === tmp4.round) {
    if (cResult[4] === tmp4.size) {
      let tmp9 = cResult[5];
    }
    const inputStyles = InputFieldContainer.useInputStyles(tmp9);
    const tmpResult = InputFieldContainer;
    const textField = useTextField.useTextField(tmp4, tmp5);
    ({ innerRef, inputProps, state } = textField);
    const tmpResult5 = useTextField;
    const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(tmp4, state);
    if (cResult[6] !== inputClearButtonConfig) {
      let tmp15;
      if (null != inputClearButtonConfig) {
        ({ content: obj6.trailing, pressableProps: obj6.trailingPressableProps } = inputClearButtonConfig);
        tmp15 = { trailing: null, trailingPressableProps: null };
        const obj2 = { trailing: null, trailingPressableProps: null };
      }
      cResult[6] = inputClearButtonConfig;
      cResult[7] = tmp15;
      let tmp13 = tmp15;
    } else {
      tmp13 = cResult[7];
    }
    const tmpResult6 = useInputClearButton;
    const inputAttachments = useInputAttachments.useInputAttachments(tmp4, tmp13);
    ({ trailing, inputStyle } = inputAttachments);
    let tmp18 = null != tmp4.leadingText;
    if (tmp18) {
      tmp18 = tmp4.leadingText.length > 0;
    }
    if (cResult[8] === tmp18) {
      if (cResult[9] === tmp4.leadingPressableProps) {
        if (cResult[10] === tmp4.leadingText) {
          if (cResult[11] === inputStyles) {
            let tmp19 = cResult[12];
          }
          if (cResult[13] === inputStyle) {
            if (cResult[14] === innerRef) {
              if (cResult[15] === inputProps) {
                if (cResult[16] === tmp19) {
                  if (cResult[17] === trailing) {
                    let tmp26 = cResult[18];
                  }
                  return tmp26;
                }
              }
            }
          }
          const obj3 = {};
          const merged = Object.assign(inputProps);
          obj3.ref = innerRef;
          obj3.leading = tmp19;
          obj3.trailing = trailing;
          obj3.inputStyle = inputStyle;
          const tmp31 = jsx(BaseTextField.BaseTextField, {});
          cResult[13] = inputStyle;
          cResult[14] = innerRef;
          cResult[15] = inputProps;
          cResult[16] = tmp19;
          cResult[17] = trailing;
          cResult[18] = tmp31;
          tmp26 = tmp31;
        }
      }
    }
    let tmp20 = null;
    if (tmp18) {
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
      const merged1 = Object.assign(tmp4.leadingPressableProps);
      obj5.children = useInputAttachments.renderInputAttachment(undefined, tmp4.leadingText, inputStyles.text);
      obj4.children = <React4 style={function style(pressed) {
        let obj;
        if (pressed.pressed) {
          obj = { opacity: 0.2 };
        }
        const items = [obj];
        return items;
      }} />;
      tmp20 = <hasOwnProperty style={inputStyles.splitBorder}>{null}</hasOwnProperty>;
      const tmpResult8 = useInputAttachments;
    }
    cResult[8] = tmp18;
    cResult[9] = tmp4.leadingPressableProps;
    cResult[10] = tmp4.leadingText;
    cResult[11] = inputStyles;
    cResult[12] = tmp20;
    tmp19 = tmp20;
    const tmpResult7 = useInputAttachments;
  }
  const obj7 = { size: tmp4.size, round: tmp4.round };
  cResult[3] = tmp4.round;
  cResult[4] = tmp4.size;
  cResult[5] = obj7;
  tmp9 = obj7;
}) : (function SplitTextField(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const inputStyles = InputFieldContainer.useInputStyles({ size: merged.size, round: merged.round });
  const obj2 = { size: merged.size, round: merged.round };
  const textField = useTextField.useTextField(merged, ref.ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(merged, state);
  let tmp7;
  if (null != inputClearButtonConfig) {
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp7 = { trailing: null, trailingPressableProps: null };
    const obj6 = { trailing: null, trailingPressableProps: null };
  }
  const inputAttachments = useInputAttachments.useInputAttachments(merged, tmp7);
  let tmp9 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != merged.leadingText) {
    tmp9 = null;
    if (merged.leadingText.length > 0) {
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
      const merged1 = Object.assign(merged.leadingPressableProps);
      obj8.children = useInputAttachments.renderInputAttachment(undefined, merged.leadingText, inputStyles.text);
      obj7.children = <React4 style={function style(pressed) {
        let obj;
        if (pressed.pressed) {
          obj = { opacity: 0.2 };
        }
        const items = [obj];
        return items;
      }} />;
      tmp9 = <hasOwnProperty style={inputStyles.splitBorder}>{null}</hasOwnProperty>;
      const tmp2Result2 = useInputAttachments;
    }
  }
  const obj9 = {};
  const merged2 = Object.assign(inputProps);
  obj9.ref = innerRef;
  obj9.leading = tmp9;
  obj9.trailing = trailing;
  obj9.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
});