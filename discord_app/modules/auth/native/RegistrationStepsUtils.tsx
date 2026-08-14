// discord_app/modules/auth/native/RegistrationStepsUtils.tsx
import closure_3 from "RegistrationTransitionActionTypes";
import "ChangePhoneReason";
import isRateLimited from "isRateLimited";
import { usePromoEmailConsentStore } from "setPromoEmailConsentState";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AuthStates } from "ME";
import { jsx } from "RegisterAgeGate";
import { encodeProperties } from "../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";

let c10;
let c9;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function headerTitle() {
  return null;
}
function getNextAuthState(closure_0) {
  const index = items.indexOf(closure_0);
  if (-1 !== index) {
    if (index !== arr.length - 1) {
      return arr[index + 1];
    }
  }
}
function _handleNextOrSubmitRegistration() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              outer1_9();
              const tmp23 = outer1_18(callback);
              if (null != tmp23) {
                const obj1 = { step: null, toStep: null, actionType: null };
                obj1[0] = outer1_10(tmp18);
                obj1[1] = outer1_10(tmp23);
                obj1[2] = outer1_13.SUCCESS;
                tmp19(obj1);
                const StackActions = callback(table[24]).StackActions;
                obj6.dispatch(StackActions.push(tmp23));
              } else {
                c4 = 1;
                c3 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = outer1_20(tmp18, obj6, tmp19);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const _handleNextOrSubmitRegistration = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function handleRegistrationSubmit(AGE_GATE, closure_0, context) {
  const self = this;
  const apply = _handleRegistrationSubmit.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleRegistrationSubmit() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2) {
      let authenticationErrorsFromAPIError = tmp3;
      const result = outer1_4.registrationUsernameSuggestion();
      const registrationOptions = state.getState().registrationOptions;
      let tmp37 = null;
      if (!obj10.isNullOrEmpty(result)) {
        tmp37 = registrationOptions.username === result;
      }
      let obj1 = {};
      const merged = Object.assign(registrationOptions);
      obj1.usedUsernameSuggestion = tmp37;
      if (state.required) {
        obj1.promoEmailConsent = state;
      }
      v02(true);
      v0({});
      v0 = 1;
      let obj3 = callback(15174);
      yield obj3.registerFull(obj1);
      if (1 === tmp7) {
        v0 = 0;
        v0 = closure_5;
        v02(false);
        if (v0 instanceof callback(4241).APIError) {
          obj1 = callback(8546);
          authenticationErrorsFromAPIError = obj1.getAuthenticationErrorsFromAPIError(v0);
          v0(authenticationErrorsFromAPIError);
          closure_5 = callback3(callback);
          if (null != closure_5) {
            callback2(15211)(callback2, dependencyMap, authenticationErrorsFromAPIError, closure_5);
          }
          state = 3;
        } else {
          state = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (arg0 === 1) {
        state = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        obj3 = { step: null, actionType: null, overrideRegistrationOptions: null };
        obj3[0] = callback3(callback);
        obj3[1] = constants2.SUCCESS;
        obj3[2] = obj1;
        dependencyMap(obj3);
        const obj4 = { step: null, actionType: null, overrideRegistrationOptions: null };
        obj4[0] = constants.REGISTER;
        obj4[1] = constants2.SUCCESS;
        obj4[2] = obj1;
        dependencyMap(obj4);
        v0 = 0;
      }
      v0 = 0;
      return arg1;
    })();
  });
  const _handleRegistrationSubmit = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ setRegistrationErrors: closure_6, setSubmitting: error, useRegistrationUIStore: metroImportAll, clearRegistrationErrorMessage: c9 } = useRegistrationUIStore);
({ authStateToRegisterTransitionStep: c10, RegisterTransitionSteps: unpackModuleId, RegistrationSteps: closure_12, RegistrationTransitionActionTypes: map1 } = RegistrationTransitionActionTypes);
const items = [, , , , ];
({ WELCOME: arr[0], REGISTER_IDENTITY: arr[1], REGISTER_DISPLAY_NAME: arr[2], REGISTER_ACCOUNT_INFORMATION: arr[3], AGE_GATE: arr[4] } = AuthStates);
let result = require("isRateLimited").fileFinishedImporting("modules/auth/native/RegistrationStepsUtils.tsx");

