// discord_app/modules/auth/native/components/utils/useUsernameRegistrationStep.tsx
import util from "../../../../../intl/index.native.tsx";
import Link from "../../../../../../_runtime/01485_Link.js";
import UniqueUsernamesTypes from "../../../../unique_usernames/UniqueUsernamesTypes.tsx";
import RegistrationStepsUtils from "../../RegistrationStepsUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import UniqueUsernamesStore from "../../../../unique_usernames/UniqueUsernamesStore.tsx";

const require = globalThis.__r;

require = fn;
const useRegistrationUIStore = fn(16288).useRegistrationUIStore;
const RegistrationConstants = fn(16289);
({ authStateToRegisterTransitionStep: closure_7, RegistrationTransitionActionTypes: closure_8 } =
  RegistrationConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/components/utils/useUsernameRegistrationStep.tsx");

export const useUsernameRegistrationStep = function useUsernameRegistrationStep(REGISTER_ACCOUNT_INFORMATION) {
  _require = REGISTER_ACCOUNT_INFORMATION;
  const context = obj3.useContext(require("Auth").TrackRegistrationContext);
  navigation = require("useNavigation").useNavigation();
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).username;
  if (str == null) {
    str = UniqueUsernamesStore.registrationUsernameSuggestion();
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = username(obj3.useState(str), 2);
  username = tmp7[0];
  let obj2 = require("useNavigation");
  const tmp10 = context(navigation[7])(
    "username",
    useRegistrationUIStore((errors) => errors.errors),
  );
  const tmp5Result = useRegistrationUIStore((errors) => errors.errors);
  const usernameStatus = require("useUsernameStatus").useUsernameStatus(username, true, true);
  obj3 = usernameStatus;
  let tmp12 = usernameStatus;
  if (null != tmp10) {
    obj3 = { type: tmp(tmp2[9]).NameValidationState.ERROR, message: tmp10 };
    tmp12 = obj3;
  }
  let items = [tmp12, navigation, context, REGISTER_ACCOUNT_INFORMATION];
  const items1 = [username, tmp12];
  const callback = obj.useCallback((arg0) => {
    let type;
    if (obj3 != null) {
      type = obj3.type;
    }
    if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
      const obj = { step: React5(closure_0), actionType: constants.INPUT_ERROR, details: null };
      const items = [obj3.message];
      obj.details = items;
      context(obj);
    }
    if (arg0) {
      const result = RegistrationStepsUtils.handleRegistrationSubmit(closure_0, navigation, context);
      const tmp3Result = RegistrationStepsUtils;
    } else {
      const obj2 = {
        step: React5(closure_0),
        toStep: RegistrationStepsUtils.getNextRegistrationTransitionStep(closure_0),
        actionType: constants.SUCCESS,
      };
      context(obj2);
      const tmp3Result3 = RegistrationStepsUtils;
      const nextAuthState = RegistrationStepsUtils.getNextAuthState(closure_0);
      const StackActions = Link.StackActions;
      navigation.dispatch(StackActions.push(nextAuthState));
      const tmp3Result4 = RegistrationStepsUtils;
    }
  }, items);
  const items2 = [username, ,];
  let message;
  const memo = obj.useMemo(() => {
    let tmp2 = null == first;
    if (!tmp2) {
      tmp2 = "" === tmp;
    }
    if (!tmp2) {
      let type;
      if (obj3 != null) {
        type = obj3.type;
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
  const tmpResult = require("useUsernameStatus");
  return {
    username,
    setUsername: tmp7[1],
    usernameStatus: tmp12,
    transitionToNextStepOrSubmit: callback,
    preventSubmitUsername: memo,
    validateUsername: obj3.useCallback(() => {
      if (null != first) {
        if ("" !== tmp) {
          let type;
          if (obj3 != null) {
            type = obj3.type;
          }
          let message = null;
          if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
            message = obj3.message;
          }
        }
        return message;
      }
      const intl = util.intl;
      message = intl.string(util.t.GPfy3L);
    }, items2),
  };
};
