// === Module 6760: CodeField ===

// Module 6760 (CodeField)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1200 */;
import Text_Text from "Text/Text" /* 5086 */;
import KeyboardAwareViewDefault from "KeyboardAwareView" /* 6720 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const CodeType = { NUMERIC: "numeric", ALPHANUMERIC: "alphanumeric" };
const createStyles = fn(5090);
let obj3 = { viewWrapper: { flex: 1 }, background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, backgroundFlex: { flex: 1, justifyContent: "space-between" }, container: { padding: 16 }, title: { textAlign: "center" }, subtitle: { marginTop: 8, lineHeight: 18, textAlign: "center" }, inputContainer: { marginTop: 20, width: "100%", alignItems: "center" }, codeContainer: { maxWidth: 336, width: "100%", flexDirection: "row", justifyContent: "space-around" }, spacer: { width: 4 }, inputWrapper: null, inputWrapperError: null, input: null, singleInputWrapper: null, singleInputButton: null };
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj3.inputWrapper = { borderWidth: 1, borderRadius: 5, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let obj5 = { borderWidth: 1, borderRadius: 5, alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj3.inputWrapperError = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
obj3.input = { textAlign: "center" };
obj3.singleInputWrapper = { width: "100%" };
obj3.singleInputButton = { marginTop: 8, justifyContent: "flex-end" };
let closure_10 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function SingleCodeInput(setCode) {
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
    if (cResult[1] === setCode) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] === code) {
      if (cResult[4] === onCodeEntered) {
        let tmp8 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = onCodeEntered(tmp2[9]).intl;
        const stringResult = intl.string(onCodeEntered(tmp2[9]).t["ysthA+"]);
        cResult[6] = stringResult;
        let tmp10 = stringResult;
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
                if (cResult[12] === str2) {
                  let tmp13 = cResult[13];
                }
                const _Symbol2 = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = onCodeEntered(tmp2[9]).intl;
                  const stringResult1 = intl2.string(onCodeEntered(tmp2[9]).t["13ofGu"]);
                  cResult[14] = stringResult1;
                  let tmp16 = stringResult1;
                } else {
                  tmp16 = cResult[14];
                }
                if (cResult[15] === tmp8) {
                  if (cResult[16] === tmp4) {
                    if (cResult[17] === tmp18) {
                      let tmp19 = cResult[18];
                    }
                    if (cResult[19] === tmp6.singleInputButton) {
                      if (cResult[20] === tmp19) {
                        let tmp22 = cResult[21];
                      }
                      if (cResult[22] === tmp6.singleInputWrapper) {
                        if (cResult[23] === tmp22) {
                          if (cResult[24] === tmp13) {
                            let tmp26 = cResult[25];
                          }
                          return tmp26;
                        }
                      }
                      const obj2 = { style: tmp6.singleInputWrapper, children: null };
                      const items = [tmp13, tmp22];
                      obj2.children = items;
                      const tmp29 = closure_8(closure_5, obj2);
                      cResult[22] = tmp6.singleInputWrapper;
                      cResult[23] = tmp22;
                      cResult[24] = tmp13;
                      cResult[25] = tmp29;
                      tmp26 = tmp29;
                    }
                    const obj3 = { style: tmp6.singleInputButton, children: tmp19 };
                    const tmp25 = closure_7(closure_5, obj3);
                    cResult[19] = tmp6.singleInputButton;
                    cResult[20] = tmp19;
                    cResult[21] = tmp25;
                    tmp22 = tmp25;
                  }
                }
                const obj4 = { loading: tmp4, variant: "primary", size: "lg", text: tmp16, onPress: tmp8, disabled: code.length !== num || disabled };
                const tmp21 = closure_7(onCodeEntered(tmp2[11]).Button, obj4);
                cResult[15] = tmp8;
                cResult[16] = tmp4;
                cResult[17] = code.length !== num || disabled;
                cResult[18] = tmp21;
                tmp19 = tmp21;
              }
            }
          }
        }
      }
      const obj5 = { errorMessage: error, value: code, autoCapitalize: "characters", maxLength: num, accessibilityLabel: tmp10, textContentType: "oneTimeCode", keyboardType: str2, onChange: tmp7, disabled, clearable: true, autoFocus: true };
      const tmp15 = closure_7(onCodeEntered(tmp2[10]).TextInput, obj5);
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
  obj = { style: tmp2.singleInputWrapper, children: null };
  const obj2 = { errorMessage: error, value: code, autoCapitalize: "characters", maxLength: count, accessibilityLabel: null, textContentType: "oneTimeCode", keyboardType: null, onChange: null, disabled: null, clearable: true, autoFocus: true };
  const intl = NUMERIC(code[9]).intl;
  obj2.accessibilityLabel = intl.string(NUMERIC(code[9]).t["ysthA+"]);
  let str = "default";
  if (NUMERIC === obj.NUMERIC) {
    str = "number-pad";
  }
  obj2.keyboardType = str;
  obj2.onChange = function handleChange(str) {
    setCode(str.replace(NUMERIC === obj.NUMERIC ? /\D/g : /[^A-Z0-9]/g, ""));
  };
  obj2.disabled = disabled;
  const items = [closure_7(NUMERIC(code[10]).TextInput, obj2), ];
  const obj3 = { style: tmp2.singleInputButton, children: null };
  const obj4 = { loading: flag, variant: "primary", size: "lg", text: null, onPress: null, disabled: null };
  const intl2 = tmp6(code[9]).intl;
  obj4.text = intl2.string(NUMERIC(code[9]).t["13ofGu"]);
  obj4.onPress = function handlePressSubmit() {
    return importDefault(code);
  };
  obj4.disabled = code.length !== count || disabled;
  obj3.children = closure_7(NUMERIC(code[11]).Button, obj4);
  items[1] = closure_7(closure_5, obj3);
  obj.children = items;
  return closure_8(closure_5, obj);
});
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function CodeFieldInner(arg0) {
  const obj = c;
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
  const first = _slicedToArray(noop.useState(""), 2)[0];
  if (cResult[0] === backgroundStyle) {
    if (cResult[1] === tmp6.background) {
      let tmp10 = cResult[2];
    }
    if (cResult[3] === tmp6.title) {
      if (cResult[4] === title) {
        let tmp11 = cResult[5];
      }
      if (cResult[6] === description) {
        if (cResult[7] === tmp6.subtitle) {
          let tmp14 = cResult[8];
        }
        if (cResult[9] === first) {
          if (cResult[10] === codeType) {
            if (cResult[11] === num) {
              if (cResult[12] === disabled) {
                if (cResult[13] === error) {
                  if (cResult[14] === tmp4) {
                    if (cResult[15] === onCodeEntered) {
                      let tmp17 = cResult[16];
                    }
                    if (cResult[17] === tmp6.inputContainer) {
                      if (cResult[18] === tmp17) {
                        let tmp21 = cResult[19];
                      }
                      if (cResult[20] === actions) {
                        if (cResult[21] === tmp6.container) {
                          if (cResult[22] === tmp11) {
                            if (cResult[23] === tmp14) {
                              if (cResult[24] === tmp21) {
                                let tmp25 = cResult[25];
                              }
                              if (cResult[26] !== footer) {
                                const obj2 = { children: footer };
                                const tmp32 = React5(KeyboardAwareViewDefault, obj2);
                                cResult[26] = footer;
                                cResult[27] = tmp32;
                                let tmp29 = tmp32;
                              } else {
                                tmp29 = cResult[27];
                              }
                              if (cResult[28] === tmp6.backgroundFlex) {
                                if (cResult[29] === tmp29) {
                                  if (cResult[30] === tmp10) {
                                    if (cResult[31] === tmp25) {
                                      let tmp33 = cResult[32];
                                    }
                                    return tmp33;
                                  }
                                }
                              }
                              const obj3 = { style: tmp10, contentContainerStyle: tmp6.backgroundFlex, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
                              const items = [tmp25, tmp29];
                              obj3.children = items;
                              const tmp36 = closure_1_8(timestampProducer, obj3);
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
                      const obj4 = { style: tmp6.container, children: null };
                      const items1 = [tmp11, tmp14, tmp21, actions];
                      obj4.children = items1;
                      const tmp28 = closure_1_8(hasOwnProperty, obj4);
                      cResult[20] = actions;
                      cResult[21] = tmp6.container;
                      cResult[22] = tmp11;
                      cResult[23] = tmp14;
                      cResult[24] = tmp21;
                      cResult[25] = tmp28;
                      tmp25 = tmp28;
                    }
                    const obj5 = { style: tmp6.inputContainer, children: tmp17 };
                    const tmp24 = React5(hasOwnProperty, obj5);
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
        const obj6 = { loading: tmp4, error, count: num, onCodeEntered, codeType, disabled, code: first, setCode: tmp9 };
        const tmp20 = React5(closure_11, obj6);
        cResult[9] = first;
        cResult[10] = codeType;
        cResult[11] = num;
        cResult[12] = disabled;
        cResult[13] = error;
        cResult[14] = tmp4;
        cResult[15] = onCodeEntered;
        cResult[16] = tmp20;
        tmp17 = tmp20;
      }
      const obj7 = { style: tmp6.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
      const tmp16 = React5(Text_Text.Text, obj7);
      cResult[6] = description;
      cResult[7] = tmp6.subtitle;
      cResult[8] = tmp16;
      tmp14 = tmp16;
    }
    const obj8 = { style: tmp6.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
    const tmp13 = React5(Text_Text.Text, obj8);
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
  const tmp7 = _slicedToArray(noop.useState(""), 2);
}) : (function CodeFieldInner(loading) {
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
  obj = { style: null, contentContainerStyle: tmp2.backgroundFlex, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: null };
  const items = [tmp2.background, backgroundStyle];
  obj.style = items;
  const obj2 = { style: tmp2.container, children: null };
  [tmp4, tmp5] = noop.useState("");
  const items1 = [React5(Text_Text.Text, { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title }), React5(Text_Text.Text, { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description }), , ];
  const obj3 = { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: title };
  const obj4 = { style: tmp2.subtitle, variant: "text-sm/medium", color: "text-default", children: description };
  const tmp3 = _slicedToArray(noop.useState(""), 2);
  items1[2] = React5(hasOwnProperty, { style: tmp2.inputContainer, children: React5(closure_11, { loading: flag, error, count: num, onCodeEntered, codeType: NUMERIC, disabled, code: tmp4, setCode: tmp5 }) });
  items1[3] = actions;
  obj2.children = items1;
  const items2 = [closure_1_8(hasOwnProperty, obj2), React5(KeyboardAwareViewDefault, { children: footer })];
  obj.children = items2;
  return closure_1_8(timestampProducer, obj);
});
ReactCompilerGating = fn(558);
let obj6 = { borderColor: nativeDefault.unsafe_rawColors.RED_400 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/phone/native/CodeField.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CodeField(disableKeyboardAvoidingView) {
  const cResult = c.c(7);
  const tmp3 = closure_10();
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    if (cResult[0] !== disableKeyboardAvoidingView) {
      const obj2 = {};
      const merged = Object.assign(disableKeyboardAvoidingView);
      const tmp21 = React5(closure_12, obj2);
      cResult[0] = disableKeyboardAvoidingView;
      cResult[1] = tmp21;
    }
  } else {
    if (cResult[2] !== disableKeyboardAvoidingView) {
      const obj3 = {};
      const merged1 = Object.assign(disableKeyboardAvoidingView);
      const tmp10 = React5(closure_12, obj3);
      cResult[2] = disableKeyboardAvoidingView;
      cResult[3] = tmp10;
      let tmp4 = tmp10;
    } else {
      tmp4 = cResult[3];
    }
    if (cResult[4] === tmp3.viewWrapper) {
      if (cResult[5] === tmp4) {
        let tmp11 = cResult[6];
      }
      return tmp11;
    }
    const obj4 = { style: tmp3.viewWrapper, children: tmp4 };
    const tmp14 = React5(KeyboardAwareViewDefault, obj4);
    cResult[4] = tmp3.viewWrapper;
    cResult[5] = tmp4;
    cResult[6] = tmp14;
    tmp11 = tmp14;
  }
}) : (function CodeField(disableKeyboardAvoidingView) {
  if (disableKeyboardAvoidingView.disableKeyboardAvoidingView) {
    const obj2 = {};
    const merged = Object.assign(disableKeyboardAvoidingView);
    let tmp2Result = React5(closure_12, obj2);
  } else {
    const obj = { style: tmp.viewWrapper, children: null };
    const obj3 = {};
    const merged1 = Object.assign(disableKeyboardAvoidingView);
    obj.children = React5(closure_12, obj3);
    tmp2Result = React5(KeyboardAwareViewDefault, obj);
  }
  return tmp2Result;
});
export { CodeType };
export const CodeBlocks = function CodeBlocks(onCodeEntered) {
  let obj;
  onCodeEntered = onCodeEntered.onCodeEntered;
  const num2 = onCodeEntered;
  let num = onCodeEntered.count;
  if (num === undefined) {
    num = 6;
  }
  let NUMERIC = onCodeEntered.codeType;
  if (NUMERIC === undefined) {
    NUMERIC = obj.NUMERIC;
  }
  first = undefined;
  closure_3 = undefined;
  const tmp3 = closure_10();
  [first, closure_3] = noop.useState(Array(num).fill(""));
  const ArrayResult = Array(num);
  closure_4 = noop.useRef(Array(num).fill(null));
  noop.useRef(onCodeEntered);
  const effect = noop.useEffect(() => {
    closure_5.current = num2;
  });
  let items = [first];
  const effect1 = noop.useEffect(() => {
    if (first.every((item) => "" !== item.trim())) {
      ref.current(first.join(""));
    }
  }, items);
  let items1 = [];
  for (let num2 = 0; num2 < num; num2 = num2 + 1) {
    if (num2 === num / 2) {
      obj = { style: tmp3.spacer };
      let arr = items1.push(React5(hasOwnProperty, obj, "spacer"));
    }
    let items2 = [tmp3.inputWrapper, ];
    let inputWrapperError = null;
    if (tmp) {
      inputWrapperError = tmp3.inputWrapperError;
    }
    let obj2 = { style: null, children: null };
    items2[1] = inputWrapperError;
    obj2.style = items2;
    let obj3 = {
      ref(arg0) {
          noop.current[num2] = arg0;
        },
      style: null,
      keyboardType: null,
      autoFocus: null,
      value: null,
      onKeyPress: null,
      onChangeText: null,
      selection: null,
      autoCapitalize: "characters",
      autoCorrect: false
    };
    let size = { height: 42, width: 252 / num };
    let items3 = [size, tmp3.input];
    obj3.style = items3;
    let str = "default";
    if (NUMERIC === obj.NUMERIC) {
      str = "phone-pad";
    }
    obj3.keyboardType = str;
    obj3.autoFocus = 0 === num2;
    obj3.value = first[num2];
    obj3.onKeyPress = function onKeyPress(nativeEvent) {
      if ("Backspace" !== nativeEvent.nativeEvent.key) {
        if (noop.current[tmp + 1] != null) {
          obj2.focus();
        }
      } else if ("" === dependencyMap[tmp]) {
        const diff = tmp - 1;
        const items = [];
        HermesBuiltin.arraySpread(dependencyMap, 0);
        items[diff] = "";
        _slicedToArray(items);
        if (noop.current[diff] != null) {
          obj.focus();
        }
      }
    };
    obj3.onChangeText = function onChangeText(arr) {
      let str = arr;
      if (arr[0] === dependencyMap[num2]) {
        str = arr.slice(1);
      }
      const str2 = str.replace("-", "");
      const str4 = str.replace("-", "").trim().toUpperCase();
      let parts = str4.split("");
      if ("" === str4) {
        parts = [""];
      }
      const items = [...tmp2];
      const items1 = [num2, 1, ...parts];
      items.splice.apply(items1);
      _slicedToArray(items.slice(0, importDefault));
      const str3 = str.replace("-", "").trim();
    };
    let obj4 = { start: first[num2].length, end: first[num2].length };
    obj3.selection = obj4;
    obj2.children = React5(native.TextInput, obj3);
    let arr2 = items1.push(React5(hasOwnProperty, obj2, num2));
  }
  return React5(hasOwnProperty, { style: tmp3.codeContainer, children: items1 });
};