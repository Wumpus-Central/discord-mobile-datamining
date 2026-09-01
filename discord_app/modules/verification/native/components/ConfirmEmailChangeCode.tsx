// === Module 7702: ConfirmEmailChangeCode ===

// Module 7702 (ConfirmEmailChangeCode)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { setEmailToken } from "ChangeEmailFields" /* 7689 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default function ConfirmEmailChangeCode(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  let _require = isChangeEmail;
  let navigation;
  let obj = _require(1499);
  navigation = obj.useNavigation();
  const items = [isChangeEmail, navigation];
  const callback = React.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = null;
    }
    closure_1_5(tmp);
    const push = navigation.push;
    const VerificationModalScenes = callback(closure_1_2[5]).VerificationModalScenes;
    if (callback) {
      push(VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS);
    } else {
      push(VerificationModalScenes.ENTER_EMAIL);
    }
  }, items);
  obj = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
  _require = undefined;
  _require = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
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
        return { value: "HermesInternal", done: null };
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
            obj1 = v0(closure_1_2[7]);
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        v0 = tmp;
        throw tmp7;
      }
    }
  });
  const intl = _require(1236).intl;
  obj[3] = intl.string(_require(1236).t["2x/2Uo"]);
  const intl2 = _require(1236).intl;
  obj[4] = intl2.string(_require(1236).t.PDTjLN);
  return jsx(navigation(7703), { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null });
};