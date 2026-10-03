// discord_app/design/components/TextField/native/TextAreaField.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const util = prop(1126);
const native = prop(4582);
const Text_Text = prop(4886);
const useTextField = prop(6101);
const InputFieldContainer2 = prop(6105);
const propsForNativeTextInput = prop(6108);
const NativeTextInput = prop(6109);
const useCharacterLimitAnnouncement = prop(6582);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: null };
const rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
obj.maxLengthIndicator = rect;
let closure_5 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TEXT_AREA_HEIGHT = 128;
export const TextAreaField = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (disabled, arg1) => {
        let prop = require;
        let obj = dependencyMap;
        const cResult = c.c(24);
        if (cResult[0] !== disabled.disabled) {
          const obj3 = { size: "lg", round: false, disabled: disabled.disabled };
          cResult[0] = disabled.disabled;
          cResult[1] = obj3;
          let tmp3 = obj3;
        } else {
          tmp3 = cResult[1];
        }
        const inputStyles = InputFieldContainer2.useInputStyles(tmp3);
        const tmp5 = closure_5();
        const maxLength = disabled.maxLength;
        const propResult = InputFieldContainer2;
        const textField = useTextField.useTextField(disabled, arg1);
        ({ inputProps, innerRef, state } = textField);
        const propResult1 = useTextField;
        const focus = native.useFocus();
        ({ focusProps, isFocused } = focus);
        if (null != maxLength) {
          const diff = maxLength - state.value.length;
        }
        const propResult2 = native;
        const nodeText = native.getNodeText(disabled.label);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t.c2Jqed);
          cResult[2] = stringResult;
          let tmp10 = stringResult;
        } else {
          tmp10 = cResult[2];
        }
        if (cResult[3] === maxLength) {
          if (cResult[4] === state.value.length) {
            let tmp12 = cResult[5];
          }
          const characterLimitAnnouncement = useCharacterLimitAnnouncement.useCharacterLimitAnnouncement(tmp12);
          const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
          if (cResult[6] === focusProps) {
            if (cResult[7] === inputProps) {
              let tmp14 = cResult[8];
            }
            if (cResult[9] === inputStyles.padding) {
              if (cResult[10] === inputStyles.text) {
                if (cResult[11] === tmp5.area) {
                  let tmp16 = cResult[12];
                }
                if (cResult[13] === innerRef) {
                  if (cResult[14] === inputStyles.placeholderText.color) {
                    if (cResult[15] === tmp14) {
                      if (cResult[16] === tmp16) {
                        let tmp17 = cResult[17];
                      }
                      if (null == diff) {
                        if (cResult[18] === InputFieldContainer) {
                          if (cResult[19] === isFocused) {
                            if (cResult[20] === disabled) {
                              if (cResult[21] === tmp17) {
                                if (cResult[22] === null) {
                                  let tmp26 = cResult[23];
                                }
                                return tmp26;
                              }
                            }
                          }
                        }
                        const obj4 = {};
                        const merged = Object.assign(disabled);
                        obj4.isFocused = isFocused;
                        const items = [tmp17, null];
                        obj4.children = items;
                        const tmp31 = React4(InputFieldContainer, obj4);
                        cResult[18] = InputFieldContainer;
                        cResult[19] = isFocused;
                        cResult[20] = disabled;
                        cResult[21] = tmp17;
                        cResult[22] = null;
                        cResult[23] = tmp31;
                        tmp26 = tmp31;
                      } else {
                        const obj5 = { style: tmp5.maxLengthIndicator, children: null };
                        let str3 = "text-muted";
                        let str = "text-muted";
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
                        let obj6 = {
                          variant: "text-xs/semibold",
                          color: str,
                          accessibilityLabel: null,
                          children: null,
                        };
                        if (null != nodeText) {
                          const intl3 = util.intl;
                          prop = util.t["8Q+k1s"];
                          obj = { label: nodeText, remainingCharacters: diff };
                          let formatToPlainStringResult = intl3.formatToPlainString(prop, obj);
                        } else {
                          const intl2 = util.intl;
                          const obj7 = { remainingCharacters: diff };
                          formatToPlainStringResult = intl2.formatToPlainString(util.t.fR1cof, obj7);
                        }
                        obj6.accessibilityLabel = formatToPlainStringResult;
                        obj6.children = diff;
                        obj6 = React3(Text_Text.Text, obj6);
                        obj5.children = obj6;
                        React3(View, obj5);
                      }
                    }
                  }
                }
                const obj8 = {};
                const merged1 = Object.assign(tmp14);
                obj8.ref = innerRef;
                obj8.style = tmp16;
                obj8.placeholderTextColor = inputStyles.placeholderText.color;
                obj8.multiline = true;
                const tmp22 = React3(NativeTextInput.NativeTextInput, obj8);
                cResult[13] = innerRef;
                cResult[14] = inputStyles.placeholderText.color;
                cResult[15] = tmp14;
                cResult[16] = tmp16;
                cResult[17] = tmp22;
                tmp17 = tmp22;
              }
            }
            const items1 = [, ,];
            ({ padding: arr[0], text: arr[1] } = inputStyles);
            items1[2] = tmp5.area;
            cResult[9] = inputStyles.padding;
            cResult[10] = inputStyles.text;
            cResult[11] = tmp5.area;
            cResult[12] = items1;
            tmp16 = items1;
          }
          const propResult4 = useCharacterLimitAnnouncement;
          const propResult5 = propsForNativeTextInput;
          const result = propResult5.propsForNativeTextInput(native.mergeProps(inputProps, focusProps));
          cResult[6] = focusProps;
          cResult[7] = inputProps;
          cResult[8] = result;
          tmp14 = result;
          const propResult6 = native;
        }
        const obj9 = { currentLength: state.value.length, maxLength, message: tmp10 };
        cResult[3] = maxLength;
        cResult[4] = state.value.length;
        cResult[5] = obj9;
        tmp12 = obj9;
        const propResult3 = native;
      }
    : (disabled, arg1) => {
        let prop = require;
        let obj = dependencyMap;
        const inputStyles = InputFieldContainer2.useInputStyles({
          size: "lg",
          round: false,
          disabled: disabled.disabled,
        });
        const tmp3 = closure_5();
        const maxLength = disabled.maxLength;
        const obj3 = { size: "lg", round: false, disabled: disabled.disabled };
        const textField = useTextField.useTextField(disabled, arg1);
        ({ state, inputProps, innerRef } = textField);
        const focus = native.useFocus();
        let diff;
        ({ focusProps, isFocused } = focus);
        if (null != maxLength) {
          diff = maxLength - state.value.length;
        }
        const nodeText = native.getNodeText(disabled.label);
        const propResult = native;
        const obj6 = { currentLength: state.value.length, maxLength, message: null };
        const intl = util.intl;
        obj6.message = intl.string(util.t.c2Jqed);
        const characterLimitAnnouncement = useCharacterLimitAnnouncement.useCharacterLimitAnnouncement(obj6);
        const obj7 = {};
        const merged = Object.assign(disabled);
        obj7.isFocused = isFocused;
        const obj8 = {};
        const propResult1 = useCharacterLimitAnnouncement;
        const propResult2 = propsForNativeTextInput;
        const merged1 = Object.assign(propResult2.propsForNativeTextInput(native.mergeProps(inputProps, focusProps)));
        obj8.ref = innerRef;
        const items = [, ,];
        ({ padding: arr[0], text: arr[1] } = inputStyles);
        items[2] = tmp3.area;
        obj8.style = items;
        obj8.placeholderTextColor = inputStyles.placeholderText.color;
        obj8.multiline = true;
        const items1 = [React3(NativeTextInput.NativeTextInput, obj8)];
        if (null == diff) {
          items1[1] = null;
          obj7.children = items1;
          return React4(InputFieldContainer2.InputFieldContainer, obj7);
        } else {
          const obj9 = { style: tmp3.maxLengthIndicator, children: null };
          let str3 = "text-muted";
          let str = "text-muted";
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
          let obj10 = { variant: "text-xs/semibold", color: str, accessibilityLabel: null, children: null };
          if (null != nodeText) {
            const intl3 = util.intl;
            prop = util.t["8Q+k1s"];
            obj = { label: nodeText, remainingCharacters: diff };
            let formatToPlainStringResult = intl3.formatToPlainString(prop, obj);
          } else {
            const intl2 = util.intl;
            const obj11 = { remainingCharacters: diff };
            formatToPlainStringResult = intl2.formatToPlainString(util.t.fR1cof, obj11);
          }
          obj10.accessibilityLabel = formatToPlainStringResult;
          obj10.children = diff;
          obj10 = React3(Text_Text.Text, obj10);
          obj9.children = obj10;
          React3(View, obj9);
        }
        const propResult3 = native;
      },
);
