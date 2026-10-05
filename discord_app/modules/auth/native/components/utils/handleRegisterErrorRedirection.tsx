// discord_app/modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx
import Constants from "../../../../../Constants.tsx";
import ConstantsIOS from "../../../../../ConstantsIOS.tsx";
import getErrorDefault from "../../getError.tsx";
import RegistrationStepsUtils from "../../RegistrationStepsUtils.tsx";
import RegistrationUtils from "../../RegistrationUtils.tsx";
import RegistrationConstants from "../../../RegistrationConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
function getRedirectStepForErrorKey(item10023) {
  if ("email" !== item10023) {
    if ("phoneToken" !== item10023) {
      if ("global_name" === item10023) {
        return ConstantsIOS.AuthStates.REGISTER_DISPLAY_NAME;
      } else {
        if ("username" !== item10023) {
          if ("password" !== item10023) {
            return null;
          }
        }
        return ConstantsIOS.AuthStates.REGISTER_ACCOUNT_INFORMATION;
      }
    }
  }
  return ConstantsIOS.AuthStates.REGISTER_IDENTITY;
}
({
  RegisterTransitionSteps: c3,
  RegistrationTransitionActionTypes: closure_4,
  authStateToRegisterTransitionStep: hasOwnProperty,
} = RegistrationConstants);
const AbortCodes = Constants.AbortCodes;
let closure_7 = {
  [ConstantsIOS.AuthStates.REGISTER_IDENTITY]: ["email", "phoneToken"],
  [ConstantsIOS.AuthStates.REGISTER_DISPLAY_NAME]: ["global_name"],
  [ConstantsIOS.AuthStates.REGISTER_ACCOUNT_INFORMATION]: ["username", "password"],
};
const result = size.fileFinishedImporting("modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx");

export default function handleRegisterErrorRedirection(navigate, fn, code, step) {
  let items2;
  if (null == getErrorDefault("date_of_birth", code)) {
    const _Number = Number;
    if (Number(code.code) !== AbortCodes.UNDER_MINIMUM_AGE) {
      const obj7 = RegistrationStepsUtils;
      const registrationSteps = obj7.getRegistrationSteps();
      const obj8 = registrationSteps[Symbol.iterator]();
      while (obj8 !== undefined) {
        let items = closure_7[tmp4];
        if (items == null) {
          items = [];
        }
        for (const item10023 of items) {
          let tmp13 = getErrorDefault(item10023, code);
          if (null != tmp13) {
            let tmp17 = getRedirectStepForErrorKey(item10023);
            let tmp18 = tmp17;
            if (null != tmp17) {
              let obj2 = { step: hasOwnProperty(tmp18), actionType: constants2.RESPONSE_ERROR, details: items1 };
              let items1 = [tmp14];
              let obj3 = RegistrationUtils;
              items1[1] = obj3.getCommonErrorDetails(code.error_code);
              let tmp25 = fn(obj2);
              let navigateResult = navigate.navigate(tmp18);
              obj.return();
              obj8.return();
            }
          }
          continue;
        }
        continue;
      }
      const tmp29 = null != code.error_code && null != code.message;
      if (tmp29) {
        const obj4 = { step, actionType: constants2.RESPONSE_ERROR, details: items2 };
        items2 = [];
        const obj5 = RegistrationUtils;
        items2[0] = obj5.getCommonErrorDetails(code.error_code);
        fn(obj4);
      }
    }
  }
  const obj6 = { step: constants.AGE_GATE_UNDERAGE, actionType: constants2.VIEWED };
  fn(obj6);
  navigate.push(ConstantsIOS.AuthStates.AGE_GATE_UNDERAGE, { fromRegister: true, disableSwipe: true });
}
