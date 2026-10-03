// === Module 8901: FormInput ===

// Module 8901 (FormInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import native2 from "native" /* 4589 */;
import shared from "shared" /* 4729 */;
import RedesignCompat from "RedesignCompat" /* 6073 */;
import TextInput from "TextInput" /* 6098 */;
import TextArea2 from "TextArea" /* 6580 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["onChange", "keyboardAppearance", "keyboardType", "style", "inputTextStyle", "value", "title", "helpText", "error", "placeholder", "secureTextEntry", "disabled", "multiline", "autoFocus", "numberOfLines", "clearButtonVisibility", "autoCapitalize", "autoCorrect", "showBorder", "showCharactersRemaining", "enableAndroidSanitizedInputWorkaround", "allowRedesignTextInput"];
const KeyboardThemes = fn(1085).KeyboardThemes;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { inputViewContainer: { paddingVertical: 13, paddingHorizontal: 15 }, placeholderText: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, inputText: null };
let obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.inputText = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  const cResult = c.c(85);
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
    let tmp25 = value;
    let tmp24 = showBorder;
    let tmp23 = numberOfLines;
    let tmp19 = secureTextEntry;
    let tmp18 = placeholder;
    let tmp17 = helpText;
    let tmp16 = allowRedesignTextInput;
    let tmp13 = title;
    let tmp12 = style;
    let tmp11 = tmp28;
    let tmp10 = onChange;
    let tmp9 = keyboardType;
    let tmp8 = keyboardAppearance;
    let tmp7 = inputTextStyle;
    let tmp6 = error;
    let NEVER = clearButtonVisibility;
    let tmp5 = autoCorrect;
    let tmp4 = autoCapitalize;
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
    tmp16 = cResult[14];
    tmp17 = cResult[15];
    tmp18 = cResult[16];
    tmp19 = cResult[17];
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
  if (undefined !== tmp23) {
    num25 = tmp23;
  }
  if (cResult[24] !== tmp24) {
    let isAndroidResult = tmp24;
    if (undefined === tmp24) {
      isAndroidResult = PlatformUtils.isAndroid();
      const tmpResult = PlatformUtils;
    }
    cResult[24] = tmp24;
    cResult[25] = isAndroidResult;
    let tmp33 = isAndroidResult;
  } else {
    tmp33 = cResult[25];
  }
  const tmp38 = closure_7();
  native2;
  if (null != tmp8) {
    const tmp43 = noop.useContext(RedesignCompat.RedesignCompatContext) && tmp37;
    closure_0 = tmp43;
    let tmp44 = !tmp36;
    if (tmp36) {
      tmp44 = !PlatformUtils.isAndroid();
      const tmpResult6 = PlatformUtils;
    }
    let tmp45 = !tmp44;
    if (tmp44) {
      tmp45 = tmp29;
    }
    if (!tmp36) {
      let str4 = tmp9;
    } else {
      PlatformUtils;
      str4 = "visible-password";
    }
    const ref = noop.useRef(null);
    if (cResult[26] !== tmp43) {
      function ee() {
        return {
          isFocused() {
            const current = closure_1_0 ? ref : ref1.current;
            let isFocusedResult;
            if (current != null) {
              isFocusedResult = current.isFocused();
            }
            return true === isFocusedResult;
          },
          focus() {
            const current = closure_1_0 ? ref : ref1.current;
            if (current != null) {
              current.focus();
            }
          },
          blur() {
            const current = closure_1_0 ? ref : ref1.current;
            if (current != null) {
              current.blur();
            }
          },
          setText(arg0) {
            const current = closure_1_0 ? ref : ref1.current;
            if (current != null) {
              current.setText(arg0);
            }
          },
          getText() {
            const current = closure_1_0 ? ref : ref1.current;
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
            const current = closure_1_0 ? ref : ref1.current;
            if (current != null) {
              current.measure(arg0);
            }
          },
          measureInWindow(arg0) {
            const current = closure_1_0 ? ref : ref1.current;
            if (current != null) {
              current.measureInWindow(arg0);
            }
          },
          measureLayout(arg0, arg1, arg2) {
            const current = closure_1_0 ? ref : ref1.current;
            if (current != null) {
              current.measureLayout(arg0, arg1, arg2);
            }
          }
        };
      }
      cResult[26] = tmp43;
      cResult[27] = ee;
      let tmp48 = ee;
    } else {
      tmp48 = cResult[27];
    }
    const imperativeHandle = noop.useImperativeHandle(arg1, tmp48);
    if (tmp43) {
      if (tmp31) {
        if (cResult[28] === str4) {
          if (cResult[29] === tmp45) {
            if (cResult[30] === tmp4) {
              if (cResult[31] === tmp5) {
                if (cResult[32] === tmp32) {
                  if (cResult[33] === tmp30) {
                    if (cResult[34] === tmp6) {
                      if (cResult[35] === tmp8) {
                        if (cResult[36] === tmp10) {
                          if (cResult[37] === str3) {
                            if (cResult[38] === tmp11.maxLength) {
                              if (cResult[39] === tmp11.onEndEditing) {
                                if (cResult[40] === tmp38.placeholderText.color) {
                                  if (cResult[41] === tmp25) {
                                    let tmp62 = cResult[42];
                                  }
                                  return tmp62;
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
        const obj2 = { ref, returnKeyType: "default", onChange: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp38.placeholderText.color, placeholder: str3, secureTextEntry: tmp45, disabled: tmp30, autoFocus: tmp32, autoCapitalize: tmp4, autoCorrect: tmp5, maxLength: null, onEndEditing: null, value: null, errorMessage: null };
        ({ maxLength: obj9.maxLength, onEndEditing: obj9.onEndEditing } = tmp11);
        obj2.value = tmp25;
        obj2.errorMessage = tmp6;
        const tmp64 = jsx(TextArea2.TextArea, { ref, returnKeyType: "default", onChange: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp38.placeholderText.color, placeholder: str3, secureTextEntry: tmp45, disabled: tmp30, autoFocus: tmp32, autoCapitalize: tmp4, autoCorrect: tmp5, maxLength: null, onEndEditing: null, value: null, errorMessage: null });
        cResult[28] = str4;
        cResult[29] = tmp45;
        cResult[30] = tmp4;
        cResult[31] = tmp5;
        cResult[32] = tmp32;
        cResult[33] = tmp30;
        cResult[34] = tmp6;
        cResult[35] = tmp8;
        cResult[36] = tmp10;
        cResult[37] = str3;
        cResult[38] = tmp11.maxLength;
        cResult[39] = tmp11.onEndEditing;
        cResult[40] = tmp38.placeholderText.color;
        cResult[41] = tmp25;
        cResult[42] = tmp64;
        tmp62 = tmp64;
      } else {
        if (cResult[43] === str4) {
          if (cResult[44] === tmp45) {
            if (cResult[45] === tmp4) {
              if (cResult[46] === tmp5) {
                if (cResult[47] === tmp32) {
                  if (cResult[48] === tmp30) {
                    if (cResult[49] === tmp6) {
                      if (cResult[50] === tmp8) {
                        if (cResult[51] === tmp10) {
                          if (cResult[52] === str3) {
                            if (cResult[53] === tmp11.onEndEditing) {
                              if (cResult[54] === tmp38.placeholderText.color) {
                                if (cResult[55] === tmp58) {
                                  let tmp59 = cResult[56];
                                }
                                return tmp59;
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
        const obj3 = { ref, returnKeyType: "done", onChange: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp38.placeholderText.color, placeholder: str3, secureTextEntry: tmp45, disabled: tmp30, autoFocus: tmp32, autoCapitalize: tmp4, autoCorrect: tmp5, onEndEditing: tmp11.onEndEditing, value: tmp25, errorMessage: tmp6 };
        const tmp61 = jsx(TextInput.TextInput, { ref, returnKeyType: "done", onChange: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp38.placeholderText.color, placeholder: str3, secureTextEntry: tmp45, disabled: tmp30, autoFocus: tmp32, autoCapitalize: tmp4, autoCorrect: tmp5, onEndEditing: tmp11.onEndEditing, value: tmp25, errorMessage: tmp6 });
        cResult[43] = str4;
        cResult[44] = tmp45;
        cResult[45] = tmp4;
        cResult[46] = tmp5;
        cResult[47] = tmp32;
        cResult[48] = tmp30;
        cResult[49] = tmp6;
        cResult[50] = tmp8;
        cResult[51] = tmp10;
        cResult[52] = str3;
        cResult[53] = tmp11.onEndEditing;
        cResult[54] = tmp38.placeholderText.color;
        cResult[55] = tmp25;
        cResult[56] = tmp61;
        tmp59 = tmp61;
      }
    } else {
      if (null != tmp11.returnKeyType) {
        let str5 = tmp11.returnKeyType;
      } else {
        str5 = "done";
        if (tmp31) {
          str5 = "default";
        }
      }
      let str6 = tmp6;
      if (tmp6 == null) {
        str6 = "";
      }
      if (cResult[57] === tmp12) {
        if (cResult[58] === tmp38.inputViewContainer) {
          let tmp51 = cResult[59];
        }
        let str7 = tmp25;
        if (tmp25 == null) {
          str7 = "";
        }
        if (tmp31) {
          NEVER = native.ClearButtonVisibility.NEVER;
        }
        if (cResult[60] === str4) {
          if (cResult[61] === tmp45) {
            if (cResult[62] === tmp4) {
              if (cResult[63] === tmp5) {
                if (cResult[64] === tmp32) {
                  if (cResult[65] === tmp30) {
                    if (cResult[66] === str2) {
                      if (cResult[67] === tmp7) {
                        if (cResult[68] === tmp8) {
                          if (cResult[69] === tmp31) {
                            if (cResult[70] === num25) {
                              if (cResult[71] === tmp10) {
                                if (cResult[72] === str3) {
                                  if (cResult[73] === tmp11) {
                                    if (cResult[74] === tmp33) {
                                      if (cResult[75] === tmp35) {
                                        if (cResult[76] === tmp38.inputText.color) {
                                          if (cResult[77] === tmp38.placeholderText.color) {
                                            if (cResult[78] === str5) {
                                              if (cResult[79] === str6) {
                                                if (cResult[80] === tmp51) {
                                                  if (cResult[81] === str7) {
                                                    if (cResult[82] === NEVER) {
                                                      if (cResult[83] === str) {
                                                        let tmp52 = cResult[84];
                                                      }
                                                      return tmp52;
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
        const obj5 = { ref: ref1, inputTextColor: tmp38.inputText.color, multiline: tmp31, returnKeyType: str5, onChangeText: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp38.placeholderText.color, title: str, helpText: str2, error: str6, placeholder: str3, secureTextEntry: tmp45, disabled: tmp30, autoFocus: tmp32, numberOfLines: num25, autoCapitalize: tmp4, autoCorrect: tmp5, showBorder: tmp33, showCharactersRemaining: tmp35, style: tmp51, inputTextStyle: tmp7, value: str7, clearButtonVisibility: NEVER };
        const merged = Object.assign(tmp11);
        const tmp57 = jsx(native.InputView, { ref: ref1, inputTextColor: tmp38.inputText.color, multiline: tmp31, returnKeyType: str5, onChangeText: tmp10, keyboardAppearance: tmp8, keyboardType: str4, placeholderTextColor: tmp38.placeholderText.color, title: str, helpText: str2, error: str6, placeholder: str3, secureTextEntry: tmp45, disabled: tmp30, autoFocus: tmp32, numberOfLines: num25, autoCapitalize: tmp4, autoCorrect: tmp5, showBorder: tmp33, showCharactersRemaining: tmp35, style: tmp51, inputTextStyle: tmp7, value: str7, clearButtonVisibility: NEVER });
        cResult[60] = str4;
        cResult[61] = tmp45;
        cResult[62] = tmp4;
        cResult[63] = tmp5;
        cResult[64] = tmp32;
        cResult[65] = tmp30;
        cResult[66] = str2;
        cResult[67] = tmp7;
        cResult[68] = tmp8;
        cResult[69] = tmp31;
        cResult[70] = num25;
        cResult[71] = tmp10;
        cResult[72] = str3;
        cResult[73] = tmp11;
        cResult[74] = tmp33;
        cResult[75] = tmp35;
        cResult[76] = tmp38.inputText.color;
        cResult[77] = tmp38.placeholderText.color;
        cResult[78] = str5;
        cResult[79] = str6;
        cResult[80] = tmp51;
        cResult[81] = str7;
        cResult[82] = NEVER;
        cResult[83] = str;
        cResult[84] = tmp57;
        tmp52 = tmp57;
      }
      const items = [tmp38.inputViewContainer, tmp12];
      cResult[57] = tmp12;
      cResult[58] = tmp38.inputViewContainer;
      cResult[59] = items;
      tmp51 = items;
    }
    ref1 = noop.useRef(null);
  } else {
    shared.isThemeDark(tmp40) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
    const tmpResult8 = shared;
  }
  tmp29 = undefined !== tmp19 && tmp19;
  tmp37 = undefined === tmp16 || tmp16;
}) : ((helpText, arg1) => {
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
    showBorder = PlatformUtils.isAndroid();
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
  let onEndEditing = Object.assign(helpText, Object.assign({ onChange: 0, keyboardAppearance: 0, keyboardType: 0, style: 0, inputTextStyle: 0, value: 0, title: 0, helpText: 0, error: 0, placeholder: 0, secureTextEntry: 0, disabled: 0, multiline: 0, autoFocus: 0, numberOfLines: 0, clearButtonVisibility: 0, autoCapitalize: 0, autoCorrect: 0, showBorder: 0, showCharactersRemaining: 0, enableAndroidSanitizedInputWorkaround: 0, allowRedesignTextInput: 0 }));
  closure_0 = undefined;
  let ref;
  let ref1;
  let color = closure_7();
  let TextArea = require;
  let obj2 = dependencyMap;
  native2;
  if (null != keyboardAppearance) {
    const tmp7 = noop.useContext(RedesignCompat.RedesignCompatContext) && flag7;
    closure_0 = tmp7;
    let tmp8 = !flag6;
    if (flag6) {
      tmp8 = !PlatformUtils.isAndroid();
      const TextAreaResult = PlatformUtils;
    }
    let tmp9 = !tmp8;
    if (tmp8) {
      tmp9 = flag;
    }
    if (!flag6) {
      let str2 = keyboardType;
    } else {
      PlatformUtils;
      str2 = "visible-password";
    }
    ref = noop.useRef(null);
    ref1 = noop.useRef(null);
    const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
      isFocused() {
        const current = closure_1_0 ? ref : ref1.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        return true === isFocusedResult;
      },
      focus() {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.focus();
        }
      },
      blur() {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.blur();
        }
      },
      setText(arg0) {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.setText(arg0);
        }
      },
      getText() {
        const current = closure_1_0 ? ref : ref1.current;
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
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.measure(arg0);
        }
      },
      measureInWindow(arg0) {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.measureInWindow(arg0);
        }
      },
      measureLayout(arg0, arg1, arg2) {
        const current = closure_1_0 ? ref : ref1.current;
        if (current != null) {
          current.measureLayout(arg0, arg1, arg2);
        }
      }
    }));
    if (tmp7) {
      if (flag3) {
        TextArea = TextArea2.TextArea;
        obj2 = { ref, returnKeyType: "default", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: null, placeholder: null, secureTextEntry: null, disabled: null, autoFocus: null, autoCapitalize: null, autoCorrect: null, maxLength: null, onEndEditing: null, value: null, errorMessage: null };
        color = color.placeholderText.color;
        obj2.placeholderTextColor = color;
        obj2.placeholder = placeholder;
        obj2.secureTextEntry = tmp9;
        obj2.disabled = flag2;
        obj2.autoFocus = flag4;
        obj2.autoCapitalize = autoCapitalize;
        obj2.autoCorrect = autoCorrect;
        autoCorrect = onEndEditing.maxLength;
        obj2.maxLength = autoCorrect;
        onEndEditing = onEndEditing.onEndEditing;
        obj2.onEndEditing = onEndEditing;
        obj2.value = value;
        obj2.errorMessage = error;
        let tmp14Result = <TextArea ref={ref} returnKeyType="default" onChange={onChange} keyboardAppearance={keyboardAppearance} keyboardType={str2} placeholderTextColor={null} placeholder={null} secureTextEntry={null} disabled={null} autoFocus={null} autoCapitalize={null} autoCorrect={null} maxLength={null} onEndEditing={null} value={null} errorMessage={null} />;
      } else {
        const obj3 = { ref, returnKeyType: "done", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: color.placeholderText.color, placeholder, secureTextEntry: tmp9, disabled: flag2, autoFocus: flag4, autoCapitalize, autoCorrect, onEndEditing: onEndEditing.onEndEditing, value, errorMessage: error };
        tmp14Result = jsx(TextInput.TextInput, { ref, returnKeyType: "done", onChange, keyboardAppearance, keyboardType: str2, placeholderTextColor: color.placeholderText.color, placeholder, secureTextEntry: tmp9, disabled: flag2, autoFocus: flag4, autoCapitalize, autoCorrect, onEndEditing: onEndEditing.onEndEditing, value, errorMessage: error });
      }
    } else {
      const obj5 = { ref: ref1, inputTextColor: color.inputText.color, multiline: flag3, returnKeyType: null, onChangeText: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, title: null, helpText: null, error: null, placeholder: null, secureTextEntry: null, disabled: null, autoFocus: null, numberOfLines: null, autoCapitalize: null, autoCorrect: null, showBorder: null, showCharactersRemaining: null, style: null, inputTextStyle: null, value: null, clearButtonVisibility: null };
      if (null != onEndEditing.returnKeyType) {
        let str3 = onEndEditing.returnKeyType;
      } else {
        str3 = "done";
        if (flag3) {
          str3 = "default";
        }
      }
      obj5.returnKeyType = str3;
      obj5.onChangeText = onChange;
      obj5.keyboardAppearance = keyboardAppearance;
      obj5.keyboardType = str2;
      obj5.placeholderTextColor = color.placeholderText.color;
      obj5.title = title;
      obj5.helpText = str;
      let str4 = error;
      if (error == null) {
        str4 = "";
      }
      obj5.error = str4;
      obj5.placeholder = placeholder;
      obj5.secureTextEntry = tmp9;
      obj5.disabled = flag2;
      obj5.autoFocus = flag4;
      obj5.numberOfLines = num;
      obj5.autoCapitalize = autoCapitalize;
      obj5.autoCorrect = autoCorrect;
      obj5.showBorder = showBorder;
      obj5.showCharactersRemaining = flag5;
      const items = [color.inputViewContainer, style];
      obj5.style = items;
      obj5.inputTextStyle = inputTextStyle;
      let str5 = value;
      if (value == null) {
        str5 = "";
      }
      obj5.value = str5;
      if (flag3) {
        clearButtonVisibility = native.ClearButtonVisibility.NEVER;
      }
      obj5.clearButtonVisibility = clearButtonVisibility;
      const merged = Object.assign(onEndEditing);
      return jsx(native.InputView, { ref: ref1, inputTextColor: color.inputText.color, multiline: flag3, returnKeyType: null, onChangeText: null, keyboardAppearance: null, keyboardType: null, placeholderTextColor: null, title: null, helpText: null, error: null, placeholder: null, secureTextEntry: null, disabled: null, autoFocus: null, numberOfLines: null, autoCapitalize: null, autoCorrect: null, showBorder: null, showCharactersRemaining: null, style: null, inputTextStyle: null, value: null, clearButtonVisibility: null });
    }
  } else {
    shared.isThemeDark(tmp4) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
    const TextAreaResult2 = shared;
  }
}));