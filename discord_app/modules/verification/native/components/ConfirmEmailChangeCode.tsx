// === Module 6016: ConfirmEmailChangeCode ===

// Module 6016 (ConfirmEmailChangeCode)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
const setEmailToken = fn(5930).setEmailToken;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default function ConfirmEmailChangeCode(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  const navigation = isChangeEmail(1484).useNavigation();
  const items = [isChangeEmail, navigation];
  const callback = noop.useCallback((arg0) => {
    let tmp = arg0;
    if (arg0 == null) {
      tmp = null;
    }
    setEmailToken(tmp);
    const push = navigation.push;
    const VerificationModalScenes = ConstantsIOS.VerificationModalScenes;
    if (isChangeEmail) {
      push(VerificationModalScenes.CHANGE_EMAIL_COLLECT_REASONS);
    } else {
      push(VerificationModalScenes.ENTER_EMAIL);
    }
  }, items);
  const obj2 = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
  let obj = isChangeEmail(1484);
  closure_129_0 = asyncGeneratorStep(async (arg0) => {
    await closure_0(c2[7]).confirmEmailChange(closure_0);
    return value;
  });
  obj2.onFormSubmit = function() {
    const self = this;
    const apply = isChangeEmail.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj2.onSuccess = callback;
  obj2.onResend = asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c1 = 1;
            v3 = 1;
            const obj5 = { value: v3(dependencyMap[7]).sendConfirmationCode(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          v3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        v3 = tmp;
        throw tmp7;
      }
    }
  });
  const intl = isChangeEmail(1115).intl;
  obj2.headerText = intl.string(isChangeEmail(1115).t["2x/2Uo"]);
  const intl2 = isChangeEmail(1115).intl;
  obj2.confirmButtonText = intl2.string(isChangeEmail(1115).t.PDTjLN);
  return jsx(navigation(6017), { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null });
};