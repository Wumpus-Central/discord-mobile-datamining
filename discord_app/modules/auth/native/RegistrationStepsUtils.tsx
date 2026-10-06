// === Module 15905: RegistrationStepsUtils ===

// Module 15905 (RegistrationStepsUtils)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import Link from "Link" /* 1491 */;
import StringUtils from "StringUtils" /* 2018 */;
import PromoEmailConsentStore from "PromoEmailConsentStore" /* 6090 */;
import LoginDefault from "Login" /* 6436 */;
import WelcomeDefault from "Welcome" /* 15908 */;
import RegistrationUtils from "RegistrationUtils" /* 15914 */;
import RegisterIdentity from "RegisterIdentity" /* 15915 */;
import register from "register" /* 15917 */;
import RegisterDisplayNameDefault from "RegisterDisplayName" /* 15926 */;
import RegisterAccountInformationDefault from "RegisterAccountInformation" /* 15927 */;
import VerifyPhoneDefault from "VerifyPhone" /* 15933 */;
import components_MFADefault from "components/MFA" /* 15935 */;
import AccountDisabledOrDeletionScheduledDefault from "AccountDisabledOrDeletionScheduled" /* 15936 */;
import ExternalLinkDefault from "ExternalLink" /* 15940 */;
import RegisterAgeGateDefault from "RegisterAgeGate" /* 15941 */;
import AgeGateUnderageDefault from "AgeGateUnderage" /* 15947 */;
import CompanionRemoteAuth from "CompanionRemoteAuth" /* 15948 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14535 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15906 */;
import RegistrationConstants from "RegistrationConstants" /* 15907 */;
import size from "module_2" /* 2 */;

