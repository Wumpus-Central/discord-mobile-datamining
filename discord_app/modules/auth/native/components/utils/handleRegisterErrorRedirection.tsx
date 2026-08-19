// discord_app/modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import ME from "../../../../../Constants.tsx";
import keys from "../../../../../ConstantsIOS.tsx";
import getErrorDefault from "../../getError.tsx";
import headerTitle from "../../RegistrationStepsUtils.tsx";
import trackRegTransition from "../../RegistrationUtils.tsx";
import RegistrationTransitionActionTypes from "../../../RegistrationConstants.tsx";

function getRedirectStepForErrorKey(item10023) {
  if ("email" !== item10023) {
    if ("phoneToken" !== item10023) {
      if ("global_name" === item10023) {
        return keys.AuthStates.REGISTER_DISPLAY_NAME;
      } else {
        if ("username" !== item10023) {
          if ("password" !== item10023) {
            return null;
          }
        }
        return keys.AuthStates.REGISTER_ACCOUNT_INFORMATION;
      }
    }
  }
  return keys.AuthStates.REGISTER_IDENTITY;
}
({ RegisterTransitionSteps: c3, RegistrationTransitionActionTypes: c4, authStateToRegisterTransitionStep: c5 } = RegistrationTransitionActionTypes);
const AbortCodes = ME.AbortCodes;
let closure_7 = { [keys.AuthStates.REGISTER_IDENTITY]: ["email", "phoneToken"], [keys.AuthStates.REGISTER_DISPLAY_NAME]: ["global_name"], [keys.AuthStates.REGISTER_ACCOUNT_INFORMATION]: ["username", "password"] };
const result = obj132.fileFinishedImporting("modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx");

export default function handleRegisterErrorRedirection(navigate, fn, code) {
  if (null == getErrorDefault("date_of_birth", code)) {
    const _Number = Number;
    if (Number(code.code) !== AbortCodes.UNDER_MINIMUM_AGE) {
      const registrationSteps = headerTitle.getRegistrationSteps();
      const obj8 = registrationSteps[Symbol.iterator]();
      while (obj8 !== undefined) {
        let items = table[tmp4];
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
              obj[0] = callback(tmp18);
              obj[1] = constants2.RESPONSE_ERROR;
              let items1 = [tmp14, ];
              let obj3 = trackRegTransition;
              items1[1] = obj3.getCommonErrorDetails(arg2.error_code);
              obj[2] = items1;
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
        obj = { step: null, actionType: null, details: null };
        obj[0] = arg3;
        obj[1] = constants2.RESPONSE_ERROR;
        const items2 = [trackRegTransition.getCommonErrorDetails(code.error_code)];
        obj[2] = items2;
        fn(obj);
      }
      tmp29 = null != code.error_code && null != code.message;
    }
  }
  fn({ step: constants.AGE_GATE_UNDERAGE, actionType: constants2.VIEWED });
  navigate.push(keys.AuthStates.AGE_GATE_UNDERAGE, { fromRegister: true, disableSwipe: true });
};