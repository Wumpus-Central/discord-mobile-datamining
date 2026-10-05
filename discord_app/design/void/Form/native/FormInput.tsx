// === Module 8901: FormInput ===

// Module 8901 (FormInput)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import native2 from "native" /* 4589 */;
import shared from "shared" /* 4729 */;
import RedesignCompat from "RedesignCompat" /* 6073 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6098 */;
import TextArea2 from "TextArea" /* 6580 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
let closure_2 = ["onChange", "keyboardAppearance", "keyboardType", "style", "inputTextStyle", "value", "title", "helpText", "error", "placeholder", "secureTextEntry", "disabled", "multiline", "autoFocus", "numberOfLines", "clearButtonVisibility", "autoCapitalize", "autoCorrect", "showBorder", "showCharactersRemaining", "enableAndroidSanitizedInputWorkaround", "allowRedesignTextInput"];
const KeyboardThemes = Constants.KeyboardThemes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { inputViewContainer: { paddingVertical: 13, paddingHorizontal: 15 }, placeholderText: obj2, inputText: obj3 };
createStyles = createStyles.createStyles;
obj2 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_7 = createStyles(obj);
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let NEVER;
  let allowRedesignTextInput;
  let autoCapitalize;
  let autoCorrect;
  let autoFocus;
  let clearButtonVisibility;
  let disabled;
  let enableAndroidSanitizedInputWorkaround;
  let error;
  let helpText;
  let inputTextStyle;
  let keyboardAppearance;
  let keyboardType;
  let multiline;
  let numberOfLines;
  let onChange;
  let placeholder;
  let secureTextEntry;
  let showBorder;
  let showCharactersRemaining;
  let str4;
  let style;
  let title;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp33;
  let tmp4;
  let tmp47;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let value;
  const obj = react2;
  const cResult = obj.c(85);
  if (cResult[0] !== arg0) {
    ({ onChange, keyboardAppearance, keyboardType, style, inputTextStyle, value, title, helpText, error, placeholder, secureTextEntry, disabled, multiline, autoFocus, numberOfLines, clearButtonVisibility, autoCapitalize, autoCorrect, showBorder, showCharactersRemaining, enableAndroidSanitizedInputWorkaround, allowRedesignTextInput } = arg0);
    const tmp28 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = autoCapitalize;
    cResult[2] = autoCorrect;
    cResult[3] = clearButtonVisibility;
    cResult[4] = error;
    cResult[5] = inputTextStyle;
    cResult[6] = keyboardAppearance;
    cResult[7] = keyboardType;
    cResult[8] = onChange;
    cResult[9] = tmp28;
    cResult[10] = style;
    cResult[11] = title;
    cResult[12] = showCharactersRemaining;
    cResult[13] = enableAndroidSanitizedInputWorkaround;
    cResult[14] = allowRedesignTextInput;
    cResult[15] = helpText;
    cResult[16] = placeholder;
    cResult[17] = secureTextEntry;
    cResult[18] = disabled;
    cResult[19] = multiline;
    cResult[20] = autoFocus;
    cResult[21] = numberOfLines;
    cResult[22] = showBorder;
    cResult[23] = value;
    tmp25 = value;
    tmp24 = showBorder;
    tmp23 = numberOfLines;
    tmp22 = autoFocus;
    tmp21 = multiline;
    tmp20 = disabled;
    tmp19 = secureTextEntry;
    tmp18 = placeholder;
    tmp17 = helpText;
    tmp16 = allowRedesignTextInput;
    tmp15 = enableAndroidSanitizedInputWorkaround;
    tmp14 = showCharactersRemaining;
    tmp13 = title;
    tmp12 = style;
    tmp11 = tmp28;
    tmp10 = onChange;
    tmp9 = keyboardType;
    tmp8 = keyboardAppearance;
    tmp7 = inputTextStyle;
    tmp6 = error;
    NEVER = clearButtonVisibility;
    tmp5 = autoCorrect;
    tmp4 = autoCapitalize;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    NEVER = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
    tmp9 = cResult[7];
    tmp10 = cResult[8];
    tmp11 = cResult[9];
    tmp12 = cResult[10];
    tmp13 = cResult[11];
    tmp14 = cResult[12];
    tmp15 = cResult[13];
    tmp16 = cResult[14];
    tmp17 = cResult[15];
    tmp18 = cResult[16];
    tmp19 = cResult[17];
    tmp20 = cResult[18];
    tmp21 = cResult[19];
    tmp22 = cResult[20];
    tmp23 = cResult[21];
    tmp24 = cResult[22];
    tmp25 = cResult[23];
  }
  let str = "";
  if (undefined !== tmp13) {
    str = tmp13;
  }
  let str2 = "";
  if (undefined !== tmp17) {
    str2 = tmp17;
  }
  let str3 = "";
  if (undefined !== tmp18) {
    str3 = tmp18;
  }
  let num25 = 1;
  const tmp29 = undefined !== tmp19 && tmp19;
  if (undefined !== tmp23) {
    num25 = tmp23;
  }
  if (cResult[24] !== tmp24) {
    let isAndroidResult = tmp24;
    if (undefined === tmp24) {
      const tmpResult = PlatformUtils;
      isAndroidResult = tmpResult.isAndroid();
    }
    cResult[24] = tmp24;
    cResult[25] = isAndroidResult;
    tmp33 = isAndroidResult;
  } else {
    tmp33 = cResult[25];
  }
  const tmp37 = undefined === tmp16 || tmp16;
  const tmp38 = closure_7();
  native2;
  if (null == tmp8) {
    const tmpResult6 = shared;
    tmp8 = tmpResult6.isThemeDark(tmp40) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
  const tmp42 = react.useContext(RedesignCompat.RedesignCompatContext) && tmp37;
  let closure_0 = tmp42;
  let tmp43 = !tmp36;
  if (undefined !== tmp15 && tmp15) {
    const tmpResult7 = PlatformUtils;
    tmp43 = !tmpResult7.isAndroid();
  }
  let tmp44 = !tmp43;
  if (tmp43) {
    tmp44 = tmp29;
  }
  if (!(undefined !== tmp15 && tmp15)) {
    str4 = tmp9;
  } else {
    PlatformUtils;
    str4 = "visible-password";
  }
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  if (cResult[26] !== tmp42) {
    function ee() {
      return {
        isFocused() {
          const current = (closure_1_0 ? ref : ref1).current;
          let isFocusedResult;
          if (current != null) {
            isFocusedResult = current.isFocused();
          }
          return true === isFocusedResult;
        },
        focus() {
          const current = (closure_1_0 ? ref : ref1).current;
          if (current != null) {
            current.focus();
          }
        },
        blur() {
          const current = (closure_1_0 ? ref : ref1).current;
          if (current != null) {
            current.blur();
          }
        },
        setText(arg0) {
          const current = (closure_1_0 ? ref : ref1).current;
          if (current != null) {
            current.setText(arg0);
          }
        },
        getText() {
          const current = (closure_1_0 ? ref : ref1).current;
          let str;
          if (current != null) {
            str = current.getText();
          }
          if (str == null) {
            str = "";
          }
          return str;
        },
        measure(arg0) {
          const current = (closure_1_0 ? ref : ref1).current;
          if (current != null) {
            current.measure(arg0);
          }
        },
        measureInWindow(arg0) {
          const current = (closure_1_0 ? ref : ref1).current;
          if (current != null) {
            current.measureInWindow(arg0);
          }
        },
        measureLayout(arg0, arg1, arg2) {
          const current = (closure_1_0 ? ref : ref1).current;
          if (current != null) {
            current.measureLayout(arg0, arg1, arg2);
          }
        }
      };
    }
    cResult[26] = tmp42;
    cResult[27] = ee;
    tmp47 = ee;
  } else {
    tmp47 = cResult[27];
  }
  const imperativeHandle = react.useImperativeHandle(arg1, tmp47);
  if (tmp42) {
    if (undefined !== tmp21 && tmp21) {
      if (cResult[28] === str4) {
        if (cResult[29] === tmp44) {
          if (cResult[30] === tmp4) {
            if (cResult[31] === tmp5) {
              if (cResult[32] === (undefined !== tmp22 && tmp22)) {
                if (cResult[33] === (undefined !== tmp20 && tmp20)) {
                  if (cResult[34] === tmp6) {
                    if (cResult[35] === tmp8) {
                      if (cResult[36] === tmp10) {
                        if (cResult[37] === str3) {
                          if (cResult[38] === tmp11.maxLength) {
                            if (cResult[39] === tmp11.onEndEditing) {
                              if (cResult[40] === tmp38.placeholderText.color) {
                                let tmp60;
                                if (cResult[41] === tmp25) {
                                  tmp60 = cResult[42];
                                }
                                return tmp60;
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
          }
        }
      }
      ({ maxLength: obj9.maxLength, onEndEditing: obj9.onEndEditing } = tmp11);
      const tmp62 = jsx(TextArea2.TextArea, { ref, returnKeyType: "default", onChange: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp38.placeholderText.color, placeholder: str3, secureTextEntry: tmp44, disabled: undefined !== tmp20 && tmp20, autoFocus: undefined !== tmp22 && tmp22, autoCapitalize: tmp4, autoCorrect: tmp5, maxLength: null, onEndEditing: null, value: tmp25, errorMessage: tmp6 });
      cResult[28] = str4;
      cResult[29] = tmp44;
      cResult[30] = tmp4;
      cResult[31] = tmp5;
      cResult[32] = undefined !== tmp22 && tmp22;
      cResult[33] = undefined !== tmp20 && tmp20;
      cResult[34] = tmp6;
      cResult[35] = tmp8;
      cResult[36] = tmp10;
      cResult[37] = str3;
      cResult[38] = tmp11.maxLength;
      cResult[39] = tmp11.onEndEditing;
      cResult[40] = tmp38.placeholderText.color;
      cResult[41] = tmp25;
      cResult[42] = tmp62;
      tmp60 = tmp62;
    } else {
      if (cResult[43] === str4) {
        if (cResult[44] === tmp44) {
          if (cResult[45] === tmp4) {
            if (cResult[46] === tmp5) {
              if (cResult[47] === (undefined !== tmp22 && tmp22)) {
                if (cResult[48] === (undefined !== tmp20 && tmp20)) {
                  if (cResult[49] === tmp6) {
                    if (cResult[50] === tmp8) {
                      if (cResult[51] === tmp10) {
                        if (cResult[52] === str3) {
                          if (cResult[53] === tmp11.onEndEditing) {
                            if (cResult[54] === tmp38.placeholderText.color) {
                              let tmp57;
                              if (cResult[55] === tmp25) {
                                tmp57 = cResult[56];
                              }
                              return tmp57;
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
        }
      }
      const tmp59 = jsx(TextInput_TextInput.TextInput, { ref, returnKeyType: "done", onChange: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp38.placeholderText.color, placeholder: str3, secureTextEntry: tmp44, disabled: undefined !== tmp20 && tmp20, autoFocus: undefined !== tmp22 && tmp22, autoCapitalize: tmp4, autoCorrect: tmp5, onEndEditing: tmp11.onEndEditing, value: tmp25, errorMessage: tmp6 });
      cResult[43] = str4;
      cResult[44] = tmp44;
      cResult[45] = tmp4;
      cResult[46] = tmp5;
      cResult[47] = undefined !== tmp22 && tmp22;
      cResult[48] = undefined !== tmp20 && tmp20;
      cResult[49] = tmp6;
      cResult[50] = tmp8;
      cResult[51] = tmp10;
      cResult[52] = str3;
      cResult[53] = tmp11.onEndEditing;
      cResult[54] = tmp38.placeholderText.color;
      cResult[55] = tmp25;
      cResult[56] = tmp59;
      tmp57 = tmp59;
    }
  } else {
    let str5;
    if (null != tmp11.returnKeyType) {
      str5 = tmp11.returnKeyType;
    } else {
      str5 = "done";
      if (undefined !== tmp21 && tmp21) {
        str5 = "default";
      }
    }
    let str6 = tmp6;
    if (tmp6 == null) {
      str6 = "";
    }
    if (cResult[57] === tmp12) {
      let tmp49;
      if (cResult[58] === tmp38.inputViewContainer) {
        tmp49 = cResult[59];
      }
      let str7 = tmp25;
      if (tmp25 == null) {
        str7 = "";
      }
      if (undefined !== tmp21 && tmp21) {
        NEVER = native.ClearButtonVisibility.NEVER;
      }
      if (cResult[60] === str4) {
        if (cResult[61] === tmp44) {
          if (cResult[62] === tmp4) {
            if (cResult[63] === tmp5) {
              if (cResult[64] === (undefined !== tmp22 && tmp22)) {
                if (cResult[65] === (undefined !== tmp20 && tmp20)) {
                  if (cResult[66] === str2) {
                    if (cResult[67] === tmp7) {
                      if (cResult[68] === tmp8) {
                        if (cResult[69] === (undefined !== tmp21 && tmp21)) {
                          if (cResult[70] === num25) {
                            if (cResult[71] === tmp10) {
                              if (cResult[72] === str3) {
                                if (cResult[73] === tmp11) {
                                  if (cResult[74] === tmp33) {
                                    if (cResult[75] === (undefined !== tmp14 && tmp14)) {
                                      if (cResult[76] === tmp38.inputText.color) {
                                        if (cResult[77] === tmp38.placeholderText.color) {
                                          if (cResult[78] === str5) {
                                            if (cResult[79] === str6) {
                                              if (cResult[80] === tmp49) {
                                                if (cResult[81] === str7) {
                                                  if (cResult[82] === NEVER) {
                                                    let tmp50;
                                                    if (cResult[83] === str) {
                                                      tmp50 = cResult[84];
                                                    }
                                                    return tmp50;
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
          }
        }
      }
      const InputView = native.InputView;
      const merged = Object.assign(tmp11);
      const tmp55 = <InputView ref={ref1} inputTextColor={tmp38.inputText.color} multiline={undefined !== tmp21 && tmp21} returnKeyType={str5} onChangeText={tmp10} keyboardAppearance={tmp8} keyboardType={str4} placeholderTextColor={tmp38.placeholderText.color} title={str} helpText={str2} error={str6} placeholder={str3} secureTextEntry={tmp44} disabled={undefined !== tmp20 && tmp20} autoFocus={undefined !== tmp22 && tmp22} numberOfLines={num25} autoCapitalize={tmp4} autoCorrect={tmp5} showBorder={tmp33} showCharactersRemaining={undefined !== tmp14 && tmp14} style={tmp49} inputTextStyle={tmp7} value={str7} clearButtonVisibility={NEVER} />;
      cResult[60] = str4;
      cResult[61] = tmp44;
      cResult[62] = tmp4;
      cResult[63] = tmp5;
      cResult[64] = undefined !== tmp22 && tmp22;
      cResult[65] = undefined !== tmp20 && tmp20;
      cResult[66] = str2;
      cResult[67] = tmp7;
      cResult[68] = tmp8;
      cResult[69] = undefined !== tmp21 && tmp21;
      cResult[70] = num25;
      cResult[71] = tmp10;
      cResult[72] = str3;
      cResult[73] = tmp11;
      cResult[74] = tmp33;
      cResult[75] = undefined !== tmp14 && tmp14;
      cResult[76] = tmp38.inputText.color;
      cResult[77] = tmp38.placeholderText.color;
      cResult[78] = str5;
      cResult[79] = str6;
      cResult[80] = tmp49;
      cResult[81] = str7;
      cResult[82] = NEVER;
      cResult[83] = str;
      cResult[84] = tmp55;
      tmp50 = tmp55;
    }
    const items = [tmp38.inputViewContainer, tmp12];
    cResult[57] = tmp12;
    cResult[58] = tmp38.inputViewContainer;
    cResult[59] = items;
    tmp49 = items;
  }
}) : ((helpText, arg1) => {
  let autoCapitalize;
  let autoCorrect;
  let clearButtonVisibility;
  let error;
  let inputTextStyle;
  let keyboardAppearance;
  let keyboardType;
  let onChange;
  let placeholder;
  let showBorder;
  let str2;
  let style;
  let title;
  let tmp16Result2;
  let value;
  ({ onChange, keyboardAppearance, value, title } = helpText);
  ({ keyboardType, style, inputTextStyle } = helpText);
  if (title === undefined) {
    title = "";
  }
  let str = helpText.helpText;
  if (str === undefined) {
    str = "";
  }
  ({ error, placeholder } = helpText);
  if (placeholder === undefined) {
    placeholder = "";
  }
  let flag = helpText.secureTextEntry;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = helpText.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = helpText.multiline;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = helpText.autoFocus;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let num = helpText.numberOfLines;
  if (num === undefined) {
    num = 1;
  }
  ({ clearButtonVisibility, autoCapitalize, autoCorrect, showBorder } = helpText);
  if (showBorder === undefined) {
    const obj = PlatformUtils;
    showBorder = obj.isAndroid();
  }
  let flag5 = helpText.showCharactersRemaining;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = helpText.enableAndroidSanitizedInputWorkaround;
  if (flag6 === undefined) {
    flag6 = false;
  }
  let flag7 = helpText.allowRedesignTextInput;
  if (flag7 === undefined) {
    flag7 = true;
  }
  const merged = Object.assign(helpText, Object.assign({ onChange: 0, keyboardAppearance: 0, keyboardType: 0, style: 0, inputTextStyle: 0, value: 0, title: 0, helpText: 0, error: 0, placeholder: 0, secureTextEntry: 0, disabled: 0, multiline: 0, autoFocus: 0, numberOfLines: 0, clearButtonVisibility: 0, autoCapitalize: 0, autoCorrect: 0, showBorder: 0, showCharactersRemaining: 0, enableAndroidSanitizedInputWorkaround: 0, allowRedesignTextInput: 0 }));
  let closure_0;
  let ref;
  let ref1;
  const tmp4 = closure_7();
  native2;
  if (null == keyboardAppearance) {
    const tmp5Result = shared;
    keyboardAppearance = tmp5Result.isThemeDark(tmp8) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
  const tmp10 = react.useContext(RedesignCompat.RedesignCompatContext) && flag7;
  closure_0 = tmp10;
  let tmp11 = !flag6;
  if (flag6) {
    const tmp5Result3 = PlatformUtils;
    tmp11 = !tmp5Result3.isAndroid();
  }
  let tmp12 = !tmp11;
  if (tmp11) {
    tmp12 = flag;
  }
  if (!flag6) {
    str2 = keyboardType;
  } else {
    PlatformUtils;
    str2 = "visible-password";
  }
  ref = react.useRef(null);
  ref1 = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(arg1, () => ({
    isFocused() {
      const current = (closure_1_0 ? ref : ref1).current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      return true === isFocusedResult;
    },
    focus() {
      const current = (closure_1_0 ? ref : ref1).current;
      if (current != null) {
        current.focus();
      }
    },
    blur() {
      const current = (closure_1_0 ? ref : ref1).current;
      if (current != null) {
        current.blur();
      }
    },
    setText(arg0) {
      const current = (closure_1_0 ? ref : ref1).current;
      if (current != null) {
        current.setText(arg0);
      }
    },
    getText() {
      const current = (closure_1_0 ? ref : ref1).current;
      let str;
      if (current != null) {
        str = current.getText();
      }
      if (str == null) {
        str = "";
      }
      return str;
    },
    measure(arg0) {
      const current = (closure_1_0 ? ref : ref1).current;
      if (current != null) {
        current.measure(arg0);
      }
    },
    measureInWindow(arg0) {
      const current = (closure_1_0 ? ref : ref1).current;
      if (current != null) {
        current.measureInWindow(arg0);
      }
    },
    measureLayout(arg0, arg1, arg2) {
      const current = (closure_1_0 ? ref : ref1).current;
      if (current != null) {
        current.measureLayout(arg0, arg1, arg2);
      }
    }
  }));
  if (tmp10) {
    let tmp16Result;
    if (flag3) {
      ({ maxLength: obj8.maxLength, onEndEditing: obj8.onEndEditing } = merged);
      const TextArea = TextArea2.TextArea;
      tmp16Result = <TextArea ref={ref} returnKeyType="default" onChange={onChange} keyboardAppearance={keyboardAppearance} keyboardType={str2} placeholderTextColor={tmp4.placeholderText.color} placeholder={placeholder} secureTextEntry={tmp12} disabled={flag2} autoFocus={flag4} autoCapitalize={autoCapitalize} autoCorrect={autoCorrect} maxLength={null} onEndEditing={null} value={value} errorMessage={error} />;
    } else {
      const TextInput = TextInput_TextInput.TextInput;
      tmp16Result = <TextInput ref={ref} returnKeyType="done" onChange={onChange} keyboardAppearance={keyboardAppearance} keyboardType={str2} placeholderTextColor={tmp4.placeholderText.color} placeholder={placeholder} secureTextEntry={tmp12} disabled={flag2} autoFocus={flag4} autoCapitalize={autoCapitalize} autoCorrect={autoCorrect} onEndEditing={merged.onEndEditing} value={value} errorMessage={error} />;
    }
    tmp16Result2 = tmp16Result;
  } else {
    let str3;
    const InputView = native.InputView;
    if (null != merged.returnKeyType) {
      str3 = merged.returnKeyType;
    } else {
      str3 = "done";
      if (flag3) {
        str3 = "default";
      }
    }
    let str4 = error;
    if (error == null) {
      str4 = "";
    }
    const items = [tmp4.inputViewContainer, style];
    let str5 = value;
    if (value == null) {
      str5 = "";
    }
    if (flag3) {
      clearButtonVisibility = native.ClearButtonVisibility.NEVER;
    }
    const merged1 = Object.assign(merged);
    tmp16Result2 = <InputView ref={ref1} inputTextColor={tmp4.inputText.color} multiline={flag3} returnKeyType={str3} onChangeText={onChange} keyboardAppearance={keyboardAppearance} keyboardType={str2} placeholderTextColor={tmp4.placeholderText.color} title={title} helpText={str} error={str4} placeholder={placeholder} secureTextEntry={tmp12} disabled={flag2} autoFocus={flag4} numberOfLines={num} autoCapitalize={autoCapitalize} autoCorrect={autoCorrect} showBorder={showBorder} showCharactersRemaining={flag5} style={items} inputTextStyle={inputTextStyle} value={str5} clearButtonVisibility={clearButtonVisibility} />;
  }
  return tmp16Result2;
}));
const result = size.fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default forwardRefResult;