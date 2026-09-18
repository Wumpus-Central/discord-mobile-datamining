// === Module 16194: RegistrationStepsUtils ===

// Module 16194 (RegistrationStepsUtils)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import Link from "Link" /* 1485 */;
import LoginDefault from "Login" /* 7136 */;
import WelcomeDefault from "Welcome" /* 16197 */;
import RegistrationUtils from "RegistrationUtils" /* 16203 */;
import RegisterIdentity from "RegisterIdentity" /* 16204 */;
import auth_register from "auth/register" /* 16206 */;
import RegisterDisplayNameDefault from "RegisterDisplayName" /* 16216 */;
import RegisterAccountInformationDefault from "RegisterAccountInformation" /* 16217 */;
import components_VerifyPhoneDefault from "components/VerifyPhone" /* 16223 */;
import components_MFADefault from "components/MFA" /* 16225 */;
import AccountDisabledOrDeletionScheduledDefault from "AccountDisabledOrDeletionScheduled" /* 16226 */;
import ExternalLinkDefault from "ExternalLink" /* 16230 */;
import RegisterAgeGateDefault from "RegisterAgeGate" /* 16231 */;
import AgeGateUnderageDefault from "AgeGateUnderage" /* 16235 */;
import CompanionRemoteAuth from "CompanionRemoteAuth" /* 16236 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14924 */;

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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          React7();
          const tmp22 = getNextAuthState(closure_0);
          if (null != tmp22) {
            const obj4 = { step: closure_2_10(closure_0), toStep: closure_2_10(tmp22), actionType: constants.SUCCESS };
            dependencyMap(obj4);
            const StackActions = Link.StackActions;
            importDefault.dispatch(StackActions.push(tmp22));
          } else {
            c4 = 1;
            c3 = 1;
            const obj5 = { value: handleRegistrationSubmit(closure_0, importDefault, dependencyMap), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
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
  const obj6 = {};
  const merged = Object.assign(registrationOptions);
  obj6.usedUsernameSuggestion = tmp37;
  closure_131_3 = obj6;
  state = state.getState();
  if (state.required) {
    obj6.promoEmailConsent = state;
  }
  React5(true);
  timestampProducer({});
  await auth_register.registerFull(obj6);
  if (1 === tmp7) {
    c6 = 0;
    closure_131_6 = closure_5;
    closure_132_7(false);
    if (closure_131_6 instanceof closure_132_0(closure_132_2[27]).APIError) {
      const authenticationErrorsFromAPIError = closure_132_0(closure_132_2[28]).getAuthenticationErrorsFromAPIError(closure_131_6);
      closure_132_6(authenticationErrorsFromAPIError);
      closure_131_5 = closure_132_10(closure_131_0);
      if (null != closure_131_5) {
        closure_132_1(closure_132_2[29])(closure_131_1, closure_131_2, authenticationErrorsFromAPIError, closure_131_5);
      }
      c8 = 3;
      closure_132_0(closure_132_2[28]);
    } else {
      c8 = 3;
      return { value: "HermesInternal", done: null };
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_2({ step: closure_132_10(closure_131_0), actionType: closure_132_13.SUCCESS, overrideRegistrationOptions: closure_131_3 });
    closure_131_2({ step: closure_132_11.REGISTER, actionType: closure_132_13.SUCCESS, overrideRegistrationOptions: closure_131_3 });
    c6 = 0;
    { step: closure_132_10(closure_131_0), actionType: closure_132_13.SUCCESS, overrideRegistrationOptions: closure_131_3 };
  }
  return value;
};
const usePromoEmailConsentStore = fn(6786).usePromoEmailConsentStore;
const RegistrationUIStore = fn(16195);
({ setRegistrationErrors: metroRequire, setSubmitting: closure_7, useRegistrationUIStore: closure_8, clearRegistrationErrorMessage: closure_9 } = RegistrationUIStore);
const RegistrationConstants = fn(16196);
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
  obj[AuthStates.WELCOME] = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_WELCOME,
    headerTitle,
    headerShown: false,
    render() {
      return jsx(WelcomeDefault, {});
    }
  };
  const obj3 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj2 = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_WELCOME,
    headerTitle,
    headerShown: false,
    render() {
      return jsx(WelcomeDefault, {});
    }
  };
  obj3.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY };
  obj3.headerTitle = headerTitle;
  obj3.headerLeft = function headerLeft(arg0) {
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
  };
  obj3.render = function render() {
    return jsx(RegisterIdentity.RegisterIdentity, {});
  };
  obj[AuthStates.REGISTER_IDENTITY] = obj3;
  const obj5 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj4 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY };
  obj5.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj5.headerTitle = headerTitle;
  obj5.headerLeft = function headerLeft(arg0) {
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
  obj5.render = function render() {
    return jsx(RegisterDisplayNameDefault, {});
  };
  obj[AuthStates.REGISTER_DISPLAY_NAME] = obj5;
  const obj7 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_REGISTRATION, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj6 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj7.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj7.headerTitle = headerTitle;
  obj7.headerLeft = function headerLeft(arg0) {
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
  obj7.render = function render() {
    return jsx(RegisterAccountInformationDefault, {});
  };
  obj[AuthStates.REGISTER_ACCOUNT_INFORMATION] = obj7;
  const obj9 = { ignoreKeyboard: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj8 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj9.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW };
  obj9.headerTitle = headerTitle;
  obj9.headerLeft = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.destinationStep = constants.ACCOUNT_IDENTITY;
    return jsx(RegistrationUtils.BackButtonWithTracking, {});
  };
  obj9.render = function render(arg0) {
    const merged = Object.assign(arg0);
    return jsx(components_VerifyPhoneDefault, {});
  };
  obj[AuthStates.VERIFY_PHONE] = obj9;
  const obj11 = { ignoreKeyboard: true, fullscreen: true, impressionName: discord_common_AnalyticsUtils.ImpressionNames.USER_LOGIN, impressionProperties: null, headerTitle: null, render: null };
  const obj10 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_REGISTRATION_FLOW };
  obj11.impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_LOGIN_FLOW };
  obj11.headerTitle = headerTitle;
  obj11.render = function render() {
    return jsx(LoginDefault, {});
  };
  obj[AuthStates.LOGIN] = obj11;
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
      return closure_15(closure_1(7244), {
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
  const obj12 = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.USER_LOGIN_FLOW };
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
  const obj13 = {
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