// === Module 6097: FreeFormInputGroup ===

// Module 6097 (FreeFormInputGroup)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import Text_Text from "Text/Text" /* 4886 */;
import RedesignCompat from "RedesignCompat" /* 6073 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6098 */;
import FreeFormLabelDefault from "FreeFormLabel" /* 6425 */;
import FreeFormTextInputDefault from "FreeFormTextInput" /* 6426 */;
import FreeFormErrorLabelDefault from "FreeFormErrorLabel" /* 6428 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let closure_3 = ["style", "label", "error", "value", "hint", "textStyle", "enableAndroidSanitizedInputWorkaround", "secureTextEntry", "keyboardType", "accessibilityLabel"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ label: { marginBottom: 8 }, input: { flexGrow: 1, marginBottom: 8 }, error: { marginBottom: 8 }, hint: { marginBottom: 8 } });
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let accessibilityLabel;
  let clearButtonVisibility;
  let enableAndroidSanitizedInputWorkaround;
  let error;
  let hint;
  let items;
  let keyboardType;
  let label;
  let onChangeText;
  let placeholder;
  let secureTextEntry;
  let style;
  let textStyle;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let value;
  const obj = react2;
  const cResult = obj.c(56);
  if (cResult[0] !== arg0) {
    ({ style, label, error, value, hint, textStyle, enableAndroidSanitizedInputWorkaround, secureTextEntry, keyboardType, accessibilityLabel } = arg0);
    const tmp17 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = accessibilityLabel;
    cResult[2] = error;
    cResult[3] = hint;
    cResult[4] = keyboardType;
    cResult[5] = label;
    cResult[6] = tmp17;
    cResult[7] = secureTextEntry;
    cResult[8] = style;
    cResult[9] = enableAndroidSanitizedInputWorkaround;
    cResult[10] = textStyle;
    cResult[11] = value;
    tmp14 = value;
    tmp13 = textStyle;
    tmp12 = enableAndroidSanitizedInputWorkaround;
    tmp11 = style;
    tmp10 = secureTextEntry;
    tmp9 = tmp17;
    tmp8 = label;
    tmp7 = keyboardType;
    tmp6 = hint;
    tmp5 = error;
    tmp4 = accessibilityLabel;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp12 = cResult[9];
    tmp13 = cResult[10];
    tmp14 = cResult[11];
  }
  const tmp19 = closure_9();
  if (cResult[12] === (undefined !== tmp12 && tmp12)) {
    let tmp20;
    let str;
    if (cResult[13] === tmp10) {
      tmp20 = cResult[14];
    }
    if (!(undefined !== tmp12 && tmp12)) {
      str = tmp7;
    } else {
      PlatformUtils;
      str = "visible-password";
    }
    const context = react.useContext(RedesignCompat.RedesignCompatContext);
    const id = react.useId();
    if (context) {
      ({ placeholder, onChangeText, clearButtonVisibility } = tmp9);
      const tmp53 = clearButtonVisibility !== native.ClearButtonVisibility.WITH_CONTENT;
      if (cResult[15] === str) {
        if (cResult[16] === tmp20) {
          if (cResult[17] === tmp5) {
            if (cResult[18] === tmp6) {
              if (cResult[19] === tmp8) {
                if (cResult[20] === onChangeText) {
                  if (cResult[21] === placeholder) {
                    if (cResult[22] === tmp9.autoCapitalize) {
                      if (cResult[23] === tmp11) {
                        if (cResult[24] === tmp53) {
                          let tmp54;
                          if (cResult[25] === tmp14) {
                            tmp54 = cResult[26];
                          }
                          return tmp54;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      const obj2 = { containerStyle: tmp11, value: tmp14, label: tmp8, errorMessage: tmp5, description: tmp6, placeholder, onChange: onChangeText, clearable: tmp53, keyboardType: str, secureTextEntry: tmp20, autoCapitalize: tmp9.autoCapitalize };
      const tmp56 = metroImportDefault(TextInput_TextInput.TextInput, obj2);
      cResult[15] = str;
      cResult[16] = tmp20;
      cResult[17] = tmp5;
      cResult[18] = tmp6;
      cResult[19] = tmp8;
      cResult[20] = onChangeText;
      cResult[21] = placeholder;
      cResult[22] = tmp9.autoCapitalize;
      cResult[23] = tmp11;
      cResult[24] = tmp53;
      cResult[25] = tmp14;
      cResult[26] = tmp56;
      tmp54 = tmp56;
    } else {
      if (cResult[27] === tmp8) {
        if (cResult[28] === id) {
          let tmp25;
          if (cResult[29] === tmp19.label) {
            tmp25 = cResult[30];
          }
          if (tmp4 == null) {
            let tmp30;
            if (null == tmp8) {
              tmp30 = tmp8;
            } else {
              PlatformUtils;
            }
            tmp4 = tmp30;
          }
          if (cResult[31] === tmp19.input) {
            let tmp32;
            if (cResult[32] === tmp13) {
              tmp32 = cResult[33];
            }
            if (cResult[34] === str) {
              if (cResult[35] === tmp20) {
                if (cResult[36] === id) {
                  if (cResult[37] === ref) {
                    if (cResult[38] === tmp9) {
                      if (cResult[39] === tmp4) {
                        if (cResult[40] === null != tmp5) {
                          if (cResult[41] === tmp32) {
                            let tmp34;
                            if (cResult[42] === tmp14) {
                              tmp34 = cResult[43];
                            }
                            if (cResult[44] === tmp5) {
                              let tmp42;
                              if (cResult[45] === tmp19.error) {
                                tmp42 = cResult[46];
                              }
                              if (cResult[47] === tmp6) {
                                let tmp46;
                                if (cResult[48] === tmp19.hint) {
                                  tmp46 = cResult[49];
                                }
                                if (cResult[50] === tmp11) {
                                  if (cResult[51] === tmp25) {
                                    if (cResult[52] === tmp34) {
                                      if (cResult[53] === tmp42) {
                                        let tmp49;
                                        if (cResult[54] === tmp46) {
                                          tmp49 = cResult[55];
                                        }
                                        return tmp49;
                                      }
                                    }
                                  }
                                }
                                const obj3 = { style: tmp11, children: items };
                                items = [tmp25, tmp34, tmp42, tmp46];
                                const tmp52 = metroImportAll(View, obj3);
                                cResult[50] = tmp11;
                                cResult[51] = tmp25;
                                cResult[52] = tmp34;
                                cResult[53] = tmp42;
                                cResult[54] = tmp46;
                                cResult[55] = tmp52;
                                tmp49 = tmp52;
                              }
                              let tmp47 = null;
                              if (null != tmp6) {
                                const obj4 = { style: tmp19.hint, variant: "text-xs/medium", color: "text-muted", children: tmp6 };
                                tmp47 = metroImportDefault(Text_Text.Text, obj4);
                              }
                              cResult[47] = tmp6;
                              cResult[48] = tmp19.hint;
                              cResult[49] = tmp47;
                              tmp46 = tmp47;
                            }
                            let tmp43 = null;
                            if (null != tmp5) {
                              const obj5 = { style: tmp19.error, children: tmp5 };
                              tmp43 = metroImportDefault(FreeFormErrorLabelDefault, obj5);
                            }
                            cResult[44] = tmp5;
                            cResult[45] = tmp19.error;
                            cResult[46] = tmp43;
                            tmp42 = tmp43;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            const obj6 = { accessibilityLabel: tmp4, accessibilityLabelledBy: id, error: null != tmp5, ref, value: tmp14, secureTextEntry: tmp20, keyboardType: str, style: tmp32 };
            const tmp37 = FreeFormTextInputDefault;
            const merged = Object.assign(tmp9);
            const tmp41 = metroImportDefault(tmp37, obj6);
            cResult[34] = str;
            cResult[35] = tmp20;
            cResult[36] = id;
            cResult[37] = ref;
            cResult[38] = tmp9;
            cResult[39] = tmp4;
            cResult[40] = null != tmp5;
            cResult[41] = tmp32;
            cResult[42] = tmp14;
            cResult[43] = tmp41;
            tmp34 = tmp41;
          }
          const items1 = [tmp19.input, tmp13];
          cResult[31] = tmp19.input;
          cResult[32] = tmp13;
          cResult[33] = items1;
          tmp32 = items1;
        }
      }
      let tmp26 = null;
      if (null != tmp8) {
        const obj7 = { style: tmp19.label, nativeID: id, children: tmp8 };
        tmp26 = metroImportDefault(FreeFormLabelDefault, obj7);
      }
      cResult[27] = tmp8;
      cResult[28] = id;
      cResult[29] = tmp19.label;
      cResult[30] = tmp26;
      tmp25 = tmp26;
    }
  }
  let isAndroidResult = tmp18;
  if (isAndroidResult) {
    const tmpResult4 = PlatformUtils;
    isAndroidResult = tmpResult4.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = tmp10;
  }
  cResult[12] = undefined !== tmp12 && tmp12;
  cResult[13] = tmp10;
  cResult[14] = isAndroidResult;
  tmp20 = isAndroidResult;
}) : ((textStyle, ref) => {
  let clearButtonVisibility;
  let enableAndroidSanitizedInputWorkaround;
  let error;
  let hint;
  let items;
  let items1;
  let keyboardType;
  let label;
  let onChangeText;
  let placeholder;
  let secureTextEntry;
  let str;
  let style;
  let value;
  ({ style, label, error, value, hint, enableAndroidSanitizedInputWorkaround } = textStyle);
  textStyle = textStyle.textStyle;
  if (enableAndroidSanitizedInputWorkaround === undefined) {
    enableAndroidSanitizedInputWorkaround = false;
  }
  let accessibilityLabel = textStyle.accessibilityLabel;
  ({ secureTextEntry, keyboardType } = textStyle);
  const merged = Object.assign(textStyle, Object.assign({ style: 0, label: 0, error: 0, value: 0, hint: 0, textStyle: 0, enableAndroidSanitizedInputWorkaround: 0, secureTextEntry: 0, keyboardType: 0, accessibilityLabel: 0 }));
  const tmp2 = closure_9();
  let isAndroidResult = enableAndroidSanitizedInputWorkaround;
  if (isAndroidResult) {
    const obj = PlatformUtils;
    isAndroidResult = obj.isAndroid();
  }
  if (!isAndroidResult) {
    isAndroidResult = secureTextEntry;
  }
  if (!enableAndroidSanitizedInputWorkaround) {
    str = keyboardType;
  } else {
    PlatformUtils;
    str = "visible-password";
  }
  const context = react.useContext(RedesignCompat.RedesignCompatContext);
  const id = react.useId();
  if (context) {
    ({ placeholder, onChangeText, clearButtonVisibility } = merged);
    const obj3 = { containerStyle: style, value, label, errorMessage: error, description: hint, placeholder, onChange: onChangeText, clearable: clearButtonVisibility !== native.ClearButtonVisibility.WITH_CONTENT, keyboardType: str, secureTextEntry: isAndroidResult, autoCapitalize: merged.autoCapitalize };
    const TextInput = TextInput_TextInput.TextInput;
    return metroImportDefault(TextInput, obj3);
  } else {
    let tmp14 = null;
    const obj4 = { style, children: items };
    if (null != label) {
      const obj5 = { style: tmp2.label, nativeID: id, children: label };
      tmp14 = metroImportDefault(FreeFormLabelDefault, obj5);
    }
    items = [tmp14, , , ];
    const obj6 = { accessibilityLabel, accessibilityLabelledBy: id, error: null != error, ref, value, secureTextEntry: isAndroidResult, keyboardType: str, style: items1 };
    const tmp19 = FreeFormTextInputDefault;
    const merged1 = Object.assign(merged);
    if (accessibilityLabel == null) {
      if (null != label) {
        PlatformUtils;
      }
      accessibilityLabel = label;
    }
    items1 = [tmp2.input, textStyle];
    items[1] = metroImportDefault(tmp19, obj6);
    let tmp17Result = null;
    if (null != error) {
      const obj7 = { style: tmp2.error, children: error };
      tmp17Result = metroImportDefault(FreeFormErrorLabelDefault, obj7);
    }
    items[2] = tmp17Result;
    let tmp17Result2 = null;
    if (null != hint) {
      const obj8 = { style: tmp2.hint, variant: "text-xs/medium", color: "text-muted", children: hint };
      tmp17Result2 = metroImportDefault(Text_Text.Text, obj8);
    }
    items[3] = tmp17Result2;
    return metroImportAll(View, obj4);
  }
}));
const result = size.fileFinishedImporting("design/void/Form/native/FreeFormInputGroup.tsx");

export default forwardRefResult;