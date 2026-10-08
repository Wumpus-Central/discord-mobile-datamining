// === Module 16186: RegisterDisplayName ===

// Module 16186 (RegisterDisplayName)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14796 */;

const require = globalThis.__r;

require = fn;
function getGlobalNameError(first1) {
  if (closure_16.includes(first1)) {
    const intl2 = util.intl;
    return intl2.string(util.t.WeJZyy);
  } else {
    for (const item10009 of closure_15) {
      let formatted = arg0.toLowerCase();
      if (formatted.includes(item10009)) {
        let intl = util.intl;
        let stringResult = intl.string(util.t.WeJZyy);
        obj.return();
        return stringResult;
      }
    }
  }
}
const View = fn(17).View;
const RegistrationUIStore = fn(16165);
({ updateRegistrationOptions: closure_8, useRegistrationUIStore: closure_9 } = RegistrationUIStore);
const RegistrationConstants = fn(16166);
({ RegisterTransitionSteps: c10, RegistrationTransitionActionTypes: closure_11 } = RegistrationConstants);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { globalName: { marginTop: nativeDefault.space.PX_24 }, button: null, page: null };
let obj3 = { marginTop: nativeDefault.space.PX_24 };
obj2.button = { marginTop: nativeDefault.space.PX_24 };
obj2.page = { flex: 1 };
let closure_14 = createStyles.createStyles(obj2);
let closure_15 = ["discord", "hypesquad", "snowsgiving", "system message", "system mesage", "sustem mesage", "sustem message"];
let closure_16 = ["everyone", "here"];
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_24 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterDisplayName.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function RegisterDisplayName() {
  let tmp2 = first1;
  const cResult = require("c").c(55);
  let page = closure_14();
  let tmp4 = importDefault;
  let obj = require("c");
  const tmp5 = require("useWideAuthView")();
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  const obj2 = require("useNavigation");
  const tmp7 = context;
  [tmp9, importDefault] = context(noop.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(errors) {
      return errors.errors;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp11 = closure_9(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      let str = closure_1_9.getState().registrationOptions.globalName;
      if (str == null) {
        str = "";
      }
      return str;
    };
    cResult[1] = fn2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[1];
  }
  const tmp7Result = tmp7(noop.useState(tmp12), 2);
  first1 = tmp7Result[0];
  asyncGeneratorStep = tmp7Result[1];
  if (cResult[2] !== first1) {
    const tmp17 = getGlobalNameError(first1);
    cResult[2] = first1;
    cResult[3] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[3];
  }
  context = obj3.useContext(tmp(tmp2[15]).TrackRegistrationContext);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const previousRegistrationTransitionStep = tmp(tmp2[16]).getPreviousRegistrationTransitionStep(tmp(tmp2[17]).AuthStates.REGISTER_DISPLAY_NAME);
    cResult[4] = previousRegistrationTransitionStep;
    let tmp19 = previousRegistrationTransitionStep;
    const tmpResult = tmp(tmp2[16]);
  } else {
    tmp19 = cResult[4];
  }
  tmp4(tmp2[18])(tmp19);
  const tmp8 = context(noop.useState(false), 2);
  tmp4(tmp2[19])(require("ConstantsIOS").AuthStates.REGISTER_DISPLAY_NAME);
  if (cResult[5] !== context) {
    const fn3 = function j() {
      context({ step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.VIEWED });
    };
    const items = [context];
    cResult[5] = context;
    cResult[6] = fn3;
    cResult[7] = items;
    let tmp25 = items;
    let tmp24 = fn3;
  } else {
    tmp24 = cResult[6];
    tmp25 = cResult[7];
  }
  const effect = obj3.useEffect(tmp24, tmp25);
  const ref = noop.useRef(null);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { inputRef: ref };
    cResult[8] = obj4;
    let tmp28 = obj4;
  } else {
    tmp28 = cResult[8];
  }
  tmp4(tmp2[20])(tmp28);
  if (cResult[9] === navigation) {
    if (cResult[10] === context) {
      let tmp30 = cResult[11];
    }
    noop = tmp30;
    if (cResult[12] === tmp30) {
      if (cResult[13] === navigation) {
        let tmp31 = cResult[14];
        let tmp32 = cResult[15];
      }
      const layoutEffect = obj3.useLayoutEffect(tmp31, tmp32);
      const _Symbol = Symbol;
      class K {
        constructor() {
          obj = {
            headerRight() {
                      const obj = { text: null, onPress: null };
                      const intl = closure_0(first1[10]).intl;
                      obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                      obj.onPress = function onPress() {
                        return closure_1_5(null);
                      };
                      return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                    }
          };
          setOptionsResult = closure_0.setOptions(obj);
          return;
        }
      }
      if (tmp34 === Symbol.for("react.memo_cache_sentinel")) {
        function handleChange(str) {
          str = "";
          closure_3(str);
        }
        cResult[16] = handleChange;
        class K {
          constructor() {
            obj = {
              headerRight() {
                          const obj = { text: null, onPress: null };
                          const intl = closure_0(first1[10]).intl;
                          obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                          obj.onPress = function onPress() {
                            return closure_1_5(null);
                          };
                          return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                        }
            };
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
      } else {
        const tmp35 = cResult[16];
      }
      if (cResult[17] === tmp11) {
        if (cResult[18] === tmp15) {
          let tmp36 = cResult[19];
        }
        const _Symbol2 = Symbol;
        class K {
          constructor() {
            obj = {
              headerRight() {
                          const obj = { text: null, onPress: null };
                          const intl = closure_0(first1[10]).intl;
                          obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                          obj.onPress = function onPress() {
                            return closure_1_5(null);
                          };
                          return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                        }
            };
            setOptionsResult = closure_0.setOptions(obj);
            return;
          }
        }
        if (cResult[21] === first1) {
          if (cResult[22] === tmp30) {
            let tmp41 = cResult[23];
          }
          const _Symbol3 = Symbol;
          class K {
            constructor() {
              obj = {
                headerRight() {
                              const obj = { text: null, onPress: null };
                              const intl = closure_0(first1[10]).intl;
                              obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                              obj.onPress = function onPress() {
                                return closure_1_5(null);
                              };
                              return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                            }
              };
              setOptionsResult = closure_0.setOptions(obj);
              return;
            }
          }
          if (cResult[25] !== tmp36) {
            let stringResult;
            if (null == tmp36) {
              let intl = tmp(tmp2[10]).intl;
              stringResult = intl.string(tmp(tmp2[10]).t.fbKwSs);
            }
            class K {
              constructor() {
                obj = {
                  headerRight() {
                                  const obj = { text: null, onPress: null };
                                  const intl = closure_0(first1[10]).intl;
                                  obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                  obj.onPress = function onPress() {
                                    return closure_1_5(null);
                                  };
                                  return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                }
                };
                setOptionsResult = closure_0.setOptions(obj);
                return;
              }
            }
            cResult[26] = stringResult;
            let tmp44 = stringResult;
          } else {
            tmp44 = cResult[26];
          }
          if (cResult[27] === first1) {
            if (cResult[28] === tmp36) {
              if (cResult[29] === tmp41) {
                if (cResult[30] === tmp44) {
                  let tmp46 = cResult[31];
                }
                if (cResult[32] === page.globalName) {
                  if (cResult[33] === tmp46) {
                    let tmp49 = cResult[34];
                  }
                  const _Symbol4 = Symbol;
                  class K {
                    constructor() {
                      obj = {
                        headerRight() {
                                              const obj = { text: null, onPress: null };
                                              const intl = closure_0(first1[10]).intl;
                                              obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                              obj.onPress = function onPress() {
                                                return closure_1_5(null);
                                              };
                                              return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                            }
                      };
                      setOptionsResult = closure_0.setOptions(obj);
                      return;
                    }
                  }
                  if (tmp52 === Symbol.for("react.memo_cache_sentinel")) {
                    const intl2 = tmp(tmp2[10]).intl;
                    const stringResult1 = intl2.string(tmp(tmp2[10]).t.PDTjLN);
                    class K {
                      constructor() {
                        obj = {
                          headerRight() {
                                                  const obj = { text: null, onPress: null };
                                                  const intl = closure_0(first1[10]).intl;
                                                  obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                                  obj.onPress = function onPress() {
                                                    return closure_1_5(null);
                                                  };
                                                  return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                                }
                        };
                        setOptionsResult = closure_0.setOptions(obj);
                        return;
                      }
                    }
                    cResult[35] = stringResult1;
                    let tmp53 = stringResult1;
                  } else {
                    tmp53 = cResult[35];
                  }
                  if (cResult[36] === first1) {
                    if (cResult[37] === tmp30) {
                      let tmp55 = cResult[38];
                    }
                    if (cResult[39] === first1) {
                      if (cResult[40] === tmp15) {
                        let tmp56 = cResult[41];
                      }
                      if (cResult[42] === tmp9) {
                        if (cResult[43] === tmp55) {
                          if (cResult[44] === tmp56) {
                            let tmp58 = cResult[45];
                          }
                          if (cResult[46] === page.button) {
                            if (cResult[47] === tmp58) {
                              let tmp62 = cResult[48];
                            }
                            if (cResult[49] === tmp49) {
                              if (cResult[50] === tmp62) {
                                let tmp65 = cResult[51];
                              }
                              if (tmp5) {
                                return tmp65;
                              } else {
                                if (cResult[52] === tmp65) {
                                }
                                tmp4 = tmp4(tmp2[27]);
                                class K {
                                  constructor() {
                                    obj = {
                                      headerRight() {
                                                                          const obj = { text: null, onPress: null };
                                                                          const intl = closure_0(first1[10]).intl;
                                                                          obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                                                          obj.onPress = function onPress() {
                                                                            return closure_1_5(null);
                                                                          };
                                                                          return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                                                        }
                                    };
                                    setOptionsResult = closure_0.setOptions(obj);
                                    return;
                                  }
                                }
                                tmp72[0] = page.page;
                                tmp72[1] = tmp65;
                                tmp2 = closure_12(tmp4, tmp72);
                                cResult[52] = tmp65;
                                page = page.page;
                                cResult[53] = page;
                                cResult[54] = tmp2;
                              }
                            }
                            class K {
                              constructor() {
                                obj = {
                                  headerRight() {
                                                                  const obj = { text: null, onPress: null };
                                                                  const intl = closure_0(first1[10]).intl;
                                                                  obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                                                  obj.onPress = function onPress() {
                                                                    return closure_1_5(null);
                                                                  };
                                                                  return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                                                }
                                };
                                setOptionsResult = closure_0.setOptions(obj);
                                return;
                              }
                            }
                            tmp67[0] = tmp39;
                            const items1 = [tmp49, tmp62];
                            tmp67[1] = items1;
                            const tmp68 = closure_13(tmp4(tmp2[26]), tmp67);
                            cResult[49] = tmp49;
                            cResult[50] = tmp62;
                            cResult[51] = tmp68;
                            tmp65 = tmp68;
                          }
                          class K {
                            constructor() {
                              obj = {
                                headerRight() {
                                                              const obj = { text: null, onPress: null };
                                                              const intl = closure_0(first1[10]).intl;
                                                              obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                                              obj.onPress = function onPress() {
                                                                return closure_1_5(null);
                                                              };
                                                              return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                                            }
                              };
                              setOptionsResult = closure_0.setOptions(obj);
                              return;
                            }
                          }
                          let obj5 = { style: page.button, children: tmp58 };
                          const tmp64 = closure_12(View, obj5);
                          cResult[46] = page.button;
                          cResult[47] = tmp58;
                          cResult[48] = tmp64;
                          tmp62 = tmp64;
                        }
                      }
                      class K {
                        constructor() {
                          obj = {
                            headerRight() {
                                                      const obj = { text: null, onPress: null };
                                                      const intl = closure_0(first1[10]).intl;
                                                      obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                                      obj.onPress = function onPress() {
                                                        return closure_1_5(null);
                                                      };
                                                      return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                                    }
                          };
                          setOptionsResult = closure_0.setOptions(obj);
                          return;
                        }
                      }
                      tmp60[1] = tmp9;
                      tmp60[2] = tmp53;
                      tmp60[3] = tmp55;
                      tmp60[4] = tmp56;
                      const tmp61 = closure_12(tmp(tmp2[25]).Button, tmp60);
                      cResult[42] = tmp9;
                      cResult[43] = tmp55;
                      cResult[44] = tmp56;
                      cResult[45] = tmp61;
                      tmp58 = tmp61;
                    }
                    class K {
                      constructor() {
                        obj = {
                          headerRight() {
                                                  const obj = { text: null, onPress: null };
                                                  const intl = closure_0(first1[10]).intl;
                                                  obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                                  obj.onPress = function onPress() {
                                                    return closure_1_5(null);
                                                  };
                                                  return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                                }
                        };
                        setOptionsResult = closure_0.setOptions(obj);
                        return;
                      }
                    }
                    cResult[39] = first1;
                    cResult[40] = tmp15;
                    cResult[41] = null != tmp15;
                    tmp56 = tmp57;
                  }
                  function ie() {
                    return closure_5(first1);
                  }
                  cResult[36] = first1;
                  cResult[37] = tmp30;
                  cResult[38] = ie;
                  tmp55 = ie;
                }
                class K {
                  constructor() {
                    obj = {
                      headerRight() {
                                          const obj = { text: null, onPress: null };
                                          const intl = closure_0(first1[10]).intl;
                                          obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                                          obj.onPress = function onPress() {
                                            return closure_1_5(null);
                                          };
                                          return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                                        }
                    };
                    setOptionsResult = closure_0.setOptions(obj);
                    return;
                  }
                }
                let obj6 = { style: tmp40, children: tmp46 };
                const tmp51 = closure_12(View, obj6);
                cResult[32] = page.globalName;
                cResult[33] = tmp46;
                cResult[34] = tmp51;
                tmp49 = tmp51;
              }
            }
          }
          let obj7 = { ref, value: first1, onChange: tmp35, returnKeyType: "next", onSubmitEditing: tmp41, textContentType: "nickname", errorMessage: tmp36, label: tmp43, description: tmp44, clearable: true };
          const tmp48 = closure_12(tmp(tmp2[24]).TextInput, obj7);
          cResult[27] = first1;
          cResult[28] = tmp36;
          cResult[29] = tmp41;
          cResult[30] = tmp44;
          cResult[31] = tmp48;
          tmp46 = tmp48;
        }
        const fn4 = function q() {
          return closure_5(first1);
        };
        cResult[21] = first1;
        cResult[22] = tmp30;
        cResult[23] = fn4;
        tmp41 = fn4;
      }
      let tmp37 = tmp4(tmp2[23])("global_name", tmp11);
      if (tmp37 == null) {
        tmp37 = tmp15;
      }
      cResult[17] = tmp11;
      cResult[18] = tmp15;
      cResult[19] = tmp37;
      tmp36 = tmp37;
    }
    class K {
      constructor() {
        obj = {
          headerRight() {
                  const obj = { text: null, onPress: null };
                  const intl = closure_0(first1[10]).intl;
                  obj.text = intl.string(closure_0(first1[10]).t["5Wxrcd"]);
                  obj.onPress = function onPress() {
                    return closure_1_5(null);
                  };
                  return closure_2_12(closure_0(first1[22]).HeaderActionButton, obj);
                }
        };
        setOptionsResult = closure_0.setOptions(obj);
        return;
      }
    }
    const items2 = [tmp30, navigation];
    cResult[12] = tmp30;
    cResult[13] = navigation;
    cResult[14] = K;
    cResult[15] = items2;
    tmp32 = items2;
    tmp31 = K;
  }
  _require = asyncGeneratorStep(async (globalName) => {
    c2 = 0;
    c3 = 0;
    return (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const obj6 = { globalName };
              closure_2_8(obj6);
              const registrationOptions = closure_2_9.getState().registrationOptions;
              const obj7 = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.SUBMITTED };
              context(obj7);
              let tmp6 = null != registrationOptions.username;
              if (tmp6) {
                tmp6 = "" !== registrationOptions.username;
              }
              if (!tmp6) {
                tmp2(true);
                if (!UniqueUsernamesStore.wasRegistrationSuggestionFetched(globalName)) {
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: require("UniqueUsernamesActionCreators").fetchSuggestionsRegistration(globalName), done: false };
                  return obj8;
                }
              }
              const result = globalName(first1[16]).handleNextOrSubmitRegistration(globalName(first1[17]).AuthStates.REGISTER_DISPLAY_NAME, globalName, context);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          tmp2(false);
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    })();
  });
  function t7() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[9] = navigation;
  cResult[10] = context;
  cResult[11] = t7;
  tmp30 = t7;
  const tmp4Result = tmp4(tmp2[19]);
}) : (function RegisterDisplayName() {
  const tmp = closure_14();
  const tmp4 = require("useWideAuthView")();
  const navigation = require("useNavigation").useNavigation();
  _require = navigation;
  const tmp7 = context(callback.useState(false), 2);
  importDefault = tmp7[1];
  let obj = require("useNavigation");
  const tmp9 = context(callback.useState(() => {
    str = closure_1_9.getState().registrationOptions.globalName;
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  asyncGeneratorStep = tmp9[1];
  const tmp10 = getGlobalNameError(tmp9[0]);
  context = callback.useContext(require("Auth").TrackRegistrationContext);
  const tmp8 = closure_9((errors) => errors.errors);
  const tmp12 = require("useAuthFlowBackHandler");
  tmp12(require("RegistrationStepsUtils").getPreviousRegistrationTransitionStep(require("ConstantsIOS").AuthStates.REGISTER_DISPLAY_NAME));
  const obj2 = require("RegistrationStepsUtils");
  require("useInitialRegistrationStep")(require("ConstantsIOS").AuthStates.REGISTER_DISPLAY_NAME);
  const items = [context];
  const effect = callback.useEffect(() => {
    context({ step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.VIEWED });
  }, items);
  const ref = callback.useRef(null);
  require("useFocusRefOnNavigation")({ inputRef: ref });
  _require = asyncGeneratorStep(async (globalName) => {
    c2 = 0;
    c3 = 0;
    return (async (arg0) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const obj6 = { globalName };
              closure_2_8(obj6);
              const registrationOptions = closure_2_9.getState().registrationOptions;
              const obj7 = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.SUBMITTED };
              context(obj7);
              let tmp6 = null != registrationOptions.username;
              if (tmp6) {
                tmp6 = "" !== registrationOptions.username;
              }
              if (!tmp6) {
                tmp2(true);
                if (!UniqueUsernamesStore.wasRegistrationSuggestionFetched(globalName)) {
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: tmp2(str[21]).fetchSuggestionsRegistration(globalName), done: false };
                  return obj8;
                }
              }
              const result = globalName(str[16]).handleNextOrSubmitRegistration(globalName(str[17]).AuthStates.REGISTER_DISPLAY_NAME, globalName, context);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          tmp2(false);
        } catch (tmp22) {
          c3 = tmp;
          throw tmp22;
        }
      }
    })();
  });
  const items1 = [navigation, context];
  callback = callback.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [callback, navigation];
  const layoutEffect = callback.useLayoutEffect(() => {
    options.setOptions({
      headerRight() {
        const obj = { text: null, onPress: null };
        const intl = closure_0(str[10]).intl;
        obj.text = intl.string(closure_0(str[10]).t["5Wxrcd"]);
        obj.onPress = function onPress() {
          return closure_1_5(null);
        };
        return closure_2_12(closure_0(str[22]).HeaderActionButton, obj);
      }
    });
  }, items2);
  let tmp21 = require("getError")("global_name", tmp8);
  if (tmp21 == null) {
    tmp21 = tmp10;
  }
  let obj3 = { headerText: null, children: null };
  const tmp14 = require("useInitialRegistrationStep");
  let intl = tmp5(tmp3[10]).intl;
  obj3.headerText = intl.string(require("util").t.LYIh7j);
  const obj4 = { style: tmp.globalName, children: null };
  let obj5 = {
    ref,
    value: tmp9[0],
    onChange: function handleChange(str) {
      str = "";
      closure_3(str);
    },
    returnKeyType: "next",
    onSubmitEditing() {
      return callback(str);
    },
    textContentType: "nickname",
    errorMessage: tmp21,
    label: null,
    description: null,
    clearable: true
  };
  const intl2 = tmp5(tmp3[10]).intl;
  obj5.label = intl2.string(require("util").t["9AjdkD"]);
  let stringResult;
  if (null == tmp21) {
    const intl3 = tmp5(tmp3[10]).intl;
    stringResult = intl3.string(tmp5(tmp3[10]).t.fbKwSs);
  }
  obj5.description = stringResult;
  obj4.children = closure_12(require("TextInput").TextInput, obj5);
  const items3 = [closure_12(View, obj4), ];
  let obj6 = { style: tmp.button, children: null };
  let obj7 = { size: "lg", loading: tmp7[0], text: null, onPress: null, disabled: null };
  const intl4 = tmp5(tmp3[10]).intl;
  obj7.text = intl4.string(require("util").t.PDTjLN);
  obj7.onPress = function onPress() {
    return callback(str);
  };
  let tmp27 = null != tmp10;
  if (!tmp27) {
    tmp27 = "" === str.trim();
  }
  obj7.disabled = tmp27;
  obj6.children = closure_12(require("components/Button/Button").Button, obj7);
  items3[1] = closure_12(View, obj6);
  obj3.children = items3;
  const tmp22Result = closure_13(require("AuthFormView"), obj3);
  let tmp24Result = tmp22Result;
  if (!tmp4) {
    let obj8 = { style: tmp.page, children: tmp22Result };
    tmp24Result = closure_12(tmp2(tmp3[27]), obj8);
  }
  return tmp24Result;
});