let c3, c4, c7, c8, state;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function headerTitle() {
  return null;
}
function getNextAuthState(WELCOME) {
  const index = items.indexOf(WELCOME);
  if (-1 !== index) {
    if (index !== items.length - 1) {
      return items[index + 1];
    }
  }
}
let obj = function _handleNextOrSubmitRegistration() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            React4();
            const tmp21 = getNextAuthState(closure_0);
            if (null != tmp21) {
              const obj4 = { step: authStore(closure_0), toStep: authStore(tmp21), actionType: constants.SUCCESS };
              closure_2(obj4);
              const dispatch = closure_1.dispatch;
              const StackActions = Link.StackActions;
              dispatch(StackActions.push(tmp21));
            } else {
              c4 = 1;
              c3 = 1;
              const obj5 = { value: handleRegistrationSubmit(closure_0, closure_1, closure_2), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp11) {
        c3 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
function handleRegistrationSubmit() {
  return obj(...arguments);
}
obj = function _handleRegistrationSubmit() {
  let state2;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_4;
    let obj4;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c6;
      let closure_5;
      try {
        let obj6;
        let authenticationErrorsFromAPIError;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_3 = tmp4;
            obj6 = undefined;
            authenticationErrorsFromAPIError = undefined;
            closure_5 = undefined;
            const result = UniqueUsernamesStore.registrationUsernameSuggestion();
            const registrationOptions = state2.getState().registrationOptions;
            let tmp34 = null;
            const obj10 = StringUtils;
            if (!obj10.isNullOrEmpty(result)) {
              tmp34 = registrationOptions.username === result;
            }
            obj6 = { usedUsernameSuggestion: tmp34 };
            const merged = Object.assign(registrationOptions);
            state = state.getState();
            if (state.required) {
              obj6.promoEmailConsent = state;
            }
            metroImportDefault(true);
            metroRequire({});
            c6 = 1;
            c7 = 2;
            c8 = 1;
            const obj7 = { value: obj4.registerFull(obj6), done: false };
            obj4 = register;
            return obj7;
          }
        } else {
          if (1 === c7) {
            c6 = 0;
            let closure_6 = closure_5;
            closure_132_7(false);
            if (closure_6 instanceof closure_132_0(closure_132_2[27]).APIError) {
              const obj2 = closure_132_0(closure_132_2[28]);
              authenticationErrorsFromAPIError = obj2.getAuthenticationErrorsFromAPIError(closure_6);
              closure_132_6(authenticationErrorsFromAPIError);
              closure_5 = closure_132_10(closure_0);
              if (null != closure_5) {
                closure_132_1(closure_132_2[29])(closure_1, closure_2, authenticationErrorsFromAPIError, closure_5);
              }
            } else {
              c8 = 3;
              return { value: "IconComponent", done: null };
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj8 = { step: closure_132_10(closure_0), actionType: closure_132_13.SUCCESS, overrideRegistrationOptions: obj6 };
            closure_2(obj8);
            const obj9 = { step: closure_132_11.REGISTER, actionType: closure_132_13.SUCCESS, overrideRegistrationOptions: obj6 };
            closure_2(obj9);
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp46) {
        closure_5 = tmp46;
        if (0 === c6) {
          c8 = 3;
          throw tmp46;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const usePromoEmailConsentStore = PromoEmailConsentStore.usePromoEmailConsentStore;
({ setRegistrationErrors: metroRequire, setSubmitting: metroImportDefault, useRegistrationUIStore: metroImportAll, clearRegistrationErrorMessage: c9 } = RegistrationUIStore);
({ authStateToRegisterTransitionStep: c10, RegisterTransitionSteps: unpackModuleId, RegistrationSteps: closure_12, RegistrationTransitionActionTypes: map1 } = RegistrationConstants);
const AuthStates = Constants.AuthStates;
const jsx = Fragment.jsx;
const items = [, , , , ];
({ WELCOME: arr[0], REGISTER_IDENTITY: arr[1], REGISTER_DISPLAY_NAME: arr[2], REGISTER_ACCOUNT_INFORMATION: arr[3], AGE_GATE: arr[4] } = AuthStates);
let result = size.fileFinishedImporting("modules/auth/native/RegistrationStepsUtils.tsx");

export function getRegistrationSteps() {
  return items;
}
export const getAllAuthScreens = function getAllAuthScreens() {
  let constants2;
  function render() {
    return jsx(WelcomeDefault, {});
  }
  function headerLeft(arg0) {
    const BackButtonWithTracking = RegistrationUtils.BackButtonWithTracking;
    const merged = Object.assign(arg0);
    const index = items.indexOf(constants2.REGISTER_IDENTITY);
    let tmp5;
    if (-1 !== index) {
      if (0 !== index) {
        tmp5 = items[index - 1];
      }
    }
    let tmp6;
    if (null != tmp5) {
      tmp6 = closure_1_10(tmp5);
    }
    return <BackButtonWithTracking destinationStep={tmp6} />;
  }
  const render2 = function render() {
    return jsx(RegisterIdentity.RegisterIdentity, {});
  };
  const headerLeft2 = function headerLeft(arg0) {
    const BackButtonWithTracking = RegistrationUtils.BackButtonWithTracking;
    const merged = Object.assign(arg0);
    const index = items.indexOf(constants2.REGISTER_DISPLAY_NAME);
    let tmp5;
    if (-1 !== index) {
      if (0 !== index) {
        tmp5 = items[index - 1];
      }
    }
    let tmp6;
    if (null != tmp5) {
      tmp6 = closure_1_10(tmp5);
    }
    return <BackButtonWithTracking destinationStep={tmp6} />;
  };
  const render3 = function render() {
    return jsx(RegisterDisplayNameDefault, {});
  };
  const headerLeft3 = function headerLeft(arg0) {
    const BackButtonWithTracking = RegistrationUtils.BackButtonWithTracking;
    const merged = Object.assign(arg0);
    const index = items.indexOf(constants2.REGISTER_ACCOUNT_INFORMATION);
    let tmp5;
    if (-1 !== index) {
      if (0 !== index) {
        tmp5 = items[index - 1];
      }
    }
    let tmp6;
    if (null != tmp5) {
      tmp6 = closure_1_10(tmp5);
    }
    return <BackButtonWithTracking destinationStep={tmp6} />;
  };
  const render4 = function render() {
    return jsx(RegisterAccountInformationDefault, {});
  };
  const headerLeft4 = function headerLeft(arg0) {
    const BackButtonWithTracking = RegistrationUtils.BackButtonWithTracking;
    const merged = Object.assign(arg0);
    return <BackButtonWithTracking destinationStep={constants.ACCOUNT_IDENTITY} />;
  };
  const render5 = function render(arg0) {
    VerifyPhoneDefault;
    const merged = Object.assign(arg0);
    return <tmp />;
  };
  const render6 = function render() {
    return jsx(LoginDefault, {});
  };
  const headerLeft5 = function headerLeft(arg0) {
    const BackButtonWithTracking = RegistrationUtils.BackButtonWithTracking;
    const merged = Object.assign(arg0);
    const index = items.indexOf(constants2.AGE_GATE);
    let tmp5;
    if (-1 !== index) {
      if (0 !== index) {
        tmp5 = items[index - 1];
      }
    }
    let tmp6;
    if (null != tmp5) {
      tmp6 = closure_1_10(tmp5);
    }
    return <BackButtonWithTracking destinationStep={tmp6} />;
  };
  const render7 = function render() {
    return jsx(RegisterAgeGateDefault, {});
  };
  function impressionProperties(existingUser) {
    obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, existing_user: existingUser.existingUser };
    return obj;
  }
  const render8 = function render(arg0, arg1) {
    let closure_0 = arg1;
    AgeGateUnderageDefault;
    const merged = Object.assign(arg0);
    return <tmp onClose={function onClose() {
      return closure_0.popToTop();
    }} />;
  };
  obj = {};
  obj[AuthStates.WELCOME] = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_WELCOME, headerTitle, headerShown: false, render };
  ({ ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_WELCOME, headerTitle, headerShown: false, render });
  const REGISTER_IDENTITY = AuthStates.REGISTER_IDENTITY;
  obj[REGISTER_IDENTITY] = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY }, headerTitle, headerLeft, render: render2 };
  const obj3 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY }, headerTitle, headerLeft, render: render2 };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY });
  const REGISTER_DISPLAY_NAME = AuthStates.REGISTER_DISPLAY_NAME;
  obj[REGISTER_DISPLAY_NAME] = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME }, headerTitle, headerLeft: headerLeft2, render: render3 };
  const obj5 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME }, headerTitle, headerLeft: headerLeft2, render: render3 };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME });
  const REGISTER_ACCOUNT_INFORMATION = AuthStates.REGISTER_ACCOUNT_INFORMATION;
  obj[REGISTER_ACCOUNT_INFORMATION] = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION }, headerTitle, headerLeft: headerLeft3, render: render4 };
  const obj7 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION }, headerTitle, headerLeft: headerLeft3, render: render4 };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION });
  const VERIFY_PHONE = AuthStates.VERIFY_PHONE;
  obj[VERIFY_PHONE] = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW }, headerTitle, headerLeft: headerLeft4, render: render5 };
  const obj9 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW }, headerTitle, headerLeft: headerLeft4, render: render5 };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW });
  const LOGIN = AuthStates.LOGIN;
  obj[LOGIN] = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_LOGIN, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_LOGIN_FLOW }, headerTitle, render: render6 };
  obj[AuthStates.MFA] = {
    fullscreen: true,
    ignoreKeyboard: true,
    headerTitle,
    headerShown: false,
    render() {
      return jsx(components_MFADefault, { inContainer: true });
    }
  };
  obj[AuthStates.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED] = {
    ignoreKeyboard: true,
    fullscreen: true,
    headerTitle,
    render(arg0) {
      AccountDisabledOrDeletionScheduledDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  obj[AuthStates.COUNTRY_SELECT] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0, arg1) {
      let closure_0 = arg1;
      obj = {
        onClose() {
          return closure_0.pop();
        },
        onCountrySelected(countryCode) {
          obj = closure_1_1(closure_1_2[19]);
          return obj.setCountryCode(countryCode);
        }
      };
      return closure_15(closure_1(closure_2[18]), obj);
    }
  };
  obj[AuthStates.EXTERNAL_LINK] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0) {
      ExternalLinkDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    }
  };
  const obj11 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_LOGIN, impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_LOGIN_FLOW }, headerTitle, render: render6 };
  ({ impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_LOGIN_FLOW });
  obj[AuthStates.AGE_GATE] = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE, headerTitle, headerLeft: headerLeft5, render: render7 };
  ({ ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE, headerTitle, headerLeft: headerLeft5, render: render7 });
  obj[AuthStates.AGE_GATE_UNDERAGE] = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_UNDERAGE, impressionProperties, headerTitle, render: render8 };
  obj[AuthStates.COMPANION_REMOTE_AUTH] = {
    ignoreKeyboard: true,
    fullscreen: true,
    headerTitle,
    render() {
      return jsx(CompanionRemoteAuth.CompanionRemoteAuth, {});
    }
  };
  ({ ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_UNDERAGE, impressionProperties, headerTitle, render: render8 });
  return obj;
};
export { getNextAuthState };
export const getPreviousAuthState = function getPreviousAuthState(arg0) {
  const index = items.indexOf(arg0);
  if (-1 !== index) {
    if (0 !== index) {
      return items[index - 1];
    }
  }
};
export const getPreviousRegistrationTransitionStep = function getPreviousRegistrationTransitionStep(AGE_GATE) {
  const index = items.indexOf(AGE_GATE);
  let tmp3;
  if (-1 !== index) {
    if (0 !== index) {
      tmp3 = items[index - 1];
    }
  }
  if (null != tmp3) {
    return authStore(tmp3);
  }
};
export const getNextRegistrationTransitionStep = function getNextRegistrationTransitionStep(REGISTER_ACCOUNT_INFORMATION) {
  const index = items.indexOf(REGISTER_ACCOUNT_INFORMATION);
  let tmp2;
  if (-1 !== index) {
    if (index !== items.length - 1) {
      tmp2 = items[index + 1];
    }
  }
  if (null != tmp2) {
    return authStore(tmp2);
  }
};
export const handleNextOrSubmitRegistration = function handleNextOrSubmitRegistration() {
  return obj(...arguments);
};
export { handleRegistrationSubmit };