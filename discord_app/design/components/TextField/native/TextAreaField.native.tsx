// === Module 6588: TextAreaField ===

// Module 6588 (TextAreaField)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 4588 */;
import Text_Text from "Text/Text" /* 4892 */;
import useTextField from "useTextField" /* 6108 */;
import InputFieldContainer2 from "InputFieldContainer" /* 6112 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 6115 */;
import NativeTextInput2 from "NativeTextInput" /* 6116 */;
import useCharacterLimitAnnouncement2 from "useCharacterLimitAnnouncement" /* 6589 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let rect;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: rect };
rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((disabled, arg1) => {
  let Text;
  let diff;
  let focusProps;
  let formatToPlainStringResult;
  let innerRef;
  let inputProps;
  let isFocused;
  let items;
  let obj4;
  let state;
  let tmp11;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(24);
  if (cResult[0] !== disabled.disabled) {
    const obj2 = { size: "lg", round: false, disabled: disabled.disabled };
    cResult[0] = disabled.disabled;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = InputFieldContainer2;
  const inputStyles = tmpResult.useInputStyles(tmp4);
  const tmp6 = closure_5();
  const maxLength = disabled.maxLength;
  const tmpResult7 = useTextField;
  const textField = tmpResult7.useTextField(disabled, arg1);
  ({ inputProps, innerRef, state } = textField);
  const tmpResult8 = native;
  const focus = tmpResult8.useFocus();
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const tmpResult9 = native;
  const nodeText = tmpResult9.getNodeText(disabled.label);
  const length = state.value.length;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.c2Jqed);
    cResult[2] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === maxLength) {
    let tmp13;
    if (cResult[4] === state.value.length) {
      tmp13 = cResult[5];
    }
    const tmpResult10 = useCharacterLimitAnnouncement2;
    const characterLimitAnnouncement = tmpResult10.useCharacterLimitAnnouncement(tmp13);
    const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
    if (cResult[6] === focusProps) {
      let tmp15;
      if (cResult[7] === inputProps) {
        tmp15 = cResult[8];
      }
      if (cResult[9] === inputStyles.padding) {
        if (cResult[10] === inputStyles.text) {
          let tmp18;
          if (cResult[11] === tmp6.area) {
            tmp18 = cResult[12];
          }
          if (cResult[13] === innerRef) {
            if (cResult[14] === inputStyles.placeholderText.color) {
              if (cResult[15] === tmp15) {
                let tmp19;
                if (cResult[16] === tmp18) {
                  tmp19 = cResult[17];
                }
                let tmp33Result = null;
                if (null != diff) {
                  let str3 = "text-muted";
                  let str = "text-muted";
                  const obj3 = { style: tmp6.maxLengthIndicator, children: _false(Text, obj4) };
                  Text = Text_Text.Text;
                  if (null != maxLength) {
                    str = str3;
                    if (null != diff) {
                      let str2 = "text-feedback-critical";
                      if (diff > 0) {
                        if (diff < maxLength / 9) {
                          str3 = "text-feedback-warning";
                        }
                        str2 = str3;
                      }
                      str = str2;
                    }
                  }
                  obj4 = { variant: "text-xs/semibold", color: str, accessibilityLabel: formatToPlainStringResult, children: diff };
                  if (null != nodeText) {
                    const intl3 = intl4.intl;
                    const obj5 = { label: nodeText, remainingCharacters: diff };
                    formatToPlainStringResult = intl3.formatToPlainString(intl4.t["8Q+k1s"], obj5);
                  } else {
                    const intl2 = intl4.intl;
                    const obj6 = { remainingCharacters: diff };
                    formatToPlainStringResult = intl2.formatToPlainString(intl4.t.fR1cof, obj6);
                  }
                  tmp33Result = _false(View, obj3);
                }
                if (cResult[18] === InputFieldContainer) {
                  if (cResult[19] === isFocused) {
                    if (cResult[20] === disabled) {
                      if (cResult[21] === tmp19) {
                        let tmp27;
                        if (cResult[22] === tmp33Result) {
                          tmp27 = cResult[23];
                        }
                        return tmp27;
                      }
                    }
                  }
                }
                const obj7 = { isFocused, children: items };
                const merged = Object.assign(disabled);
                items = [tmp19, tmp33Result];
                const tmp32 = React3(InputFieldContainer, obj7);
                cResult[18] = InputFieldContainer;
                cResult[19] = isFocused;
                cResult[20] = disabled;
                cResult[21] = tmp19;
                cResult[22] = tmp33Result;
                cResult[23] = tmp32;
                tmp27 = tmp32;
              }
            }
          }
          const obj8 = { ref: innerRef, style: tmp18, placeholderTextColor: inputStyles.placeholderText.color, multiline: true };
          const NativeTextInput = NativeTextInput2.NativeTextInput;
          const merged1 = Object.assign(tmp15);
          const tmp24 = _false(NativeTextInput, obj8);
          cResult[13] = innerRef;
          cResult[14] = inputStyles.placeholderText.color;
          cResult[15] = tmp15;
          cResult[16] = tmp18;
          cResult[17] = tmp24;
          tmp19 = tmp24;
        }
      }
      const items1 = [, , ];
      ({ padding: arr[0], text: arr[1] } = inputStyles);
      items1[2] = tmp6.area;
      cResult[9] = inputStyles.padding;
      cResult[10] = inputStyles.text;
      cResult[11] = tmp6.area;
      cResult[12] = items1;
      tmp18 = items1;
    }
    const propsForNativeTextInput = _objectWithoutProperties.propsForNativeTextInput;
    _objectWithoutProperties;
    const tmpResult12 = native;
    const result = propsForNativeTextInput(tmpResult12.mergeProps(inputProps, focusProps));
    cResult[6] = focusProps;
    cResult[7] = inputProps;
    cResult[8] = result;
    tmp15 = result;
  }
  const obj9 = { currentLength: length, maxLength, message: tmp11 };
  cResult[3] = maxLength;
  cResult[4] = state.value.length;
  cResult[5] = obj9;
  tmp13 = obj9;
}) : ((disabled, arg1) => {
  let Text;
  let focusProps;
  let formatToPlainStringResult;
  let innerRef;
  let inputProps;
  let intl;
  let isFocused;
  let items;
  let items1;
  let obj9;
  let state;
  const obj = InputFieldContainer2;
  const obj2 = { size: "lg", round: false, disabled: disabled.disabled };
  const inputStyles = obj.useInputStyles(obj2);
  const tmp4 = closure_5();
  const maxLength = disabled.maxLength;
  const obj3 = useTextField;
  const textField = obj3.useTextField(disabled, arg1);
  ({ state, inputProps, innerRef } = textField);
  const obj4 = native;
  const focus = obj4.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const tmpResult = native;
  const nodeText = tmpResult.getNodeText(disabled.label);
  const obj5 = { currentLength: state.value.length, maxLength, message: intl.string(intl4.t.c2Jqed) };
  const useCharacterLimitAnnouncement = useCharacterLimitAnnouncement2.useCharacterLimitAnnouncement;
  useCharacterLimitAnnouncement2;
  intl = intl4.intl;
  const characterLimitAnnouncement = useCharacterLimitAnnouncement(obj5);
  const obj6 = { isFocused, children: items1 };
  const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
  const merged = Object.assign(disabled);
  const obj7 = { ref: innerRef, style: items, placeholderTextColor: inputStyles.placeholderText.color, multiline: true };
  const NativeTextInput = NativeTextInput2.NativeTextInput;
  const propsForNativeTextInput = _objectWithoutProperties.propsForNativeTextInput;
  _objectWithoutProperties;
  const tmpResult6 = native;
  const merged1 = Object.assign(propsForNativeTextInput(tmpResult6.mergeProps(inputProps, focusProps)));
  items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp4.area;
  items1 = [_false(NativeTextInput, obj7), ];
  let tmp13Result = null;
  if (null != diff) {
    let str3 = "text-muted";
    let str = "text-muted";
    const obj8 = { style: tmp4.maxLengthIndicator, children: _false(Text, obj9) };
    Text = Text_Text.Text;
    if (null != maxLength) {
      str = str3;
      if (null != diff) {
        let str2 = "text-feedback-critical";
        if (diff > 0) {
          if (diff < maxLength / 9) {
            str3 = "text-feedback-warning";
          }
          str2 = str3;
        }
        str = str2;
      }
    }
    obj9 = { variant: "text-xs/semibold", color: str, accessibilityLabel: formatToPlainStringResult, children: diff };
    if (null != nodeText) {
      const intl3 = intl4.intl;
      const obj10 = { label: nodeText, remainingCharacters: diff };
      formatToPlainStringResult = intl3.formatToPlainString(intl4.t["8Q+k1s"], obj10);
    } else {
      const intl2 = intl4.intl;
      const obj11 = { remainingCharacters: diff };
      formatToPlainStringResult = intl2.formatToPlainString(intl4.t.fR1cof, obj11);
    }
    tmp13Result = _false(View, obj8);
  }
  items1[1] = tmp13Result;
  return React3(InputFieldContainer, obj6);
}));
let result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TEXT_AREA_HEIGHT = 128;
export const TextAreaField = forwardRefResult;