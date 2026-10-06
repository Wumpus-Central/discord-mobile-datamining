// === Module 15515: MFAModal ===

// Module 15515 (MFAModal)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import AssetRegistryDefault from "AssetRegistry" /* 4815 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import MFAUtils from "MFAUtils" /* 6446 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6890 */;
import MfaStepsTypes from "MfaStepsTypes" /* 15516 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_1, dependencyMap, importDefault;

let LogBox;
let metroImportDefault;
let closure_3 = ["mfaChallenge", "finish", "cancel", "handleOnClose", "ignoreKeyboard"];
let _asyncToGenerator = _asyncToGenerator_mod;
({ Keyboard: metroImportDefault, LogBox } = react_native);
const jsx = Fragment.jsx;
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
const MFA_MODAL_KEY = "MFA_MODAL_KEY";
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((cancel) => {
  let closure_2;
  let finish;
  let mfaChallenge;
  let obj4;
  let onPress;
  let tmp18;
  let tmp6;
  let tmp8;
  const tmp = _require;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(84);
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
    tmp8 = mfaChallenge;
    tmp6 = handleOnClose;
  } else {
    _require = cResult[2];
    importDefault = cResult[3];
    dependencyMap = cResult[4];
    tmp8 = cResult[5];
  }
  let tmp13 = tmp8;
  if (!tmp(6446).hasWebAuthn) {
    if (cResult[7] !== tmp8.methods) {
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(type) {
            return "webauthn" !== type.type;
          }
        }
        cResult[9] = S;
      } else {
        class S {
          constructor(type) {
            return "webauthn" !== type.type;
          }
        }
      }
      const methods = tmp8.methods;
      const found = methods.filter(S);
      cResult[7] = tmp8.methods;
      cResult[8] = found;
    } else {
      class S {
        constructor(type) {
          return "webauthn" !== type.type;
        }
      }
    }
    if (cResult[10] === tmp8) {
      class S {
        constructor(type) {
          return "webauthn" !== type.type;
        }
      }
      tmp13 = tmp18;
    }
    let obj2 = { methods: tmp14 };
    let merged = Object.assign(tmp8);
    cResult[10] = tmp8;
    cResult[11] = tmp14;
    cResult[12] = obj2;
    tmp18 = obj2;
  }
  closure_3 = tmp13;
  if (cResult[13] === tmp13.ticket) {
    class S {
      constructor(type) {
        return "webauthn" !== type.type;
      }
    }
    if (cResult[16] === tmp5) {
      class S {
        constructor(type) {
          return "webauthn" !== type.type;
        }
      }
      _asyncToGenerator = L;
      class L {
        constructor() {
          if (null == closure_1) {
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(MFA_MODAL_KEY);
            if (closure_0 != null) {
              const _Error = Error;
              const intl = intl2.intl;
              const self = this;
              const self2 = this;
              const error = new Error(intl.string(intl2.t.N2yb9a));
              tmp7(error);
            }
          } else {
            tmp();
          }
        }
      }
      const obj3 = { name: tmp(15516).MfaScreens.SELECT, params: obj4 };
      obj4 = { mfaChallenge: tmp13, finish: tmp22 };
      cResult[19] = tmp22;
      cResult[20] = tmp13;
      cResult[21] = obj3;
    }
    class L {
      constructor() {
        if (null == closure_1) {
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(MFA_MODAL_KEY);
          if (closure_0 != null) {
            const _Error = Error;
            const intl = intl2.intl;
            const self = this;
            const self2 = this;
            const error = new Error(intl.string(intl2.t.N2yb9a));
            tmp7(error);
          }
        } else {
          tmp();
        }
      }
    }
    cResult[16] = tmp5;
    cResult[17] = tmp6;
    cResult[18] = L;
  }
  _require = _asyncToGenerator(async (arg0) => {
    let ticket;
    let v1;
    closure_0 = arg0;
    if (ticket === 2) {
      ticket = 3;
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
        ticket = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            ticket = 3;
            throw value;
          } else if (arg0 === 2) {
            ticket = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp3;
            const obj5 = { mfaType: null, data: null, ticket: ticket.ticket };
            ({ mfaType: obj3.mfaType, data: obj3.data } = closure_0);
            v1 = 1;
            ticket = 1;
            const obj6 = { value: v1(obj5), done: false };
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
          const obj = closure_2_1(closure_2_2[8]);
          obj.popWithKey(MFA_MODAL_KEY);
          ticket = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        ticket = 3;
        throw tmp12;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[13] = tmp13.ticket;
  cResult[14] = finish;
  cResult[15] = fn;
}) : ((mfaChallenge) => {
  mfaChallenge = mfaChallenge.mfaChallenge;
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
    let methods;
    let obj;
    if (MFAUtils.hasWebAuthn) {
      obj = mfaChallenge;
    } else {
      obj = { methods: methods.filter((type) => "webauthn" !== type.type) };
      const merged = Object.assign(mfaChallenge);
      methods = mfaChallenge.methods;
    }
    return obj;
  }, items);
  const useCallback = finish.useCallback;
  let closure_0 = flag(function*(mfaType) {
    let c0;
    let c1;
    let c3;
    let c4;
    let closure_2;
    let data;
    const obj5 = { mfaType, data, ticket: ticket.ticket };
    yield data(obj5);
    const obj = finish(cancel[8]);
    obj.popWithKey(MFA_MODAL_KEY);
    yield "IconComponent";
    data = tmp;
    ({ mfaType: c0, data: c1 } = closure_0);
    return "Reflect";
  });
  let items1 = [finish, memo.ticket];
  finish = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [cancel, handleOnClose];
  const callback1 = finish.useCallback(function() {
    if (null == handleOnClose) {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(MFA_MODAL_KEY);
      if (cancel != null) {
        const _Error = Error;
        const intl = intl2.intl;
        const self = this;
        const self2 = this;
        const error = new Error(intl.string(intl2.t.N2yb9a));
        tmp7(error);
      }
    } else {
      tmp();
    }
  }, items2);
  const items3 = [memo, finish];
  const items4 = [callback1, memo.methods, flag];
  const memo1 = finish.useMemo(() => {
    let items1;
    let obj3;
    const first = memo.methods[0];
    let type;
    const obj = { name: MfaStepsTypes.MfaScreens.SELECT, params: { mfaChallenge: memo, finish } };
    if (first != null) {
      type = first.type;
    }
    if (undefined === type) {
      const items = [obj];
      items1 = items;
    } else {
      const obj2 = { name: type, params: obj3 };
      items1 = [obj2];
      obj3 = { mfaChallenge: memo, finish };
    }
    return items1;
  }, items3);
  const memo2 = finish.useMemo(() => {
    let headerCloseButton;
    let headerCloseButton1;
    let headerCloseButton2;
    let headerCloseButton3;
    let headerCloseButton4;
    let obj4;
    let onPress;
    let tmp12;
    let tmp20;
    let tmp28;
    let tmp36;
    let tmp44;
    function headerRight() {
      const HeaderActionButton = mfaChallenge(cancel[11]).HeaderActionButton;
      const intl = mfaChallenge(cancel[9]).intl;
      return <HeaderActionButton accessibilityLabel={intl.string(mfaChallenge(cancel[9]).t.cpT0Cq)} onPress={onPress} source={finish(cancel[12])} />;
    }
    let obj = { fullscreen: true, ignoreKeyboard: flag, headerTitle: "" };
    const obj2 = {};
    const obj3 = {
      headerLeft: obj4.getHeaderBackButton(),
      headerRight,
      render(arg0) {
        const obj = {};
        const tmp = finish(cancel[14]);
        const merged = Object.assign(arg0);
        return closure_1_8(tmp, obj);
      }
    };
    const SELECT = MfaStepsTypes.MfaScreens.SELECT;
    let merged = Object.assign(obj);
    obj2[SELECT] = obj3;
    obj4 = NavigatorHeader;
    const obj5 = {
      headerLeft: headerCloseButton,
      headerRight: tmp12,
      render(arg0) {
        const obj = {};
        const tmp = finish(cancel[15]);
        const merged = Object.assign(arg0);
        return closure_1_8(tmp, obj);
      }
    };
    const WEBAUTHN = MfaStepsTypes.MfaScreens.WEBAUTHN;
    const merged1 = Object.assign(obj);
    const first = memo.methods[0];
    let type;
    if (first != null) {
      type = first.type;
    }
    if ("webauthn" === type) {
      const tmpResult = NavigatorHeader;
      headerCloseButton = tmpResult.getHeaderCloseButton(callback1);
    } else {
      const tmpResult10 = NavigatorHeader;
      headerCloseButton = tmpResult10.getHeaderBackButton();
    }
    const first1 = memo.methods[0];
    let type1;
    if (first1 != null) {
      type1 = first1.type;
    }
    tmp12 = undefined;
    if ("webauthn" !== type1) {
      tmp12 = headerRight;
    }
    obj2[WEBAUTHN] = obj5;
    const obj6 = {
      headerLeft: headerCloseButton1,
      headerRight: tmp20,
      render(arg0) {
        const obj = {};
        const tmp = finish(cancel[16]);
        const merged = Object.assign(arg0);
        return closure_1_8(tmp, obj);
      }
    };
    const TOTP = MfaStepsTypes.MfaScreens.TOTP;
    const merged2 = Object.assign(obj);
    const first2 = memo.methods[0];
    let type2;
    if (first2 != null) {
      type2 = first2.type;
    }
    if ("totp" === type2) {
      const tmpResult11 = NavigatorHeader;
      headerCloseButton1 = tmpResult11.getHeaderCloseButton(callback1);
    } else {
      const tmpResult12 = NavigatorHeader;
      headerCloseButton1 = tmpResult12.getHeaderBackButton();
    }
    const first3 = memo.methods[0];
    let type3;
    if (first3 != null) {
      type3 = first3.type;
    }
    tmp20 = undefined;
    if ("totp" !== type3) {
      tmp20 = headerRight;
    }
    obj2[TOTP] = obj6;
    const obj7 = {
      headerLeft: headerCloseButton2,
      headerRight: tmp28,
      render(arg0) {
        const obj = {};
        const tmp = finish(cancel[17]);
        const merged = Object.assign(arg0);
        return closure_1_8(tmp, obj);
      }
    };
    const BACKUP = MfaStepsTypes.MfaScreens.BACKUP;
    const merged3 = Object.assign(obj);
    const first4 = memo.methods[0];
    let type4;
    if (first4 != null) {
      type4 = first4.type;
    }
    if ("backup" === type4) {
      const tmpResult13 = NavigatorHeader;
      headerCloseButton2 = tmpResult13.getHeaderCloseButton(callback1);
    } else {
      const tmpResult14 = NavigatorHeader;
      headerCloseButton2 = tmpResult14.getHeaderBackButton();
    }
    const first5 = memo.methods[0];
    let type5;
    if (first5 != null) {
      type5 = first5.type;
    }
    tmp28 = undefined;
    if ("backup" !== type5) {
      tmp28 = headerRight;
    }
    obj2[BACKUP] = obj7;
    const obj8 = {
      headerLeft: headerCloseButton3,
      headerRight: tmp36,
      render(arg0) {
        const obj = {};
        const tmp = finish(cancel[18]);
        const merged = Object.assign(arg0);
        return closure_1_8(tmp, obj);
      }
    };
    const SMS = MfaStepsTypes.MfaScreens.SMS;
    const merged4 = Object.assign(obj);
    const first6 = memo.methods[0];
    let type6;
    if (first6 != null) {
      type6 = first6.type;
    }
    if ("sms" === type6) {
      const tmpResult15 = NavigatorHeader;
      headerCloseButton3 = tmpResult15.getHeaderCloseButton(callback1);
    } else {
      const tmpResult16 = NavigatorHeader;
      headerCloseButton3 = tmpResult16.getHeaderBackButton();
    }
    const first7 = memo.methods[0];
    let type7;
    if (first7 != null) {
      type7 = first7.type;
    }
    tmp36 = undefined;
    if ("sms" !== type7) {
      tmp36 = headerRight;
    }
    obj2[SMS] = obj8;
    const obj9 = {
      headerLeft: headerCloseButton4,
      headerRight: tmp44,
      render(arg0) {
        const obj = {};
        const tmp = finish(cancel[19]);
        const merged = Object.assign(arg0);
        return closure_1_8(tmp, obj);
      }
    };
    const PASSWORD = MfaStepsTypes.MfaScreens.PASSWORD;
    const merged5 = Object.assign(obj);
    const first8 = memo.methods[0];
    let type8;
    if (first8 != null) {
      type8 = first8.type;
    }
    if ("password" === type8) {
      const tmpResult17 = NavigatorHeader;
      headerCloseButton4 = tmpResult17.getHeaderCloseButton(callback1);
    } else {
      const tmpResult18 = NavigatorHeader;
      headerCloseButton4 = tmpResult18.getHeaderBackButton();
    }
    const first9 = memo.methods[0];
    let type9;
    if (first9 != null) {
      type9 = first9.type;
    }
    tmp44 = undefined;
    if ("password" !== type9) {
      tmp44 = headerRight;
    }
    obj2[PASSWORD] = obj9;
    return obj2;
  }, items4);
  const Navigator = mfaChallenge(cancel[20]).Navigator;
  let merged1 = Object.assign(merged);
  return <Navigator screens={memo2} initialRouteStack={memo1} onWillFocus={callback1.dismiss} />;
});
let closure_10 = tmp4;
const result = size.fileFinishedImporting("modules/mfa/native/MFAModal.tsx");

export const MFAModal = tmp4;
export const openMFAModal = function openMFAModal(mfaChallenge, finish, cancel) {
  const arr = ModalActionCreatorsDefault;
  const obj = { mfaChallenge, finish, cancel };
  arr.push(closure_10, obj, MFA_MODAL_KEY);
  const obj2 = actions_AlertActionCreatorsDefault;
  obj2.close();
};