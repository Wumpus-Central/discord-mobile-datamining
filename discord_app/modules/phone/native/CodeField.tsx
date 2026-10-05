// === Module 6577: CodeField ===

// Module 6577 (CodeField)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6537 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const CodeType = { NUMERIC: "numeric", ALPHANUMERIC: "alphanumeric" };
let createStyles = createStyles_mod;
let obj2 = { viewWrapper: { flex: 1 }, background: obj3, backgroundFlex: { flex: 1, justifyContent: "space-between" }, container: { padding: 16 }, title: { textAlign: "center" }, subtitle: { marginTop: 8, lineHeight: 18, textAlign: "center" }, inputContainer: { marginTop: 20, width: "100%", alignItems: "center" }, codeContainer: { maxWidth: 336, width: "100%", flexDirection: "row", justifyContent: "space-around" }, spacer: { width: 4 }, inputWrapper: obj4, inputWrapperError: obj5, input: { textAlign: "center" }, singleInputWrapper: { width: "100%" }, singleInputButton: { marginTop: 8, justifyContent: "flex-end" } };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj4 = { borderWidth: 1, borderRadius: 5, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj5 = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
let closure_10 = createStyles(obj2);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function SingleCodeInput(setCode) {
  let code;
  let codeType;
  let count;
  let disabled;
  let error;
  let items;
  let loading;
  let onCodeEntered;
  const obj = onCodeEntered(setCode[8]);
  const cResult = obj.c(26);
  ({ loading, error, count, codeType, onCodeEntered } = setCode);
  ({ disabled, code } = setCode);
  setCode = setCode.setCode;
  let num = 6;
  if (undefined !== count) {
    num = count;
  }
  if (undefined === codeType) {
    codeType = obj.NUMERIC;
  }
  const tmp6 = closure_10();
  if (cResult[0] === codeType) {
    let tmp7;
    if (cResult[1] === setCode) {
      tmp7 = cResult[2];
    }
    if (cResult[3] === code) {
      let tmp8;
      let tmp10;
      if (cResult[4] === onCodeEntered) {
        tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      const str = "react.memo_cache_sentinel";
      const singleInputWrapper = tmp6.singleInputWrapper;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onCodeEntered(tmp2[9]).intl;
        const stringResult = intl.string(onCodeEntered(setCode[9]).t["ysthA+"]);
        cResult[6] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[6];
      }
      let str2 = "default";
      if (codeType === obj.NUMERIC) {
        str2 = "number-pad";
      }
      if (cResult[7] === code) {
        if (cResult[8] === num) {
          if (cResult[9] === disabled) {
            if (cResult[10] === error) {
              if (cResult[11] === tmp7) {
                let tmp13;
                let tmp16;
                if (cResult[12] === str2) {
                  tmp13 = cResult[13];
                }
                const _Symbol2 = Symbol;
                const singleInputButton = tmp6.singleInputButton;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = onCodeEntered(tmp2[9]).intl;
                  const stringResult1 = intl2.string(onCodeEntered(setCode[9]).t["13ofGu"]);
                  cResult[14] = stringResult1;
                  tmp16 = stringResult1;
                } else {
                  tmp16 = cResult[14];
                }
                if (cResult[15] === tmp8) {
                  if (cResult[16] === (undefined !== loading && loading)) {
                    let tmp19;
                    if (cResult[17] === (code.length !== num || disabled)) {
                      tmp19 = cResult[18];
                    }
                    if (cResult[19] === tmp6.singleInputButton) {
                      let tmp22;
                      if (cResult[20] === tmp19) {
                        tmp22 = cResult[21];
                      }
                      if (cResult[22] === tmp6.singleInputWrapper) {
                        if (cResult[23] === tmp22) {
                          let tmp26;
                          if (cResult[24] === tmp13) {
                            tmp26 = cResult[25];
                          }
                          return tmp26;
                        }
                      }
                      const obj2 = { style: singleInputWrapper, children: items };
                      items = [tmp13, tmp22];
                      const tmp29 = closure_8(closure_5, obj2);
                      cResult[22] = tmp6.singleInputWrapper;
                      cResult[23] = tmp22;
                      cResult[24] = tmp13;
                      cResult[25] = tmp29;
                      tmp26 = tmp29;
                    }
                    const obj3 = { style: singleInputButton, children: tmp19 };
                    const tmp25 = closure_7(closure_5, obj3);
                    cResult[19] = tmp6.singleInputButton;
                    cResult[20] = tmp19;
                    cResult[21] = tmp25;
                    tmp22 = tmp25;
                  }
                }
                const obj4 = { loading: undefined !== loading && loading, variant: "primary", size: "lg", text: tmp16, onPress: tmp8, disabled: code.length !== num || disabled };
                const tmp21 = closure_7(onCodeEntered(setCode[11]).Button, obj4);
                cResult[15] = tmp8;
                cResult[16] = undefined !== loading && loading;
                cResult[17] = code.length !== num || disabled;
                cResult[18] = tmp21;
                tmp19 = tmp21;
              }
            }
          }
        }
      }
      const obj5 = { errorMessage: error, value: code, autoCapitalize: "characters", maxLength: num, accessibilityLabel: tmp10, textContentType: "oneTimeCode", keyboardType: str2, onChange: tmp7, disabled, clearable: true, autoFocus: true };
      const tmp15 = closure_7(onCodeEntered(setCode[10]).TextInput, obj5);
      cResult[7] = code;
      cResult[8] = num;
      cResult[9] = disabled;
      cResult[10] = error;
      cResult[11] = tmp7;
      cResult[12] = str2;
      cResult[13] = tmp15;
      tmp13 = tmp15;
    }
    function handlePressSubmit() {
      return onCodeEntered(code);
    }
    cResult[3] = code;
    cResult[4] = onCodeEntered;
    cResult[5] = handlePressSubmit;
    tmp8 = handlePressSubmit;
  }
  function handleChange(str) {
    setCode(str.replace(codeType === obj.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
  }
  cResult[0] = codeType;
  cResult[1] = setCode;
  cResult[2] = handleChange;
  tmp7 = handleChange;
}) : (function SingleCodeInput(loading) {
  let Button;
  let code;
  let count;
  let disabled;
  let error;
  let intl;
  let intl2;
  let items;
  let obj;
  let obj4;
  let str;
  let flag = loading.loading;
  if (flag === undefined) {
    flag = false;
  }
  ({ count, error } = loading);
  if (count === undefined) {
    count = 6;
  }
  let NUMERIC = loading.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  ({ onCodeEntered: importDefault, disabled, code } = loading);
  const setCode = loading.setCode;
  const tmp2 = closure_10();
  obj = { style: tmp2.singleInputWrapper, children: items };
  const obj2 = {
    errorMessage: error,
    value: code,
    autoCapitalize: "characters",
    maxLength: count,
    accessibilityLabel: intl.string(NUMERIC(code[9]).t["ysthA+"]),
    textContentType: "oneTimeCode",
    keyboardType: str,
    onChange: function handleChange(str) {
      setCode(str.replace(NUMERIC === obj.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
    },
    disabled,
    clearable: true,
    autoFocus: true
  };
  const TextInput = NUMERIC(code[10]).TextInput;
  intl = NUMERIC(code[9]).intl;
  str = "default";
  if (NUMERIC === obj.NUMERIC) {
    str = "number-pad";
  }
  items = [closure_7(TextInput, obj2), ];
  const obj3 = { style: tmp2.singleInputButton, children: closure_7(Button, obj4) };
  obj4 = {
    loading: flag,
    variant: "primary",
    size: "lg",
    text: intl2.string(NUMERIC(code[9]).t["13ofGu"]),
    onPress: function handlePressSubmit() {
      return importDefault(code);
    },
    disabled: code.length !== count || disabled
  };
  Button = tmp6(code[11]).Button;
  intl2 = tmp6(code[9]).intl;
  items[1] = closure_7(closure_5, obj3);
  return closure_8(closure_5, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function CodeFieldInner(arg0) {
  let actions;
  let backgroundStyle;
  let codeType;
  let count;
  let description;
  let disabled;
  let error;
  let footer;
  let items;
  let items1;
  let loading;
  let onCodeEntered;
  let title;
  const obj = react2;
  const cResult = obj.c(33);
  ({ title, description, error, onCodeEntered, loading, count, codeType, actions, footer, backgroundStyle, disabled } = arg0);
  let num = 6;
  if (undefined !== count) {
    num = count;
  }
  if (undefined === codeType) {
    codeType = obj.NUMERIC;
  }
  const tmp6 = closure_10();
  const first = _slicedToArray(react.useState(""), 2)[0];
  _slicedToArray(react.useState(""), 2);
  if (cResult[0] === backgroundStyle) {
    let tmp10;
    if (cResult[1] === tmp6.background) {
      tmp10 = cResult[2];
    }
    if (cResult[3] === tmp6.title) {
      let tmp11;
      if (cResult[4] === title) {
        tmp11 = cResult[5];
      }
      if (cResult[6] === description) {
        let tmp14;
        if (cResult[7] === tmp6.subtitle) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === first) {
          if (cResult[10] === codeType) {
            if (cResult[11] === num) {
              if (cResult[12] === disabled) {
                if (cResult[13] === error) {
                  if (cResult[14] === (undefined !== loading && loading)) {
                    let tmp17;
                    if (cResult[15] === onCodeEntered) {
                      tmp17 = cResult[16];
                    }
                    if (cResult[17] === tmp6.inputContainer) {
                      let tmp21;
                      if (cResult[18] === tmp17) {
                        tmp21 = cResult[19];
                      }
                      if (cResult[20] === actions) {
                        if (cResult[21] === tmp6.container) {
                          if (cResult[22] === tmp11) {
                            if (cResult[23] === tmp14) {
                              let tmp25;
                              let tmp29;
                              if (cResult[24] === tmp21) {
                                tmp25 = cResult[25];
                              }
                              if (cResult[26] !== footer) {
                                const obj2 = { children: footer };
                                const tmp32 = metroImportDefault(KeyboardAwareViewDefault, obj2);
                                cResult[26] = footer;
                                cResult[27] = tmp32;
                                tmp29 = tmp32;
                              } else {
                                tmp29 = cResult[27];
                              }
                              if (cResult[28] === tmp6.backgroundFlex) {
                                if (cResult[29] === tmp29) {
                                  if (cResult[30] === tmp10) {
                                    let tmp33;
                                    if (cResult[31] === tmp25) {
                                      tmp33 = cResult[32];
                                    }
                                    return tmp33;
                                  }
                                }
                              }
                              const obj3 = { style: tmp10, contentContainerStyle: tmp6.backgroundFlex, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: items };
                              items = [tmp25, tmp29];
                              const tmp36 = metroImportAll(metroRequire, obj3);
                              cResult[28] = tmp6.backgroundFlex;
                              cResult[29] = tmp29;
                              cResult[30] = tmp10;
                              cResult[31] = tmp25;
                              cResult[32] = tmp36;
                              tmp33 = tmp36;
                            }
                          }
                        }
                      }
                      const obj4 = { style: tmp6.container, children: items1 };
                      items1 = [tmp11, tmp14, tmp21, actions];
                      const tmp28 = metroImportAll(hasOwnProperty, obj4);
                      cResult[20] = actions;
                      cResult[21] = tmp6.container;
                      cResult[22] = tmp11;
                      cResult[23] = tmp14;
                      cResult[24] = tmp21;
                      cResult[25] = tmp28;
                      tmp25 = tmp28;
                    }
                    const obj5 = { style: tmp6.inputContainer, children: tmp17 };
                    const tmp24 = metroImportDefault(hasOwnProperty, obj5);
                    cResult[17] = tmp6.inputContainer;
                    cResult[18] = tmp17;
                    cResult[19] = tmp24;
                    tmp21 = tmp24;
                  }
                }
              }
            }
          }
        }
        const obj6 = { loading: undefined !== loading && loading, error, count: num, onCodeEntered, codeType, disabled, code: first, setCode: tmp9 };
        const tmp20 = metroImportDefault(closure_11, obj6);
        cResult[9] = first;
        cResult[10] = codeType;
        cResult[11] = num;
        cResult[12] = disabled;
        cResult[13] = error;
        cResult[14] = undefined !== loading && loading;
        cResult[15] = onCodeEntered;
        cResult[16] = tmp20;
        tmp17 = tmp20;
      }
      const obj7 = { style: tmp6.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
      const tmp16 = metroImportDefault(Text_Text.Text, obj7);
      cResult[6] = description;
      cResult[7] = tmp6.subtitle;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    }
    const obj8 = { style: tmp6.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    const tmp13 = metroImportDefault(Text_Text.Text, obj8);
    cResult[3] = tmp6.title;
    cResult[4] = title;
    cResult[5] = tmp13;
    tmp11 = tmp13;
  }
  const items2 = [tmp6.background, backgroundStyle];
  cResult[0] = backgroundStyle;
  cResult[1] = tmp6.background;
  cResult[2] = items2;
  tmp10 = items2;
}) : (function CodeFieldInner(loading) {
  let actions;
  let backgroundStyle;
  let description;
  let disabled;
  let error;
  let footer;
  let items;
  let items1;
  let items2;
  let obj;
  let onCodeEntered;
  let title;
  let tmp4;
  let tmp5;
  let flag = loading.loading;
  ({ title, description, error, onCodeEntered } = loading);
  if (flag === undefined) {
    flag = false;
  }
  let num = loading.count;
  if (num === undefined) {
    num = 6;
  }
  let NUMERIC = loading.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  ({ actions, footer, backgroundStyle, disabled } = loading);
  const tmp2 = closure_10();
  obj = { style: items, contentContainerStyle: tmp2.backgroundFlex, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: items2 };
  items = [tmp2.background, backgroundStyle];
  const obj2 = { style: tmp2.container, children: items1 };
  [tmp4, tmp5] = react.useState("");
  items1 = [, , , ];
  const obj3 = { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  _slicedToArray(react.useState(""), 2);
  items1[0] = metroImportDefault(Text_Text.Text, obj3);
  const obj4 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  items1[1] = metroImportDefault(Text_Text.Text, obj4);
  const obj5 = { style: tmp2.inputContainer, children: metroImportDefault(closure_11, { loading: flag, error, count: num, onCodeEntered, codeType: NUMERIC, disabled, code: tmp4, setCode: tmp5 }) };
  items1[2] = metroImportDefault(hasOwnProperty, obj5);
  items1[3] = actions;
  items2 = [metroImportAll(hasOwnProperty, obj2), metroImportDefault(KeyboardAwareViewDefault, { children: footer })];
  return metroImportAll(metroRequire, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function CodeField(disableKeyboardAvoidingView) {
  let tmp11;
  const obj = react2;
  const cResult = obj.c(7);
  const tmp3 = closure_10();
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    let tmp15;
    if (cResult[0] !== disableKeyboardAvoidingView) {
      const obj2 = {};
      const merged = Object.assign(disableKeyboardAvoidingView);
      const tmp21 = metroImportDefault(closure_12, obj2);
      cResult[0] = disableKeyboardAvoidingView;
      cResult[1] = tmp21;
      tmp15 = tmp21;
    } else {
      tmp15 = cResult[1];
    }
    tmp11 = tmp15;
  } else {
    let tmp4;
    if (cResult[2] !== disableKeyboardAvoidingView) {
      const obj3 = {};
      const merged1 = Object.assign(disableKeyboardAvoidingView);
      const tmp10 = metroImportDefault(closure_12, obj3);
      cResult[2] = disableKeyboardAvoidingView;
      cResult[3] = tmp10;
      tmp4 = tmp10;
    } else {
      tmp4 = cResult[3];
    }
    if (cResult[4] === tmp3.viewWrapper) {
      if (cResult[5] === tmp4) {
        tmp11 = cResult[6];
      }
    }
    const obj4 = { style: tmp3.viewWrapper, children: tmp4 };
    const tmp14 = metroImportDefault(KeyboardAwareViewDefault, obj4);
    cResult[4] = tmp3.viewWrapper;
    cResult[5] = tmp4;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
  return tmp11;
}) : (function CodeField(disableKeyboardAvoidingView) {
  let obj3;
  let tmp2Result;
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    const obj2 = {};
    const merged = Object.assign(disableKeyboardAvoidingView);
    tmp2Result = metroImportDefault(closure_12, obj2);
  } else {
    const obj = { style: tmp.viewWrapper, children: metroImportDefault(closure_12, obj3) };
    obj3 = {};
    const tmp5 = KeyboardAwareViewDefault;
    const merged1 = Object.assign(disableKeyboardAvoidingView);
    tmp2Result = metroImportDefault(tmp5, obj);
  }
  return tmp2Result;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/phone/native/CodeField.tsx");

export default tmp5;
export { CodeType };
export const CodeBlocks = function CodeBlocks(onCodeEntered) {
  let TextInput;
  let closure_3;
  let first;
  let items3;
  let num2;
  let obj;
  let obj3;
  let obj4;
  let str;
  onCodeEntered = onCodeEntered.onCodeEntered;
  let num = onCodeEntered.count;
  const hasError = onCodeEntered.hasError;
  if (num === undefined) {
    num = 6;
  }
  let NUMERIC = onCodeEntered.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  first = undefined;
  closure_3 = undefined;
  const tmp2 = closure_10();
  const useState = react.useState;
  const ArrayResult = Array(num);
  [first, closure_3] = useState(ArrayResult.fill(""));
  const useRef = react.useRef;
  const ArrayResult1 = Array(num);
  const ref = useRef(ArrayResult1.fill(null));
  hasOwnProperty = react.useRef(onCodeEntered);
  const effect = react.useEffect(() => {
    ref.current = onCodeEntered;
  });
  let items = [first];
  const effect1 = react.useEffect(() => {
    if (first.every((item) => "" !== item.trim())) {
      ref.current(first.join(""));
    }
  }, items);
  let items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 === num / 2) {
      obj = { style: tmp2.spacer };
      let arr = items1.push(metroImportDefault(hasOwnProperty, obj, "spacer"));
    }
    let items2 = [tmp2.inputWrapper, ];
    let inputWrapperError = null;
    let push = items1.push;
    let tmp12 = hasOwnProperty;
    if (hasError) {
      inputWrapperError = tmp2.inputWrapperError;
    }
    let obj2 = { style: items2, children: metroImportDefault(TextInput, obj3) };
    items2[1] = inputWrapperError;
    obj3 = {
      ref(arg0) {
          ref.current[num2] = arg0;
        },
      style: items3,
      keyboardType: str,
      autoFocus: 0 === num2,
      value: first[num2],
      onKeyPress(nativeEvent) {
          if ("Backspace" !== nativeEvent.nativeEvent.key) {
            if (ref.current[num2 + 1] != null) {
              ref.current[num2 + 1].focus();
            }
          } else if ("" === dependencyMap[num2]) {
            const diff = tmp2 - 1;
            const items = [];
            HermesBuiltin.arraySpread(items, dependencyMap, 0);
            items[diff] = "";
            _slicedToArray(items);
            if (ref.current[diff] != null) {
              ref.current[diff].focus();
            }
          }
        },
      onChangeText(arr) {
          let str = arr;
          if (arr[0] === dependencyMap[num2]) {
            str = arr.slice(1);
          }
          const str2 = str.replace("-", "");
          const str3 = str2.trim();
          const str4 = str3.toUpperCase();
          let parts = str4.split("");
          if ("" === str4) {
            parts = [""];
          }
          const items = [...tmp2];
          const items1 = [num2, 1, ...parts];
          items.splice.apply(items1);
          _slicedToArray(items.slice(0, importDefault));
        },
      selection: obj4,
      autoCapitalize: "characters",
      autoCorrect: false
    };
    size = { height: 42, width: 252 / num };
    items3 = [size, tmp2.input];
    str = "default";
    TextInput = native.TextInput;
    if (NUMERIC === obj.NUMERIC) {
      str = "phone-pad";
    }
    obj4 = { start: first[num2].length, end: first[num2].length };
    let arr2 = push(metroImportDefault(tmp12, obj2, num2));
  }
  const obj5 = { style: tmp2.codeContainer, children: items1 };
  return metroImportDefault(hasOwnProperty, obj5);
};