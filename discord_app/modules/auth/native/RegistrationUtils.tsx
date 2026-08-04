import noop from "noop";
import updateInvite from "updateInvite";
import getDisplayedInviteCode from "getDisplayedInviteCode";
import useRegistrationUIStore from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function trackRegTransition(overrideRegistrationOptions) {
  let actionType;
  let details;
  let fromStep;
  let step;
  let toStep;
  let registrationOptions = overrideRegistrationOptions.overrideRegistrationOptions;
  ({ step, fromStep, toStep, actionType, details } = overrideRegistrationOptions);
  displayedInviteCode = displayedInviteCode.getDisplayedInviteCode();
  if (registrationOptions == null) {
    registrationOptions = state.getState().registrationOptions;
  }
  let invite = null;
  if (null != displayedInviteCode) {
    invite = invite.getInvite(displayedInviteCode);
  }
  let str = null;
  if (null != invite) {
    str = "invite";
  }
  let email;
  if (registrationOptions != null) {
    email = registrationOptions.email;
  }
  let str2 = "email";
  if (null == email) {
    let phone;
    if (registrationOptions != null) {
      phone = registrationOptions.phone;
    }
    str2 = null;
    if (null != phone) {
      str2 = "phone";
    }
  }
  let obj = importDefault(698);
  obj = { step, identity_type: str2, action_type: actionType, action_details: details, registration_source: str, invite_code: null, invite_channel_id: null, invite_channel_type: null, invite_guild_id: null, invite_inviter_id: null, from_step: null, to_step: null };
  let code;
  if (invite != null) {
    code = invite.code;
  }
  obj[5] = code;
  let id;
  if (invite != null) {
    const channel = invite.channel;
    if (channel != null) {
      id = channel.id;
    }
  }
  obj[6] = id;
  let type;
  if (invite != null) {
    const channel2 = invite.channel;
    if (channel2 != null) {
      type = channel2.type;
    }
  }
  obj[7] = type;
  let id1;
  if (invite != null) {
    const guild = invite.guild;
    if (guild != null) {
      id1 = guild.id;
    }
  }
  obj[8] = id1;
  let id2;
  if (invite != null) {
    const inviter = invite.inviter;
    if (inviter != null) {
      id2 = inviter.id;
    }
  }
  obj[9] = id2;
  obj[10] = fromStep;
  obj[11] = toStep;
  obj.track(AnalyticEvents.REGISTER_TRANSITION, obj);
}
({ clearRegistrationErrorMessage: closure_6, useRegistrationUIStore: error } = useRegistrationUIStore);
({ RegisterTransitionSteps: metroImportAll, RegistrationTransitionActionTypes: c9 } = RegistrationTransitionActionTypes);
const result = require("getDisplayedInviteCode").fileFinishedImporting("modules/auth/native/RegistrationUtils.tsx");

export const hasAllRegistrationFieldsCompleted = function hasAllRegistrationFieldsCompleted(email, isConsentRequired) {
  isConsentRequired = isConsentRequired.isConsentRequired;
  let tmp = null != email.email || null != email.phoneToken;
  if (tmp) {
    let tmp2 = null != email.username;
    if (tmp2) {
      let tmp3 = null != email.password;
      if (tmp3) {
        let tmp4 = null != email.birthday;
        if (tmp4) {
          let tmp5 = null != email.consent;
          if (tmp5) {
            let tmp6 = !isConsentRequired;
            if (isConsentRequired) {
              tmp6 = true === email.consent;
            }
            tmp5 = tmp6;
          }
          tmp4 = tmp5;
        }
        tmp3 = tmp4;
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
};
export { trackRegTransition };
export function getTrackRegTransition(closure_0) {
  return (arg0) => {
    let actionType;
    let details;
    let overrideRegistrationOptions;
    let step;
    let toStep;
    ({ step, actionType, toStep, details, overrideRegistrationOptions } = arg0);
    if (actionType === outer1_9.VIEWED) {
      if (step === outer1_8.CAPTCHA) {
        let obj = { step: null, fromStep: null, actionType: null };
        obj[0] = step;
        obj[1] = ref.current;
        obj[2] = actionType;
        outer1_12(obj);
      }
    }
    if (actionType === outer1_9.VIEWED) {
      if (null != step) {
        obj = { step: null, fromStep: null, actionType: null };
        obj[0] = step;
        obj[1] = ref.current;
        obj[2] = actionType;
        outer1_12(obj);
      }
      ref.current = step;
    } else if (null != step) {
      obj = { step: null, toStep: null, actionType: null, details: null, overrideRegistrationOptions: null };
      obj[0] = step;
      obj[1] = toStep;
      obj[2] = actionType;
      obj[3] = details;
      obj[4] = overrideRegistrationOptions;
      outer1_12(obj);
    }
    return tmp9;
  };
}
export const BackButtonWithTracking = function BackButtonWithTracking(arg0) {
  let dependencyMap;
  let importDefault;
  _require = React.useContext(_require(14975).TrackRegistrationContext);
  ({ destinationStep: importDefault, onPress: dependencyMap } = arg0);
  let obj = {};
  const merged = Object.assign(arg0);
  obj.onPress = function onPress() {
    if (null != closure_2) {
      outer1_6();
      const obj = { step: null, actionType: null };
      obj[0] = closure_1;
      obj[1] = outer1_9.VIEWED;
      callback(obj);
      tmp();
    }
  };
  return jsx(_require(5245).HeaderBackButton, {});
};
export const getCommonErrorDetails = function getCommonErrorDetails(error_code) {
  if (-1 === error_code) {
    const _HermesInternal7 = HermesInternal;
    return "" + error_code + ": Captcha was not completed";
  } else if (0 === error_code) {
    const _HermesInternal6 = HermesInternal;
    return "" + error_code + ": Internal server error";
  } else if (40333 === error_code) {
    const _HermesInternal5 = HermesInternal;
    return "" + error_code + ": Blocked by proxy";
  } else if (50022 === error_code) {
    const _HermesInternal4 = HermesInternal;
    return "" + error_code + ": Phone number invalid";
  } else if (70005 === error_code) {
    const _HermesInternal3 = HermesInternal;
    return "" + error_code + ": Phone number not mobile";
  } else if (70003 === error_code) {
    const _HermesInternal2 = HermesInternal;
    return "" + error_code + ": Unable to send sms to phone number";
  } else {
    if (70008 !== error_code) {
      if (70011 !== error_code) {
        if (undefined === error_code) {
          return "No error code";
        } else {
          return error_code.toString();
        }
      }
    }
    const _HermesInternal = HermesInternal;
    return "" + error_code + ": Phone number already associated with an account";
  }
};