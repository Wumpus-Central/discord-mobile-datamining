import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AbortCodes } from "ME";

let c3;
let c4;
let c5;
function getRedirectStepForErrorKey(arg0) {
  if ("email" !== arg0) {
    if ("phoneToken" !== arg0) {
      if ("global_name" === arg0) {
        return require(691) /* keys */.AuthStates.REGISTER_DISPLAY_NAME;
      } else {
        if ("username" !== arg0) {
          if ("password" !== arg0) {
            return null;
          }
        }
        return require(691) /* keys */.AuthStates.REGISTER_ACCOUNT_INFORMATION;
      }
    }
  }
  return require(691) /* keys */.AuthStates.REGISTER_IDENTITY;
}
({ RegisterTransitionSteps: c3, RegistrationTransitionActionTypes: c4, authStateToRegisterTransitionStep: c5 } = RegistrationTransitionActionTypes);
let closure_7 = { [require(691).AuthStates.REGISTER_IDENTITY]: ["email", "phoneToken"], [require(691).AuthStates.REGISTER_DISPLAY_NAME]: ["global_name"], [require(691).AuthStates.REGISTER_ACCOUNT_INFORMATION]: ["username", "password"] };
const result = require("keys").fileFinishedImporting("modules/auth/native/components/utils/handleRegisterErrorRedirection.tsx");

export default function handleRegisterErrorRedirection(navigate, arg1, code) {
  if (null == importDefault(8295)("date_of_birth", code)) {
    const _Number = Number;
    if (Number(code.code) !== AbortCodes.UNDER_MINIMUM_AGE) {
      const registrationSteps = require(14977) /* headerTitle */.getRegistrationSteps();
      const obj8 = registrationSteps[Symbol.iterator]();
      while (obj8 !== undefined) {
        let tmp6 = table;
        let items = table[tmp4];
        if (items == null) {
          items = [];
        }
        let tmp7 = items;
        let tmp8 = items;
        for (const item10023 of items) {
          let tmp10 = importDefault;
          let tmp9 = item10023;
          let tmp11 = dependencyMap;
          let tmp12 = dependencyMap;
          let tmp13 = importDefault(8295)(item10023, arg2);
          if (null != tmp13) {
            let tmp15 = getRedirectStepForErrorKey;
            let tmp16 = item10023;
            let tmp17 = getRedirectStepForErrorKey(tmp9);
            let tmp18 = tmp17;
            if (null != tmp17) {
              let obj = { step: null, actionType: null, details: null };
              let tmp19 = callback;
              let tmp20 = tmp17;
              obj[0] = callback(tmp18);
              let tmp21 = constants2;
              obj[1] = constants2.RESPONSE_ERROR;
              let tmp22 = tmp13;
              let items1 = [tmp14, ];
              let tmp23 = require;
              let tmp24 = tmp11;
              let obj3 = require(14986) /* trackRegTransition */;
              items1[1] = obj3.getCommonErrorDetails(arg2.error_code);
              obj[2] = items1;
              let tmp25 = arg1(obj);
              let navigateResult = arg0.navigate(tmp18);
              let tmp27 = obj;
              obj.return();
              let tmp28 = obj8;
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
        const items2 = [require(14986) /* trackRegTransition */.getCommonErrorDetails(code.error_code)];
        obj[2] = items2;
        arg1(obj);
        const obj5 = require(14986) /* trackRegTransition */;
      }
    }
  }
  arg1({ step: constants.AGE_GATE_UNDERAGE, actionType: constants2.VIEWED });
  navigate.push(require(691) /* keys */.AuthStates.AGE_GATE_UNDERAGE, { fromRegister: true, disableSwipe: true });
};