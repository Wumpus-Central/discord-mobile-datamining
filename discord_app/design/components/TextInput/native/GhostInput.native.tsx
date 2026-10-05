// discord_app/design/components/TextInput/native/GhostInput.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useFieldLabelA11yNative from "../../../../../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx";
import Text_Text from "../../Text/native/Text.tsx";
import getRequiredFieldA11yName from "../../Input/native/getRequiredFieldA11yName.native.tsx";
import useTextField from "../../TextField/native/useTextField.native.tsx";
import InputFieldContainer from "../../Input/native/InputFieldContainer.native.tsx";
import _objectWithoutProperties2 from "../../Input/native/propsForNativeTextInput.native.tsx";
import NativeTextInput2 from "../../Input/native/NativeTextInput.native.tsx";
import Input2 from "../../Input/native/Input.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_3 = ["labelId", "accessibilityLabel"];
let closure_4 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles(() => {
  let TEXT_DEFAULT;
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let str2 = arg1;
  if (arg1 === undefined) {
    str2 = "default";
  }
  const input = { color: TEXT_DEFAULT, minWidth: 48 };
  const obj = { md: Text_Text.TextStyleSheet["text-md/semibold"], lg: Text_Text.TextStyleSheet["text-lg/semibold"] };
  const merged = Object.assign(obj[str]);
  if ("error" === str2) {
    TEXT_DEFAULT = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
  }
  return { input, centeredContainerStyle: { alignItems: "center" } };
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (size) => {
      let accessibilityLabel;
      let autoFocus;
      let centered;
      let innerRef;
      let inputProps;
      let labelId;
      let required;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(29);
      if (cResult[0] !== size.size) {
        const obj2 = { size: size.size };
        cResult[0] = size.size;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = InputFieldContainer;
      const inputStyles = tmpResult.useInputStyles(tmp4);
      const tmp6 = closure_7(size.size, size.status);
      ({ autoFocus, required, centered } = size);
      const tmp8 = undefined === centered || centered;
      const tmpResult5 = useFieldLabelA11yNative;
      const fieldLabelA11yNative = tmpResult5.useFieldLabelA11yNative(size);
      if (cResult[2] !== fieldLabelA11yNative) {
        ({ labelId, accessibilityLabel } = fieldLabelA11yNative);
        const tmp15 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
        cResult[2] = fieldLabelA11yNative;
        cResult[3] = accessibilityLabel;
        cResult[4] = tmp15;
        cResult[5] = labelId;
        tmp12 = labelId;
        tmp11 = tmp15;
        tmp10 = accessibilityLabel;
      } else {
        tmp10 = cResult[3];
        tmp11 = cResult[4];
        tmp12 = cResult[5];
      }
      const tmpResult6 = useTextField;
      const textField = tmpResult6.useTextField(size, undefined);
      ({ innerRef, inputProps } = textField);
      let prop;
      if (tmp8) {
        prop = tmp6.centeredContainerStyle;
      }
      if (cResult[6] === size.containerStyle) {
        let tmp18;
        let tmp19;
        if (cResult[7] === prop) {
          tmp18 = cResult[8];
        }
        if (cResult[9] !== inputProps) {
          const tmpResult7 = _objectWithoutProperties2;
          const result = tmpResult7.propsForNativeTextInput(inputProps);
          cResult[9] = inputProps;
          cResult[10] = result;
          tmp19 = result;
        } else {
          tmp19 = cResult[10];
        }
        if (cResult[11] === tmp10) {
          let tmp21;
          let tmp24;
          if (cResult[12] === required) {
            tmp21 = cResult[13];
          }
          if (cResult[14] !== tmp6.input) {
            const items = [tmp6.input];
            cResult[14] = tmp6.input;
            cResult[15] = items;
            tmp24 = items;
          } else {
            tmp24 = cResult[15];
          }
          if (cResult[16] === (undefined === autoFocus || autoFocus)) {
            if (cResult[17] === innerRef) {
              if (cResult[18] === tmp11) {
                if (cResult[19] === inputStyles.placeholderText.color) {
                  if (cResult[20] === tmp19) {
                    if (cResult[21] === tmp21) {
                      let tmp25;
                      if (cResult[22] === tmp24) {
                        tmp25 = cResult[23];
                      }
                      if (cResult[24] === tmp12) {
                        if (cResult[25] === size) {
                          if (cResult[26] === tmp18) {
                            let tmp34;
                            if (cResult[27] === tmp25) {
                              tmp34 = cResult[28];
                            }
                            return tmp34;
                          }
                        }
                      }
                      const Input = Input2.Input;
                      const merged = Object.assign(size);
                      const tmp39 = (
                        <Input labelId={tmp12} containerStyle={tmp18}>
                          {tmp25}
                        </Input>
                      );
                      cResult[24] = tmp12;
                      cResult[25] = size;
                      cResult[26] = tmp18;
                      cResult[27] = tmp25;
                      cResult[28] = tmp39;
                      tmp34 = tmp39;
                    }
                  }
                }
              }
            }
          }
          const NativeTextInput = NativeTextInput2.NativeTextInput;
          const merged1 = Object.assign(tmp19);
          const merged2 = Object.assign(tmp11);
          const tmp33 = (
            <NativeTextInput
              accessibilityLabel={tmp21}
              ref={innerRef}
              style={tmp24}
              placeholderTextColor={inputStyles.placeholderText.color}
              spellCheck={false}
              autoFocus={undefined === autoFocus || autoFocus}
            />
          );
          cResult[16] = undefined === autoFocus || autoFocus;
          cResult[17] = innerRef;
          cResult[18] = tmp11;
          cResult[19] = inputStyles.placeholderText.color;
          cResult[20] = tmp19;
          cResult[21] = tmp21;
          cResult[22] = tmp24;
          cResult[23] = tmp33;
          tmp25 = tmp33;
        }
        const tmpResult8 = getRequiredFieldA11yName;
        let requiredFieldA11yName = tmpResult8.getRequiredFieldA11yName(tmp10, required);
        if (requiredFieldA11yName == null) {
          requiredFieldA11yName = tmp10;
        }
        cResult[11] = tmp10;
        cResult[12] = required;
        cResult[13] = requiredFieldA11yName;
        tmp21 = requiredFieldA11yName;
      }
      const items1 = [size.containerStyle, prop];
      cResult[6] = size.containerStyle;
      cResult[7] = prop;
      cResult[8] = items1;
      tmp18 = items1;
    }
  : (size) => {
      let innerRef;
      let inputProps;
      const obj = InputFieldContainer;
      const obj2 = { size: size.size };
      const inputStyles = obj.useInputStyles(obj2);
      const tmp4 = closure_7(size.size, size.status);
      const autoFocus = size.autoFocus;
      const centered = size.centered;
      let tmp6 = undefined === centered;
      const required = size.required;
      const tmp5 = undefined === autoFocus || autoFocus;
      if (!tmp6) {
        tmp6 = centered;
      }
      const tmpResult = useFieldLabelA11yNative;
      const fieldLabelA11yNative = tmpResult.useFieldLabelA11yNative(size);
      const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
      const labelId = fieldLabelA11yNative.labelId;
      const tmp8 = _objectWithoutProperties(fieldLabelA11yNative, closure_4);
      const tmpResult4 = useTextField;
      const textField = tmpResult4.useTextField(size, undefined);
      ({ innerRef, inputProps } = textField);
      const Input = Input2.Input;
      const merged = Object.assign(size);
      const items = [size.containerStyle];
      let prop;
      if (tmp6) {
        prop = tmp4.centeredContainerStyle;
      }
      items[1] = prop;
      const NativeTextInput = NativeTextInput2.NativeTextInput;
      const tmpResult5 = _objectWithoutProperties2;
      const merged1 = Object.assign(tmpResult5.propsForNativeTextInput(inputProps));
      const merged2 = Object.assign(tmp8);
      const tmpResult6 = getRequiredFieldA11yName;
      let requiredFieldA11yName = tmpResult6.getRequiredFieldA11yName(accessibilityLabel, required);
      if (requiredFieldA11yName == null) {
        requiredFieldA11yName = accessibilityLabel;
      }
      const items1 = [tmp4.input];
      return (
        <Input labelId={labelId} containerStyle={items}>
          <NativeTextInput
            accessibilityLabel={requiredFieldA11yName}
            ref={innerRef}
            style={items1}
            placeholderTextColor={inputStyles.placeholderText.color}
            spellCheck={false}
            autoFocus={tmp5}
          />
        </Input>
      );
    };
let result = size.fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = tmp3;
