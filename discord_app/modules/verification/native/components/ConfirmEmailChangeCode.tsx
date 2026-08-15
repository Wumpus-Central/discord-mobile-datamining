// discord_app/modules/verification/native/components/ConfirmEmailChangeCode.tsx
import keys from "keys";
import noop from "noop";
import { setEmailToken } from "ChangeEmailFields";
import { jsx } from "jsxProd";
import { useNavigation } from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

const require = arg1;
const result = require("ChangeEmailFields").fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default function ConfirmEmailChangeCode(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  let _require = isChangeEmail;
  let navigation;
  let obj = _useNavigation;
  navigation = obj.useNavigation();
  const items = [isChangeEmail, navigation];
  const callback = React.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = null;
    }
    outer1_5(tmp);
    const push = navigation.push;
    const VerificationModalScenes = callback(outer1_2[5]).VerificationModalScenes;
    if (callback) {
      push(VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS);
    } else {
      push(VerificationModalScenes.ENTER_EMAIL);
    }
  }, items);
  obj = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
  _require = undefined;
  _require = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      const obj2 = callback(table[7]);
      yield obj2.confirmEmailChange(callback);
      return arg1;
    })();
  });
  obj[0] = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj[1] = callback;
  obj[2] = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let obj1 = v0(outer1_2[7]);
            c1 = 1;
            v0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.sendConfirmationCode();
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp7) {
        v0 = tmp;
        throw tmp7;
      }
    }
  });
  const intl = _getSystemLocale.intl;
  obj[3] = intl.string(_getSystemLocale.t["2x/2Uo"]);
  const intl2 = _getSystemLocale.intl;
  obj[4] = intl2.string(_getSystemLocale.t.PDTjLN);
  return jsx(navigation(8574), { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null });
};