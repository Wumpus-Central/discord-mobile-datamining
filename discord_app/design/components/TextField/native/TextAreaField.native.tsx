// discord_app/design/components/TextField/native/TextAreaField.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const util = prop(1126);
const native = prop(4781);
const Text_Text = prop(5087);
const useTextField = prop(6295);
const InputFieldContainer2 = prop(6299);
const NativeTextInput = prop(6302);
const propsForNativeTextInput = prop(6616);
const useCharacterLimitAnnouncement = prop(6772);
require = fn;
let closure_2 = ["ref"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: null };
const rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
obj2.maxLengthIndicator = rect;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TEXT_AREA_HEIGHT = 128;
export const TextAreaField = ReactCompilerGating.isReactCompilerEnabled()
  ? function TextAreaField(ref) {
      let prop = require;
      let obj = dependencyMap;
      const cResult = c.c(27);
      if (cResult[0] !== ref) {
        const tmp7 = _objectWithoutProperties(ref.ref, closure_2);
        cResult[0] = ref.ref;
        cResult[1] = tmp7;
        cResult[2] = ref.ref;
        let tmp4 = ref;
        let tmp3 = tmp7;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
      }
      if (cResult[3] !== tmp3.disabled) {
        const obj3 = { size: "lg", round: false, disabled: tmp3.disabled };
        cResult[3] = tmp3.disabled;
        cResult[4] = obj3;
        let tmp8 = obj3;
      } else {
        tmp8 = cResult[4];
      }
      const inputStyles = InputFieldContainer2.useInputStyles(tmp8);
      const tmp10 = closure_7();
      const maxLength = tmp3.maxLength;
      const propResult = InputFieldContainer2;
      const textField = useTextField.useTextField(tmp3, tmp4);
      ({ inputProps, innerRef, state } = textField);
      const propResult1 = useTextField;
      const focus = native.useFocus();
      ({ focusProps, isFocused } = focus);
      if (null != maxLength) {
        const diff = maxLength - state.value.length;
      }
      const propResult2 = native;
      const nodeText = native.getNodeText(tmp3.label);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.c2Jqed);
        cResult[5] = stringResult;
        let tmp15 = stringResult;
      } else {
        tmp15 = cResult[5];
      }
      if (cResult[6] === maxLength) {
        if (cResult[7] === state.value.length) {
          let tmp17 = cResult[8];
        }
        const characterLimitAnnouncement = useCharacterLimitAnnouncement.useCharacterLimitAnnouncement(tmp17);
        const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
        if (cResult[9] === focusProps) {
          if (cResult[10] === inputProps) {
            let tmp19 = cResult[11];
          }
          if (cResult[12] === inputStyles.padding) {
            if (cResult[13] === inputStyles.text) {
              if (cResult[14] === tmp10.area) {
                let tmp21 = cResult[15];
              }
              if (cResult[16] === innerRef) {
                if (cResult[17] === inputStyles.placeholderText.color) {
                  if (cResult[18] === tmp19) {
                    if (cResult[19] === tmp21) {
                      let tmp22 = cResult[20];
                    }
                    if (null == diff) {
                      if (cResult[21] === InputFieldContainer) {
                        if (cResult[22] === isFocused) {
                          if (cResult[23] === tmp3) {
                            if (cResult[24] === tmp22) {
                              if (cResult[25] === null) {
                                let tmp31 = cResult[26];
                              }
                              return tmp31;
                            }
                          }
                        }
                      }
                      const obj4 = {};
                      const merged = Object.assign(tmp3);
                      obj4.isFocused = isFocused;
                      const items = [tmp22, null];
                      obj4.children = items;
                      const tmp36 = timestampProducer(InputFieldContainer, obj4);
                      cResult[21] = InputFieldContainer;
                      cResult[22] = isFocused;
                      cResult[23] = tmp3;
                      cResult[24] = tmp22;
                      cResult[25] = null;
                      cResult[26] = tmp36;
                      tmp31 = tmp36;
                    } else {
                      const obj5 = { style: tmp10.maxLengthIndicator, children: null };
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
                      let obj6 = { variant: "text-xs/semibold", color: str, accessibilityLabel: null, children: null };
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
                      obj6 = hasOwnProperty(Text_Text.Text, obj6);
                      obj5.children = obj6;
                      hasOwnProperty(View, obj5);
                    }
                  }
                }
              }
              const obj8 = {};
              const merged1 = Object.assign(tmp19);
              obj8.ref = innerRef;
              obj8.style = tmp21;
              obj8.placeholderTextColor = inputStyles.placeholderText.color;
              obj8.multiline = true;
              const tmp27 = hasOwnProperty(NativeTextInput.NativeTextInput, obj8);
              cResult[16] = innerRef;
              cResult[17] = inputStyles.placeholderText.color;
              cResult[18] = tmp19;
              cResult[19] = tmp21;
              cResult[20] = tmp27;
              tmp22 = tmp27;
            }
          }
          const items1 = [, ,];
          ({ padding: arr[0], text: arr[1] } = inputStyles);
          items1[2] = tmp10.area;
          cResult[12] = inputStyles.padding;
          cResult[13] = inputStyles.text;
          cResult[14] = tmp10.area;
          cResult[15] = items1;
          tmp21 = items1;
        }
        const propResult4 = useCharacterLimitAnnouncement;
        const propResult5 = propsForNativeTextInput;
        const result = propResult5.propsForNativeTextInput(native.mergeProps(inputProps, focusProps));
        cResult[9] = focusProps;
        cResult[10] = inputProps;
        cResult[11] = result;
        tmp19 = result;
        const propResult6 = native;
      }
      const obj9 = { currentLength: state.value.length, maxLength, message: tmp15 };
      cResult[6] = maxLength;
      cResult[7] = state.value.length;
      cResult[8] = obj9;
      tmp17 = obj9;
      const propResult3 = native;
    }
  : function TextAreaField(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      let prop = require;
      let obj = dependencyMap;
      const inputStyles = InputFieldContainer2.useInputStyles({ size: "lg", round: false, disabled: merged.disabled });
      const tmp4 = closure_7();
      const maxLength = merged.maxLength;
      const obj3 = { size: "lg", round: false, disabled: merged.disabled };
      const textField = useTextField.useTextField(merged, ref.ref);
      ({ state, inputProps, innerRef } = textField);
      const focus = native.useFocus();
      let diff;
      ({ focusProps, isFocused } = focus);
      if (null != maxLength) {
        diff = maxLength - state.value.length;
      }
      const nodeText = native.getNodeText(merged.label);
      const propResult = native;
      const obj6 = { currentLength: state.value.length, maxLength, message: null };
      const intl = util.intl;
      obj6.message = intl.string(util.t.c2Jqed);
      const characterLimitAnnouncement = useCharacterLimitAnnouncement.useCharacterLimitAnnouncement(obj6);
      const obj7 = {};
      const merged1 = Object.assign(merged);
      obj7.isFocused = isFocused;
      const obj8 = {};
      const propResult1 = useCharacterLimitAnnouncement;
      const propResult2 = propsForNativeTextInput;
      const merged2 = Object.assign(propResult2.propsForNativeTextInput(native.mergeProps(inputProps, focusProps)));
      obj8.ref = innerRef;
      const items = [, ,];
      ({ padding: arr[0], text: arr[1] } = inputStyles);
      items[2] = tmp4.area;
      obj8.style = items;
      obj8.placeholderTextColor = inputStyles.placeholderText.color;
      obj8.multiline = true;
      const items1 = [hasOwnProperty(NativeTextInput.NativeTextInput, obj8)];
      if (null == diff) {
        items1[1] = null;
        obj7.children = items1;
        return timestampProducer(InputFieldContainer2.InputFieldContainer, obj7);
      } else {
        const obj9 = { style: tmp4.maxLengthIndicator, children: null };
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
        obj10 = hasOwnProperty(Text_Text.Text, obj10);
        obj9.children = obj10;
        hasOwnProperty(View, obj9);
      }
      const propResult3 = native;
    };
