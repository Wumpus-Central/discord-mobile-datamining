// discord_app/modules/auth/native/RegistrationUtils.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../Constants.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import InviteStore from "../../../stores/InviteStore.tsx";
import DisplayedInviteStore from "../../../stores/native/DisplayedInviteStore.tsx";
import RegistrationUIStore from "RegistrationUIStore.tsx";
import RegistrationConstants from "../RegistrationConstants.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, destinationStep;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function trackRegTransition(overrideRegistrationOptions) {
  let actionType;
  let code;
  let details;
  let fromStep;
  let id;
  let id1;
  let id2;
  let step;
  let toStep;
  let type;
  let registrationOptions = overrideRegistrationOptions.overrideRegistrationOptions;
  ({ step, fromStep, toStep, actionType, details } = overrideRegistrationOptions);
  const displayedInviteCode = DisplayedInviteStore.getDisplayedInviteCode();
  if (registrationOptions == null) {
    registrationOptions = metroImportDefault.getState().registrationOptions;
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
  const obj = {
    step,
    identity_type: str2,
    action_type: actionType,
    action_details: details,
    registration_source: str,
    invite_code: code,
    invite_channel_id: id,
    invite_channel_type: type,
    invite_guild_id: id1,
    invite_inviter_id: id2,
    from_step: fromStep,
    to_step: toStep,
  };
  code = undefined;
  const track = AnalyticsUtilsDefault.track;
  const REGISTER_TRANSITION = AnalyticEvents.REGISTER_TRANSITION;
  AnalyticsUtilsDefault;
  if (invite != null) {
    code = invite.code;
  }
  id = undefined;
  if (invite != null) {
    const channel = invite.channel;
    if (channel != null) {
      id = channel.id;
    }
  }
  type = undefined;
  if (invite != null) {
    const channel2 = invite.channel;
    if (channel2 != null) {
      type = channel2.type;
    }
  }
  id1 = undefined;
  if (invite != null) {
    const guild = invite.guild;
    if (guild != null) {
      id1 = guild.id;
    }
  }
  id2 = undefined;
  if (invite != null) {
    const inviter = invite.inviter;
    if (inviter != null) {
      id2 = inviter.id;
    }
  }
  track(REGISTER_TRANSITION, obj);
}
({ clearRegistrationErrorMessage: metroRequire, useRegistrationUIStore: metroImportDefault } = RegistrationUIStore);
({ RegisterTransitionSteps: metroImportAll, RegistrationTransitionActionTypes: c9 } = RegistrationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (destinationStep) => {
      let context;
      let onPress;
      const tmp = context;
      let obj = context(onPress[9]);
      const cResult = obj.c(7);
      context = react.useContext(context(onPress[10]).TrackRegistrationContext);
      destinationStep = destinationStep.destinationStep;
      const tmp2 = onPress;
      onPress = destinationStep.onPress;
      if (cResult[0] === destinationStep) {
        if (cResult[1] === onPress) {
          let tmp5;
          if (cResult[2] === context) {
            tmp5 = cResult[3];
          }
          if (cResult[4] === tmp5) {
            let tmp6;
            if (cResult[5] === destinationStep) {
              tmp6 = cResult[6];
            }
            return tmp6;
          }
          const HeaderBackButton = tmp(tmp2[11]).HeaderBackButton;
          const merged = Object.assign(destinationStep);
          const tmp11 = <HeaderBackButton onPress={tmp5} />;
          cResult[4] = tmp5;
          cResult[5] = destinationStep;
          cResult[6] = tmp11;
          tmp6 = tmp11;
        }
      }
      const fn = function o() {
        if (null != onPress) {
          metroRequire();
          const obj = { step: destinationStep, actionType: constants.VIEWED };
          context(obj);
          tmp();
        }
      };
      cResult[0] = destinationStep;
      cResult[1] = onPress;
      cResult[2] = context;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (arg0) => {
      let closure_0;
      let step;
      _require = react.useContext(require("Auth").TrackRegistrationContext);
      ({ destinationStep: importDefault, onPress: dependencyMap } = arg0);
      const HeaderBackButton = require("../../../../_runtime/metro/06026__.js").HeaderBackButton;
      const merged = Object.assign(arg0);
      return (
        <HeaderBackButton
          onPress={function onPress() {
            if (null != dependencyMap) {
              metroRequire();
              const obj = { step: importDefault, actionType: constants.VIEWED };
              closure_0(obj);
              tmp();
            }
          }}
        />
      );
    };
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
  const ref = arg0;
  return (arg0) => {
    let actionType;
    let details;
    let overrideRegistrationOptions;
    let step;
    let toStep;
    ({ step, actionType, toStep, details, overrideRegistrationOptions } = arg0);
    if (actionType === constants.VIEWED) {
      if (step === metroImportAll.CAPTCHA) {
        const obj = { step, fromStep: ref.current, actionType };
        trackRegTransition(obj);
      }
    }
    if (actionType === constants.VIEWED) {
      if (null != step) {
        const obj2 = { step, fromStep: ref.current, actionType };
        trackRegTransition(obj2);
      }
      ref.current = step;
    } else if (null != step) {
      const obj3 = { step, toStep, actionType, details, overrideRegistrationOptions };
      trackRegTransition(obj3);
    }
    return tmp9;
  };
}
export const BackButtonWithTracking = tmp4;
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
