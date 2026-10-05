// === Module 15878: register ===

// Module 15878 (register)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import _modDef4461 from "module_4461" /* 4461 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 5083 */;
import APIErrorDefault from "APIError" /* 5313 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 5407 */;
import trackAgeGateSubmittedDefault from "trackAgeGateSubmitted" /* 15880 */;
import AgeGateActionCreatorsAll from "AgeGateActionCreators" /* 15881 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ParentalConsentStore from "ParentalConsentStore" /* 15879 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import Constants from "Constants" /* 1085 */;
import AgeGateConstants from "AgeGateConstants" /* 1110 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, closure_3;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj = function _scorePassword() {
  obj = _asyncToGenerator(async (password) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let obj4;
      let obj5;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              const request = { url: constants.SCORE_PASSWORD, body: obj4, trackedActionData: obj5, rejectWithError: false };
              obj4 = { password };
              obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.PASSWORD_VALIDATE };
              const post = TrackedHTTPUtilsDefault.post;
              TrackedHTTPUtilsDefault;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            password = closure_3;
            const self = this;
            const self2 = this;
            const tmp12 = new closure_130_1(closure_130_3[9])(password);
            throw tmp12;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp14) {
          closure_3 = tmp14;
          if (0 === c4) {
            c6 = 3;
            throw tmp14;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _registerPhone() {
  obj = _asyncToGenerator(async (arg0) => {
    let phone = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (async function(arg0) {
      let obj5;
      let obj6;
      let tmp12;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp12;
              phone = undefined;
              phone = phone.phone;
              c5 = 1;
              c6 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              c4 = 1;
              const request = { url: closure_130_8.REGISTER_PHONE, body: obj5, trackedActionData: obj6, rejectWithError: false };
              obj5 = { phone };
              obj6 = { event: closure_130_0(closure_130_3[8]).NetworkActionNames.USER_REGISTER_PHONE };
              const post = closure_130_1(closure_130_3[7]).post;
              closure_130_1(closure_130_3[7]);
              c5 = 3;
              c6 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (2 === c5) {
            c4 = 0;
            closure_1 = closure_3;
            tmp12 = closure_1 instanceof closure_130_0(closure_130_3[10]).CaptchaCancelError;
            if (tmp12) {
              throw closure_1;
            } else {
              const self = this;
              const self2 = this;
              const tmp18 = new closure_130_1(closure_130_3[9])(closure_1);
              tmp12 = tmp18;
              throw tmp18;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp21) {
          closure_3 = tmp21;
          if (0 === c4) {
            c6 = 3;
            throw tmp21;
          } else {
            c5 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function registerFull(giftCodeSKUId) {
  let birthday;
  let checked;
  let checked1;
  let consent;
  let email;
  let formatResult;
  let globalName;
  let guildTemplateCode;
  let invite;
  let obj4;
  let obj5;
  let password;
  let phoneToken;
  let preChecked;
  let user;
  let username;
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
  obj = DispatcherDefault;
  obj.dispatch({ type: "REGISTER" });
  if (null != birthday) {
    trackAgeGateSubmittedDefault(birthday, metroImportDefault.REGISTER);
    let obj2 = { source: constants5.REGISTER, action: constants4.AGE_GATE_SUBMITTED };
    const tmp4Result = AnalyticsUtilsDefault;
    tmp4Result.track(metroRequire.AGE_GATE_ACTION, obj2);
    const obj10 = _modDef4461();
    const diffResult = obj10.diff(birthday, "years");
    if (diffResult >= 13) {
      let str;
      if (diffResult < 13) {
        let str3 = "23+";
        if (diffResult >= 18) {
          str3 = "23+";
          if (diffResult <= 22) {
            str3 = "18-22";
          }
        }
        str = str3;
      } else {
        str = "13-17";
      }
      let obj3 = { age_bucket: str };
      const tmp4Result3 = AnalyticsUtilsDefault;
      tmp4Result3.track(metroRequire.USER_AGE_SUBMITTED, obj3);
    }
  }
  const request = { url: metroImportAll.REGISTER, body: user, trackedActionData: obj4, rejectWithError: false };
  const tmp4Result4 = TrackedHTTPUtilsDefault;
  user = { fingerprint: AuthenticationStore.getFingerprint(), email, username, global_name: globalName, password, invite, consent, phone_token: phoneToken, date_of_birth: formatResult, gift_code_sku_id: giftCodeSKUId, guild_template_code: guildTemplateCode, promotional_email_opt_in: checked };
  const post = tmp4Result4.post;
  formatResult = undefined;
  if (birthday != null) {
    formatResult = birthday.format("YYYY-MM-DD");
  }
  checked = undefined;
  if (promoEmailConsent != null) {
    checked = promoEmailConsent.checked;
  }
  obj4 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_REGISTER, properties: obj5 };
  obj5 = { invite_code: invite, used_username_suggestion: prop, promotional_email_opt_in: checked1, promotional_email_pre_checked: preChecked, was_unique_username: true };
  checked1 = undefined;
  if (promoEmailConsent != null) {
    checked1 = promoEmailConsent.checked;
  }
  preChecked = undefined;
  if (promoEmailConsent != null) {
    preChecked = promoEmailConsent.preChecked;
  }
  const postResult = post(request);
  return postResult.then((body) => {
    obj = DispatcherDefault;
    const obj2 = { type: "REGISTER_SUCCESS", token: body.body.token };
    obj.dispatch(obj2);
    const obj3 = DispatcherDefault;
    const obj4 = { type: "GUARDIAN_CONNECT_REQUIRED", shouldShowGuardianConnect: true === body.body.show_guardian_connect };
    obj3.dispatch(obj4);
    const obj5 = AnalyticsUtilsDefault;
    const obj6 = { source: constants3.REGISTER, action: constants2.AGE_GATE_SUCCESS };
    obj5.track(constants.AGE_GATE_ACTION, obj6);
  }, function(arg0) {
    if (arg0 instanceof SharedCaptchaUtils.CaptchaCancelError) {
      throw arg0;
    } else {
      const self = this;
      const self2 = this;
      obj = new APIErrorDefault(arg0);
      if (null != obj.getFieldErrors("date_of_birth")) {
        const obj2 = AgeGateActionCreatorsAll;
        const result = obj2.preventUnderageRegistration(constants3.REGISTER);
      }
      const obj3 = { is_unique_username_registration: true, email_error_reason: obj.getFirstFieldErrorMessage("email"), phone_error_reason: obj.getFirstFieldErrorMessage("phone_token"), password_error_reason: obj.getFirstFieldErrorMessage("password"), username_error_reason: obj.getFirstFieldErrorMessage("username"), global_name_error_reason: obj.getFirstFieldErrorMessage("global_name"), date_of_birth_error_reason: obj.getFirstFieldErrorMessage("date_of_birth"), promotional_email_opt_in_error_reason: obj.getFirstFieldErrorMessage("promotional_email_opt_in"), fingerprint_error_reason: obj.getFirstFieldErrorMessage("fingerprint"), invite_error_reason: obj.getFirstFieldErrorMessage("invite"), gift_code_sku_id_error_reason: obj.getFirstFieldErrorMessage("gift_code_sku_id"), guild_template_code_error_reason: obj.getFirstFieldErrorMessage("guild_template_code"), consent_error_reason: obj.getFirstFieldErrorMessage("consent"), generic_error_reason: obj.getAnyErrorMessage() };
      const track = AnalyticsUtilsDefault.track;
      const REGISTER_SUBMIT_ERRORED = constants.REGISTER_SUBMIT_ERRORED;
      AnalyticsUtilsDefault;
      track(REGISTER_SUBMIT_ERRORED, obj3);
      throw obj;
    }
  });
}
({ AnalyticEvents: metroRequire, AnalyticsSections: metroImportDefault, Endpoints: metroImportAll } = Constants);
({ AgeGateAnalyticAction: c9, AgeGateSource: c10 } = AgeGateConstants);
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
  obj = { invite, giftCodeSKUId };
  const merged = Object.assign(Object.assign(invite, Object.assign({ invite: 0, giftCodeSKUId: 0 })));
  return registerFull(obj);
};
export const scorePassword = function scorePassword() {
  return obj(...arguments);
};
export const registerPhone = function registerPhone() {
  return obj(...arguments);
};
export { registerFull };