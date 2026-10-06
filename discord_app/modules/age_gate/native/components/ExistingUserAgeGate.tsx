// === Module 17476: ExistingUserAgeGate ===

// Module 17476 (ExistingUserAgeGate)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ExistingUserAgeGateConstants from "ExistingUserAgeGateConstants" /* 17475 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2044 */;
import UserStore from "UserStore" /* 1377 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let Blocked, c0, c1, closure_1, closure_2, closure_3, constants2, navigation, onSuccess, shouldShowError;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let react = react_mod;
const View = react_native.View;
({ AgeGateAnalyticAction: c9, AgeGateSource: c10 } = AgeGateConstants);
let closure_11 = ExistingUserAgeGateConstants.ExistingUserAgeGateScreens;
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let closure_16 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 8, textAlign: "center" }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, inputGroup: { marginBottom: 16, width: "100%" }, buttonWrapper: { width: "100%" } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onSuccess) => {
  let FAMILY_CENTER;
  let NSFW_CHANNEL;
  let NSFW_VOICE_CHANNEL;
  let Pawtect;
  let action;
  let closure_10;
  let closure_5;
  let currentUser;
  let obj7;
  let obj9;
  let source;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp6;
  let tmp7;
  const tmp = onSuccess;
  const tmp2 = source;
  let obj = onSuccess(source[12]);
  const cResult = obj.c(66);
  onSuccess = onSuccess.onSuccess;
  const onClose = onSuccess.onClose;
  source = onSuccess.source;
  const tmp4 = closure_16();
  let obj2 = onSuccess(source[13]);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class A {
      constructor() {
        return UserStore.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, A);
  let tmp11 = source === constants2.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = constants2);
  if (!tmp11) {
    tmp11 = source === tmp10.NSFW_SERVER_INVITE;
  }
  if (!tmp11) {
    tmp11 = source === tmp10.NSFW_SERVER_INVITE_EMBED;
  }
  react = tmp11;
  let obj4 = react;
  const first = stateFromStores(react.useState(null), 2)[0];
  const tmp12 = stateFromStores(react.useState(null), 2);
  [tmp15, UserRequiredActionStore] = stateFromStores(react.useState(null), 2);
  stateFromStores(react.useState(null), 2);
  [r10061, UserStore] = stateFromStores(react.useState(false), 2);
  const tmp16 = stateFromStores(react.useState(false), 2);
  react.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserRequiredActionStore];
    class B {
      constructor() {
        return UserRequiredActionStore.getAction();
      }
    }
    cResult[2] = items1;
    cResult[3] = B;
    tmp19 = B;
    tmp18 = items1;
  } else {
    tmp18 = cResult[2];
    tmp19 = cResult[3];
  }
  const tmpResult2 = tmp(tmp2[14]);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp18, tmp19);
  if (cResult[4] === onClose) {
    let tmp22;
    let tmp23;
    if (cResult[5] === stateFromStores1) {
      tmp22 = cResult[6];
      tmp23 = cResult[7];
    }
    const effect = obj4.useEffect(tmp22, tmp23);
    if (cResult[8] === tmp11) {
      if (cResult[9] === navigation) {
        if (cResult[10] === onSuccess) {
          if (stateFromStores != null) {
            let nsfwAllowed = stateFromStores.nsfwAllowed;
          }
          class B {
            constructor() {
              return UserRequiredActionStore.getAction();
            }
          }
          if (cResult[13] === tmp11) {
            if (cResult[14] === navigation) {
              if (cResult[15] === onSuccess) {
                let tmp28;
                let tmp31;
                let tmp30;
                if (cResult[16] === stateFromStores) {
                  tmp28 = cResult[17];
                }
                const effect1 = obj4.useEffect(X, tmp28);
                if (cResult[18] !== source) {
                  function tt() {
                    const obj = AnalyticsUtilsDefault;
                    const obj2 = { source, action: stateFromStores1.AGE_GATE_OPEN };
                    obj.track(constants.AGE_GATE_ACTION, obj2);
                  }
                  const items2 = [source];
                  class B {
                    constructor() {
                      return UserRequiredActionStore.getAction();
                    }
                  }
                  cResult[18] = source;
                  cResult[19] = items2;
                  cResult[20] = tt;
                  tmp31 = tt;
                  tmp30 = items2;
                } else {
                  tmp30 = cResult[19];
                  tmp31 = cResult[20];
                }
                class B {
                  constructor() {
                    return UserRequiredActionStore.getAction();
                  }
                }
                const effect2 = obj4.useEffect(tmp31, tmp30);
                if (source !== NSFW_CHANNEL) {
                  if (source !== NSFW_VOICE_CHANNEL) {
                    if (!tmp11) {
                      if (tmp32) {
                        const _Symbol2 = Symbol;
                        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl2 = tmp(tmp2[16]).intl;
                          const stringResult = intl2.string(tmp(tmp2[16]).t.mhUrKS);
                          class B {
                            constructor() {
                              return UserRequiredActionStore.getAction();
                            }
                          }
                          cResult[22] = stringResult;
                        }
                        class B {
                          constructor() {
                            return UserRequiredActionStore.getAction();
                          }
                        }
                      } else {
                        const _Symbol = Symbol;
                        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                          let intl = tmp(tmp2[16]).intl;
                          const format = intl.format;
                          let obj3 = { helpURL: obj7.getArticleURL(constants4.AGE_GATE) };
                          class B {
                            constructor() {
                              return UserRequiredActionStore.getAction();
                            }
                          }
                          const EcJBEI = tmp(tmp2[16]).t.EcJBEI;
                          obj7 = onClose(tmp2[17]);
                          cResult[23] = format(EcJBEI, obj3);
                          format(EcJBEI, obj3);
                          class X {
                            constructor() {
                              let nsfwAllowed;
                              if (stateFromStores != null) {
                                nsfwAllowed = stateFromStores.nsfwAllowed;
                              }
                              if (false === nsfwAllowed) {
                                if (closure_5) {
                                  navigation.push(Pawtect.Pawtect);
                                }
                              }
                              let nsfwAllowed1;
                              if (stateFromStores != null) {
                                nsfwAllowed1 = stateFromStores.nsfwAllowed;
                              }
                              if (null != nsfwAllowed1) {
                                onSuccess();
                              }
                            }
                          }
                        }
                      }
                    }
                    if (tmp11) {
                      const _Symbol6 = Symbol;
                      if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl6 = tmp(tmp2[16]).intl;
                        const stringResult1 = intl6.string(tmp(tmp2[16]).t["H0SG/g"]);
                        class B {
                          constructor() {
                            return UserRequiredActionStore.getAction();
                          }
                        }
                        cResult[24] = stringResult1;
                      }
                      class B {
                        constructor() {
                          return UserRequiredActionStore.getAction();
                        }
                      }
                    } else if (tmp32) {
                      const _Symbol5 = Symbol;
                      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl5 = tmp(tmp2[16]).intl;
                        const stringResult2 = intl5.string(tmp(tmp2[16]).t.M7mt7m);
                        class B {
                          constructor() {
                            return UserRequiredActionStore.getAction();
                          }
                        }
                        cResult[25] = stringResult2;
                        let tmp44 = stringResult2;
                      } else {
                        tmp44 = cResult[25];
                      }
                      class B {
                        constructor() {
                          return UserRequiredActionStore.getAction();
                        }
                      }
                    } else {
                      const _Symbol4 = Symbol;
                      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                        const intl4 = tmp(tmp2[16]).intl;
                        const stringResult3 = intl4.string(tmp(tmp2[16]).t.F8otRo);
                        class B {
                          constructor() {
                            return UserRequiredActionStore.getAction();
                          }
                        }
                        cResult[26] = stringResult3;
                      }
                    }
                    if (cResult[27] === navigation) {
                      let tmp48;
                      if (cResult[28] === source) {
                        tmp48 = cResult[29];
                      }
                      constants2 = tmp48;
                      if (cResult[30] === first) {
                        if (cResult[31] === navigation) {
                          if (cResult[32] === source) {
                            let tmp50;
                            if (cResult[35] !== first) {
                              const tmp52 = onClose(tmp2[22])(first);
                              class B {
                                constructor() {
                                  return UserRequiredActionStore.getAction();
                                }
                              }
                              cResult[36] = tmp52;
                              tmp50 = tmp52;
                            } else {
                              tmp50 = cResult[36];
                            }
                            const tmp53 = !tmp50;
                            class B {
                              constructor() {
                                return UserRequiredActionStore.getAction();
                              }
                            }
                            let stringResult4 = tmp15;
                            if (!tmp50) {
                              stringResult4 = tmp15;
                              if (null != first) {
                                const intl7 = tmp(tmp2[16]).intl;
                                stringResult4 = intl7.string(tmp(tmp2[16]).t.udnqh6);
                              }
                            }
                            cResult[37] = first;
                            cResult[38] = tmp53;
                            class X {
                              constructor() {
                                let nsfwAllowed;
                                if (stateFromStores != null) {
                                  nsfwAllowed = stateFromStores.nsfwAllowed;
                                }
                                if (false === nsfwAllowed) {
                                  if (closure_5) {
                                    navigation.push(Pawtect.Pawtect);
                                  }
                                }
                                let nsfwAllowed1;
                                if (stateFromStores != null) {
                                  nsfwAllowed1 = stateFromStores.nsfwAllowed;
                                }
                                if (null != nsfwAllowed1) {
                                  onSuccess();
                                }
                              }
                            }
                            cResult[40] = stringResult4;
                          }
                        }
                      }
                      class B {
                        constructor() {
                          return UserRequiredActionStore.getAction();
                        }
                      }
                      let closure_0 = navigation(function*() {
                        if (c0 === 2) {
                          c0 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj2 = { value, done: true };
                            return obj2;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          try {
                            c0 = 2;
                            if (0 === c1) {
                              if (arg0 === 1) {
                                c0 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c0 = 3;
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                onClose(source[18])(null != first, "Cannot submit null birthday.");
                                const obj6 = onClose(source[21])();
                                const diffResult = obj6.diff(first, "years");
                                if (diffResult < 18) {
                                  const obj4 = {
                                    source,
                                    onConfirm() {
                                                return closure_1_10(closure_1_6);
                                              },
                                    age: diffResult
                                  };
                                  navigation.push(AgeGateConfirm.AgeGateConfirm, obj4);
                                } else {
                                  c1 = 1;
                                  c0 = 1;
                                  const obj5 = { value: closure_1_10(first), done: false };
                                  return obj5;
                                }
                              }
                            } else if (arg0 === 1) {
                              c0 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c0 = 3;
                              const obj = { value, done: true };
                              return obj;
                            }
                            c0 = 3;
                            return { value: "IconComponent", done: null };
                          } catch (tmp9) {
                            c0 = 3;
                            throw tmp9;
                          }
                        }
                      });
                      function submitBirthdayWithAgeConfirmation() {
                        return closure_0(...arguments);
                      }
                      cResult[30] = first;
                      cResult[31] = navigation;
                      class X {
                        constructor() {
                          let nsfwAllowed;
                          if (stateFromStores != null) {
                            nsfwAllowed = stateFromStores.nsfwAllowed;
                          }
                          if (false === nsfwAllowed) {
                            if (closure_5) {
                              navigation.push(Pawtect.Pawtect);
                            }
                          }
                          let nsfwAllowed1;
                          if (stateFromStores != null) {
                            nsfwAllowed1 = stateFromStores.nsfwAllowed;
                          }
                          if (null != nsfwAllowed1) {
                            onSuccess();
                          }
                        }
                      }
                      cResult[33] = tmp48;
                      cResult[34] = submitBirthdayWithAgeConfirmation;
                    }
                    class B {
                      constructor() {
                        return UserRequiredActionStore.getAction();
                      }
                    }
                    closure_0 = navigation((shouldShowError) => {
                      let c5 = 0;
                      let c6 = 0;
                      let c4 = 0;
                      return (function*(arg0) {
                        let obj10;
                        if (c6 === 2) {
                          c6 = 3;
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
                            c6 = 2;
                            if (0 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                return { value, done: true };
                              } else {
                                source = tmp;
                                shouldShowError = undefined;
                                closure_1 = undefined;
                                onClose(closure_2_2[18])(null != shouldShowError, "Cannot submit null birthday.");
                                shouldShowError = false;
                                c4 = 1;
                                closure_1_7(null);
                                closure_1_8(true);
                                c5 = 2;
                                c6 = 1;
                                const obj5 = { value: obj10.submitDateOfBirth(shouldShowError, source), done: false };
                                obj10 = shouldShowError(closure_2_2[19]);
                                return obj5;
                              }
                            } else {
                              if (1 === c5) {
                                let message;
                                c4 = 0;
                                closure_1 = navigation;
                                if (null != closure_1.body) {
                                  if (null != closure_1.body.date_of_birth) {
                                    const push = navigation.push;
                                    Blocked = Blocked.Blocked;
                                    const obj6 = { onClose: onClose(closure_2_2[20]).pop, underageMessage: closure_1.body.date_of_birth, existingUser: true };
                                    push(Blocked, obj6);
                                  }
                                  const obj7 = { source, action: constants.AGE_GATE_FAILURE };
                                  const obj3 = onClose(closure_2_2[15]);
                                  obj3.track(constants2.AGE_GATE_ACTION, obj7);
                                }
                                let username;
                                if (closure_1 != null) {
                                  const body = closure_1.body;
                                  if (body != null) {
                                    username = body.username;
                                  }
                                }
                                if (null != username) {
                                  const intl = shouldShowError(closure_2_2[16]).intl;
                                  message = intl.string(shouldShowError(closure_2_2[16]).t["TGg/2k"]);
                                } else {
                                  message = closure_1.message;
                                }
                                closure_1_7(message);
                                closure_1_8(false);
                                shouldShowError = true;
                              } else if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c4 = 0;
                                c6 = 3;
                                return { value, done: true };
                              } else {
                                c4 = 0;
                              }
                              c6 = 3;
                              return { value: { shouldShowError }, done: true };
                            }
                          } catch (tmp44) {
                            navigation = tmp44;
                            if (0 === c4) {
                              c6 = 3;
                              throw tmp44;
                            } else {
                              c5 = 1;
                            }
                          }
                        }
                      })();
                    });
                    function submitBirthday() {
                      return closure_0(...arguments);
                    }
                    cResult[27] = navigation;
                    cResult[28] = source;
                    class X {
                      constructor() {
                        let nsfwAllowed;
                        if (stateFromStores != null) {
                          nsfwAllowed = stateFromStores.nsfwAllowed;
                        }
                        if (false === nsfwAllowed) {
                          if (closure_5) {
                            navigation.push(Pawtect.Pawtect);
                          }
                        }
                        let nsfwAllowed1;
                        if (stateFromStores != null) {
                          nsfwAllowed1 = stateFromStores.nsfwAllowed;
                        }
                        if (null != nsfwAllowed1) {
                          onSuccess();
                        }
                      }
                    }
                    tmp48 = submitBirthday;
                  }
                }
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[16]).intl;
                  const format2 = intl3.format;
                  let obj5 = { helpURL: obj9.getArticleURL(constants4.AGE_GATE) };
                  class B {
                    constructor() {
                      return UserRequiredActionStore.getAction();
                    }
                  }
                  const n3QjDE = tmp(tmp2[16]).t.n3QjDE;
                  obj9 = onClose(tmp2[17]);
                  cResult[21] = format2(n3QjDE, obj5);
                  format2(n3QjDE, obj5);
                  class X {
                    constructor() {
                      let nsfwAllowed;
                      if (stateFromStores != null) {
                        nsfwAllowed = stateFromStores.nsfwAllowed;
                      }
                      if (false === nsfwAllowed) {
                        if (closure_5) {
                          navigation.push(Pawtect.Pawtect);
                        }
                      }
                      let nsfwAllowed1;
                      if (stateFromStores != null) {
                        nsfwAllowed1 = stateFromStores.nsfwAllowed;
                      }
                      if (null != nsfwAllowed1) {
                        onSuccess();
                      }
                    }
                  }
                }
              }
            }
          }
          const items3 = [stateFromStores, onSuccess, tmp11, navigation];
          class X {
            constructor() {
              let nsfwAllowed;
              if (stateFromStores != null) {
                nsfwAllowed = stateFromStores.nsfwAllowed;
              }
              if (false === nsfwAllowed) {
                if (closure_5) {
                  navigation.push(Pawtect.Pawtect);
                }
              }
              let nsfwAllowed1;
              if (stateFromStores != null) {
                nsfwAllowed1 = stateFromStores.nsfwAllowed;
              }
              if (null != nsfwAllowed1) {
                onSuccess();
              }
            }
          }
          cResult[14] = navigation;
          cResult[15] = onSuccess;
          cResult[16] = stateFromStores;
          cResult[17] = items3;
          tmp28 = items3;
        }
      }
    }
    class B {
      constructor() {
        return UserRequiredActionStore.getAction();
      }
    }
    cResult[8] = tmp11;
    cResult[9] = navigation;
    cResult[10] = onSuccess;
    let nsfwAllowed1;
    if (stateFromStores != null) {
      nsfwAllowed1 = stateFromStores.nsfwAllowed;
    }
    class X {
      constructor() {
        let nsfwAllowed;
        if (stateFromStores != null) {
          nsfwAllowed = stateFromStores.nsfwAllowed;
        }
        if (false === nsfwAllowed) {
          if (closure_5) {
            navigation.push(Pawtect.Pawtect);
          }
        }
        let nsfwAllowed1;
        if (stateFromStores != null) {
          nsfwAllowed1 = stateFromStores.nsfwAllowed;
        }
        if (null != nsfwAllowed1) {
          onSuccess();
        }
      }
    }
    cResult[11] = nsfwAllowed1;
    cResult[12] = X;
  }
  class Y {
    constructor() {
      if (null != stateFromStores1) {
        if (onClose != null) {
          tmp();
        }
      }
    }
  }
  const items4 = [stateFromStores1, onClose];
  cResult[4] = onClose;
  cResult[5] = stateFromStores1;
  cResult[6] = Y;
  cResult[7] = items4;
  tmp23 = items4;
  tmp22 = Y;
}) : ((onSuccess) => {
  let Button;
  let FAMILY_CENTER;
  let NSFW_CHANNEL;
  let NSFW_VOICE_CHANNEL;
  let Pawtect;
  let action;
  let c7;
  let c8;
  let closure_5;
  let currentUser;
  let intl5;
  let intl6;
  let items5;
  let obj11;
  let obj5;
  let obj7;
  let tmp13;
  let tmp15;
  onSuccess = onSuccess.onSuccess;
  const onClose = onSuccess.onClose;
  const source = onSuccess.source;
  react = undefined;
  let date;
  c7 = undefined;
  c8 = undefined;
  let stateFromStores1;
  function submitBirthday(arg0) {
    return obj(...arguments);
  }
  let obj = function _submitBirthday2() {
    const obj = _asyncToGenerator(async (shouldShowError) => {
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      return (async (arg0) => {
        let obj10;
        if (c6 === 2) {
          c6 = 3;
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
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                closure_1 = tmp4;
                shouldShowError = undefined;
                closure_1(closure_2[18])(null != shouldShowError, "Cannot submit null birthday.");
                shouldShowError = false;
                c4 = 1;
                _undefined(null);
                _undefined2(true);
                c5 = 2;
                c6 = 1;
                const obj5 = { value: obj10.submitDateOfBirth(shouldShowError, source), done: false };
                obj10 = shouldShowError(closure_2[19]);
                return obj5;
              }
            } else {
              if (1 === c5) {
                let message;
                c4 = 0;
                closure_1 = closure_3;
                if (null != closure_1.body) {
                  if (null != closure_1.body.date_of_birth) {
                    const push = closure_130_3.push;
                    Blocked = Blocked.Blocked;
                    const obj6 = { onClose: closure_1(closure_2[20]).pop, underageMessage: closure_1.body.date_of_birth, existingUser: true };
                    push(Blocked, obj6);
                  }
                  const obj7 = { source: closure_130_2, action: constants.AGE_GATE_FAILURE };
                  const obj3 = closure_1(closure_2[15]);
                  obj3.track(constants2.AGE_GATE_ACTION, obj7);
                }
                let username;
                if (closure_1 != null) {
                  const body = closure_1.body;
                  if (body != null) {
                    username = body.username;
                  }
                }
                if (null != username) {
                  const intl = shouldShowError(closure_2[16]).intl;
                  message = intl.string(shouldShowError(closure_2[16]).t["TGg/2k"]);
                } else {
                  message = closure_1.message;
                }
                closure_130_7(message);
                closure_130_8(false);
                shouldShowError = true;
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                return { value, done: true };
              } else {
                c4 = 0;
              }
              c6 = 3;
              return { value: { shouldShowError }, done: true };
            }
          } catch (tmp44) {
            closure_3 = tmp44;
            if (0 === c4) {
              c6 = 3;
              throw tmp44;
            } else {
              c5 = 1;
            }
          }
        }
      })();
    });
    return obj(...arguments);
  };
  obj = function _submitBirthdayWithAgeConfirmation2() {
    let obj = _asyncToGenerator(async () => {
      let v1;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c0 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              v1(source[18])(null != date, "Cannot submit null birthday.");
              const obj6 = v1(source[21])();
              const diffResult = obj6.diff(date, "years");
              if (diffResult < 18) {
                const obj4 = {
                  source,
                  onConfirm() {
                              return closure_1_10(closure_1_6);
                            },
                  age: diffResult
                };
                navigation.push(AgeGateConfirm.AgeGateConfirm, obj4);
              } else {
                v1 = 1;
                c0 = 1;
                const obj5 = { value: submitBirthday(date), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c0 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp9) {
          c0 = 3;
          throw tmp9;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_16();
  const tmp2 = onSuccess;
  const tmp3 = source;
  obj = onSuccess(source[13]);
  navigation = obj.useNavigation();
  let obj2 = onSuccess(source[14]);
  const items = [c8];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let tmp7 = source === submitBirthday.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = submitBirthday);
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE;
  }
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE_EMBED;
  }
  react = tmp7;
  const tmp9 = stateFromStores(react.useState(null), 2);
  date = tmp9[0];
  const tmp11 = tmp9[1];
  [tmp13, c7] = stateFromStores(react.useState(null), 2);
  const tmp12 = stateFromStores(react.useState(null), 2);
  [tmp15, c8] = stateFromStores(react.useState(false), 2);
  stateFromStores(react.useState(false), 2);
  const items1 = [c7];
  const ref = react.useRef(null);
  const tmp2Result = tmp2(tmp3[14]);
  stateFromStores1 = tmp2Result.useStateFromStores(items1, () => action.getAction());
  const items2 = [stateFromStores1, onClose];
  const effect = react.useEffect(() => {
    if (null != stateFromStores1) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [stateFromStores, onSuccess, tmp7, navigation];
  const effect1 = react.useEffect(() => {
    let nsfwAllowed;
    if (stateFromStores != null) {
      nsfwAllowed = stateFromStores.nsfwAllowed;
    }
    if (false === nsfwAllowed) {
      if (closure_5) {
        navigation.push(Pawtect.Pawtect);
      }
    }
    let nsfwAllowed1;
    if (stateFromStores != null) {
      nsfwAllowed1 = stateFromStores.nsfwAllowed;
    }
    if (null != nsfwAllowed1) {
      onSuccess();
    }
  }, items3);
  const items4 = [source];
  const effect2 = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { source, action: stateFromStores1.AGE_GATE_OPEN };
    obj.track(constants.AGE_GATE_ACTION, obj2);
  }, items4);
  if (source !== NSFW_CHANNEL) {
    if (source !== NSFW_VOICE_CHANNEL) {
      let stringResult;
      let stringResult1;
      if (!tmp7) {
        let intl = tmp2(tmp3[16]).intl;
        if (source === FAMILY_CENTER) {
          stringResult = intl.string(tmp2(tmp3[16]).t.mhUrKS);
        } else {
          const format = intl.format;
          let obj3 = { helpURL: obj5.getArticleURL(constants4.AGE_GATE) };
          const EcJBEI = tmp2(tmp3[16]).t.EcJBEI;
          obj5 = onClose(tmp3[17]);
          stringResult = format(EcJBEI, obj3);
        }
      }
      const intl3 = tmp2(tmp3[16]).intl;
      const string = intl3.string;
      const t = tmp2(tmp3[16]).t;
      if (tmp7) {
        stringResult1 = string(t["H0SG/g"]);
      } else if (source === FAMILY_CENTER) {
        stringResult1 = string(t.M7mt7m);
      } else {
        stringResult1 = string(t.F8otRo);
      }
      let stringResult2 = tmp13;
      const tmp27 = !onClose(tmp3[22])(date);
      const tmp25 = onClose;
      if (tmp27) {
        stringResult2 = tmp13;
        if (null != date) {
          const intl4 = tmp2(tmp3[16]).intl;
          stringResult2 = intl4.string(tmp2(tmp3[16]).t.udnqh6);
        }
      }
      let obj4 = { top: true, style: tmp.container, children: items5 };
      const SafeAreaPaddingView = tmp2(tmp3[26]).SafeAreaPaddingView;
      let obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult1 };
      items5 = [closure_14(tmp2(tmp3[23]).Text, obj6), , , ];
      const obj8 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: stringResult };
      items5[1] = closure_14(tmp2(tmp3[23]).Text, obj8);
      const obj9 = { style: tmp.inputGroup, ref, label: intl5.string(tmp2(tmp3[16]).t.xNpFJ6), date, onChangeDate: tmp11, error: stringResult2 };
      const tmp25Result = tmp25(tmp3[24]);
      intl5 = tmp2(tmp3[16]).intl;
      items5[2] = closure_14(tmp25Result, obj9);
      let obj10 = { style: tmp.buttonWrapper, children: closure_14(Button, obj11) };
      obj11 = {
        loading: tmp15,
        disabled: tmp15,
        text: intl6.string(tmp2(tmp3[16]).t.PDTjLN),
        onPress: function submitBirthdayWithAgeConfirmation() {
              return obj(...arguments);
            },
        grow: true
      };
      Button = tmp2(tmp3[25]).Button;
      const tmp32 = date;
      intl6 = tmp2(tmp3[16]).intl;
      items5[3] = closure_14(tmp32, obj10);
      return closure_15(SafeAreaPaddingView, obj4);
    }
  }
  const intl2 = tmp2(tmp3[16]).intl;
  const format2 = intl2.format;
  const obj12 = { helpURL: obj7.getArticleURL(constants4.AGE_GATE) };
  const n3QjDE = tmp2(tmp3[16]).t.n3QjDE;
  obj7 = onClose(tmp3[17]);
  stringResult = format2(n3QjDE, obj12);
});
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default tmp5;