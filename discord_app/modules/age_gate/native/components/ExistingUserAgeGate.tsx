// discord_app/modules/age_gate/native/components/ExistingUserAgeGate.tsx
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const AgeGateConstants = fn(1110);
({ AgeGateAnalyticAction: closure_9, AgeGateSource: c10 } = AgeGateConstants);
let closure_11 = fn(17475).ExistingUserAgeGateScreens;
const Constants = fn(1085);
({ AnalyticEvents: closure_12, HelpdeskArticles: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4896);
let closure_16 = createStyles.createStyles({ container: { flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }, header: { marginBottom: 8, textAlign: "center" }, body: { textAlign: "center", lineHeight: 20, marginBottom: 16 }, inputGroup: { marginBottom: 16, width: "100%" }, buttonWrapper: { width: "100%" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGate.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onSuccess) => {
  const cResult = require("c").c(66);
  onSuccess = onSuccess.onSuccess;
  _require = onSuccess;
  const onClose = onSuccess.onClose;
  source = onSuccess.source;
  closure_16();
  let obj = require("c");
  const navigation = require("useNavigation").useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    class A {
      constructor() {
        return closure_8.getCurrentUser();
      }
    }
    cResult[0] = items;
    cResult[1] = A;
    tmp6 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  let obj2 = require("useNavigation");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, A);
  let tmp11 = source === constants2.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = constants2);
  if (!tmp11) {
    tmp11 = source === tmp10.NSFW_SERVER_INVITE;
  }
  if (!tmp11) {
    tmp11 = source === tmp10.NSFW_SERVER_INVITE_EMBED;
  }
  noop = tmp11;
  const tmpResult = require("initialize");
  const first = stateFromStores(noop.useState(null), 2)[0];
  const tmp12 = stateFromStores(noop.useState(null), 2);
  [tmp15, UserRequiredActionStore] = stateFromStores(noop.useState(null), 2);
  const tmp14 = stateFromStores(noop.useState(null), 2);
  [r10061, UserStore] = stateFromStores(noop.useState(false), 2);
  noop.useRef(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserRequiredActionStore];
    class B {
      constructor() {
        return closure_7.getAction();
      }
    }
    cResult[2] = items1;
    cResult[3] = B;
    let tmp19 = B;
    let tmp18 = items1;
  } else {
    tmp18 = cResult[2];
    tmp19 = cResult[3];
  }
  const tmp16 = stateFromStores(noop.useState(false), 2);
  const stateFromStores1 = require("initialize").useStateFromStores(tmp18, tmp19);
  if (cResult[4] === onClose) {
    if (cResult[5] === stateFromStores1) {
      let tmp22 = cResult[6];
      let tmp23 = cResult[7];
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
              return closure_7.getAction();
            }
          }
          if (cResult[13] === tmp11) {
            if (cResult[14] === navigation) {
              if (cResult[15] === onSuccess) {
                if (cResult[16] === stateFromStores) {
                  let tmp28 = cResult[17];
                }
                const effect1 = obj4.useEffect(X, tmp28);
                if (cResult[18] !== source) {
                  function tt() {
                    AnalyticsUtilsDefault.track(constants3.AGE_GATE_ACTION, { source, action: constants.AGE_GATE_OPEN });
                  }
                  const items2 = [source];
                  class B {
                    constructor() {
                      return closure_7.getAction();
                    }
                  }
                  cResult[18] = source;
                  cResult[19] = items2;
                  cResult[20] = tt;
                  let tmp31 = tt;
                  let tmp30 = items2;
                } else {
                  tmp30 = cResult[19];
                  tmp31 = cResult[20];
                }
                class B {
                  constructor() {
                    return closure_7.getAction();
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
                              return closure_7.getAction();
                            }
                          }
                          cResult[22] = stringResult;
                        }
                        class B {
                          constructor() {
                            return closure_7.getAction();
                          }
                        }
                      } else {
                        const _Symbol = Symbol;
                        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
                          let intl = tmp(tmp2[16]).intl;
                          let obj3 = { helpURL: null };
                          class B {
                            constructor() {
                              return closure_7.getAction();
                            }
                          }
                          obj3.helpURL = onClose(tmp2[17]).getArticleURL(constants4.AGE_GATE);
                          let obj7 = onClose(tmp2[17]);
                          cResult[23] = intl.format(tmp(tmp2[16]).t.EcJBEI, obj3);
                          class X {
                            constructor() {
                              tmp = closure_4;
                              nsfwAllowed = undefined;
                              if (closure_4 != null) {
                                nsfwAllowed = tmp.nsfwAllowed;
                              }
                              if (false === nsfwAllowed) {
                                tmp3 = closure_5;
                                if (closure_5) {
                                  tmp7 = closure_3;
                                  tmp8 = closure_11;
                                  arr = closure_3.push(closure_11.Pawtect);
                                }
                                return;
                              }
                              nsfwAllowed1 = undefined;
                              if (tmp != null) {
                                nsfwAllowed1 = tmp.nsfwAllowed;
                              }
                              if (null != nsfwAllowed1) {
                                tmp5 = closure_0;
                                tmp6 = closure_0();
                              }
                              return;
                            }
                          }
                          const formatResult = intl.format(tmp(tmp2[16]).t.EcJBEI, obj3);
                        }
                      }
                      if (tmp11) {
                        const _Symbol6 = Symbol;
                        if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl6 = tmp(tmp2[16]).intl;
                          const stringResult1 = intl6.string(tmp(tmp2[16]).t["H0SG/g"]);
                          class B {
                            constructor() {
                              return closure_7.getAction();
                            }
                          }
                          cResult[24] = stringResult1;
                        }
                        class B {
                          constructor() {
                            return closure_7.getAction();
                          }
                        }
                      } else {
                        if (tmp32) {
                          const _Symbol5 = Symbol;
                          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl5 = tmp(tmp2[16]).intl;
                            const stringResult2 = intl5.string(tmp(tmp2[16]).t.M7mt7m);
                            class B {
                              constructor() {
                                return closure_7.getAction();
                              }
                            }
                            cResult[25] = stringResult2;
                          }
                          class B {
                            constructor() {
                              return closure_7.getAction();
                            }
                          }
                        } else {
                          const _Symbol4 = Symbol;
                          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl4 = tmp(tmp2[16]).intl;
                            const stringResult3 = intl4.string(tmp(tmp2[16]).t.F8otRo);
                            class B {
                              constructor() {
                                return closure_7.getAction();
                              }
                            }
                            cResult[26] = stringResult3;
                          }
                        }
                        if (cResult[27] === navigation) {
                          constants2 = tmp49;
                          if (cResult[30] === first) {
                            if (cResult[31] === navigation) {
                              if (cResult[32] === source) {
                                if (cResult[35] !== first) {
                                  const tmp54 = onClose(tmp2[22])(first);
                                  class B {
                                    constructor() {
                                      return closure_7.getAction();
                                    }
                                  }
                                  cResult[36] = tmp54;
                                  let tmp52 = tmp54;
                                } else {
                                  tmp52 = cResult[36];
                                }
                                class B {
                                  constructor() {
                                    return closure_7.getAction();
                                  }
                                }
                                let stringResult4 = tmp15;
                                if (!tmp52) {
                                  stringResult4 = tmp15;
                                  if (null != first) {
                                    const intl7 = tmp(tmp2[16]).intl;
                                    stringResult4 = intl7.string(tmp(tmp2[16]).t.udnqh6);
                                  }
                                }
                                cResult[37] = first;
                                cResult[38] = !tmp52;
                                class X {
                                  constructor() {
                                    tmp = closure_4;
                                    nsfwAllowed = undefined;
                                    if (closure_4 != null) {
                                      nsfwAllowed = tmp.nsfwAllowed;
                                    }
                                    if (false === nsfwAllowed) {
                                      tmp3 = closure_5;
                                      if (closure_5) {
                                        tmp7 = closure_3;
                                        tmp8 = closure_11;
                                        arr = closure_3.push(closure_11.Pawtect);
                                      }
                                      return;
                                    }
                                    nsfwAllowed1 = undefined;
                                    if (tmp != null) {
                                      nsfwAllowed1 = tmp.nsfwAllowed;
                                    }
                                    if (null != nsfwAllowed1) {
                                      tmp5 = closure_0;
                                      tmp6 = closure_0();
                                    }
                                    return;
                                  }
                                }
                                cResult[40] = stringResult4;
                                const tmp55 = !tmp52;
                              }
                            }
                          }
                          class B {
                            constructor() {
                              return closure_7.getAction();
                            }
                          }
                          _require = navigation(function*() {
                            if (c0 === 2) {
                              c0 = 3;
                              throw new TypeError("Generator functions may not be called on executing generators");
                            } else if (tmp3 === 3) {
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
                                    const diffResult = onClose(source[21])().diff(first, "years");
                                    if (diffResult < 18) {
                                      const obj4 = {
                                        source,
                                        onConfirm() {
                                                    return closure_1_10(closure_1_6);
                                                  },
                                        age: diffResult
                                      };
                                      navigation.push(closure_2_11.AgeGateConfirm, obj4);
                                    } else {
                                      c1 = 1;
                                      c0 = 1;
                                      const obj5 = { value: closure_1_10(first), done: false };
                                      return obj5;
                                    }
                                    const obj6 = onClose(source[21])();
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
                              } catch (tmp10) {
                                c0 = tmp;
                                throw tmp10;
                              }
                            }
                          });
                          function submitBirthdayWithAgeConfirmation() {
                            const self = this;
                            const apply = closure_0.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          }
                          cResult[30] = first;
                          cResult[31] = navigation;
                          class X {
                            constructor() {
                              tmp = closure_4;
                              nsfwAllowed = undefined;
                              if (closure_4 != null) {
                                nsfwAllowed = tmp.nsfwAllowed;
                              }
                              if (false === nsfwAllowed) {
                                tmp3 = closure_5;
                                if (closure_5) {
                                  tmp7 = closure_3;
                                  tmp8 = closure_11;
                                  arr = closure_3.push(closure_11.Pawtect);
                                }
                                return;
                              }
                              nsfwAllowed1 = undefined;
                              if (tmp != null) {
                                nsfwAllowed1 = tmp.nsfwAllowed;
                              }
                              if (null != nsfwAllowed1) {
                                tmp5 = closure_0;
                                tmp6 = closure_0();
                              }
                              return;
                            }
                          }
                          cResult[33] = tmp49;
                          cResult[34] = submitBirthdayWithAgeConfirmation;
                        }
                        class B {
                          constructor() {
                            return closure_7.getAction();
                          }
                        }
                        function submitBirthday() {
                          const self = this;
                          const apply = closure_0.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        }
                        cResult[27] = navigation;
                        cResult[28] = source;
                        cResult[29] = submitBirthday;
                        class X {
                          constructor() {
                            tmp = closure_4;
                            nsfwAllowed = undefined;
                            if (closure_4 != null) {
                              nsfwAllowed = tmp.nsfwAllowed;
                            }
                            if (false === nsfwAllowed) {
                              tmp3 = closure_5;
                              if (closure_5) {
                                tmp7 = closure_3;
                                tmp8 = closure_11;
                                arr = closure_3.push(closure_11.Pawtect);
                              }
                              return;
                            }
                            nsfwAllowed1 = undefined;
                            if (tmp != null) {
                              nsfwAllowed1 = tmp.nsfwAllowed;
                            }
                            if (null != nsfwAllowed1) {
                              tmp5 = closure_0;
                              tmp6 = closure_0();
                            }
                            return;
                          }
                        }
                      }
                    }
                  }
                }
                const _Symbol3 = Symbol;
                if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl3 = tmp(tmp2[16]).intl;
                  let obj5 = { helpURL: null };
                  class B {
                    constructor() {
                      return closure_7.getAction();
                    }
                  }
                  obj5.helpURL = onClose(tmp2[17]).getArticleURL(constants4.AGE_GATE);
                  const obj9 = onClose(tmp2[17]);
                  cResult[21] = intl3.format(tmp(tmp2[16]).t.n3QjDE, obj5);
                  class X {
                    constructor() {
                      tmp = closure_4;
                      nsfwAllowed = undefined;
                      if (closure_4 != null) {
                        nsfwAllowed = tmp.nsfwAllowed;
                      }
                      if (false === nsfwAllowed) {
                        tmp3 = closure_5;
                        if (closure_5) {
                          tmp7 = closure_3;
                          tmp8 = closure_11;
                          arr = closure_3.push(closure_11.Pawtect);
                        }
                        return;
                      }
                      nsfwAllowed1 = undefined;
                      if (tmp != null) {
                        nsfwAllowed1 = tmp.nsfwAllowed;
                      }
                      if (null != nsfwAllowed1) {
                        tmp5 = closure_0;
                        tmp6 = closure_0();
                      }
                      return;
                    }
                  }
                  const formatResult1 = intl3.format(tmp(tmp2[16]).t.n3QjDE, obj5);
                }
              }
            }
          }
          const items3 = [stateFromStores, onSuccess, tmp11, navigation];
          class X {
            constructor() {
              tmp = closure_4;
              nsfwAllowed = undefined;
              if (closure_4 != null) {
                nsfwAllowed = tmp.nsfwAllowed;
              }
              if (false === nsfwAllowed) {
                tmp3 = closure_5;
                if (closure_5) {
                  tmp7 = closure_3;
                  tmp8 = closure_11;
                  arr = closure_3.push(closure_11.Pawtect);
                }
                return;
              }
              nsfwAllowed1 = undefined;
              if (tmp != null) {
                nsfwAllowed1 = tmp.nsfwAllowed;
              }
              if (null != nsfwAllowed1) {
                tmp5 = closure_0;
                tmp6 = closure_0();
              }
              return;
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
        return closure_7.getAction();
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
        tmp = closure_4;
        nsfwAllowed = undefined;
        if (closure_4 != null) {
          nsfwAllowed = tmp.nsfwAllowed;
        }
        if (false === nsfwAllowed) {
          tmp3 = closure_5;
          if (closure_5) {
            tmp7 = closure_3;
            tmp8 = closure_11;
            arr = closure_3.push(closure_11.Pawtect);
          }
          return;
        }
        nsfwAllowed1 = undefined;
        if (tmp != null) {
          nsfwAllowed1 = tmp.nsfwAllowed;
        }
        if (null != nsfwAllowed1) {
          tmp5 = closure_0;
          tmp6 = closure_0();
        }
        return;
      }
    }
    cResult[11] = nsfwAllowed1;
    cResult[12] = X;
  }
  class Y {
    constructor() {
      if (null != closure_9) {
        if (onClose != null) {
          tmpResult = tmp();
        }
      }
      return;
    }
  }
  const items4 = [stateFromStores1, onClose];
  cResult[4] = onClose;
  cResult[5] = stateFromStores1;
  cResult[6] = Y;
  cResult[7] = items4;
  tmp23 = items4;
  tmp22 = Y;
  const tmpResult2 = require("initialize");
}) : ((onSuccess) => {
  onSuccess = onSuccess.onSuccess;
  let onClose = onSuccess.onClose;
  const source = onSuccess.source;
  noop = undefined;
  let date;
  c7 = undefined;
  c8 = undefined;
  let stateFromStores1;
  function submitBirthday(arg0) {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const Pawtect = async function _submitBirthday2(arg0) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            onClose = tmp7;
            closure_129_0 = undefined;
            onClose(tmp3[18])(null != onSuccess, "Cannot submit null birthday.");
            closure_129_0 = false;
            c4 = 1;
            _undefined(null);
            _undefined2(true);
            c5 = 2;
            c6 = 1;
            const obj5 = { value: onSuccess(tmp3[19]).submitDateOfBirth(onSuccess, source), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_1 = closure_3;
          if (null == closure_129_1.body) {
            let username;
            if (closure_129_1 != null) {
              const body = closure_129_1.body;
              if (body != null) {
                username = body.username;
              }
            }
            if (null != username) {
              const intl = onSuccess(tmp3[16]).intl;
              let message = intl.string(onSuccess(tmp3[16]).t["TGg/2k"]);
            } else {
              message = closure_129_1.message;
            }
            closure_130_7(message);
            closure_130_8(false);
            closure_129_0 = true;
            const obj6 = { source: closure_130_2, action: constants.AGE_GATE_FAILURE };
            onClose(tmp3[15]).track(constants2.AGE_GATE_ACTION, obj6);
            const obj3 = onClose(tmp3[15]);
          }
          const obj7 = { onClose: onClose(tmp3[20]).pop, underageMessage: closure_129_1.body.date_of_birth, existingUser: true };
          closure_130_3.push(Blocked.Blocked, obj7);
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else {
          if (arg0 !== 2) {
            c4 = 0;
            { shouldShowError: null }[0] = closure_129_0;
            c6 = 3;
          }
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp47) {
        closure_3 = tmp47;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp47;
        } else {
          c5 = tmp;
        }
      }
    }
  };
  closure_12 = async function _submitBirthdayWithAgeConfirmation2() {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
            v1(38)(null != date, "Cannot submit null birthday.");
            const diffResult = v1(4467)().diff(date, "years");
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
            const obj6 = v1(4467)();
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
      } catch (tmp10) {
        c0 = tmp;
        throw tmp10;
      }
    }
  };
  const tmp = closure_16();
  const navigation = onSuccess(source[13]).useNavigation();
  let obj = onSuccess(source[13]);
  const items = [c8];
  const stateFromStores = onSuccess(source[14]).useStateFromStores(items, () => _undefined2.getCurrentUser());
  let tmp7 = source === submitBirthday.NSFW_SERVER;
  ({ NSFW_CHANNEL, NSFW_VOICE_CHANNEL, FAMILY_CENTER } = submitBirthday);
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE;
  }
  if (!tmp7) {
    tmp7 = source === tmp6.NSFW_SERVER_INVITE_EMBED;
  }
  noop = tmp7;
  const tmp9 = stateFromStores(noop.useState(null), 2);
  date = tmp9[0];
  let obj2 = onSuccess(source[14]);
  [tmp12, c7] = stateFromStores(noop.useState(null), 2);
  const tmp11 = stateFromStores(noop.useState(null), 2);
  [tmp14, c8] = stateFromStores(noop.useState(false), 2);
  const tmp13 = stateFromStores(noop.useState(false), 2);
  const ref = noop.useRef(null);
  const items1 = [c7];
  stateFromStores1 = onSuccess(source[14]).useStateFromStores(items1, () => _undefined.getAction());
  const items2 = [stateFromStores1, onClose];
  const effect = noop.useEffect(() => {
    if (null != stateFromStores1) {
      if (onClose != null) {
        tmp();
      }
    }
  }, items2);
  const items3 = [stateFromStores, onSuccess, tmp7, navigation];
  const effect1 = noop.useEffect(() => {
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
  const effect2 = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants3.AGE_GATE_ACTION, { source, action: constants.AGE_GATE_OPEN });
  }, items4);
  if (source !== NSFW_CHANNEL) {
    if (source !== NSFW_VOICE_CHANNEL) {
      if (!tmp7) {
        let intl = tmp2(tmp3[16]).intl;
        if (tmp8) {
          let stringResult = intl.string(tmp2(tmp3[16]).t.mhUrKS);
        } else {
          let obj3 = { helpURL: onClose(tmp3[17]).getArticleURL(constants4.AGE_GATE) };
          stringResult = intl.format(tmp2(tmp3[16]).t.EcJBEI, obj3);
          let obj5 = onClose(tmp3[17]);
        }
      }
      const intl3 = tmp2(tmp3[16]).intl;
      const string = intl3.string;
      const t = tmp2(tmp3[16]).t;
      if (tmp7) {
        let stringResult1 = string(t["H0SG/g"]);
      } else if (tmp8) {
        stringResult1 = string(t.M7mt7m);
      } else {
        stringResult1 = string(t.F8otRo);
      }
      const tmp25 = onClose(tmp3[22])(date);
      let stringResult2 = tmp12;
      if (!tmp25) {
        stringResult2 = tmp12;
        if (null != date) {
          const intl4 = tmp2(tmp3[16]).intl;
          stringResult2 = intl4.string(tmp2(tmp3[16]).t.udnqh6);
        }
      }
      let obj4 = { top: true, style: tmp.container, children: null };
      let obj6 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult1 };
      const items5 = [closure_14(tmp2(tmp3[23]).Text, obj6), , , ];
      const obj8 = { style: tmp.body, variant: "text-md/medium", color: "interactive-text-default", children: stringResult };
      items5[1] = closure_14(tmp2(tmp3[23]).Text, obj8);
      const obj9 = { style: tmp.inputGroup, ref, label: null, date: null, onChangeDate: null, error: null };
      const intl5 = tmp2(tmp3[16]).intl;
      obj9.label = intl5.string(tmp2(tmp3[16]).t.xNpFJ6);
      obj9.date = date;
      obj9.onChangeDate = tmp9[1];
      obj9.error = stringResult2;
      items5[2] = closure_14(onClose(tmp3[24]), obj9);
      const obj10 = { style: tmp.buttonWrapper, children: null };
      const obj11 = { loading: tmp14, disabled: tmp14, text: null, onPress: null, grow: true };
      const intl6 = tmp2(tmp3[16]).intl;
      obj11.text = intl6.string(tmp2(tmp3[16]).t.PDTjLN);
      obj11.onPress = function submitBirthdayWithAgeConfirmation() {
        const self = this;
        const apply = closure_12.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj10.children = closure_14(tmp2(tmp3[25]).Button, obj11);
      items5[3] = closure_14(date, obj10);
      obj4.children = items5;
      return closure_15(tmp2(tmp3[26]).SafeAreaPaddingView, obj4);
    }
  }
  const intl2 = tmp2(tmp3[16]).intl;
  const obj12 = { helpURL: null };
  const tmp2Result = onSuccess(source[14]);
  obj12.helpURL = onClose(source[17]).getArticleURL(constants4.AGE_GATE);
  stringResult = intl2.format(tmp2(tmp3[16]).t.n3QjDE, obj12);
  let obj7 = onClose(source[17]);
});