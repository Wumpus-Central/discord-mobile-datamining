// === Module 15945: RegistrationStepsUtils ===

// Module 15945 (RegistrationStepsUtils)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import Link from "Link" /* 1484 */;
import LoginDefault from "Login" /* 6942 */;
import WelcomeDefault from "Welcome" /* 15948 */;
import RegistrationUtils from "RegistrationUtils" /* 15954 */;
import RegisterIdentity from "RegisterIdentity" /* 15955 */;
import auth_register from "auth/register" /* 15957 */;
import RegisterDisplayNameDefault from "RegisterDisplayName" /* 15967 */;
import RegisterAccountInformationDefault from "RegisterAccountInformation" /* 15968 */;
import components_VerifyPhoneDefault from "components/VerifyPhone" /* 15974 */;
import components_MFADefault from "components/MFA" /* 15976 */;
import AccountDisabledOrDeletionScheduledDefault from "AccountDisabledOrDeletionScheduled" /* 15977 */;
import ExternalLinkDefault from "ExternalLink" /* 15981 */;
import RegisterAgeGateDefault from "RegisterAgeGate" /* 15982 */;
import AgeGateUnderageDefault from "AgeGateUnderage" /* 15986 */;
import CompanionRemoteAuth from "CompanionRemoteAuth" /* 15987 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14709 */;

