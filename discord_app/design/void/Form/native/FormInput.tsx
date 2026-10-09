// discord_app/design/void/Form/native/FormInput.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import native2 from "../../../../../discord_common/js/packages/design/native.tsx";
import shared from "../../../shared.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import TextInput from "../../../components/TextInput/native/TextInput.native.tsx";
import TextArea2 from "../../../components/TextInput/native/TextArea.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = [
  "onChange",
  "keyboardAppearance",
  "keyboardType",
  "style",
  "inputTextStyle",
  "value",
  "title",
  "helpText",
  "error",
  "placeholder",
  "secureTextEntry",
  "disabled",
  "multiline",
  "autoFocus",
  "numberOfLines",
  "clearButtonVisibility",
  "autoCapitalize",
  "autoCorrect",
  "showBorder",
  "showCharactersRemaining",
  "enableAndroidSanitizedInputWorkaround",
  "allowRedesignTextInput",
  "ref",
];
const KeyboardThemes = fn(1085).KeyboardThemes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = {
  inputViewContainer: { paddingVertical: 13, paddingHorizontal: 15 },
  placeholderText: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT },
  inputText: null,
};
let obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj2.inputText = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { color: nativeDefault.colors.TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormInput.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormInput(arg0) {
      const cResult = c.c(86);
      if (cResult[0] !== arg0) {
        ({
          onChange,
          keyboardAppearance,
          keyboardType,
          style,
          inputTextStyle,
          value,
          title,
          helpText,
          error,
          placeholder,
          secureTextEntry,
          disabled,
          multiline,
          autoFocus,
          numberOfLines,
          clearButtonVisibility,
          autoCapitalize,
          autoCorrect,
          showBorder,
          showCharactersRemaining,
          enableAndroidSanitizedInputWorkaround,
          allowRedesignTextInput,
          ref,
        } = arg0);
        const tmp29 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = autoCapitalize;
        cResult[2] = autoCorrect;
        cResult[3] = clearButtonVisibility;
        cResult[4] = error;
        cResult[5] = inputTextStyle;
        cResult[6] = keyboardAppearance;
        cResult[7] = keyboardType;
        cResult[8] = onChange;
        cResult[9] = tmp29;
        cResult[10] = ref;
        cResult[11] = style;
        cResult[12] = title;
        cResult[13] = showCharactersRemaining;
        cResult[14] = enableAndroidSanitizedInputWorkaround;
        cResult[15] = allowRedesignTextInput;
        cResult[16] = helpText;
        cResult[17] = placeholder;
        cResult[18] = secureTextEntry;
        cResult[19] = disabled;
        cResult[20] = multiline;
        cResult[21] = autoFocus;
        cResult[22] = numberOfLines;
        cResult[23] = showBorder;
        cResult[24] = value;
        let tmp26 = value;
        let tmp25 = showBorder;
        let tmp24 = numberOfLines;
        let tmp20 = secureTextEntry;
        let tmp19 = placeholder;
        let tmp18 = helpText;
        let tmp17 = allowRedesignTextInput;
        let tmp14 = title;
        let tmp13 = style;
        let tmp12 = ref;
        let tmp11 = tmp29;
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
        tmp14 = cResult[12];
        tmp17 = cResult[15];
        tmp18 = cResult[16];
        tmp19 = cResult[17];
        tmp20 = cResult[18];
        tmp24 = cResult[22];
        tmp25 = cResult[23];
        tmp26 = cResult[24];
      }
      let str = "";
      if (undefined !== tmp14) {
        str = tmp14;
      }
      let str2 = "";
      if (undefined !== tmp18) {
        str2 = tmp18;
      }
      let str3 = "";
      if (undefined !== tmp19) {
        str3 = tmp19;
      }
      let num26 = 1;
      if (undefined !== tmp24) {
        num26 = tmp24;
      }
      if (cResult[25] !== tmp25) {
        let isAndroidResult = tmp25;
        if (undefined === tmp25) {
          isAndroidResult = PlatformUtils.isAndroid();
          const tmpResult = PlatformUtils;
        }
        cResult[25] = tmp25;
        cResult[26] = isAndroidResult;
        let tmp34 = isAndroidResult;
      } else {
        tmp34 = cResult[26];
      }
      const tmp39 = closure_7();
      native2;
      if (null != tmp8) {
        const tmp44 = noop.useContext(RedesignCompat.RedesignCompatContext) && tmp38;
        closure_0 = tmp44;
        let tmp45 = !tmp37;
        if (tmp37) {
          tmp45 = !PlatformUtils.isAndroid();
          const tmpResult6 = PlatformUtils;
        }
        let tmp46 = !tmp45;
        if (tmp45) {
          tmp46 = tmp30;
        }
        if (!tmp37) {
          let str4 = tmp9;
        } else {
          PlatformUtils;
          str4 = "visible-password";
        }
        const ref1 = noop.useRef(null);
        if (cResult[27] !== tmp44) {
          function ee() {
            return {
              isFocused() {
                const current = closure_1_0 ? ref1 : ref2.current;
                let isFocusedResult;
                if (current != null) {
                  isFocusedResult = current.isFocused();
                }
                return true === isFocusedResult;
              },
              focus() {
                const current = closure_1_0 ? ref1 : ref2.current;
                if (current != null) {
                  current.focus();
                }
              },
              blur() {
                const current = closure_1_0 ? ref1 : ref2.current;
                if (current != null) {
                  current.blur();
                }
              },
              setText(arg0) {
                const current = closure_1_0 ? ref1 : ref2.current;
                if (current != null) {
                  current.setText(arg0);
                }
              },
              getText() {
                const current = closure_1_0 ? ref1 : ref2.current;
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
                const current = closure_1_0 ? ref1 : ref2.current;
                if (current != null) {
                  current.measure(arg0);
                }
              },
              measureInWindow(arg0) {
                const current = closure_1_0 ? ref1 : ref2.current;
                if (current != null) {
                  current.measureInWindow(arg0);
                }
              },
              measureLayout(arg0, arg1, arg2) {
                const current = closure_1_0 ? ref1 : ref2.current;
                if (current != null) {
                  current.measureLayout(arg0, arg1, arg2);
                }
              },
            };
          }
          cResult[27] = tmp44;
          cResult[28] = ee;
          let tmp49 = ee;
        } else {
          tmp49 = cResult[28];
        }
        const imperativeHandle = noop.useImperativeHandle(tmp12, tmp49);
        if (tmp44) {
          if (tmp32) {
            if (cResult[29] === str4) {
              if (cResult[30] === tmp46) {
                if (cResult[31] === tmp4) {
                  if (cResult[32] === tmp5) {
                    if (cResult[33] === tmp33) {
                      if (cResult[34] === tmp31) {
                        if (cResult[35] === tmp6) {
                          if (cResult[36] === tmp8) {
                            if (cResult[37] === tmp10) {
                              if (cResult[38] === str3) {
                                if (cResult[39] === tmp11.maxLength) {
                                  if (cResult[40] === tmp11.onEndEditing) {
                                    if (cResult[41] === tmp39.placeholderText.color) {
                                      if (cResult[42] === tmp26) {
                                        let tmp62 = cResult[43];
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
            const obj2 = {
              ref: ref1,
              returnKeyType: "default",
              onChange: tmp10,
              keyboardAppearance: tmp8,
              keyboardType: str4,
              placeholderTextColor: tmp39.placeholderText.color,
              placeholder: str3,
              secureTextEntry: tmp46,
              disabled: tmp31,
              autoFocus: tmp33,
              autoCapitalize: tmp4,
              autoCorrect: tmp5,
              maxLength: null,
              onEndEditing: null,
              value: null,
              errorMessage: null,
            };
            ({ maxLength: obj9.maxLength, onEndEditing: obj9.onEndEditing } = tmp11);
            obj2.value = tmp26;
            obj2.errorMessage = tmp6;
            const tmp64 = jsx(TextArea2.TextArea, {
              ref: ref1,
              returnKeyType: "default",
              onChange: tmp10,
              keyboardAppearance: tmp8,
              keyboardType: str4,
              placeholderTextColor: tmp39.placeholderText.color,
              placeholder: str3,
              secureTextEntry: tmp46,
              disabled: tmp31,
              autoFocus: tmp33,
              autoCapitalize: tmp4,
              autoCorrect: tmp5,
              maxLength: null,
              onEndEditing: null,
              value: null,
              errorMessage: null,
            });
            cResult[29] = str4;
            cResult[30] = tmp46;
            cResult[31] = tmp4;
            cResult[32] = tmp5;
            cResult[33] = tmp33;
            cResult[34] = tmp31;
            cResult[35] = tmp6;
            cResult[36] = tmp8;
            cResult[37] = tmp10;
            cResult[38] = str3;
            cResult[39] = tmp11.maxLength;
            cResult[40] = tmp11.onEndEditing;
            cResult[41] = tmp39.placeholderText.color;
            cResult[42] = tmp26;
            cResult[43] = tmp64;
            tmp62 = tmp64;
          } else {
            if (cResult[44] === str4) {
              if (cResult[45] === tmp46) {
                if (cResult[46] === tmp4) {
                  if (cResult[47] === tmp5) {
                    if (cResult[48] === tmp33) {
                      if (cResult[49] === tmp31) {
                        if (cResult[50] === tmp6) {
                          if (cResult[51] === tmp8) {
                            if (cResult[52] === tmp10) {
                              if (cResult[53] === str3) {
                                if (cResult[54] === tmp11.onEndEditing) {
                                  if (cResult[55] === tmp39.placeholderText.color) {
                                    if (cResult[56] === tmp58) {
                                      let tmp59 = cResult[57];
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
            const obj3 = {
              ref: ref1,
              returnKeyType: "done",
              onChange: tmp10,
              keyboardAppearance: tmp8,
              keyboardType: str4,
              placeholderTextColor: tmp39.placeholderText.color,
              placeholder: str3,
              secureTextEntry: tmp46,
              disabled: tmp31,
              autoFocus: tmp33,
              autoCapitalize: tmp4,
              autoCorrect: tmp5,
              onEndEditing: tmp11.onEndEditing,
              value: tmp26,
              errorMessage: tmp6,
            };
            const tmp61 = jsx(TextInput.TextInput, {
              ref: ref1,
              returnKeyType: "done",
              onChange: tmp10,
              keyboardAppearance: tmp8,
              keyboardType: str4,
              placeholderTextColor: tmp39.placeholderText.color,
              placeholder: str3,
              secureTextEntry: tmp46,
              disabled: tmp31,
              autoFocus: tmp33,
              autoCapitalize: tmp4,
              autoCorrect: tmp5,
              onEndEditing: tmp11.onEndEditing,
              value: tmp26,
              errorMessage: tmp6,
            });
            cResult[44] = str4;
            cResult[45] = tmp46;
            cResult[46] = tmp4;
            cResult[47] = tmp5;
            cResult[48] = tmp33;
            cResult[49] = tmp31;
            cResult[50] = tmp6;
            cResult[51] = tmp8;
            cResult[52] = tmp10;
            cResult[53] = str3;
            cResult[54] = tmp11.onEndEditing;
            cResult[55] = tmp39.placeholderText.color;
            cResult[56] = tmp26;
            cResult[57] = tmp61;
            tmp59 = tmp61;
          }
        } else {
          if (null != tmp11.returnKeyType) {
            let str5 = tmp11.returnKeyType;
          } else {
            str5 = "done";
            if (tmp32) {
              str5 = "default";
            }
          }
          let str6 = tmp6;
          if (tmp6 == null) {
            str6 = "";
          }
          if (cResult[58] === tmp13) {
            if (cResult[59] === tmp39.inputViewContainer) {
              let tmp51 = cResult[60];
            }
            let str7 = tmp26;
            if (tmp26 == null) {
              str7 = "";
            }
            if (tmp32) {
              NEVER = native.ClearButtonVisibility.NEVER;
            }
            if (cResult[61] === str4) {
              if (cResult[62] === tmp46) {
                if (cResult[63] === tmp4) {
                  if (cResult[64] === tmp5) {
                    if (cResult[65] === tmp33) {
                      if (cResult[66] === tmp31) {
                        if (cResult[67] === str2) {
                          if (cResult[68] === tmp7) {
                            if (cResult[69] === tmp8) {
                              if (cResult[70] === tmp32) {
                                if (cResult[71] === num26) {
                                  if (cResult[72] === tmp10) {
                                    if (cResult[73] === str3) {
                                      if (cResult[74] === tmp11) {
                                        if (cResult[75] === tmp34) {
                                          if (cResult[76] === tmp36) {
                                            if (cResult[77] === tmp39.inputText.color) {
                                              if (cResult[78] === tmp39.placeholderText.color) {
                                                if (cResult[79] === str5) {
                                                  if (cResult[80] === str6) {
                                                    if (cResult[81] === tmp51) {
                                                      if (cResult[82] === str7) {
                                                        if (cResult[83] === NEVER) {
                                                          if (cResult[84] === str) {
                                                            let tmp52 = cResult[85];
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
            const obj5 = {
              ref: ref2,
              inputTextColor: tmp39.inputText.color,
              multiline: tmp32,
              returnKeyType: str5,
              onChangeText: tmp10,
              keyboardAppearance: tmp8,
              keyboardType: str4,
              placeholderTextColor: tmp39.placeholderText.color,
              title: str,
              helpText: str2,
              error: str6,
              placeholder: str3,
              secureTextEntry: tmp46,
              disabled: tmp31,
              autoFocus: tmp33,
              numberOfLines: num26,
              autoCapitalize: tmp4,
              autoCorrect: tmp5,
              showBorder: tmp34,
              showCharactersRemaining: tmp36,
              style: tmp51,
              inputTextStyle: tmp7,
              value: str7,
              clearButtonVisibility: NEVER,
            };
            const merged = Object.assign(tmp11);
            const tmp57 = jsx(native.InputView, {
              ref: ref2,
              inputTextColor: tmp39.inputText.color,
              multiline: tmp32,
              returnKeyType: str5,
              onChangeText: tmp10,
              keyboardAppearance: tmp8,
              keyboardType: str4,
              placeholderTextColor: tmp39.placeholderText.color,
              title: str,
              helpText: str2,
              error: str6,
              placeholder: str3,
              secureTextEntry: tmp46,
              disabled: tmp31,
              autoFocus: tmp33,
              numberOfLines: num26,
              autoCapitalize: tmp4,
              autoCorrect: tmp5,
              showBorder: tmp34,
              showCharactersRemaining: tmp36,
              style: tmp51,
              inputTextStyle: tmp7,
              value: str7,
              clearButtonVisibility: NEVER,
            });
            cResult[61] = str4;
            cResult[62] = tmp46;
            cResult[63] = tmp4;
            cResult[64] = tmp5;
            cResult[65] = tmp33;
            cResult[66] = tmp31;
            cResult[67] = str2;
            cResult[68] = tmp7;
            cResult[69] = tmp8;
            cResult[70] = tmp32;
            cResult[71] = num26;
            cResult[72] = tmp10;
            cResult[73] = str3;
            cResult[74] = tmp11;
            cResult[75] = tmp34;
            cResult[76] = tmp36;
            cResult[77] = tmp39.inputText.color;
            cResult[78] = tmp39.placeholderText.color;
            cResult[79] = str5;
            cResult[80] = str6;
            cResult[81] = tmp51;
            cResult[82] = str7;
            cResult[83] = NEVER;
            cResult[84] = str;
            cResult[85] = tmp57;
            tmp52 = tmp57;
          }
          const items = [tmp39.inputViewContainer, tmp13];
          cResult[58] = tmp13;
          cResult[59] = tmp39.inputViewContainer;
          cResult[60] = items;
          tmp51 = items;
        }
        ref2 = noop.useRef(null);
      } else {
        shared.isThemeDark(tmp41) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
        const tmpResult8 = shared;
      }
      tmp30 = undefined !== tmp20 && tmp20;
      tmp38 = undefined === tmp17 || tmp17;
    }
  : function FormInput(helpText) {
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
      let onEndEditing = Object.assign(
        helpText,
        Object.assign({
          onChange: 0,
          keyboardAppearance: 0,
          keyboardType: 0,
          style: 0,
          inputTextStyle: 0,
          value: 0,
          title: 0,
          helpText: 0,
          error: 0,
          placeholder: 0,
          secureTextEntry: 0,
          disabled: 0,
          multiline: 0,
          autoFocus: 0,
          numberOfLines: 0,
          clearButtonVisibility: 0,
          autoCapitalize: 0,
          autoCorrect: 0,
          showBorder: 0,
          showCharactersRemaining: 0,
          enableAndroidSanitizedInputWorkaround: 0,
          allowRedesignTextInput: 0,
          ref: 0,
        }),
      );
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
        const imperativeHandle = noop.useImperativeHandle(helpText.ref, () => ({
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
          },
        }));
        if (tmp7) {
          if (flag3) {
            TextArea = TextArea2.TextArea;
            obj2 = {
              ref,
              returnKeyType: "default",
              onChange,
              keyboardAppearance,
              keyboardType: str2,
              placeholderTextColor: null,
              placeholder: null,
              secureTextEntry: null,
              disabled: null,
              autoFocus: null,
              autoCapitalize: null,
              autoCorrect: null,
              maxLength: null,
              onEndEditing: null,
              value: null,
              errorMessage: null,
            };
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
            let tmp13Result = (
              <TextArea
                ref={ref}
                returnKeyType="default"
                onChange={onChange}
                keyboardAppearance={keyboardAppearance}
                keyboardType={str2}
                placeholderTextColor={null}
                placeholder={null}
                secureTextEntry={null}
                disabled={null}
                autoFocus={null}
                autoCapitalize={null}
                autoCorrect={null}
                maxLength={null}
                onEndEditing={null}
                value={null}
                errorMessage={null}
              />
            );
          } else {
            const obj3 = {
              ref,
              returnKeyType: "done",
              onChange,
              keyboardAppearance,
              keyboardType: str2,
              placeholderTextColor: color.placeholderText.color,
              placeholder,
              secureTextEntry: tmp9,
              disabled: flag2,
              autoFocus: flag4,
              autoCapitalize,
              autoCorrect,
              onEndEditing: onEndEditing.onEndEditing,
              value,
              errorMessage: error,
            };
            tmp13Result = jsx(TextInput.TextInput, {
              ref,
              returnKeyType: "done",
              onChange,
              keyboardAppearance,
              keyboardType: str2,
              placeholderTextColor: color.placeholderText.color,
              placeholder,
              secureTextEntry: tmp9,
              disabled: flag2,
              autoFocus: flag4,
              autoCapitalize,
              autoCorrect,
              onEndEditing: onEndEditing.onEndEditing,
              value,
              errorMessage: error,
            });
          }
        } else {
          const obj5 = {
            ref: ref1,
            inputTextColor: color.inputText.color,
            multiline: flag3,
            returnKeyType: null,
            onChangeText: null,
            keyboardAppearance: null,
            keyboardType: null,
            placeholderTextColor: null,
            title: null,
            helpText: null,
            error: null,
            placeholder: null,
            secureTextEntry: null,
            disabled: null,
            autoFocus: null,
            numberOfLines: null,
            autoCapitalize: null,
            autoCorrect: null,
            showBorder: null,
            showCharactersRemaining: null,
            style: null,
            inputTextStyle: null,
            value: null,
            clearButtonVisibility: null,
          };
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
          return jsx(native.InputView, {
            ref: ref1,
            inputTextColor: color.inputText.color,
            multiline: flag3,
            returnKeyType: null,
            onChangeText: null,
            keyboardAppearance: null,
            keyboardType: null,
            placeholderTextColor: null,
            title: null,
            helpText: null,
            error: null,
            placeholder: null,
            secureTextEntry: null,
            disabled: null,
            autoFocus: null,
            numberOfLines: null,
            autoCapitalize: null,
            autoCorrect: null,
            showBorder: null,
            showCharactersRemaining: null,
            style: null,
            inputTextStyle: null,
            value: null,
            clearButtonVisibility: null,
          });
        }
      } else {
        shared.isThemeDark(tmp4) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
        const TextAreaResult2 = shared;
      }
    };
