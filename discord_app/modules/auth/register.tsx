// === Module 15957: auth/register ===

// Module 15957 (auth/register)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import _modDef4153 from "module_4153" /* 4153 */;
import APIErrorDefault from "APIError" /* 4462 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 11277 */;
import trackAgeGateSubmittedDefault from "trackAgeGateSubmitted" /* 15959 */;
import AgeGateActionCreatorsAll from "AgeGateActionCreators" /* 15960 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            c4 = 1;
            const request = { url: constants.SCORE_PASSWORD, body: null, trackedActionData: null, rejectWithError: false };
            const obj1 = { password };
            request.body = obj1;
            const obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.PASSWORD_VALIDATE };
            request.trackedActionData = obj2;
            c5 = 2;
            c6 = 1;
            const obj3 = { value: TrackedHTTPUtilsDefault.post(request), done: false };
            return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: value.body, done: true };
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp5;
            let phone2;
            phone2 = phone.phone;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            c4 = 1;
            const request = { url: closure_130_8.REGISTER_PHONE, body: null, trackedActionData: null, rejectWithError: false };
            const obj2 = { phone: phone2 };
            request.body = obj2;
            const obj3 = { event: closure_130_0(closure_130_3[8]).NetworkActionNames.USER_REGISTER_PHONE };
            request.trackedActionData = obj3;
            c5 = 3;
            c6 = 1;
            const obj4 = { value: closure_130_1(closure_130_3[7]).post(request), done: false };
            return obj4;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
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
  let obj = DispatcherDefault;
  obj.dispatch({ type: "REGISTER" });
  if (null != birthday) {
    trackAgeGateSubmittedDefault(birthday, constants2.REGISTER);
    let tmp4Result = AnalyticsUtilsDefault;
    obj = { source: constants5.REGISTER, action: constants4.AGE_GATE_SUBMITTED };
    tmp4Result.track(constants.AGE_GATE_ACTION, obj);
    const diffResult = _modDef4153().diff(birthday, "years");
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
      tmp4Result = AnalyticsUtilsDefault;
      obj = { age_bucket: str };
      tmp4Result.track(constants.USER_AGE_SUBMITTED, obj);
    }
    const obj11 = _modDef4153();
  }
  const request = { url: constants3.REGISTER, body: null, trackedActionData: null, rejectWithError: false };
  const user = { fingerprint: AuthenticationStore.getFingerprint(), email, username, global_name: globalName, password, invite, consent, phone_token: phoneToken, date_of_birth: null, gift_code_sku_id: null, guild_template_code: null, promotional_email_opt_in: null };
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
  const obj1 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_REGISTER, properties: null };
  let obj2 = { invite_code: invite, used_username_suggestion: prop, promotional_email_opt_in: null, promotional_email_pre_checked: null, was_unique_username: true };
  let checked1;
  if (promoEmailConsent != null) {
    checked1 = promoEmailConsent.checked;
  }
  obj2.promotional_email_opt_in = checked1;
  let preChecked;
  if (promoEmailConsent != null) {
    preChecked = promoEmailConsent.preChecked;
  }
  obj2.promotional_email_pre_checked = preChecked;
  obj1.properties = obj2;
  request.trackedActionData = obj1;
  const tmp4Result1 = TrackedHTTPUtilsDefault;
  return TrackedHTTPUtilsDefault.post(request).then((body) => {
    let obj = { type: "REGISTER_SUCCESS", token: body.body.token };
    obj.dispatch(obj);
    obj = { type: "GUARDIAN_CONNECT_REQUIRED", shouldShowGuardianConnect: true === body.body.show_guardian_connect };
    DispatcherDefault.dispatch(obj);
    AnalyticsUtilsDefault.track(constants.AGE_GATE_ACTION, { source: constants3.REGISTER, action: constants2.AGE_GATE_SUCCESS });
  }, (arg0) => {
    if (arg0 instanceof SharedCaptchaUtils.CaptchaCancelError) {
      throw arg0;
    } else {
      let obj = new APIErrorDefault(arg0);
      if (null != obj.getFieldErrors("date_of_birth")) {
        const result = AgeGateActionCreatorsAll.preventUnderageRegistration(constants3.REGISTER);
      }
      obj = { is_unique_username_registration: true, email_error_reason: null, phone_error_reason: null, password_error_reason: null, username_error_reason: null, global_name_error_reason: null, date_of_birth_error_reason: null, promotional_email_opt_in_error_reason: null, fingerprint_error_reason: null, invite_error_reason: null, gift_code_sku_id_error_reason: null, guild_template_code_error_reason: null, consent_error_reason: null, generic_error_reason: null };
      obj.email_error_reason = obj.getFirstFieldErrorMessage("email");
      obj.phone_error_reason = obj.getFirstFieldErrorMessage("phone_token");
      obj.password_error_reason = obj.getFirstFieldErrorMessage("password");
      obj.username_error_reason = obj.getFirstFieldErrorMessage("username");
      obj.global_name_error_reason = obj.getFirstFieldErrorMessage("global_name");
      obj.date_of_birth_error_reason = obj.getFirstFieldErrorMessage("date_of_birth");
      obj.promotional_email_opt_in_error_reason = obj.getFirstFieldErrorMessage("promotional_email_opt_in");
      obj.fingerprint_error_reason = obj.getFirstFieldErrorMessage("fingerprint");
      obj.invite_error_reason = obj.getFirstFieldErrorMessage("invite");
      obj.gift_code_sku_id_error_reason = obj.getFirstFieldErrorMessage("gift_code_sku_id");
      obj.guild_template_code_error_reason = obj.getFirstFieldErrorMessage("guild_template_code");
      obj.consent_error_reason = obj.getFirstFieldErrorMessage("consent");
      obj.generic_error_reason = obj.getAnyErrorMessage();
      AnalyticsUtilsDefault.track(constants.REGISTER_SUBMIT_ERRORED, obj);
      throw obj;
    }
  });
}
const ParentalConsentStore = fn(15958);
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, AnalyticsSections: closure_7, Endpoints: closure_8 } = Constants);
const AgeGateConstants = fn(1098);
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
};
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