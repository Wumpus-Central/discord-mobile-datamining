// === Module 15994: handleRegisterErrorRedirection ===

// Module 15994 (handleRegisterErrorRedirection)
import Constants from "Constants" /* 1074 */;
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import getErrorDefault from "getError" /* 6957 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15945 */;
import RegistrationUtils from "RegistrationUtils" /* 15954 */;
import RegistrationConstants from "RegistrationConstants" /* 15947 */;
import size from "module_2" /* 2 */;

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
({ RegisterTransitionSteps: c3, RegistrationTransitionActionTypes: closure_4, authStateToRegisterTransitionStep: hasOwnProperty } = RegistrationConstants);
const AbortCodes = Constants.AbortCodes;
let closure_7 = { [ConstantsIOS.AuthStates.REGISTER_IDENTITY]: ["email", "phoneToken"], [ConstantsIOS.AuthStates.REGISTER_DISPLAY_NAME]: ["global_name"], [ConstantsIOS.AuthStates.REGISTER_ACCOUNT_INFORMATION]: ["username", "password"] };
const result = size.fileFinishedImporting("modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx");

export default function handleRegisterErrorRedirection(navigate, fn, code, step) {
  if (null == getErrorDefault("date_of_birth", code)) {
    const _Number = Number;
    if (Number(code.code) !== AbortCodes.UNDER_MINIMUM_AGE) {
      const registrationSteps = RegistrationStepsUtils.getRegistrationSteps();
      const obj8 = registrationSteps[Symbol.iterator]();
      while (obj8 !== undefined) {
        let items = closure_7[tmp4];
        if (items == null) {
          items = [];
        }
        for (const item10023 of items) {
          let tmp13 = getErrorDefault(item10023, arg2);
          if (null != tmp13) {
            let tmp17 = getRedirectStepForErrorKey(item10023);
            let tmp18 = tmp17;
            if (null != tmp17) {
              let obj = { step: null, actionType: null, details: null };
              obj.step = hasOwnProperty(tmp18);
              obj.actionType = constants2.RESPONSE_ERROR;
              let items1 = [tmp14, ];
              let obj3 = RegistrationUtils;
              items1[1] = obj3.getCommonErrorDetails(arg2.error_code);
              obj.details = items1;
              let tmp25 = arg1(obj);
              let navigateResult = arg0.navigate(tmp18);
              obj.return();
              obj8.return();
            }
          }
          continue;
        }
        continue;
      }
      if (tmp29) {
        obj = { step, actionType: constants2.RESPONSE_ERROR, details: null };
        const items2 = [RegistrationUtils.getCommonErrorDetails(code.error_code)];
        obj.details = items2;
        fn(obj);
      }
      tmp29 = null != code.error_code && null != code.message;
    }
  }
  fn({ step: constants.AGE_GATE_UNDERAGE, actionType: constants2.VIEWED });
  navigate.push(ConstantsIOS.AuthStates.AGE_GATE_UNDERAGE, { fromRegister: true, disableSwipe: true });
  const obj1 = { step: constants.AGE_GATE_UNDERAGE, actionType: constants2.VIEWED };
};