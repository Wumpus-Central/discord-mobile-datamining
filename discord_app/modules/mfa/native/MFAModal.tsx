// discord_app/modules/mfa/native/MFAModal.tsx
import _modDef4662 from "../../../actions/native/AlertActionCreators.tsx";
import _modDef5265 from "../../../actions/ModalActionCreators.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
class MFAModal {
  constructor(arg0) {
    mfaChallenge = global.mfaChallenge;
    closure_0 = mfaChallenge;
    finish = global.finish;
    cancel = global.cancel;
    handleOnClose = global.handleOnClose;
    flag = global.ignoreKeyboard;
    if (flag === undefined) {
      flag = false;
    }
    c4 = flag;
    merged = Object.assign(global, Object.create(null));
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    items = [];
    items[0] = mfaChallenge;
    memo = c4.useMemo(() => {
      if (callback(cancel[4]).hasWebAuthn) {
        let obj = tmp;
      } else {
        obj = {};
        const merged = Object.assign(tmp);
        const methods = tmp.methods;
        obj.methods = methods.filter((type) => "webauthn" !== type.type);
      }
      return obj;
    }, items);
    closure_5 = memo;
    closure_0 = undefined;
    closure_0 = handleOnClose((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      const iter = (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_2 = tmp5;
                c1 = tmp2;
                c0 = undefined;
                c1 = undefined;
                ({ mfaType: c0, data: c1 } = c0);
                c3 = 1;
                c4 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                const obj2 = { mfaType: null, data: null, ticket: null };
                obj2[0] = c0;
                obj2[1] = c1;
                obj2[2] = closure_1_5.ticket;
                c3 = 2;
                c4 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = closure_1_1(obj2);
                return obj3;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              obj = finish(cancel[5]);
              obj.popWithKey(callback1);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp18) {
            c4 = tmp;
            throw tmp18;
          }
        }
      })();
      iter.next();
      return iter;
    });
    items1 = [, ];
    items1[0] = finish;
    items1[1] = memo.ticket;
    callback = c4.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items1);
    closure_6 = callback;
    items2 = [, ];
    items2[0] = cancel;
    items2[1] = handleOnClose;
    callback1 = c4.useCallback(() => {
      if (null == handleOnClose) {
        finish(cancel[5]).popWithKey(callback1);
        if (cancel != null) {
          const _Error = Error;
          const intl = callback(tmp4[6]).intl;
          error = new Error(intl.string(callback(tmp4[6]).t.N2yb9a));
          tmp7(error);
        }
        const obj = finish(cancel[5]);
      } else {
        tmp();
      }
    }, items2);
    closure_7 = callback1;
    items3 = [, ];
    items3[0] = memo;
    items3[1] = callback;
    items4 = [, , ];
    items4[0] = callback1;
    items4[1] = memo.methods;
    items4[2] = flag;
    memo1 = c4.useMemo(() => {
      obj = { name: callback(cancel[7]).MfaScreens.SELECT, params: obj };
      obj = { mfaChallenge: memo, finish: callback };
      const first = memo.methods[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (undefined === type) {
        const items = [obj];
        let items1 = items;
      } else {
        obj = { name: null, params: null };
        obj[0] = type;
        obj1 = { mfaChallenge: null, finish: null };
        obj1[0] = memo;
        obj1[1] = callback;
        obj[1] = obj1;
        items1 = [obj];
      }
      return items1;
    }, items3);
    memo2 = c4.useMemo(() => {
      function headerRight() {
        const obj = { accessibilityLabel: null, onPress: null, source: null };
        const intl = closure_1_0(closure_1_2[6]).intl;
        obj[0] = intl.string(closure_1_0(closure_1_2[6]).t.cpT0Cq);
        obj[1] = closure_7;
        obj[2] = closure_1_1(closure_1_2[9]);
        return closure_1_6(closure_1_0(closure_1_2[8]).HeaderActionButton, obj);
      }
      let obj = { fullscreen: true, ignoreKeyboard: flag, headerTitle: "" };
      obj = {};
      obj = {};
      let merged = Object.assign(obj);
      let obj3 = callback(cancel[10]);
      obj.headerLeft = obj3.getHeaderBackButton();
      obj.headerRight = headerRight;
      obj.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(15186), {});
      };
      obj[callback(cancel[7]).MfaScreens.SELECT] = obj;
      obj1 = {};
      const merged1 = Object.assign(obj);
      const first = memo.methods[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if ("webauthn" === type) {
        let tmpResult = tmp(tmp2[10]);
        let headerCloseButton = tmpResult.getHeaderCloseButton(callback1);
      } else {
        tmpResult = tmp(tmp2[10]);
        headerCloseButton = tmpResult.getHeaderBackButton();
      }
      obj1.headerLeft = headerCloseButton;
      const first1 = tmp5.methods[0];
      let type1;
      if (first1 != null) {
        type1 = first1.type;
      }
      let tmp12;
      if ("webauthn" !== type1) {
        tmp12 = headerRight;
      }
      obj1.headerRight = tmp12;
      obj1.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(15187), {});
      };
      obj[callback(cancel[7]).MfaScreens.WEBAUTHN] = obj1;
      const obj2 = {};
      const merged2 = Object.assign(obj);
      const first2 = tmp5.methods[0];
      let type2;
      if (first2 != null) {
        type2 = first2.type;
      }
      if ("totp" === type2) {
        let headerCloseButton1 = tmp(tmp2[10]).getHeaderCloseButton(callback1);
        const tmpResult1 = tmp(tmp2[10]);
      } else {
        headerCloseButton1 = tmp(tmp2[10]).getHeaderBackButton();
        const tmpResult2 = tmp(tmp2[10]);
      }
      obj2.headerLeft = headerCloseButton1;
      const first3 = tmp5.methods[0];
      let type3;
      if (first3 != null) {
        type3 = first3.type;
      }
      let tmp20;
      if ("totp" !== type3) {
        tmp20 = headerRight;
      }
      obj2.headerRight = tmp20;
      obj2.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(15192), {});
      };
      obj[callback(cancel[7]).MfaScreens.TOTP] = obj2;
      obj3 = {};
      const merged3 = Object.assign(obj);
      const first4 = tmp5.methods[0];
      let type4;
      if (first4 != null) {
        type4 = first4.type;
      }
      if ("backup" === type4) {
        let headerCloseButton2 = tmp(tmp2[10]).getHeaderCloseButton(callback1);
        const tmpResult3 = tmp(tmp2[10]);
      } else {
        headerCloseButton2 = tmp(tmp2[10]).getHeaderBackButton();
        const tmpResult4 = tmp(tmp2[10]);
      }
      obj3.headerLeft = headerCloseButton2;
      const first5 = tmp5.methods[0];
      let type5;
      if (first5 != null) {
        type5 = first5.type;
      }
      let tmp28;
      if ("backup" !== type5) {
        tmp28 = headerRight;
      }
      obj3.headerRight = tmp28;
      obj3.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(15195), {});
      };
      obj[callback(cancel[7]).MfaScreens.BACKUP] = obj3;
      const obj4 = {};
      const merged4 = Object.assign(obj);
      const first6 = tmp5.methods[0];
      let type6;
      if (first6 != null) {
        type6 = first6.type;
      }
      if ("sms" === type6) {
        let headerCloseButton3 = tmp(tmp2[10]).getHeaderCloseButton(callback1);
        const tmpResult5 = tmp(tmp2[10]);
      } else {
        headerCloseButton3 = tmp(tmp2[10]).getHeaderBackButton();
        const tmpResult6 = tmp(tmp2[10]);
      }
      obj4.headerLeft = headerCloseButton3;
      const first7 = tmp5.methods[0];
      let type7;
      if (first7 != null) {
        type7 = first7.type;
      }
      let tmp36;
      if ("sms" !== type7) {
        tmp36 = headerRight;
      }
      obj4.headerRight = tmp36;
      obj4.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(15196), {});
      };
      obj[callback(cancel[7]).MfaScreens.SMS] = obj4;
      const obj5 = {};
      const merged5 = Object.assign(obj);
      const first8 = tmp5.methods[0];
      let type8;
      if (first8 != null) {
        type8 = first8.type;
      }
      if ("password" === type8) {
        let headerCloseButton4 = tmp(tmp2[10]).getHeaderCloseButton(callback1);
        const tmpResult7 = tmp(tmp2[10]);
      } else {
        headerCloseButton4 = tmp(tmp2[10]).getHeaderBackButton();
        const tmpResult8 = tmp(tmp2[10]);
      }
      obj5.headerLeft = headerCloseButton4;
      const first9 = tmp5.methods[0];
      let type9;
      if (first9 != null) {
        type9 = first9.type;
      }
      let tmp44;
      if ("password" !== type9) {
        tmp44 = headerRight;
      }
      obj5.headerRight = tmp44;
      obj5.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(15197), {});
      };
      obj[callback(cancel[7]).MfaScreens.PASSWORD] = obj5;
      return obj;
    }, items4);
    obj = { screens: memo2, initialRouteStack: memo1, onWillFocus: closure_5.dismiss };
    merged1 = Object.assign(merged);
    return closure_6(require("NavigationStack").Navigator, obj);
  }
}
({ Keyboard: c5, LogBox } = get_ActivityIndicator);
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
const MFA_MODAL_KEY = "MFA_MODAL_KEY";
const result = require("set").fileFinishedImporting("modules/mfa/native/MFAModal.tsx");

export { MFAModal };
export const openMFAModal = function openMFAModal(mfaChallenge, finish, cancel) {
  let arr = _modDef5265;
  arr = arr.push(MFAModal, { mfaChallenge, finish, cancel }, MFA_MODAL_KEY);
  _modDef4662.close();
};