// === Module 15971: useUsernameRegistrationStep ===

// Module 15971 (useUsernameRegistrationStep)
import util from "util" /* 1114 */;
import Link from "Link" /* 1484 */;
import UniqueUsernamesTypes from "UniqueUsernamesTypes" /* 14706 */;
import RegistrationStepsUtils from "RegistrationStepsUtils" /* 15945 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14709 */;

require = fn;
const useRegistrationUIStore = fn(15946).useRegistrationUIStore;
const RegistrationConstants = fn(15947);
({ authStateToRegisterTransitionStep: closure_7, RegistrationTransitionActionTypes: closure_8 } = RegistrationConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/utils/useUsernameRegistrationStep.tsx");

export const useUsernameRegistrationStep = function useUsernameRegistrationStep(REGISTER_ACCOUNT_INFORMATION) {
  _require = REGISTER_ACCOUNT_INFORMATION;
  const context = obj.useContext(require("Auth").TrackRegistrationContext);
  navigation = require("useNavigation").useNavigation();
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).username;
  if (str == null) {
    str = UniqueUsernamesStore.registrationUsernameSuggestion();
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = username(obj.useState(str), 2);
  username = tmp7[0];
  const obj2 = require("useNavigation");
  const tmp10 = context(navigation[7])("username", useRegistrationUIStore((errors) => errors.errors));
  const tmp5Result = useRegistrationUIStore((errors) => errors.errors);
  const usernameStatus = require("useUsernameStatus").useUsernameStatus(username, true, true);
  obj = usernameStatus;
  let tmp12 = usernameStatus;
  if (null != tmp10) {
    obj = { type: tmp(tmp2[9]).NameValidationState.ERROR, message: tmp10 };
    tmp12 = obj;
  }
  let items = [tmp12, navigation, context, REGISTER_ACCOUNT_INFORMATION];
  const items1 = [username, tmp12];
  const callback = obj.useCallback((arg0) => {
    let type;
    if (obj != null) {
      type = tmp.type;
    }
    if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
      obj = { step: React5(closure_0), actionType: constants.INPUT_ERROR, details: null };
      const items = [tmp.message];
      obj.details = items;
      context(obj);
    }
    if (arg0) {
      let tmp3Result = RegistrationStepsUtils;
      const result = tmp3Result.handleRegistrationSubmit(closure_0, navigation, context);
    } else {
      obj = { step: React5(closure_0), toStep: null, actionType: null };
      tmp3Result = RegistrationStepsUtils;
      obj.toStep = tmp3Result.getNextRegistrationTransitionStep(closure_0);
      obj.actionType = constants.SUCCESS;
      context(obj);
      const nextAuthState = RegistrationStepsUtils.getNextAuthState(closure_0);
      const StackActions = Link.StackActions;
      navigation.dispatch(StackActions.push(nextAuthState));
      const tmp3Result1 = RegistrationStepsUtils;
    }
  }, items);
  const items2 = [username, , ];
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
      tmp2 = type === UniqueUsernamesTypes.NameValidationState.ERROR;
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
    username,
    setUsername: tmp7[1],
    usernameStatus: tmp12,
    transitionToNextStepOrSubmit: callback,
    preventSubmitUsername: memo,
    validateUsername: obj.useCallback(() => {
      if (null != first) {
        if ("" !== tmp) {
          let type;
          if (obj != null) {
            type = obj.type;
          }
          let message = null;
          if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
            message = obj.message;
          }
        }
        return message;
      }
      const intl = util.intl;
      message = intl.string(util.t.GPfy3L);
    }, items2)
  };
  return obj;
};