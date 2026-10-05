// === Module 15887: RegisterDisplayName ===

// Module 15887 (RegisterDisplayName)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14519 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15867 */;
import RegistrationConstants from "RegistrationConstants" /* 15868 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation, setOptionsResult;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
function getGlobalNameError(first1) {
  if (closure_16.includes(first1)) {
    const intl2 = intl5.intl;
    return intl2.string(intl5.t.WeJZyy);
  } else {
    for (const item10009 of closure_15) {
      let formatted = first1.toLowerCase();
      if (formatted.includes(item10009)) {
        let intl = intl5.intl;
        let stringResult = intl.string(intl5.t.WeJZyy);
        obj.return();
        return stringResult;
      }
    }
  }
}
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const View = react_native.View;
({ updateRegistrationOptions: metroImportAll, useRegistrationUIStore: c9 } = RegistrationUIStore);
({ RegisterTransitionSteps: c10, RegistrationTransitionActionTypes: unpackModuleId } = RegistrationConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { globalName: obj2, button: obj3, page: { flex: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
let closure_14 = createStyles(obj);
let closure_15 = ["discord", "hypesquad", "snowsgiving", "system message", "system mesage", "sustem mesage", "sustem message"];
let closure_16 = ["everyone", "here"];
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_3;
  let closure_5;
  let context;
  let first;
  let first1;
  let obj6;
  let tmp12;
  let tmp15;
  let tmp19;
  let tmp24;
  let tmp25;
  let tmp28;
  const tmp = navigation;
  let obj = navigation(first1[12]);
  const cResult = obj.c(55);
  closure_14();
  require("useWideAuthView")();
  let obj2 = navigation(first1[14]);
  navigation = obj2.useNavigation();
  const obj3 = react;
  [r10025, importDefault] = context(react.useState(false), 2);
  context(react.useState(false), 2);
  const tmp8 = context;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(errors) {
      return errors.errors;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp11 = state(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      let str = state.getState().registrationOptions.globalName;
      if (str == null) {
        str = "";
      }
      return str;
    };
    cResult[1] = fn2;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[1];
  }
  const tmp8Result = tmp8(obj3.useState(tmp12), 2);
  first1 = tmp8Result[0];
  _asyncToGenerator = tmp8Result[1];
  if (cResult[2] !== first1) {
    const tmp17 = getGlobalNameError(first1);
    cResult[2] = first1;
    cResult[3] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[3];
  }
  context = obj3.useContext(tmp(tmp2[15]).TrackRegistrationContext);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(tmp2[16]);
    const previousRegistrationTransitionStep = tmpResult.getPreviousRegistrationTransitionStep(tmp(tmp2[17]).AuthStates.REGISTER_DISPLAY_NAME);
    cResult[4] = previousRegistrationTransitionStep;
    tmp19 = previousRegistrationTransitionStep;
  } else {
    tmp19 = cResult[4];
  }
  const tmp21 = require("useAuthFlowBackHandler")(tmp19);
  const tmp5Result = require("useInitialRegistrationStep");
  tmp5Result(tmp(first1[17]).AuthStates.REGISTER_DISPLAY_NAME);
  if (cResult[5] !== context) {
    const fn3 = function j() {
      const obj = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: unpackModuleId.VIEWED };
      context(obj);
    };
    const items = [context];
    cResult[5] = context;
    cResult[6] = fn3;
    cResult[7] = items;
    tmp25 = items;
    tmp24 = fn3;
  } else {
    tmp24 = cResult[6];
    tmp25 = cResult[7];
  }
  const effect = obj3.useEffect(tmp24, tmp25);
  const ref = obj3.useRef(null);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { inputRef: ref };
    cResult[8] = obj4;
    tmp28 = obj4;
  } else {
    tmp28 = cResult[8];
  }
  require("useFocusRefOnNavigation")(tmp28);
  if (cResult[9] === navigation) {
    let tmp30;
    if (cResult[10] === context) {
      tmp30 = cResult[11];
    }
    react = tmp30;
    if (cResult[12] === tmp30) {
      let tmp31;
      let tmp32;
      if (cResult[13] === navigation) {
        tmp31 = cResult[14];
        tmp32 = cResult[15];
      }
      const layoutEffect = obj3.useLayoutEffect(tmp31, tmp32);
      const _Symbol = Symbol;
      class K {
        constructor() {
          obj = {
            headerRight() {
                      let intl;
                      const obj = {
                        text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                        onPress() {
                          return closure_1_5(null);
                        }
                      };
                      const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                      intl = navigation(first1[10]).intl;
                      return closure_2_12(HeaderActionButton, obj);
                    }
          };
          setOptionsResult = closure_0.setOptions(obj);
          return;
        }
      }
      if (tmp34 === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor(str) {
            closure_3("");
          }
        }
        cResult[16] = V;
        class K {
          constructor() {
            obj = {
              headerRight() {
                          let intl;
                          const obj = {
                            text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                            onPress() {
                              return closure_1_5(null);
                            }
                          };
                          const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                          intl = navigation(first1[10]).intl;
                          return closure_2_12(HeaderActionButton, obj);
                        }
            };
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
      } else {
        class V {
          constructor(str) {
            closure_3("");
          }
        }
      }
      if (cResult[17] === tmp11) {
        class V {
          constructor(str) {
            closure_3("");
          }
        }
        const _Symbol2 = Symbol;
        class K {
          constructor() {
            obj = {
              headerRight() {
                          let intl;
                          const obj = {
                            text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                            onPress() {
                              return closure_1_5(null);
                            }
                          };
                          const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                          intl = navigation(first1[10]).intl;
                          return closure_2_12(HeaderActionButton, obj);
                        }
            };
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
        if (cResult[21] === first1) {
          class V {
            constructor(str) {
              closure_3("");
            }
          }
          const _Symbol3 = Symbol;
          class K {
            constructor() {
              obj = {
                headerRight() {
                              let intl;
                              const obj = {
                                text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                onPress() {
                                  return closure_1_5(null);
                                }
                              };
                              const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                              intl = navigation(first1[10]).intl;
                              return closure_2_12(HeaderActionButton, obj);
                            }
              };
              setOptionsResult = closure_0.setOptions(obj);
              return;
            }
          }
          if (cResult[25] !== tmp36) {
            let stringResult;
            class V {
              constructor(str) {
                closure_3("");
              }
            }
            if (null == tmp36) {
              class V {
                constructor(str) {
                  closure_3("");
                }
              }
              stringResult = obj6.string(tmp(first1[10]).t.fbKwSs);
            }
            class K {
              constructor() {
                obj = {
                  headerRight() {
                                  let intl;
                                  const obj = {
                                    text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                                    onPress() {
                                      return closure_1_5(null);
                                    }
                                  };
                                  const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                                  intl = navigation(first1[10]).intl;
                                  return closure_2_12(HeaderActionButton, obj);
                                }
                };
                setOptionsResult = closure_0.setOptions(obj);
                return;
              }
            }
            cResult[26] = stringResult;
          } else {
            class V {
              constructor(str) {
                closure_3("");
              }
            }
          }
          if (cResult[27] === first1) {
            class V {
              constructor(str) {
                closure_3("");
              }
            }
          }
          const obj5 = { ref, value: first1, onChange: tmp35, returnKeyType: "next", onSubmitEditing: tmp39, textContentType: "nickname", errorMessage: tmp36, label: tmp41, description: tmp42, clearable: true };
          cResult[27] = first1;
          cResult[28] = tmp36;
          cResult[29] = tmp39;
          cResult[30] = tmp42;
          cResult[31] = closure_12(tmp(first1[24]).TextInput, obj5);
          const tmp46 = closure_12(tmp(first1[24]).TextInput, obj5);
        }
        const fn5 = function q() {
          return closure_5(first1);
        };
        cResult[21] = first1;
        cResult[22] = tmp30;
        cResult[23] = fn5;
      }
      let str = "global_name";
      const tmp37 = require("getError")("global_name", tmp11);
      if (tmp37 == null) {
        class V {
          constructor(str) {
            closure_3("");
          }
        }
      }
      cResult[17] = tmp11;
      cResult[18] = tmp15;
      cResult[19] = tmp37;
    }
    class K {
      constructor() {
        obj = {
          headerRight() {
                  let intl;
                  const obj = {
                    text: intl.string(navigation(first1[10]).t["5Wxrcd"]),
                    onPress() {
                      return closure_1_5(null);
                    }
                  };
                  const HeaderActionButton = navigation(first1[22]).HeaderActionButton;
                  intl = navigation(first1[10]).intl;
                  return closure_2_12(HeaderActionButton, obj);
                }
        };
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    const items1 = [tmp30, navigation];
    cResult[12] = tmp30;
    cResult[13] = navigation;
    cResult[14] = K;
    cResult[15] = items1;
    tmp32 = items1;
    tmp31 = K;
  }
  _require = _asyncToGenerator(async (globalName) => {
    let closure_1;
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              const obj6 = { globalName };
              closure_2_8(obj6);
              const registrationOptions = state.getState().registrationOptions;
              const obj7 = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.SUBMITTED };
              closure_1_4(obj7);
              const tmp5 = null != registrationOptions.username && "" !== registrationOptions.username;
              if (!tmp5) {
                tmp(true);
                if (!closure_2_7.wasRegistrationSuggestionFetched(globalName)) {
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: obj2.fetchSuggestionsRegistration(globalName), done: false };
                  obj2 = closure_2_1(first1[21]);
                  return obj8;
                }
              }
              const obj4 = globalName(first1[16]);
              const result = obj4.handleNextOrSubmitRegistration(globalName(first1[17]).AuthStates.REGISTER_DISPLAY_NAME, globalName, closure_1_4);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          tmp(false);
        } catch (tmp21) {
          c3 = 3;
          throw tmp21;
        }
      }
    })();
  });
  const fn4 = function() {
    return closure_0(...arguments);
  };
  cResult[9] = navigation;
  cResult[10] = context;
  cResult[11] = fn4;
  tmp30 = fn4;
}) : (() => {
  let Button;
  let TextInput;
  let callback;
  let closure_1;
  let closure_3;
  let context;
  let intl;
  let intl2;
  let intl4;
  let items3;
  let obj5;
  let obj7;
  let str;
  let stringResult;
  let tmp28;
  const tmp = closure_14();
  const tmp3 = str;
  let tmp5 = navigation;
  const tmp4 = require("useWideAuthView")();
  let obj = navigation(str[14]);
  navigation = obj.useNavigation();
  const tmp7 = context(callback.useState(false), 2);
  importDefault = tmp7[1];
  const first = tmp7[0];
  const tmp9 = state((errors) => errors.errors);
  const tmp10 = context(callback.useState(() => {
    str = state.getState().registrationOptions.globalName;
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  str = tmp10[0];
  _asyncToGenerator = tmp10[1];
  const tmp11 = getGlobalNameError(str);
  context = callback.useContext(navigation(str[15]).TrackRegistrationContext);
  const tmp13 = require("useAuthFlowBackHandler");
  let obj2 = navigation(str[16]);
  tmp13(obj2.getPreviousRegistrationTransitionStep(navigation(str[17]).AuthStates.REGISTER_DISPLAY_NAME));
  const tmp15 = require("useInitialRegistrationStep");
  tmp15(navigation(str[17]).AuthStates.REGISTER_DISPLAY_NAME);
  const items = [context];
  const effect = callback.useEffect(() => {
    const obj = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: unpackModuleId.VIEWED };
    context(obj);
  }, items);
  const ref = callback.useRef(null);
  require("useFocusRefOnNavigation")({ inputRef: ref });
  const useCallback = callback.useCallback;
  let closure_0 = _asyncToGenerator(async (globalName) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0) => {
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              const obj6 = { globalName };
              closure_2_8(obj6);
              const registrationOptions = state.getState().registrationOptions;
              const obj7 = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.SUBMITTED };
              closure_1_4(obj7);
              const tmp5 = null != registrationOptions.username && "" !== registrationOptions.username;
              if (!tmp5) {
                tmp(true);
                if (!closure_2_7.wasRegistrationSuggestionFetched(globalName)) {
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: obj2.fetchSuggestionsRegistration(globalName), done: false };
                  obj2 = closure_2_1(str[21]);
                  return obj8;
                }
              }
              const obj4 = globalName(str[16]);
              const result = obj4.handleNextOrSubmitRegistration(globalName(str[17]).AuthStates.REGISTER_DISPLAY_NAME, globalName, closure_1_4);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          tmp(false);
        } catch (tmp21) {
          c3 = 3;
          throw tmp21;
        }
      }
    })();
  });
  const items1 = [navigation, context];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [callback, navigation];
  const layoutEffect = callback.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let intl;
        const obj = {
          text: intl.string(navigation(str[10]).t["5Wxrcd"]),
          onPress() {
            return closure_1_5(null);
          }
        };
        const HeaderActionButton = navigation(str[22]).HeaderActionButton;
        intl = navigation(str[10]).intl;
        return closure_2_12(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items2);
  let tmp22 = require("getError")("global_name", tmp9);
  if (tmp22 == null) {
    tmp22 = tmp11;
  }
  const obj3 = { headerText: intl.string(tmp5(tmp3[10]).t.LYIh7j), children: items3 };
  const tmp2Result = require("AuthFormView");
  intl = tmp5(tmp3[10]).intl;
  let obj4 = { style: tmp.globalName, children: closure_12(TextInput, obj5) };
  obj5 = {
    ref,
    value: str,
    onChange(str) {
      closure_3("");
    },
    returnKeyType: "next",
    onSubmitEditing() {
      return callback(str);
    },
    textContentType: "nickname",
    errorMessage: tmp22,
    label: intl2.string(tmp5(tmp3[10]).t["9AjdkD"]),
    description: stringResult,
    clearable: true
  };
  TextInput = tmp5(tmp3[24]).TextInput;
  intl2 = tmp5(tmp3[10]).intl;
  stringResult = undefined;
  if (null == tmp22) {
    const intl3 = tmp5(tmp3[10]).intl;
    stringResult = intl3.string(tmp5(tmp3[10]).t.fbKwSs);
  }
  items3 = [closure_12(View, obj4), ];
  let obj6 = { style: tmp.button, children: closure_12(Button, obj7) };
  obj7 = {
    size: "lg",
    loading: first,
    text: intl4.string(tmp5(tmp3[10]).t.PDTjLN),
    onPress() {
      return callback(str);
    },
    disabled: tmp28
  };
  Button = tmp5(tmp3[25]).Button;
  intl4 = tmp5(tmp3[10]).intl;
  tmp28 = null != tmp11;
  if (!tmp28) {
    tmp28 = "" === str.trim();
  }
  items3[1] = closure_12(View, obj6);
  const tmp23Result = closure_13(tmp2Result, obj3);
  let tmp25Result = tmp23Result;
  if (!tmp4) {
    let obj8 = { style: tmp.page, children: tmp23Result };
    tmp25Result = closure_12(tmp2(tmp3[27]), obj8);
  }
  return tmp25Result;
});
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterDisplayName.tsx");

export default tmp6;