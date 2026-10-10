// === Module 14261: GhostInput ===

// Module 14261 (GhostInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4833 */;
import Text_Text from "Text/Text" /* 5088 */;
import Input from "Input" /* 6286 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6287 */;
import useTextField from "useTextField" /* 6293 */;
import InputFieldContainer from "InputFieldContainer" /* 6300 */;
import NativeTextInput from "NativeTextInput" /* 6303 */;
import propsForNativeTextInput from "propsForNativeTextInput" /* 6617 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["labelId", "accessibilityLabel"];
let closure_4 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_7 = createStyles.createStyles(() => {
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let str2 = arg1;
  if (arg1 === undefined) {
    str2 = "default";
  }
  const input = {};
  const merged = Object.assign({ md: Text_Text.TextStyleSheet["text-md/semibold"], lg: Text_Text.TextStyleSheet["text-lg/semibold"] }[str]);
  if ("error" === str2) {
    let TEXT_DEFAULT = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
  }
  input.color = TEXT_DEFAULT;
  input.minWidth = 48;
  return { input, centeredContainerStyle: { alignItems: "center" } };
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = ReactCompilerGating.isReactCompilerEnabled() ? (function GhostInput(size) {
  const cResult = c.c(27);
  if (cResult[0] !== size.size) {
    const obj2 = { size: size.size };
    cResult[0] = size.size;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const inputStyles = InputFieldContainer.useInputStyles(tmp4);
  const tmp6 = closure_7(size.size, size.status);
  ({ autoFocus, required, centered } = size);
  const tmp8 = undefined === centered || centered;
  const tmpResult = InputFieldContainer;
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(size);
  if (cResult[2] !== fieldLabelA11yNative) {
    ({ labelId, accessibilityLabel } = fieldLabelA11yNative);
    const tmp15 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
    cResult[2] = fieldLabelA11yNative;
    cResult[3] = accessibilityLabel;
    cResult[4] = tmp15;
    cResult[5] = labelId;
    let tmp12 = labelId;
    let tmp11 = tmp15;
    let tmp10 = accessibilityLabel;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult5 = useFieldLabelA11yNative;
  const textField = useTextField.useTextField(size, undefined);
  ({ innerRef, inputProps } = textField);
  let prop;
  if (tmp8) {
    prop = tmp6.centeredContainerStyle;
  }
  if (cResult[6] === size.containerStyle) {
    if (cResult[7] === prop) {
      let tmp18 = cResult[8];
    }
    if (cResult[9] !== inputProps) {
      const result = propsForNativeTextInput.propsForNativeTextInput(inputProps);
      cResult[9] = inputProps;
      cResult[10] = result;
      let tmp19 = result;
      const tmpResult7 = propsForNativeTextInput;
    } else {
      tmp19 = cResult[10];
    }
    if (cResult[11] === tmp10) {
      if (cResult[12] === required) {
        let tmp21 = cResult[13];
      }
      if (cResult[14] === tmp7) {
        if (cResult[15] === tmp6.input) {
          if (cResult[16] === innerRef) {
            if (cResult[17] === tmp11) {
              if (cResult[18] === inputStyles.placeholderText.color) {
                if (cResult[19] === tmp19) {
                  if (cResult[20] === tmp21) {
                    let tmp24 = cResult[21];
                  }
                  if (cResult[22] === tmp12) {
                    if (cResult[23] === size) {
                      if (cResult[24] === tmp18) {
                        if (cResult[25] === tmp24) {
                          let tmp33 = cResult[26];
                        }
                        return tmp33;
                      }
                    }
                  }
                  const obj3 = {};
                  const merged = Object.assign(size);
                  obj3.labelId = tmp12;
                  obj3.containerStyle = tmp18;
                  obj3.children = tmp24;
                  const tmp38 = jsx(Input.Input, {});
                  cResult[22] = tmp12;
                  cResult[23] = size;
                  cResult[24] = tmp18;
                  cResult[25] = tmp24;
                  cResult[26] = tmp38;
                  tmp33 = tmp38;
                }
              }
            }
          }
        }
      }
      const obj4 = {};
      const merged1 = Object.assign(tmp19);
      const merged2 = Object.assign(tmp11);
      obj4.accessibilityLabel = tmp21;
      obj4.ref = innerRef;
      obj4.style = tmp6.input;
      obj4.placeholderTextColor = inputStyles.placeholderText.color;
      obj4.spellCheck = false;
      obj4.autoFocus = tmp7;
      const tmp32 = jsx(NativeTextInput.NativeTextInput, {});
      cResult[14] = tmp7;
      cResult[15] = tmp6.input;
      cResult[16] = innerRef;
      cResult[17] = tmp11;
      cResult[18] = inputStyles.placeholderText.color;
      cResult[19] = tmp19;
      cResult[20] = tmp21;
      cResult[21] = tmp32;
      tmp24 = tmp32;
    }
    let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(tmp10, required);
    if (requiredFieldA11yName == null) {
      requiredFieldA11yName = tmp10;
    }
    cResult[11] = tmp10;
    cResult[12] = required;
    cResult[13] = requiredFieldA11yName;
    tmp21 = requiredFieldA11yName;
    const tmpResult8 = getRequiredFieldA11yName;
  }
  const items = [size.containerStyle, prop];
  cResult[6] = size.containerStyle;
  cResult[7] = prop;
  cResult[8] = items;
  tmp18 = items;
  const tmpResult6 = useTextField;
}) : (function GhostInput(size) {
  const inputStyles = InputFieldContainer.useInputStyles({ size: size.size });
  const tmp4 = closure_7(size.size, size.status);
  const autoFocus = size.autoFocus;
  const centered = size.centered;
  let tmp6 = undefined === centered;
  if (!tmp6) {
    tmp6 = centered;
  }
  const obj2 = { size: size.size };
  const tmp5 = undefined === autoFocus || autoFocus;
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(size);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const tmpResult = useFieldLabelA11yNative;
  const tmp8 = _objectWithoutProperties(fieldLabelA11yNative, closure_4);
  const textField = useTextField.useTextField(size, undefined);
  ({ innerRef, inputProps } = textField);
  const obj3 = {};
  const merged = Object.assign(size);
  obj3.labelId = fieldLabelA11yNative.labelId;
  const items = [size.containerStyle, ];
  let prop;
  if (tmp6) {
    prop = tmp4.centeredContainerStyle;
  }
  items[1] = prop;
  obj3.containerStyle = items;
  const obj4 = {};
  const tmpResult4 = useTextField;
  const merged1 = Object.assign(propsForNativeTextInput.propsForNativeTextInput(inputProps));
  const merged2 = Object.assign(tmp8);
  const tmpResult5 = propsForNativeTextInput;
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, size.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj4.accessibilityLabel = requiredFieldA11yName;
  obj4.ref = innerRef;
  obj4.style = tmp4.input;
  obj4.placeholderTextColor = inputStyles.placeholderText.color;
  obj4.spellCheck = false;
  obj4.autoFocus = tmp5;
  obj3.children = jsx(NativeTextInput.NativeTextInput, {});
  return jsx(Input.Input, {});
});