require = fn;
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
let closure_19 = async function _handleNextOrSubmitRegistration(arg0) {
  if (c3 === 2) {
    c3 = 3;
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
      c3 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          React7();
          const tmp22 = getNextAuthState(closure_0);
          if (null != tmp22) {
            const obj1 = { step: closure_2_10(closure_0), toStep: closure_2_10(tmp22), actionType: constants.SUCCESS };
            dependencyMap(obj1);
            const StackActions = Link.StackActions;
            importDefault.dispatch(StackActions.push(tmp22));
          } else {
            c4 = 1;
            c3 = 1;
            const obj2 = { value: handleRegistrationSubmit(closure_0, importDefault, dependencyMap), done: false };
            return obj2;
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
      return { value: "HermesInternal", done: null };
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
function handleRegistrationSubmit() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _handleRegistrationSubmit(arg0) {
  closure_4 = tmp3;
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  closure_131_2 = closure_2;
  const result = UniqueUsernamesStore.registrationUsernameSuggestion();
  const registrationOptions = state2.getState().registrationOptions;
  let tmp37 = null;
  if (!obj10.isNullOrEmpty(result)) {
    tmp37 = registrationOptions.username === result;
  }
  let obj1 = {};
  const merged = Object.assign(registrationOptions);
  obj1.usedUsernameSuggestion = tmp37;
  closure_131_3 = obj1;
  state = state.getState();
  if (state.required) {
    obj1.promoEmailConsent = state;
  }
  React5(true);
  timestampProducer({});
  let obj3 = auth_register;
  await obj3.registerFull(obj1);
  if (1 === tmp7) {
    c6 = 0;
    closure_131_6 = closure_5;
    closure_132_7(false);
    if (closure_131_6 instanceof closure_132_0(closure_132_2[27]).APIError) {
      obj1 = closure_132_0(closure_132_2[28]);
      const authenticationErrorsFromAPIError = obj1.getAuthenticationErrorsFromAPIError(closure_131_6);
      closure_132_6(authenticationErrorsFromAPIError);
      closure_131_5 = closure_132_10(closure_131_0);
      if (null != closure_131_5) {
        closure_132_1(closure_132_2[29])(closure_131_1, closure_131_2, authenticationErrorsFromAPIError, closure_131_5);
      }
      c8 = 3;
    } else {
      c8 = 3;
      return { value: "HermesInternal", done: null };
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 !== 2) {
    obj3 = { step: closure_132_10(closure_131_0), actionType: closure_132_13.SUCCESS, overrideRegistrationOptions: closure_131_3 };
    closure_131_2(obj3);
    closure_131_2({ step: closure_132_11.REGISTER, actionType: closure_132_13.SUCCESS, overrideRegistrationOptions: closure_131_3 });
    c6 = 0;
  }
  return value;
};
const usePromoEmailConsentStore = fn(6594).usePromoEmailConsentStore;
const RegistrationUIStore = fn(15946);
({ setRegistrationErrors: metroRequire, setSubmitting: closure_7, useRegistrationUIStore: closure_8, clearRegistrationErrorMessage: closure_9 } = RegistrationUIStore);
const RegistrationConstants = fn(15947);
({ authStateToRegisterTransitionStep: c10, RegisterTransitionSteps: closure_11, RegistrationSteps: closure_12, RegistrationTransitionActionTypes: map1 } = RegistrationConstants);
const AuthStates = fn(1074).AuthStates;
const jsx = fn(21).jsx;
const items = [, , , , ];
({ WELCOME: arr[0], REGISTER_IDENTITY: arr[1], REGISTER_DISPLAY_NAME: arr[2], REGISTER_ACCOUNT_INFORMATION: arr[3], AGE_GATE: arr[4] } = AuthStates);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/native/RegistrationStepsUtils.tsx");

export function getRegistrationSteps() {
  return items;
}
export const getAllAuthScreens = function getAllAuthScreens() {
  let obj = {};
  obj = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_WELCOME,
    headerTitle,
    headerShown: false,
    render() {
      return jsx(WelcomeDefault, {});
    }
  };
  obj[AuthStates.WELCOME] = obj;
  obj = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION,
    impressionProperties: { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY },
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
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
      obj.destinationStep = tmp6;
      return jsx(RegistrationUtils.BackButtonWithTracking, {});
    },
    render() {
      return jsx(RegisterIdentity.RegisterIdentity, {});
    }
  };
  obj[AuthStates.REGISTER_IDENTITY] = obj;
  const obj2 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj1 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY };
  obj2.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj2.headerTitle = headerTitle;
  obj2.headerLeft = function headerLeft(arg0) {
    const obj = {};
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
    obj.destinationStep = tmp6;
    return jsx(RegistrationUtils.BackButtonWithTracking, {});
  };
  obj2.render = function render() {
    return jsx(RegisterDisplayNameDefault, {});
  };
  obj[AuthStates.REGISTER_DISPLAY_NAME] = obj2;
  const obj4 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj3 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj4.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj4.headerTitle = headerTitle;
  obj4.headerLeft = function headerLeft(arg0) {
    const obj = {};
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
    obj.destinationStep = tmp6;
    return jsx(RegistrationUtils.BackButtonWithTracking, {});
  };
  obj4.render = function render() {
    return jsx(RegisterAccountInformationDefault, {});
  };
  obj[AuthStates.REGISTER_ACCOUNT_INFORMATION] = obj4;
  const obj6 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj5 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj6.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW };
  obj6.headerTitle = headerTitle;
  obj6.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.destinationStep = constants.ACCOUNT_IDENTITY;
    return jsx(RegistrationUtils.BackButtonWithTracking, {});
  };
  obj6.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(components_VerifyPhoneDefault, {});
  };
  obj[AuthStates.VERIFY_PHONE] = obj6;
  const obj8 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_LOGIN, impressionProperties: null, headerTitle: null, render: null };
  const obj7 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW };
  obj8.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_LOGIN_FLOW };
  obj8.headerTitle = headerTitle;
  obj8.render = function render() {
    return jsx(LoginDefault, {});
  };
  obj[AuthStates.LOGIN] = obj8;
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
      const merged = Object.assign(arg0);
      return jsx(AccountDisabledOrDeletionScheduledDefault, {});
    }
  };
  obj[AuthStates.COUNTRY_SELECT] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0, arg1) {
      closure_0 = arg1;
      return closure_15(closure_1(7048), {
        onClose() {
          return closure_0.pop();
        },
        onCountrySelected(countryCode) {
          return closure_1_1(dependencyMap[19]).setCountryCode(countryCode);
        }
      });
    }
  };
  obj[AuthStates.EXTERNAL_LINK] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(ExternalLinkDefault, {});
    }
  };
  const obj9 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_LOGIN_FLOW };
  obj[AuthStates.AGE_GATE] = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE,
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
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
      obj.destinationStep = tmp6;
      return jsx(RegistrationUtils.BackButtonWithTracking, {});
    },
    render() {
      return jsx(RegisterAgeGateDefault, {});
    }
  };
  const obj10 = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE,
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
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
      obj.destinationStep = tmp6;
      return jsx(RegistrationUtils.BackButtonWithTracking, {});
    },
    render() {
      return jsx(RegisterAgeGateDefault, {});
    }
  };
  obj[AuthStates.AGE_GATE_UNDERAGE] = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_AGE_GATE_UNDERAGE,
    impressionProperties(existingUser) {
      return { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, existing_user: existingUser.existingUser };
    },
    headerTitle,
    render(arg0, arg1) {
      closure_0 = arg1;
      const merged = Object.assign(arg0);
      return jsx(AgeGateUnderageDefault, {
        onClose() {
          return closure_0.popToTop();
        }
      });
    }
  };
  obj[AuthStates.COMPANION_REMOTE_AUTH] = {
    ignoreKeyboard: true,
    fullscreen: true,
    headerTitle,
    render() {
      return jsx(CompanionRemoteAuth.CompanionRemoteAuth, {});
    }
  };
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
    return closure_1_10(tmp3);
  }
};
export const getNextRegistrationTransitionStep = function getNextRegistrationTransitionStep(arg0) {
  const index = items.indexOf(arg0);
  let tmp2;
  if (-1 !== index) {
    if (index !== items.length - 1) {
      tmp2 = items[index + 1];
    }
  }
  if (null != tmp2) {
    return closure_1_10(tmp2);
  }
};
export const handleNextOrSubmitRegistration = function handleNextOrSubmitRegistration() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { handleRegistrationSubmit };