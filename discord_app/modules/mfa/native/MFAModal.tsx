// === Module 15499: MFAModal ===

// Module 15499 (MFAModal)
import util from "util" /* 1126 */;
import _modDef4809 from "module_4809" /* 4809 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import MFAUtils from "MFAUtils" /* 6439 */;
import HeaderActionButton from "HeaderActionButton" /* 6880 */;
import MfaStepsTypes from "MfaStepsTypes" /* 15500 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["mfaChallenge", "finish", "cancel", "handleOnClose", "ignoreKeyboard"];
get_ActivityIndicator = fn(17);
({ Keyboard: closure_7, LogBox } = get_ActivityIndicator);
const jsx = fn(21).jsx;
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
const MFA_MODAL_KEY = "MFA_MODAL_KEY";
const ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((cancel) => {
  const cResult = require("c").c(84);
  if (cResult[0] !== cancel) {
    ({ mfaChallenge, finish } = cancel);
    dependencyMap = finish;
    cancel = cancel.cancel;
    _require = cancel;
    const handleOnClose = cancel.handleOnClose;
    importDefault = handleOnClose;
    const ignoreKeyboard = cancel.ignoreKeyboard;
    const tmp12 = _objectWithoutProperties(cancel, closure_3);
    cResult[0] = cancel;
    cResult[1] = tmp12;
    cResult[2] = cancel;
    cResult[3] = handleOnClose;
    cResult[4] = finish;
    cResult[5] = mfaChallenge;
    cResult[6] = ignoreKeyboard;
    let tmp8 = mfaChallenge;
  } else {
    _require = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[4];
    tmp8 = cResult[5];
  }
  if (require("MFAUtils").hasWebAuthn) {
    closure_3 = tmp8;
    if (cResult[13] === tmp8.ticket) {
      if (cResult[14] === finish) {
        let tmp24 = cResult[15];
      }
      if (cResult[16] === tmp5) {
        if (cResult[17] === tmp6) {
          let tmp25 = cResult[18];
        }
        asyncGeneratorStep = tmp25;
        class L {
          constructor() {
            if (null == closure_1) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[8]);
              tmp5 = MFA_MODAL_KEY;
              popWithKeyResult = obj.popWithKey(MFA_MODAL_KEY);
              if (closure_0 != null) {
                tmp8 = globalThis;
                _Error = Error;
                tmp9 = closure_0;
                intl = closure_0(tmp4[9]).intl;
                tmp10 = new.target;
                tmp11 = new.target;
                error = new Error(intl.string(closure_0(tmp4[9]).t.N2yb9a));
                tmp13 = error;
                tmp7Result = tmp7(error);
              }
            } else {
              tmpResult = tmp();
            }
            return;
          }
        }
        let obj2 = { name: tmp(15500).MfaScreens.SELECT, params: null };
        const obj3 = { mfaChallenge: tmp8, finish: tmp24 };
        obj2.params = obj3;
        cResult[19] = tmp24;
        cResult[20] = tmp8;
        cResult[21] = obj2;
      }
      class L {
        constructor() {
          if (null == closure_1) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[8]);
            tmp5 = MFA_MODAL_KEY;
            popWithKeyResult = obj.popWithKey(MFA_MODAL_KEY);
            if (closure_0 != null) {
              tmp8 = globalThis;
              _Error = Error;
              tmp9 = closure_0;
              intl = closure_0(tmp4[9]).intl;
              tmp10 = new.target;
              tmp11 = new.target;
              error = new Error(intl.string(closure_0(tmp4[9]).t.N2yb9a));
              tmp13 = error;
              tmp7Result = tmp7(error);
            }
          } else {
            tmpResult = tmp();
          }
          return;
        }
      }
      cResult[16] = tmp5;
      cResult[17] = tmp6;
      cResult[18] = L;
      tmp25 = L;
    }
    _require = asyncGeneratorStep(async (arg0) => {
      if (ticket === 2) {
        ticket = 3;
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
          ticket = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              ticket = 3;
              throw value;
            } else if (arg0 === 2) {
              ticket = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj5 = { mfaType: null, data: null, ticket: null };
              ({ mfaType: obj3.mfaType, data: obj3.data } = closure_0);
              obj5.ticket = ticket.ticket;
              dependencyMap = 1;
              ticket = 1;
              const obj6 = { value: dependencyMap(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            ticket = 3;
            throw value;
          } else if (arg0 === 2) {
            ticket = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            tmp4(5093).popWithKey(MFA_MODAL_KEY);
            ticket = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          ticket = tmp;
          throw tmp13;
        }
      }
    });
    const fn = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    cResult[13] = tmp8.ticket;
    cResult[14] = finish;
    cResult[15] = fn;
    tmp24 = fn;
  } else if (cResult[7] !== tmp8.methods) {
    const _Symbol = Symbol;
    class L {
      constructor() {
        if (null == closure_1) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[8]);
          tmp5 = MFA_MODAL_KEY;
          popWithKeyResult = obj.popWithKey(MFA_MODAL_KEY);
          if (closure_0 != null) {
            tmp8 = globalThis;
            _Error = Error;
            tmp9 = closure_0;
            intl = closure_0(tmp4[9]).intl;
            tmp10 = new.target;
            tmp11 = new.target;
            error = new Error(intl.string(closure_0(tmp4[9]).t.N2yb9a));
            tmp13 = error;
            tmp7Result = tmp7(error);
          }
        } else {
          tmpResult = tmp();
        }
        return;
      }
    }
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          return "webauthn" !== cancel.type;
        }
      }
      class L {
        constructor() {
          if (null == closure_1) {
            tmp3 = closure_1;
            tmp4 = closure_2;
            obj = closure_1(closure_2[8]);
            tmp5 = MFA_MODAL_KEY;
            popWithKeyResult = obj.popWithKey(MFA_MODAL_KEY);
            if (closure_0 != null) {
              tmp8 = globalThis;
              _Error = Error;
              tmp9 = closure_0;
              intl = closure_0(tmp4[9]).intl;
              tmp10 = new.target;
              tmp11 = new.target;
              error = new Error(intl.string(closure_0(tmp4[9]).t.N2yb9a));
              tmp13 = error;
              tmp7Result = tmp7(error);
            }
          } else {
            tmpResult = tmp();
          }
          return;
        }
      }
    } else {
      class S {
        constructor(arg0) {
          return "webauthn" !== cancel.type;
        }
      }
    }
    const methods = tmp8.methods;
    const found = methods.filter(S);
    cResult[7] = tmp8.methods;
    cResult[8] = found;
  } else {
    class S {
      constructor(arg0) {
        return "webauthn" !== cancel.type;
      }
    }
    if (cResult[10] === tmp8) {
      class S {
        constructor(arg0) {
          return "webauthn" !== cancel.type;
        }
      }
    }
    class L {
      constructor() {
        if (null == closure_1) {
          tmp3 = closure_1;
          tmp4 = closure_2;
          obj = closure_1(closure_2[8]);
          tmp5 = MFA_MODAL_KEY;
          popWithKeyResult = obj.popWithKey(MFA_MODAL_KEY);
          if (closure_0 != null) {
            tmp8 = globalThis;
            _Error = Error;
            tmp9 = closure_0;
            intl = closure_0(tmp4[9]).intl;
            tmp10 = new.target;
            tmp11 = new.target;
            error = new Error(intl.string(closure_0(tmp4[9]).t.N2yb9a));
            tmp13 = error;
            tmp7Result = tmp7(error);
          }
        } else {
          tmpResult = tmp();
        }
        return;
      }
    }
    let merged = Object.assign(tmp8);
    tmp19.methods = tmp13;
    cResult[10] = tmp8;
    cResult[11] = tmp13;
    cResult[12] = tmp19;
  }
  let obj = require("c");
}) : ((mfaChallenge) => {
  mfaChallenge = mfaChallenge.mfaChallenge;
  _require = mfaChallenge;
  let finish = mfaChallenge.finish;
  const cancel = mfaChallenge.cancel;
  const handleOnClose = mfaChallenge.handleOnClose;
  let flag = mfaChallenge.ignoreKeyboard;
  if (flag === undefined) {
    flag = false;
  }
  let merged = Object.assign(mfaChallenge, Object.assign({ mfaChallenge: 0, finish: 0, cancel: 0, handleOnClose: 0, ignoreKeyboard: 0 }));
  finish = undefined;
  let items = [mfaChallenge];
  const memo = finish.useMemo(() => {
    if (MFAUtils.hasWebAuthn) {
      let obj = methods;
    } else {
      obj = {};
      const merged = Object.assign(methods);
      methods = methods.methods;
      obj.methods = methods.filter((type) => "webauthn" !== type.type);
    }
    return obj;
  }, items);
  _require = flag(function*(arg0) {
    yield tmp2({ mfaType: closure_129_0, data: closure_129_1, ticket: ticket.ticket });
    finish(cancel[8]).popWithKey(MFA_MODAL_KEY);
    yield "IconComponent";
    ({ mfaType: closure_129_0, data: closure_129_1 } = closure_0);
    return "Set";
  });
  let items1 = [finish, memo.ticket];
  finish = finish.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [cancel, handleOnClose];
  const callback1 = finish.useCallback(() => {
    if (null == handleOnClose) {
      ModalActionCreatorsDefault.popWithKey(MFA_MODAL_KEY);
      if (cancel != null) {
        const _Error = Error;
        const intl = util.intl;
        const error = new Error(intl.string(util.t.N2yb9a));
        tmp7(error);
      }
    } else {
      tmp();
    }
  }, items2);
  const items3 = [memo, finish];
  const items4 = [callback1, memo.methods, flag];
  const memo1 = finish.useMemo(() => {
    const first = memo.methods[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    if (undefined === type) {
      const items = [obj];
      let items1 = items;
    } else {
      const obj2 = { name: type, params: null };
      const obj3 = { mfaChallenge: memo, finish };
      obj2.params = obj3;
      items1 = [obj2];
    }
    return items1;
  }, items3);
  const memo2 = finish.useMemo(() => {
    function headerRight() {
      const obj = { accessibilityLabel: null, onPress: null, source: null };
      const intl = closure_0(cancel[9]).intl;
      obj.accessibilityLabel = intl.string(closure_0(cancel[9]).t.cpT0Cq);
      obj.onPress = onPress;
      obj.source = finish(cancel[12]);
      return jsx(closure_0(cancel[11]).HeaderActionButton, { accessibilityLabel: null, onPress: null, source: null });
    }
    let obj = { fullscreen: true, ignoreKeyboard: flag, headerTitle: "" };
    const obj2 = {};
    const obj3 = {};
    let merged = Object.assign(obj);
    obj3.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj3.headerRight = headerRight;
    obj3.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_8(finish(15501), {});
    };
    obj2[MfaStepsTypes.MfaScreens.SELECT] = obj3;
    const obj5 = {};
    const merged1 = Object.assign(obj);
    const first = memo.methods[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    if ("webauthn" === type) {
      let headerCloseButton = NavigatorHeader.getHeaderCloseButton(callback1);
      const tmpResult = NavigatorHeader;
    } else {
      headerCloseButton = NavigatorHeader.getHeaderBackButton();
      const tmpResult10 = NavigatorHeader;
    }
    obj5.headerLeft = headerCloseButton;
    const first1 = memo.methods[0];
    let type1;
    if (first1 != null) {
      type1 = first1.type;
    }
    let tmp12;
    if ("webauthn" !== type1) {
      tmp12 = headerRight;
    }
    obj5.headerRight = tmp12;
    obj5.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_8(finish(15502), {});
    };
    obj2[MfaStepsTypes.MfaScreens.WEBAUTHN] = obj5;
    const obj6 = {};
    const merged2 = Object.assign(obj);
    const first2 = memo.methods[0];
    let type2;
    if (first2 != null) {
      type2 = first2.type;
    }
    if ("totp" === type2) {
      let headerCloseButton1 = NavigatorHeader.getHeaderCloseButton(callback1);
      const tmpResult11 = NavigatorHeader;
    } else {
      headerCloseButton1 = NavigatorHeader.getHeaderBackButton();
      const tmpResult12 = NavigatorHeader;
    }
    obj6.headerLeft = headerCloseButton1;
    const first3 = memo.methods[0];
    let type3;
    if (first3 != null) {
      type3 = first3.type;
    }
    let tmp20;
    if ("totp" !== type3) {
      tmp20 = headerRight;
    }
    obj6.headerRight = tmp20;
    obj6.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_8(finish(15507), {});
    };
    obj2[MfaStepsTypes.MfaScreens.TOTP] = obj6;
    const obj7 = {};
    const merged3 = Object.assign(obj);
    const first4 = memo.methods[0];
    let type4;
    if (first4 != null) {
      type4 = first4.type;
    }
    if ("backup" === type4) {
      let headerCloseButton2 = NavigatorHeader.getHeaderCloseButton(callback1);
      const tmpResult13 = NavigatorHeader;
    } else {
      headerCloseButton2 = NavigatorHeader.getHeaderBackButton();
      const tmpResult14 = NavigatorHeader;
    }
    obj7.headerLeft = headerCloseButton2;
    const first5 = memo.methods[0];
    let type5;
    if (first5 != null) {
      type5 = first5.type;
    }
    let tmp28;
    if ("backup" !== type5) {
      tmp28 = headerRight;
    }
    obj7.headerRight = tmp28;
    obj7.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_8(finish(15510), {});
    };
    obj2[MfaStepsTypes.MfaScreens.BACKUP] = obj7;
    const obj8 = {};
    const merged4 = Object.assign(obj);
    const first6 = memo.methods[0];
    let type6;
    if (first6 != null) {
      type6 = first6.type;
    }
    if ("sms" === type6) {
      let headerCloseButton3 = NavigatorHeader.getHeaderCloseButton(callback1);
      const tmpResult15 = NavigatorHeader;
    } else {
      headerCloseButton3 = NavigatorHeader.getHeaderBackButton();
      const tmpResult16 = NavigatorHeader;
    }
    obj8.headerLeft = headerCloseButton3;
    const first7 = memo.methods[0];
    let type7;
    if (first7 != null) {
      type7 = first7.type;
    }
    let tmp36;
    if ("sms" !== type7) {
      tmp36 = headerRight;
    }
    obj8.headerRight = tmp36;
    obj8.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_8(finish(15511), {});
    };
    obj2[MfaStepsTypes.MfaScreens.SMS] = obj8;
    const obj9 = {};
    const merged5 = Object.assign(obj);
    const first8 = memo.methods[0];
    let type8;
    if (first8 != null) {
      type8 = first8.type;
    }
    if ("password" === type8) {
      let headerCloseButton4 = NavigatorHeader.getHeaderCloseButton(callback1);
      const tmpResult17 = NavigatorHeader;
    } else {
      headerCloseButton4 = NavigatorHeader.getHeaderBackButton();
      const tmpResult18 = NavigatorHeader;
    }
    obj9.headerLeft = headerCloseButton4;
    const first9 = memo.methods[0];
    let type9;
    if (first9 != null) {
      type9 = first9.type;
    }
    let tmp44;
    if ("password" !== type9) {
      tmp44 = headerRight;
    }
    obj9.headerRight = tmp44;
    obj9.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_8(finish(15512), {});
    };
    obj2[MfaStepsTypes.MfaScreens.PASSWORD] = obj9;
    return obj2;
  }, items4);
  let merged1 = Object.assign(merged);
  return jsx(require("Navigator").Navigator, { screens: memo2, initialRouteStack: memo1, onWillFocus: callback1.dismiss });
});
let closure_10 = tmp4;
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/MFAModal.tsx");

export const MFAModal = tmp4;
export const openMFAModal = function openMFAModal(mfaChallenge, finish, cancel) {
  ModalActionCreatorsDefault.push(closure_10, { mfaChallenge, finish, cancel }, MFA_MODAL_KEY);
  const obj = { mfaChallenge, finish, cancel };
  actions_AlertActionCreatorsDefault.close();
};