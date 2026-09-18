// === Module 15887: MFAModal ===

// Module 15887 (MFAModal)
import util from "util" /* 1115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4925 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5067 */;
import NavigatorHeader from "NavigatorHeader" /* 5794 */;
import MFAUtils from "MFAUtils" /* 7145 */;
import MfaStepsTypes from "MfaStepsTypes" /* 15888 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
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
    merged = Object.assign(global, Object.assign({ mfaChallenge: 0, finish: 0, cancel: 0, handleOnClose: 0, ignoreKeyboard: 0 }));
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    items = [];
    items[0] = mfaChallenge;
    memo = c4.useMemo(() => {
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
    closure_5 = memo;
    closure_0 = undefined;
    closure_0 = handleOnClose(function*(arg0) {
      yield tmp2({ mfaType: closure_129_0, data: closure_129_1, ticket: ticket.ticket });
      finish(cancel[5]).popWithKey(callback1);
      yield "HermesInternal";
      ({ mfaType: closure_129_0, data: closure_129_1 } = closure_0);
      return "PX_16";
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
    closure_7 = callback1;
    items3 = [, ];
    items3[0] = memo;
    items3[1] = callback;
    items4 = [, , ];
    items4[0] = callback1;
    items4[1] = memo.methods;
    items4[2] = flag;
    memo1 = c4.useMemo(() => {
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
    memo2 = c4.useMemo(() => {
      function headerRight() {
        const obj = { accessibilityLabel: null, onPress: null, source: null };
        const intl = closure_0(cancel[6]).intl;
        obj.accessibilityLabel = intl.string(closure_0(cancel[6]).t.cpT0Cq);
        obj.onPress = onPress;
        obj.source = finish(cancel[9]);
        return callback(closure_0(cancel[8]).HeaderActionButton, obj);
      }
      let obj = { fullscreen: true, ignoreKeyboard: flag, headerTitle: "" };
      const obj2 = {};
      const obj3 = {};
      let merged = Object.assign(obj);
      obj3.headerLeft = NavigatorHeader.getHeaderBackButton();
      obj3.headerRight = headerRight;
      obj3.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_6(closure_1_1(15889), {});
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
        return closure_1_6(closure_1_1(15890), {});
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
        return closure_1_6(closure_1_1(15895), {});
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
        return closure_1_6(closure_1_1(15898), {});
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
        return closure_1_6(closure_1_1(15899), {});
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
        return closure_1_6(closure_1_1(15900), {});
      };
      obj2[MfaStepsTypes.MfaScreens.PASSWORD] = obj9;
      return obj2;
    }, items4);
    obj = { screens: memo2, initialRouteStack: memo1, onWillFocus: closure_5.dismiss };
    merged1 = Object.assign(merged);
    return closure_6(closure_0(cancel[17]).Navigator, obj);
  }
}
get_ActivityIndicator = fn(17);
({ Keyboard: hasOwnProperty, LogBox } = get_ActivityIndicator);
const jsx = fn(21).jsx;
LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
const MFA_MODAL_KEY = "MFA_MODAL_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/MFAModal.tsx");

export { MFAModal };
export const openMFAModal = function openMFAModal(mfaChallenge, finish, cancel) {
  ModalActionCreatorsDefault.push(MFAModal, { mfaChallenge, finish, cancel }, MFA_MODAL_KEY);
  const obj = { mfaChallenge, finish, cancel };
  actions_AlertActionCreatorsDefault.close();
};