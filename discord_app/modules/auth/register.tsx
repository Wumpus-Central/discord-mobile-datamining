// discord_app/modules/auth/register.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import _modDef4421 from "../../../_runtime/metro/04421__.js";
import APIErrorDefault from "../../errors/APIError.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import SharedCaptchaUtils from "../captcha/SharedCaptchaUtils.tsx";
import trackAgeGateSubmittedDefault from "experiment/trackAgeGateSubmitted.tsx";
import AgeGateActionCreatorsAll from "../age_gate/AgeGateActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
let closure_11 = async function _scorePassword() {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            c4 = 1;
            const request = {
              url: constants.SCORE_PASSWORD,
              body: null,
              trackedActionData: null,
              rejectWithError: false,
            };
            const obj4 = { password };
            request.body = obj4;
            const obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.PASSWORD_VALIDATE };
            request.trackedActionData = obj5;
            c5 = 2;
            c6 = 1;
            const obj7 = { value: TrackedHTTPUtilsDefault.post(request), done: false };
            return obj7;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_0 = closure_3;
          const tmp17 = new closure_130_1(closure_130_3[9])(closure_129_0);
          throw tmp17;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp19) {
        closure_3 = tmp19;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp19;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_12 = async function _registerPhone(arg0) {
  let phone = arg0;
  c5 = 0;
  c6 = 0;
  c4 = 0;
  let iter = (async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp5;
            let phone2;
            phone2 = phone.phone;
            c5 = 1;
            c6 = 1;
            return { value: "flex", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 1;
            const request = {
              url: closure_130_8.REGISTER_PHONE,
              body: null,
              trackedActionData: null,
              rejectWithError: false,
            };
            const obj5 = { phone: phone2 };
            request.body = obj5;
            const obj6 = { event: closure_130_0(closure_130_3[8]).NetworkActionNames.USER_REGISTER_PHONE };
            request.trackedActionData = obj6;
            c5 = 3;
            c6 = 1;
            const obj8 = { value: closure_130_1(closure_130_3[7]).post(request), done: false };
            return obj8;
          }
        } else if (2 === tmp8) {
          c4 = 0;
          closure_129_1 = closure_3;
          if (closure_129_1 instanceof closure_130_0(closure_130_3[10]).CaptchaCancelError) {
            throw closure_129_1;
          } else {
            const tmp23 = new closure_130_1(closure_130_3[9])(closure_129_1);
            throw tmp23;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          c4 = 0;
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp27) {
        closure_3 = tmp27;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp27;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
function registerFull(giftCodeSKUId) {
  ({ birthday, invite } = giftCodeSKUId);
  ({ email, phoneToken, username, globalName, consent, password, guildTemplateCode } = giftCodeSKUId);
  if (invite === undefined) {
    invite = null;
  }
  giftCodeSKUId = giftCodeSKUId.giftCodeSKUId;
  if (giftCodeSKUId === undefined) {
    giftCodeSKUId = null;
  }
  let promoEmailConsent = giftCodeSKUId.promoEmailConsent;
  if (promoEmailConsent === undefined) {
    promoEmailConsent = null;
  }
  let prop = giftCodeSKUId.usedUsernameSuggestion;
  if (prop === undefined) {
    prop = null;
  }
  DispatcherDefault.dispatch({ type: "REGISTER" });
  if (null != birthday) {
    trackAgeGateSubmittedDefault(birthday, constants2.REGISTER);
    let obj2 = { source: constants5.REGISTER, action: constants4.AGE_GATE_SUBMITTED };
    AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, obj2);
    const tmp4Result = AnalyticsUtilsDefault;
    const diffResult = _modDef4421().diff(birthday, "years");
    if (diffResult >= 13) {
      if (diffResult < 13) {
        let str3 = "23+";
        if (diffResult >= 18) {
          str3 = "23+";
          if (diffResult <= 22) {
            str3 = "18-22";
          }
        }
        let str = str3;
      } else {
        str = "13-17";
      }
      let obj3 = { age_bucket: str };
      AnalyticsUtilsDefault.track(constants.USER_AGE_SUBMITTED, obj3);
      const tmp4Result3 = AnalyticsUtilsDefault;
    }
    const obj11 = _modDef4421();
  }
  const request = { url: constants3.REGISTER, body: null, trackedActionData: null, rejectWithError: false };
  const user = {
    fingerprint: AuthenticationStore.getFingerprint(),
    email,
    username,
    global_name: globalName,
    password,
    invite,
    consent,
    phone_token: phoneToken,
    date_of_birth: null,
    gift_code_sku_id: null,
    guild_template_code: null,
    promotional_email_opt_in: null,
  };
  let formatResult;
  if (birthday != null) {
    formatResult = birthday.format("YYYY-MM-DD");
  }
  user.date_of_birth = formatResult;
  user.gift_code_sku_id = giftCodeSKUId;
  user.guild_template_code = guildTemplateCode;
  let checked;
  if (promoEmailConsent != null) {
    checked = promoEmailConsent.checked;
  }
  user.promotional_email_opt_in = checked;
  request.body = user;
  let obj4 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_REGISTER, properties: null };
  const obj5 = {
    invite_code: invite,
    used_username_suggestion: prop,
    promotional_email_opt_in: null,
    promotional_email_pre_checked: null,
    was_unique_username: true,
  };
  let checked1;
  if (promoEmailConsent != null) {
    checked1 = promoEmailConsent.checked;
  }
  obj5.promotional_email_opt_in = checked1;
  let preChecked;
  if (promoEmailConsent != null) {
    preChecked = promoEmailConsent.preChecked;
  }
  obj5.promotional_email_pre_checked = preChecked;
  obj4.properties = obj5;
  request.trackedActionData = obj4;
  const tmp4Result4 = TrackedHTTPUtilsDefault;
  return TrackedHTTPUtilsDefault.post(request).then(
    (body) => {
      DispatcherDefault.dispatch({ type: "REGISTER_SUCCESS", token: body.body.token });
      const obj2 = { type: "REGISTER_SUCCESS", token: body.body.token };
      DispatcherDefault.dispatch({
        type: "GUARDIAN_CONNECT_REQUIRED",
        shouldShowGuardianConnect: true === body.body.show_guardian_connect,
      });
      const obj4 = {
        type: "GUARDIAN_CONNECT_REQUIRED",
        shouldShowGuardianConnect: true === body.body.show_guardian_connect,
      };
      AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, {
        source: constants3.REGISTER,
        action: constants2.AGE_GATE_SUCCESS,
      });
    },
    (arg0) => {
      if (arg0 instanceof SharedCaptchaUtils.CaptchaCancelError) {
        throw arg0;
      } else {
        const obj = new APIErrorDefault(arg0);
        if (null != obj.getFieldErrors("date_of_birth")) {
          const result = AgeGateActionCreatorsAll.preventUnderageRegistration(constants3.REGISTER);
        }
        const obj3 = {
          is_unique_username_registration: true,
          email_error_reason: obj.getFirstFieldErrorMessage("email"),
          phone_error_reason: obj.getFirstFieldErrorMessage("phone_token"),
          password_error_reason: obj.getFirstFieldErrorMessage("password"),
          username_error_reason: obj.getFirstFieldErrorMessage("username"),
          global_name_error_reason: obj.getFirstFieldErrorMessage("global_name"),
          date_of_birth_error_reason: obj.getFirstFieldErrorMessage("date_of_birth"),
          promotional_email_opt_in_error_reason: obj.getFirstFieldErrorMessage("promotional_email_opt_in"),
          fingerprint_error_reason: obj.getFirstFieldErrorMessage("fingerprint"),
          invite_error_reason: obj.getFirstFieldErrorMessage("invite"),
          gift_code_sku_id_error_reason: obj.getFirstFieldErrorMessage("gift_code_sku_id"),
          guild_template_code_error_reason: obj.getFirstFieldErrorMessage("guild_template_code"),
          consent_error_reason: obj.getFirstFieldErrorMessage("consent"),
          generic_error_reason: obj.getAnyErrorMessage(),
        };
        AnalyticsUtilsDefault.track(constants.REGISTER_SUBMIT_ERRORED, obj3);
        throw obj;
      }
    },
  );
}
const ParentalConsentStore = fn(15584);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, AnalyticsSections: closure_7, Endpoints: closure_8 } = Constants);
const AgeGateConstants = fn(1099);
({ AgeGateAnalyticAction: closure_9, AgeGateSource: c10 } = AgeGateConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/auth/register.tsx");

export default function register(invite) {
  invite = invite.invite;
  if (invite === undefined) {
    invite = null;
  }
  let giftCodeSKUId = invite.giftCodeSKUId;
  if (giftCodeSKUId === undefined) {
    giftCodeSKUId = null;
  }
  const obj = {};
  const merged = Object.assign(Object.assign(invite, Object.assign({ invite: 0, giftCodeSKUId: 0 })));
  obj.invite = invite;
  obj.giftCodeSKUId = giftCodeSKUId;
  return registerFull(obj);
}
export const scorePassword = function scorePassword() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const registerPhone = function registerPhone() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { registerFull };
