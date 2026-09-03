// === Module 15809: useUsernameRegistrationStep ===

// Module 15809 (useUsernameRegistrationStep)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "isRateLimited" /* 14606 */;
import { useRegistrationUIStore } from "useRegistrationUIStore" /* 15784 */;
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes" /* 15785 */;

const require = arg1;
({ authStateToRegisterTransitionStep: error, RegistrationTransitionActionTypes: closure_8 } = RegistrationTransitionActionTypes);
let result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useUsernameRegistrationStep.tsx");

export const useUsernameRegistrationStep = function useUsernameRegistrationStep(REGISTER_ACCOUNT_INFORMATION) {
  const _require = REGISTER_ACCOUNT_INFORMATION;
  const context = obj.useContext(_require(navigation[5]).TrackRegistrationContext);
  navigation = _require(navigation[6]).useNavigation();
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).username;
  if (str == null) {
    str = closure_5.registrationUsernameSuggestion();
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = first(obj.useState(str), 2);
  first = tmp7[0];
  const obj2 = _require(navigation[6]);
  const tmp5 = useRegistrationUIStore;
  const tmp10 = context(navigation[7])("username", useRegistrationUIStore((errors) => errors.errors));
  const tmp5Result = useRegistrationUIStore((errors) => errors.errors);
  const usernameStatus = _require(navigation[8]).useUsernameStatus(first, true, true);
  obj = usernameStatus;
  let tmp12 = usernameStatus;
  if (null != tmp10) {
    obj = { type: null, message: null };
    obj[0] = tmp(tmp2[9]).NameValidationState.ERROR;
    obj[1] = tmp10;
    tmp12 = obj;
  }
  let items = [tmp12, navigation, context, REGISTER_ACCOUNT_INFORMATION];
  const items1 = [first, tmp12];
  const callback = obj.useCallback((arg0) => {
    let type;
    if (obj != null) {
      type = tmp.type;
    }
    if (type === REGISTER_ACCOUNT_INFORMATION(navigation[9]).NameValidationState.ERROR) {
      obj = { step: null, actionType: null, details: null };
      obj[0] = closure_1_7(REGISTER_ACCOUNT_INFORMATION);
      obj[1] = closure_1_8.INPUT_ERROR;
      const items = [tmp.message];
      obj[2] = items;
      context(obj);
    }
    if (arg0) {
      let tmp3Result = tmp3(tmp4[10]);
      const result = tmp3Result.handleRegistrationSubmit(REGISTER_ACCOUNT_INFORMATION, navigation, context);
    } else {
      obj = { step: null, toStep: null, actionType: null };
      obj[0] = closure_1_7(REGISTER_ACCOUNT_INFORMATION);
      tmp3Result = tmp3(tmp4[10]);
      obj[1] = tmp3Result.getNextRegistrationTransitionStep(REGISTER_ACCOUNT_INFORMATION);
      obj[2] = closure_1_8.SUCCESS;
      context(obj);
      const nextAuthState = tmp3(tmp4[10]).getNextAuthState(REGISTER_ACCOUNT_INFORMATION);
      const StackActions = tmp3(tmp4[11]).StackActions;
      navigation.dispatch(StackActions.push(nextAuthState));
      const tmp3Result1 = tmp3(tmp4[10]);
    }
  }, items);
  const items2 = [first, , ];
  let message;
  const memo = obj.useMemo(() => {
    let tmp2 = null == first;
    if (!tmp2) {
      tmp2 = "" === tmp;
    }
    if (!tmp2) {
      let type;
      if (obj != null) {
        type = obj.type;
      }
      tmp2 = type === REGISTER_ACCOUNT_INFORMATION(navigation[9]).NameValidationState.ERROR;
    }
    return tmp2;
  }, items1);
  if (tmp12 != null) {
    message = tmp12.message;
  }
  items2[1] = message;
  let type;
  if (tmp12 != null) {
    type = tmp12.type;
  }
  items2[2] = type;
  obj = {
    username: first,
    setUsername: tmp7[1],
    usernameStatus: tmp12,
    transitionToNextStepOrSubmit: callback,
    preventSubmitUsername: memo,
    validateUsername: obj.useCallback(() => {
      if (null != first) {
        if ("" !== tmp) {
          let type;
          if (obj != null) {
            type = tmp2.type;
          }
          let message = null;
          if (type === REGISTER_ACCOUNT_INFORMATION(navigation[9]).NameValidationState.ERROR) {
            message = tmp2.message;
          }
        }
        return message;
      }
      const intl = REGISTER_ACCOUNT_INFORMATION(navigation[12]).intl;
      message = intl.string(REGISTER_ACCOUNT_INFORMATION(navigation[12]).t.GPfy3L);
    }, items2)
  };
  return obj;
};