export function getRegistrationSteps() {
  return items;
}
export const getAllAuthScreens = function getAllAuthScreens() {
  let obj = {};
  obj = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: encodeProperties.ImpressionNames.USER_WELCOME,
    headerTitle,
    headerShown: false,
    render() {
      return callback4(callback2(15165), {});
    }
  };
  obj[AuthStates.WELCOME] = obj;
  obj = { ignoreKeyboard: true, fullscreen: true, impressionName: encodeProperties.ImpressionNames.USER_REGISTRATION, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  obj[3] = { impression_group: encodeProperties.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY };
  obj[4] = headerTitle;
  obj[5] = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    const index = closure_16.indexOf(constants2.REGISTER_IDENTITY);
    let tmp5;
    if (-1 !== index) {
      if (0 !== index) {
        tmp5 = closure_16[index - 1];
      }
    }
    let tmp6;
    if (null != tmp5) {
      tmp6 = callback3(tmp5);
    }
    obj.destinationStep = tmp6;
    return closure_15(callback(15171).BackButtonWithTracking, obj);
  };
  obj[6] = function render() {
    return callback4(callback(15172).RegisterIdentity, {});
  };
  obj[AuthStates.REGISTER_IDENTITY] = obj;
  const obj2 = { ignoreKeyboard: true, fullscreen: true, impressionName: encodeProperties.ImpressionNames.USER_REGISTRATION, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj1 = { impression_group: encodeProperties.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.IDENTITY };
  obj2[3] = { impression_group: encodeProperties.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj2[4] = headerTitle;
  obj2[5] = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    const index = closure_16.indexOf(constants2.REGISTER_DISPLAY_NAME);
    let tmp5;
    if (-1 !== index) {
      if (0 !== index) {
        tmp5 = closure_16[index - 1];
      }
    }
    let tmp6;
    if (null != tmp5) {
      tmp6 = callback3(tmp5);
    }
    obj.destinationStep = tmp6;
    return closure_15(callback(15171).BackButtonWithTracking, obj);
  };
  obj2[6] = function render() {
    return callback4(callback2(15184), {});
  };
  obj[AuthStates.REGISTER_DISPLAY_NAME] = obj2;
  const obj4 = { ignoreKeyboard: true, fullscreen: true, impressionName: encodeProperties.ImpressionNames.USER_REGISTRATION, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj3 = { impression_group: encodeProperties.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.DISPLAY_NAME };
  obj4[3] = { impression_group: encodeProperties.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj4[4] = headerTitle;
  obj4[5] = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    const index = closure_16.indexOf(constants2.REGISTER_ACCOUNT_INFORMATION);
    let tmp5;
    if (-1 !== index) {
      if (0 !== index) {
        tmp5 = closure_16[index - 1];
      }
    }
    let tmp6;
    if (null != tmp5) {
      tmp6 = callback3(tmp5);
    }
    obj.destinationStep = tmp6;
    return closure_15(callback(15171).BackButtonWithTracking, obj);
  };
  obj4[6] = function render() {
    return callback4(callback2(15185), {});
  };
  obj[AuthStates.REGISTER_ACCOUNT_INFORMATION] = obj4;
  const obj6 = { ignoreKeyboard: true, impressionName: encodeProperties.ImpressionNames.USER_VERIFY_PHONE, impressionProperties: null, headerTitle: null, headerLeft: null, render: null };
  const obj5 = { impression_group: encodeProperties.ImpressionGroups.USER_REGISTRATION_FLOW, step: constants.ACCOUNT_INFORMATION };
  obj6[2] = { impression_group: encodeProperties.ImpressionGroups.USER_REGISTRATION_FLOW };
  obj6[3] = headerTitle;
  obj6[4] = function headerLeft(arg0) {
    const obj = {};
    const merged = Object.assign(arg0);
    obj.destinationStep = constants.ACCOUNT_IDENTITY;
    return callback4(callback(15171).BackButtonWithTracking, obj);
  };
  obj6[5] = function render(arg0) {
    const merged = Object.assign(arg0);
    return callback4(callback2(15191), {});
  };
  obj[AuthStates.VERIFY_PHONE] = obj6;
  const obj8 = { ignoreKeyboard: true, fullscreen: true, impressionName: encodeProperties.ImpressionNames.USER_LOGIN, impressionProperties: null, headerTitle: null, render: null };
  const obj7 = { impression_group: encodeProperties.ImpressionGroups.USER_REGISTRATION_FLOW };
  obj8[3] = { impression_group: encodeProperties.ImpressionGroups.USER_LOGIN_FLOW };
  obj8[4] = headerTitle;
  obj8[5] = function render() {
    return callback4(callback2(8541), {});
  };
  obj[AuthStates.LOGIN] = obj8;
  obj[AuthStates.MFA] = {
    fullscreen: true,
    ignoreKeyboard: true,
    headerTitle,
    headerShown: false,
    render() {
      return callback4(callback2(15193), { inContainer: true });
    }
  };
  obj[AuthStates.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED] = {
    ignoreKeyboard: true,
    fullscreen: true,
    headerTitle,
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback4(callback2(15194), {});
    }
  };
  obj[AuthStates.COUNTRY_SELECT] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0, arg1) {
      let closure_0 = arg1;
      return callback4(callback2(8593), {
        onClose() {
          return arr.pop();
        },
        onCountrySelected(countryCode) {
          return callback(table[19]).setCountryCode(countryCode);
        }
      });
    }
  };
  obj[AuthStates.EXTERNAL_LINK] = {
    ignoreKeyboard: true,
    headerTitle,
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback4(callback2(15198), {});
    }
  };
  const obj9 = { impression_group: encodeProperties.ImpressionGroups.USER_LOGIN_FLOW };
  obj[AuthStates.AGE_GATE] = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: encodeProperties.ImpressionNames.USER_AGE_GATE,
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      const index = closure_16.indexOf(constants2.AGE_GATE);
      let tmp5;
      if (-1 !== index) {
        if (0 !== index) {
          tmp5 = closure_16[index - 1];
        }
      }
      let tmp6;
      if (null != tmp5) {
        tmp6 = callback3(tmp5);
      }
      obj.destinationStep = tmp6;
      return closure_15(callback(15171).BackButtonWithTracking, obj);
    },
    render() {
      return callback4(callback2(15199), {});
    }
  };
  const obj10 = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: encodeProperties.ImpressionNames.USER_AGE_GATE,
    headerTitle,
    headerLeft(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      const index = closure_16.indexOf(constants2.AGE_GATE);
      let tmp5;
      if (-1 !== index) {
        if (0 !== index) {
          tmp5 = closure_16[index - 1];
        }
      }
      let tmp6;
      if (null != tmp5) {
        tmp6 = callback3(tmp5);
      }
      obj.destinationStep = tmp6;
      return closure_15(callback(15171).BackButtonWithTracking, obj);
    },
    render() {
      return callback4(callback2(15199), {});
    }
  };
  obj[AuthStates.AGE_GATE_UNDERAGE] = {
    ignoreKeyboard: true,
    fullscreen: true,
    impressionName: encodeProperties.ImpressionNames.USER_AGE_GATE_UNDERAGE,
    impressionProperties(existingUser) {
      return { impression_group: callback(503).ImpressionGroups.USER_REGISTRATION_FLOW, existing_user: existingUser.existingUser };
    },
    headerTitle,
    render(arg0, arg1) {
      let closure_0 = arg1;
      const merged = Object.assign(arg0);
      return callback4(callback2(15203), {
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
      return callback4(callback(15204).CompanionRemoteAuth, {});
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
      tmp3 = tmp[index - 1];
    }
  }
  if (null != tmp3) {
    return callback2(tmp3);
  }
  tmp = items;
};
export const getNextRegistrationTransitionStep = function getNextRegistrationTransitionStep(closure_0) {
  const index = items.indexOf(closure_0);
  let tmp2;
  if (-1 !== index) {
    if (index !== arr.length - 1) {
      tmp2 = arr[index + 1];
    }
  }
  if (null != tmp2) {
    return callback2(tmp2);
  }
};
export const handleNextOrSubmitRegistration = function handleNextOrSubmitRegistration(REGISTER_DISPLAY_NAME, closure_0, outer1_4) {
  const self = this;
  const apply = _handleNextOrSubmitRegistration.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { handleRegistrationSubmit };