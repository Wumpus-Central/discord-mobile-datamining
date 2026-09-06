// === Module 15954: RegistrationUtils ===

// Module 15954 (RegistrationUtils)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;
import InviteStore from "InviteStore" /* 4544 */;
import DisplayedInviteStore from "DisplayedInviteStore" /* 8739 */;

const require = fn;
function trackRegTransition(overrideRegistrationOptions) {
  let registrationOptions = overrideRegistrationOptions.overrideRegistrationOptions;
  ({ step, fromStep, toStep, actionType, details } = overrideRegistrationOptions);
  const displayedInviteCode = DisplayedInviteStore.getDisplayedInviteCode();
  if (registrationOptions == null) {
    registrationOptions = state.getState().registrationOptions;
  }
  let invite = null;
  if (null != displayedInviteCode) {
    invite = InviteStore.getInvite(displayedInviteCode);
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
  const obj = { step, identity_type: str2, action_type: actionType, action_details: details, registration_source: str, invite_code: null, invite_channel_id: null, invite_channel_type: null, invite_guild_id: null, invite_inviter_id: null, from_step: null, to_step: null };
  let code;
  if (invite != null) {
    code = invite.code;
  }
  obj.invite_code = code;
  let id;
  if (invite != null) {
    const channel = invite.channel;
    if (channel != null) {
      id = channel.id;
    }
  }
  obj.invite_channel_id = id;
  let type;
  if (invite != null) {
    const channel2 = invite.channel;
    if (channel2 != null) {
      type = channel2.type;
    }
  }
  obj.invite_channel_type = type;
  let id1;
  if (invite != null) {
    const guild = invite.guild;
    if (guild != null) {
      id1 = guild.id;
    }
  }
  obj.invite_guild_id = id1;
  let id2;
  if (invite != null) {
    const inviter = invite.inviter;
    if (inviter != null) {
      id2 = inviter.id;
    }
  }
  obj.invite_inviter_id = id2;
  obj.from_step = fromStep;
  obj.to_step = toStep;
  obj.track(AnalyticEvents.REGISTER_TRANSITION, obj);
}
const RegistrationUIStore = fn(15946);
({ clearRegistrationErrorMessage: metroRequire, useRegistrationUIStore: closure_7 } = RegistrationUIStore);
const RegistrationConstants = fn(15947);
({ RegisterTransitionSteps: closure_8, RegistrationTransitionActionTypes: closure_9 } = RegistrationConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/RegistrationUtils.tsx");

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
export function getTrackRegTransition(arg0) {
  return (arg0) => {
    ({ step, actionType, toStep, details, overrideRegistrationOptions } = arg0);
    if (actionType === constants2.VIEWED) {
      if (step === constants.CAPTCHA) {
        let obj = { step, fromStep: ref.current, actionType };
        trackRegTransition(obj);
      }
    }
    if (actionType === constants2.VIEWED) {
      if (null != step) {
        obj = { step, fromStep: ref.current, actionType };
        trackRegTransition(obj);
      }
      ref.current = step;
    } else if (null != step) {
      obj = { step, toStep, actionType, details, overrideRegistrationOptions };
      trackRegTransition(obj);
    }
    return tmp9;
  };
}
export const BackButtonWithTracking = function BackButtonWithTracking(arg0) {
  _require = noop.useContext(require("Auth").TrackRegistrationContext);
  ({ destinationStep: importDefault, onPress: dependencyMap } = arg0);
  let obj = {};
  const merged = Object.assign(arg0);
  obj.onPress = function onPress() {
    if (null != dependencyMap) {
      timestampProducer();
      const obj = { step, actionType: constants2.VIEWED };
      closure_0(obj);
      tmp();
    }
  };
  return jsx(require("module_5631").HeaderBackButton, {});
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