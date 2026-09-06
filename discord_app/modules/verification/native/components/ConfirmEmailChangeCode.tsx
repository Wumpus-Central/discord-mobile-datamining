// discord_app/modules/verification/native/components/ConfirmEmailChangeCode.tsx
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const setEmailToken = fn(5623).setEmailToken;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ConfirmEmailChangeCode.tsx");

export default function ConfirmEmailChangeCode(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  let obj = isChangeEmail(1483);
  const navigation = obj.useNavigation();
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
  obj = { onFormSubmit: null, onSuccess: null, onResend: null, headerText: null, confirmButtonText: null };
  closure_129_0 = asyncGeneratorStep(async (arg0) => {
    await closure_0(c2[7]).confirmEmailChange(closure_0);
    return value;
  });
  obj.onFormSubmit = function () {
    const self = this;
    const apply = isChangeEmail.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj.onSuccess = callback;
  obj.onResend = asyncGeneratorStep(async () => {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = v3(dependencyMap[7]);
            c1 = 1;
            v3 = 1;
            obj1 = { value: null, done: false };
            obj1.value = obj1.sendConfirmationCode();
            return obj1;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
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
  const intl = isChangeEmail(1114).intl;
  obj.headerText = intl.string(isChangeEmail(1114).t["2x/2Uo"]);
  const intl2 = isChangeEmail(1114).intl;
  obj.confirmButtonText = intl2.string(isChangeEmail(1114).t.PDTjLN);
  return jsx(navigation(6604), {
    onFormSubmit: null,
    onSuccess: null,
    onResend: null,
    headerText: null,
    confirmButtonText: null,
  });
}
