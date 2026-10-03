// === Module 6107: BaseTextField ===

// Module 6107 (BaseTextField)
import c from "c" /* 576 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import mergeProps from "mergeProps" /* 4585 */;
import useFocus from "useFocus" /* 4586 */;
import InputFieldContainer from "InputFieldContainer" /* 6105 */;
import propsForNativeTextInput from "propsForNativeTextInput" /* 6108 */;
import NativeTextInput from "NativeTextInput" /* 6109 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((leadingIcon, ref2) => {
  const cResult = c.c(37);
  if (cResult[0] === leadingIcon.round) {
    if (cResult[1] === leadingIcon.size) {
      if (cResult[2] === tmp4) {
        let tmp5 = cResult[3];
      }
      const inputStyles = InputFieldContainer.useInputStyles(tmp5);
      const tmpResult = InputFieldContainer;
      const focus = useFocus.useFocus();
      ({ focusProps, isFocused } = focus);
      const tmpResult8 = useFocus;
      if (cResult[4] === leadingIcon.autoComplete) {
        if (cResult[5] === leadingIcon.enableAndroidSanitizedInputWorkaround) {
          if (cResult[6] === leadingIcon.keyboardType) {
            if (cResult[7] === leadingIcon.secureTextEntry) {
              let tmp10 = cResult[8];
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
              let tmp13 = fn;
            } else {
              tmp13 = cResult[10];
            }
            if (cResult[11] === focusProps) {
              if (cResult[12] === leadingIcon) {
                let tmp15 = cResult[13];
              }
              if (cResult[14] !== leadingIcon.value) {
                let replaced = str3;
                if (null != leadingIcon.value) {
                  replaced = str3.replace(/\r\n?|\n/g, " ");
                }
                cResult[14] = leadingIcon.value;
                cResult[15] = replaced;
                let tmp17 = replaced;
              } else {
                tmp17 = cResult[15];
              }
              if (cResult[16] !== leadingIcon.defaultValue) {
                let replaced1 = str5;
                if (null != leadingIcon.defaultValue) {
                  replaced1 = str5.replace(/\r\n?|\n/g, " ");
                }
                cResult[16] = leadingIcon.defaultValue;
                cResult[17] = replaced1;
                let tmp19 = replaced1;
              } else {
                tmp19 = cResult[17];
              }
              if (cResult[18] !== ref2) {
                const mergeRefsResult = mergeProps.mergeRefs(ref, ref2);
                cResult[18] = ref2;
                cResult[19] = mergeRefsResult;
                let tmp22 = mergeRefsResult;
                const tmpResult9 = mergeProps;
              } else {
                tmp22 = cResult[19];
              }
              if (cResult[20] === leadingIcon.inputStyle) {
                if (cResult[21] === inputStyles.padding) {
                  if (cResult[22] === inputStyles.text) {
                    let tmp24 = cResult[23];
                  }
                  if (cResult[24] === tmp13) {
                    if (cResult[25] === tmp10) {
                      if (cResult[26] === inputStyles.placeholderText.color) {
                        if (cResult[27] === tmp15) {
                          if (cResult[28] === tmp17) {
                            if (cResult[29] === tmp19) {
                              if (cResult[30] === tmp22) {
                                if (cResult[31] === tmp24) {
                                  let tmp25 = cResult[32];
                                }
                                if (cResult[33] === isFocused) {
                                  if (cResult[34] === leadingIcon) {
                                    if (cResult[35] === tmp25) {
                                      let tmp34 = cResult[36];
                                    }
                                    return tmp34;
                                  }
                                }
                                const obj2 = {};
                                const merged = Object.assign(leadingIcon);
                                obj2.isFocused = isFocused;
                                const items = [tmp14, tmp25, leadingIcon.trailing];
                                obj2.children = items;
                                const tmp39 = React4(InputFieldContainer.InputFieldContainer, obj2);
                                cResult[33] = isFocused;
                                cResult[34] = leadingIcon;
                                cResult[35] = tmp25;
                                cResult[36] = tmp39;
                                tmp34 = tmp39;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                  const obj3 = {};
                  const merged1 = Object.assign(tmp10);
                  const merged2 = Object.assign(tmp15);
                  obj3.value = tmp17;
                  obj3.defaultValue = tmp19;
                  obj3.onChangeText = tmp13;
                  obj3.ref = tmp22;
                  obj3.style = tmp24;
                  obj3.placeholderTextColor = inputStyles.placeholderText.color;
                  const tmp33 = React3(NativeTextInput.NativeTextInput, obj3);
                  cResult[24] = tmp13;
                  cResult[25] = tmp10;
                  cResult[26] = inputStyles.placeholderText.color;
                  cResult[27] = tmp15;
                  cResult[28] = tmp17;
                  cResult[29] = tmp19;
                  cResult[30] = tmp22;
                  cResult[31] = tmp24;
                  cResult[32] = tmp33;
                  tmp25 = tmp33;
                }
              }
              const items1 = [, , ];
              ({ padding: arr[0], text: arr[1] } = inputStyles);
              items1[2] = leadingIcon.inputStyle;
              cResult[20] = leadingIcon.inputStyle;
              cResult[21] = inputStyles.padding;
              cResult[22] = inputStyles.text;
              cResult[23] = items1;
              tmp24 = items1;
            }
            const tmpResult10 = propsForNativeTextInput;
            const result = tmpResult10.propsForNativeTextInput(mergeProps.mergeProps(leadingIcon, focusProps));
            cResult[11] = focusProps;
            cResult[12] = leadingIcon;
            cResult[13] = result;
            tmp15 = result;
            const tmpResult11 = mergeProps;
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
        if (!tmpResult12.isAndroid()) {
          str = autoComplete;
        }
        const obj4 = { autoComplete: str, secureTextEntry: null, keyboardType: null };
        tmpResult12 = PlatformUtils;
        const tmpResult13 = PlatformUtils;
        obj4.secureTextEntry = PlatformUtils.isAndroid() || secureTextEntry;
        const tmp12 = PlatformUtils.isAndroid() || secureTextEntry;
        let str2 = "visible-password";
        if (!tmpResult14.isAndroid()) {
          str2 = keyboardType;
        }
        obj4.keyboardType = str2;
        tmp11 = obj4;
        tmpResult14 = PlatformUtils;
      }
      cResult[4] = leadingIcon.autoComplete;
      cResult[5] = leadingIcon.enableAndroidSanitizedInputWorkaround;
      cResult[6] = leadingIcon.keyboardType;
      cResult[7] = leadingIcon.secureTextEntry;
      cResult[8] = tmp11;
      tmp10 = tmp11;
      ref = noop.useRef(null);
    }
  }
  const obj5 = { size: leadingIcon.size, round: leadingIcon.round, hasLeadingIcon: null != leadingIcon.leadingIcon };
  cResult[0] = leadingIcon.round;
  cResult[1] = leadingIcon.size;
  cResult[2] = null != leadingIcon.leadingIcon;
  cResult[3] = obj5;
  tmp5 = obj5;
}) : ((size, ref2) => {
  const inputStyles = InputFieldContainer.useInputStyles({ size: size.size, round: size.round, hasLeadingIcon: null != size.leadingIcon });
  const obj2 = { size: size.size, round: size.round, hasLeadingIcon: null != size.leadingIcon };
  const focus = useFocus.useFocus();
  ({ focusProps, isFocused } = focus);
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
    if (!tmpResult.isAndroid()) {
      str = autoComplete;
    }
    const obj5 = { autoComplete: str, secureTextEntry: null, keyboardType: null };
    tmpResult = PlatformUtils;
    const tmpResult6 = PlatformUtils;
    obj5.secureTextEntry = PlatformUtils.isAndroid() || secureTextEntry;
    const tmp7 = PlatformUtils.isAndroid() || secureTextEntry;
    let str2 = "visible-password";
    if (!tmpResult7.isAndroid()) {
      str2 = keyboardType;
    }
    obj5.keyboardType = str2;
    tmp6 = obj5;
    tmpResult7 = PlatformUtils;
  }
  const onChangeText = size.onChangeText;
  const items = [onChangeText];
  const callback = noop.useCallback((str) => {
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
  const obj6 = {};
  const merged = Object.assign(size);
  obj6.isFocused = isFocused;
  const items1 = [size.leading, , ];
  const obj7 = {};
  const merged1 = Object.assign(tmp6);
  const ref = noop.useRef(null);
  const tmpResult8 = propsForNativeTextInput;
  const merged2 = Object.assign(tmpResult8.propsForNativeTextInput(mergeProps.mergeProps(size, focusProps)));
  let replaced = str3;
  if (null != size.value) {
    replaced = str3.replace(/\r\n?|\n/g, " ");
  }
  obj7.value = replaced;
  let replaced1 = str5;
  if (null != size.defaultValue) {
    replaced1 = str5.replace(/\r\n?|\n/g, " ");
  }
  obj7.defaultValue = replaced1;
  obj7.onChangeText = callback;
  const tmpResult9 = mergeProps;
  obj7.ref = mergeProps.mergeRefs(ref, ref2);
  const items2 = [, , ];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = size.inputStyle;
  obj7.style = items2;
  obj7.placeholderTextColor = inputStyles.placeholderText.color;
  items1[1] = React3(NativeTextInput.NativeTextInput, obj7);
  items1[2] = size.trailing;
  obj6.children = items1;
  return React4(InputFieldContainer.InputFieldContainer, obj6);
}));