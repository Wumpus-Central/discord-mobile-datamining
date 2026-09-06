// discord_app/modules/mfa/native/MFAModal.tsx
import util from "../../../intl/index.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import MFAUtils from "../../../utils/MFAUtils.tsx";
import MfaStepsTypes from "MfaStepsTypes.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
    merged = Object.assign(
      global,
      Object.assign({ mfaChallenge: 0, finish: 0, cancel: 0, handleOnClose: 0, ignoreKeyboard: 0 }),
    );
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    items = [];
    items[0] = mfaChallenge;
    memo = c4.useMemo(() => {
      if (MFAUtils.hasWebAuthn) {
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
    closure_0 = handleOnClose(function* (arg0) {
      yield tmp2({ mfaType: closure_129_0, data: closure_129_1, ticket: ticket.ticket });
      finish(cancel[5]).popWithKey(callback1);
      yield "HermesInternal";
      ({ mfaType: closure_129_0, data: closure_129_1 } = closure_0);
      return "PX_16";
    });
    items1 = [,];
    items1[0] = finish;
    items1[1] = memo.ticket;
    callback = c4.useCallback(function () {
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
    items2 = [,];
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
    items3 = [,];
    items3[0] = memo;
    items3[1] = callback;
    items4 = [, ,];
    items4[0] = callback1;
    items4[1] = memo.methods;
    items4[2] = flag;
    memo1 = c4.useMemo(() => {
      let obj = { name: MfaStepsTypes.MfaScreens.SELECT, params: { mfaChallenge: memo, finish } };
      const first = memo.methods[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if (undefined === type) {
        const items = [obj];
        let items1 = items;
      } else {
        obj = { name: type, params: null };
        obj = { mfaChallenge: memo, finish };
        obj.params = obj;
        items1 = [obj];
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
      obj = {};
      obj = {};
      let merged = Object.assign(obj);
      let obj3 = NavigatorHeader;
      obj.headerLeft = obj3.getHeaderBackButton();
      obj.headerRight = headerRight;
      obj.render = function render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_6(closure_1_1(15668), {});
      };
      obj[MfaStepsTypes.MfaScreens.SELECT] = obj;
      const obj1 = {};
      const merged1 = Object.assign(obj);
      const first = memo.methods[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      if ("webauthn" === type) {
        let tmpResult = tmp(5624);
        let headerCloseButton = tmpResult.getHeaderCloseButton(callback1);
      } else {
        tmpResult = tmp(5624);
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
        return closure_1_6(closure_1_1(15669), {});
      };
      obj[MfaStepsTypes.MfaScreens.WEBAUTHN] = obj1;
      const obj2 = {};
      const merged2 = Object.assign(obj);
      const first2 = tmp5.methods[0];
      let type2;
      if (first2 != null) {
        type2 = first2.type;
      }
      if ("totp" === type2) {
        let headerCloseButton1 = tmp(5624).getHeaderCloseButton(callback1);
        const tmpResult1 = tmp(5624);
      } else {
        headerCloseButton1 = tmp(5624).getHeaderBackButton();
        const tmpResult2 = tmp(5624);
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
        return closure_1_6(closure_1_1(15674), {});
      };
      obj[MfaStepsTypes.MfaScreens.TOTP] = obj2;
      obj3 = {};
      const merged3 = Object.assign(obj);
      const first4 = tmp5.methods[0];
      let type4;
      if (first4 != null) {
        type4 = first4.type;
      }
      if ("backup" === type4) {
        let headerCloseButton2 = tmp(5624).getHeaderCloseButton(callback1);
        const tmpResult3 = tmp(5624);
      } else {
        headerCloseButton2 = tmp(5624).getHeaderBackButton();
        const tmpResult4 = tmp(5624);
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
        return closure_1_6(closure_1_1(15677), {});
      };
      obj[MfaStepsTypes.MfaScreens.BACKUP] = obj3;
      const obj4 = {};
      const merged4 = Object.assign(obj);
      const first6 = tmp5.methods[0];
      let type6;
      if (first6 != null) {
        type6 = first6.type;
      }
      if ("sms" === type6) {
        let headerCloseButton3 = tmp(5624).getHeaderCloseButton(callback1);
        const tmpResult5 = tmp(5624);
      } else {
        headerCloseButton3 = tmp(5624).getHeaderBackButton();
        const tmpResult6 = tmp(5624);
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
        return closure_1_6(closure_1_1(15678), {});
      };
      obj[MfaStepsTypes.MfaScreens.SMS] = obj4;
      const obj5 = {};
      const merged5 = Object.assign(obj);
      const first8 = tmp5.methods[0];
      let type8;
      if (first8 != null) {
        type8 = first8.type;
      }
      if ("password" === type8) {
        let headerCloseButton4 = tmp(5624).getHeaderCloseButton(callback1);
        const tmpResult7 = tmp(5624);
      } else {
        headerCloseButton4 = tmp(5624).getHeaderBackButton();
        const tmpResult8 = tmp(5624);
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
        return closure_1_6(closure_1_1(15679), {});
      };
      obj[MfaStepsTypes.MfaScreens.PASSWORD] = obj5;
      return obj;
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
  let arr = ModalActionCreatorsDefault;
  arr = arr.push(MFAModal, { mfaChallenge, finish, cancel }, MFA_MODAL_KEY);
  actions_AlertActionCreatorsDefault.close();
};
