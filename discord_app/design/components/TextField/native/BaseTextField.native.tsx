// === Module 6114: BaseTextField ===

// Module 6114 (BaseTextField)
import react2 from "react" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import mergeProps from "mergeProps" /* 4591 */;
import useFocus from "useFocus" /* 4592 */;
import InputFieldContainer2 from "InputFieldContainer" /* 6112 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 6115 */;
import NativeTextInput2 from "NativeTextInput" /* 6116 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((leadingIcon, ref2) => {
  let autoComplete;
  let focusProps;
  let isFocused;
  let items;
  let keyboardType;
  let secureTextEntry;
  let str2;
  let tmpResult13;
  let obj = react2;
  const cResult = obj.c(37);
  const tmp4 = null != leadingIcon.leadingIcon;
  if (cResult[0] === leadingIcon.round) {
    if (cResult[1] === leadingIcon.size) {
      let tmp5;
      if (cResult[2] === tmp4) {
        tmp5 = cResult[3];
      }
      const tmpResult = InputFieldContainer2;
      const inputStyles = tmpResult.useInputStyles(tmp5);
      const tmpResult8 = useFocus;
      const focus = tmpResult8.useFocus();
      ({ focusProps, isFocused } = focus);
      const ref = react.useRef(null);
      if (cResult[4] === leadingIcon.autoComplete) {
        if (cResult[5] === leadingIcon.enableAndroidSanitizedInputWorkaround) {
          if (cResult[6] === leadingIcon.keyboardType) {
            let tmp10;
            let tmp13;
            if (cResult[7] === leadingIcon.secureTextEntry) {
              tmp10 = cResult[8];
            }
            const onChangeText = leadingIcon.onChangeText;
            if (cResult[9] !== onChangeText) {
              const fn = function h(str) {
                let replaced = str;
                if (null != str) {
                  replaced = str.replace(/\r\n?|\n/g, " ");
                }
                if (replaced !== str) {
                  const current = ref.current;
                  if (current != null) {
                    const obj = { text: replaced };
                    current.setNativeProps(obj);
                  }
                }
                if (onChangeText != null) {
                  tmp4(replaced);
                }
              };
              cResult[9] = onChangeText;
              cResult[10] = fn;
              tmp13 = fn;
            } else {
              tmp13 = cResult[10];
            }
            if (cResult[11] === focusProps) {
              let tmp15;
              let tmp18;
              let tmp20;
              let tmp23;
              if (cResult[12] === leadingIcon) {
                tmp15 = cResult[13];
              }
              if (cResult[14] !== leadingIcon.value) {
                let replaced = str3;
                if (null != leadingIcon.value) {
                  replaced = str3.replace(/\r\n?|\n/g, " ");
                }
                cResult[14] = leadingIcon.value;
                cResult[15] = replaced;
                tmp18 = replaced;
              } else {
                tmp18 = cResult[15];
              }
              if (cResult[16] !== leadingIcon.defaultValue) {
                let replaced1 = str5;
                if (null != leadingIcon.defaultValue) {
                  replaced1 = str5.replace(/\r\n?|\n/g, " ");
                }
                cResult[16] = leadingIcon.defaultValue;
                cResult[17] = replaced1;
                tmp20 = replaced1;
              } else {
                tmp20 = cResult[17];
              }
              if (cResult[18] !== ref2) {
                const tmpResult9 = mergeProps;
                const mergeRefsResult = tmpResult9.mergeRefs(ref, ref2);
                cResult[18] = ref2;
                cResult[19] = mergeRefsResult;
                tmp23 = mergeRefsResult;
              } else {
                tmp23 = cResult[19];
              }
              if (cResult[20] === leadingIcon.inputStyle) {
                if (cResult[21] === inputStyles.padding) {
                  let tmp25;
                  if (cResult[22] === inputStyles.text) {
                    tmp25 = cResult[23];
                  }
                  if (cResult[24] === tmp13) {
                    if (cResult[25] === tmp10) {
                      if (cResult[26] === inputStyles.placeholderText.color) {
                        if (cResult[27] === tmp15) {
                          if (cResult[28] === tmp18) {
                            if (cResult[29] === tmp20) {
                              if (cResult[30] === tmp23) {
                                let tmp26;
                                if (cResult[31] === tmp25) {
                                  tmp26 = cResult[32];
                                }
                                if (cResult[33] === isFocused) {
                                  if (cResult[34] === leadingIcon) {
                                    let tmp35;
                                    if (cResult[35] === tmp26) {
                                      tmp35 = cResult[36];
                                    }
                                    return tmp35;
                                  }
                                }
                                const obj2 = { isFocused, children: items };
                                const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
                                const merged = Object.assign(leadingIcon);
                                items = [tmp14, tmp26, leadingIcon.trailing];
                                const tmp40 = React3(InputFieldContainer, obj2);
                                cResult[33] = isFocused;
                                cResult[34] = leadingIcon;
                                cResult[35] = tmp26;
                                cResult[36] = tmp40;
                                tmp35 = tmp40;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = { value: tmp18, defaultValue: tmp20, onChangeText: tmp13, ref: tmp23, style: tmp25, placeholderTextColor: inputStyles.placeholderText.color };
                  const NativeTextInput = NativeTextInput2.NativeTextInput;
                  const merged1 = Object.assign(tmp10);
                  const merged2 = Object.assign(tmp15);
                  const tmp34 = _false(NativeTextInput, obj3);
                  cResult[24] = tmp13;
                  cResult[25] = tmp10;
                  cResult[26] = inputStyles.placeholderText.color;
                  cResult[27] = tmp15;
                  cResult[28] = tmp18;
                  cResult[29] = tmp20;
                  cResult[30] = tmp23;
                  cResult[31] = tmp25;
                  cResult[32] = tmp34;
                  tmp26 = tmp34;
                }
              }
              const items1 = [, , ];
              ({ padding: arr[0], text: arr[1] } = inputStyles);
              items1[2] = leadingIcon.inputStyle;
              cResult[20] = leadingIcon.inputStyle;
              cResult[21] = inputStyles.padding;
              cResult[22] = inputStyles.text;
              cResult[23] = items1;
              tmp25 = items1;
            }
            const propsForNativeTextInput = _objectWithoutProperties.propsForNativeTextInput;
            _objectWithoutProperties;
            const tmpResult11 = mergeProps;
            const result = propsForNativeTextInput(tmpResult11.mergeProps(leadingIcon, focusProps));
            cResult[11] = focusProps;
            cResult[12] = leadingIcon;
            cResult[13] = result;
            tmp15 = result;
          }
        }
      }
      let tmp11 = null;
      if (leadingIcon.enableAndroidSanitizedInputWorkaround) {
        ({ secureTextEntry, keyboardType, autoComplete } = leadingIcon);
        if (secureTextEntry === undefined) {
          secureTextEntry = false;
        }
        if (keyboardType === undefined) {
          keyboardType = "default";
        }
        let str = "off";
        const tmpResult12 = PlatformUtils;
        if (!tmpResult12.isAndroid()) {
          str = autoComplete;
        }
        const obj4 = { autoComplete: str, secureTextEntry: tmpResult13.isAndroid() || secureTextEntry, keyboardType: str2 };
        tmpResult13 = PlatformUtils;
        tmpResult13.isAndroid() || secureTextEntry;
        str2 = "visible-password";
        const tmpResult14 = PlatformUtils;
        if (!tmpResult14.isAndroid()) {
          str2 = keyboardType;
        }
        tmp11 = obj4;
      }
      cResult[4] = leadingIcon.autoComplete;
      cResult[5] = leadingIcon.enableAndroidSanitizedInputWorkaround;
      cResult[6] = leadingIcon.keyboardType;
      cResult[7] = leadingIcon.secureTextEntry;
      cResult[8] = tmp11;
      tmp10 = tmp11;
    }
  }
  const obj5 = { size: leadingIcon.size, round: leadingIcon.round, hasLeadingIcon: tmp4 };
  cResult[0] = leadingIcon.round;
  cResult[1] = leadingIcon.size;
  cResult[2] = tmp4;
  cResult[3] = obj5;
  tmp5 = obj5;
}) : ((size, ref2) => {
  let autoComplete;
  let focusProps;
  let isFocused;
  let items1;
  let items2;
  let keyboardType;
  let replaced;
  let replaced1;
  let secureTextEntry;
  let str2;
  let tmpResult10;
  let tmpResult6;
  let obj = InputFieldContainer2;
  const obj2 = { size: size.size, round: size.round, hasLeadingIcon: null != size.leadingIcon };
  const inputStyles = obj.useInputStyles(obj2);
  const obj3 = useFocus;
  const focus = obj3.useFocus();
  ({ focusProps, isFocused } = focus);
  const ref = react.useRef(null);
  let tmp6 = null;
  if (size.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = size);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    let str = "off";
    const tmpResult = PlatformUtils;
    if (!tmpResult.isAndroid()) {
      str = autoComplete;
    }
    const obj5 = { autoComplete: str, secureTextEntry: tmpResult6.isAndroid() || secureTextEntry, keyboardType: str2 };
    tmpResult6 = PlatformUtils;
    tmpResult6.isAndroid() || secureTextEntry;
    str2 = "visible-password";
    const tmpResult7 = PlatformUtils;
    if (!tmpResult7.isAndroid()) {
      str2 = keyboardType;
    }
    tmp6 = obj5;
  }
  const onChangeText = size.onChangeText;
  const items = [onChangeText];
  const callback = react.useCallback((str) => {
    let replaced = str;
    if (null != str) {
      replaced = str.replace(/\r\n?|\n/g, " ");
    }
    if (replaced !== str) {
      const current = ref.current;
      if (current != null) {
        const obj = { text: replaced };
        current.setNativeProps(obj);
      }
    }
    if (onChangeText != null) {
      tmp4(replaced);
    }
  }, items);
  const obj6 = { isFocused, children: items1 };
  const InputFieldContainer = InputFieldContainer2.InputFieldContainer;
  const merged = Object.assign(size);
  items1 = [size.leading, , ];
  const obj7 = { value: replaced, defaultValue: replaced1, onChangeText: callback, ref: tmpResult10.mergeRefs(ref, ref2), style: items2, placeholderTextColor: inputStyles.placeholderText.color };
  const NativeTextInput = NativeTextInput2.NativeTextInput;
  const merged1 = Object.assign(tmp6);
  const propsForNativeTextInput = _objectWithoutProperties.propsForNativeTextInput;
  _objectWithoutProperties;
  const tmpResult9 = mergeProps;
  const merged2 = Object.assign(propsForNativeTextInput(tmpResult9.mergeProps(size, focusProps)));
  replaced = str3;
  if (null != size.value) {
    replaced = str3.replace(/\r\n?|\n/g, " ");
  }
  replaced1 = str5;
  if (null != size.defaultValue) {
    replaced1 = str5.replace(/\r\n?|\n/g, " ");
  }
  items2 = [, , ];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = size.inputStyle;
  tmpResult10 = mergeProps;
  items1[1] = _false(NativeTextInput, obj7);
  items1[2] = size.trailing;
  return React3(InputFieldContainer, obj6);
}));
let result = size.fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = forwardRefResult;