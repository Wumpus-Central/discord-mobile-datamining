// discord_app/modules/auth/native/components/utils/useUsernameRegistrationStep.tsx
import intl2 from "../../../../../intl/index.native.tsx";
import Link from "../../../../../../_runtime/01491_Link.js";
import UniqueUsernamesTypes from "../../../../unique_usernames/UniqueUsernamesTypes.tsx";
import RegistrationStepsUtils from "../../RegistrationStepsUtils.tsx";
import RegistrationUIStore from "../../RegistrationUIStore.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import UniqueUsernamesStore from "../../../../unique_usernames/UniqueUsernamesStore.tsx";
import RegistrationConstants from "../../../RegistrationConstants.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, navigation;

let metroImportAll;
let metroImportDefault;
const useRegistrationUIStore = RegistrationUIStore.useRegistrationUIStore;
({ authStateToRegisterTransitionStep: metroImportDefault, RegistrationTransitionActionTypes: metroImportAll } =
  RegistrationConstants);
let result = size.fileFinishedImporting("modules/auth/native/components/utils/useUsernameRegistrationStep.tsx");

export const useUsernameRegistrationStep = function useUsernameRegistrationStep(REGISTER_ACCOUNT_INFORMATION) {
  let username;
  let usernameStatus;
  _require = REGISTER_ACCOUNT_INFORMATION;
  let obj = usernameStatus;
  const tmp = _require;
  let tmp2 = navigation;
  const context = usernameStatus.useContext(require("Auth").TrackRegistrationContext);
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  let str = useRegistrationUIStore((registrationOptions) => registrationOptions.registrationOptions).username;
  const useState = usernameStatus.useState;
  if (str == null) {
    str = UniqueUsernamesStore.registrationUsernameSuggestion();
  }
  if (str == null) {
    str = "";
  }
  const tmp7 = username(useState(str), 2);
  username = tmp7[0];
  const tmp9 = tmp7[1];
  const tmp5Result = useRegistrationUIStore((errors) => errors.errors);
  const tmp11 = context(tmp2[7])("username", tmp5Result);
  const tmpResult = tmp(tmp2[8]);
  usernameStatus = tmpResult.useUsernameStatus(username, true, true);
  let tmp13 = usernameStatus;
  if (null != tmp11) {
    const obj3 = { type: tmp(tmp2[9]).NameValidationState.ERROR, message: tmp11 };
    usernameStatus = obj3;
    tmp13 = obj3;
  }
  let items = [tmp13, navigation, context, REGISTER_ACCOUNT_INFORMATION];
  const items1 = [username, tmp13];
  const callback = obj.useCallback((arg0) => {
    let items;
    let tmp3Result3;
    let type;
    if (usernameStatus != null) {
      type = usernameStatus.type;
    }
    if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
      const obj = {
        step: metroImportDefault(REGISTER_ACCOUNT_INFORMATION),
        actionType: metroImportAll.INPUT_ERROR,
        details: items,
      };
      items = [usernameStatus.message];
      context(obj);
    }
    const tmp10 = arg0;
    if (tmp10) {
      const tmp3Result = RegistrationStepsUtils;
      const result = tmp3Result.handleRegistrationSubmit(REGISTER_ACCOUNT_INFORMATION, navigation, context);
    } else {
      const obj2 = {
        step: metroImportDefault(REGISTER_ACCOUNT_INFORMATION),
        toStep: tmp3Result3.getNextRegistrationTransitionStep(REGISTER_ACCOUNT_INFORMATION),
        actionType: metroImportAll.SUCCESS,
      };
      tmp3Result3 = RegistrationStepsUtils;
      context(obj2);
      const tmp3Result4 = RegistrationStepsUtils;
      const nextAuthState = tmp3Result4.getNextAuthState(REGISTER_ACCOUNT_INFORMATION);
      const dispatch = navigation.dispatch;
      const StackActions = Link.StackActions;
      dispatch(StackActions.push(nextAuthState));
    }
  }, items);
  const items2 = [username, ,];
  let message;
  const memo = obj.useMemo(() => {
    let tmp2 = null == first || "" === tmp;
    if (!tmp2) {
      let type;
      if (usernameStatus != null) {
        type = usernameStatus.type;
      }
      tmp2 = type === UniqueUsernamesTypes.NameValidationState.ERROR;
    }
    return tmp2;
  }, items1);
  const useCallback = obj.useCallback;
  if (tmp13 != null) {
    message = tmp13.message;
  }
  items2[1] = message;
  let type;
  if (tmp13 != null) {
    type = tmp13.type;
  }
  items2[2] = type;
  const obj4 = {
    username,
    setUsername: tmp9,
    usernameStatus: tmp13,
    transitionToNextStepOrSubmit: callback,
    preventSubmitUsername: memo,
    validateUsername: useCallback(() => {
      if (null != first) {
        let message;
        if ("" !== tmp) {
          let type;
          if (usernameStatus != null) {
            type = usernameStatus.type;
          }
          message = null;
          if (type === UniqueUsernamesTypes.NameValidationState.ERROR) {
            message = usernameStatus.message;
          }
        }
        return message;
      }
      const intl = intl2.intl;
      message = intl.string(intl2.t.GPfy3L);
    }, items2),
  };
  return obj4;
};
