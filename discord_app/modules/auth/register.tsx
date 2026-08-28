// === Module 15479: _scorePassword ===

// Module 15479 (_scorePassword)
import encodeProperties from "encodeProperties" /* 503 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import _modDef4679 from "module_4679" /* 4679 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import initialize from "initialize" /* 15480 */;
import closure_5 from "fetchFingerprint" /* 1218 */;
import ME from "ME" /* 676 */;
import result from "result" /* 1221 */;

require = arg1;
function _scorePassword() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_2 = tmp3;
              const callback2 = tmp7;
              c4 = 1;
              let obj5 = closure_1_1(closure_1_3[7]);
              obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj1[0] = closure_1_8.SCORE_PASSWORD;
              const obj2 = { password: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              const obj3 = { event: null };
              obj3[0] = callback(closure_1_3[8]).NetworkActionNames.PASSWORD_VALIDATE;
              obj1[2] = obj3;
              c5 = 2;
              c6 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = obj5.post(obj1);
              return obj4;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            callback = table;
            const tmp17 = new callback2(table[9])(callback);
            throw tmp17;
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = body.body;
            return obj;
          }
        } catch (tmp19) {
          table = tmp19;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp19;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _registerPhone() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              let callback = tmp5;
              let phone;
              phone = phone.phone;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = 1;
              let obj6 = callback(4679);
              const obj2 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
              obj2[0] = constants.REGISTER_PHONE;
              const obj3 = { phone: null };
              obj3[0] = phone;
              obj2[1] = obj3;
              const obj4 = { event: null };
              obj4[0] = phone(503).NetworkActionNames.USER_REGISTER_PHONE;
              obj2[2] = obj4;
              c5 = 3;
              c6 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = obj6.post(obj2);
              return obj5;
            }
          } else if (2 === tmp8) {
            c4 = 0;
            callback = dependencyMap;
            if (callback instanceof phone(10852).CaptchaCancelError) {
              throw callback;
            } else {
              const tmp23 = new callback(4345)(callback);
              throw tmp23;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp27) {
          dependencyMap = tmp27;
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
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
  let obj = dispatcherDefault;
  obj.dispatch({ type: "REGISTER" });
  if (null != birthday) {
    tmp4(15481)(birthday, constants2.REGISTER);
    let tmp4Result = tmp4(698);
    obj = { source: null, action: null };
    obj[0] = constants5.REGISTER;
    obj[1] = constants4.AGE_GATE_SUBMITTED;
    tmp4Result.track(constants.AGE_GATE_ACTION, obj);
    const diffResult = tmp4(4044)().diff(birthday, "years");
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
      tmp4Result = tmp4(698);
      obj = { age_bucket: null };
      obj[0] = str;
      tmp4Result.track(tmp14.USER_AGE_SUBMITTED, obj);
    }
    const obj11 = tmp4(4044)();
    tmp14 = constants;
  }
  obj1 = { url: constants3.REGISTER, body: null, trackedActionData: null, rejectWithError: false };
  let obj2 = { fingerprint: fingerprint.getFingerprint(), email, username, global_name: globalName, password, invite, consent, phone_token: phoneToken, date_of_birth: null, gift_code_sku_id: null, guild_template_code: null, promotional_email_opt_in: null };
  let formatResult;
  if (birthday != null) {
    formatResult = birthday.format("YYYY-MM-DD");
  }
  obj2[8] = formatResult;
  obj2[9] = giftCodeSKUId;
  obj2[10] = guildTemplateCode;
  let checked;
  if (promoEmailConsent != null) {
    checked = promoEmailConsent.checked;
  }
  obj2[11] = checked;
  obj1[1] = obj2;
  let obj3 = { event: encodeProperties.NetworkActionNames.USER_REGISTER, properties: null };
  const obj4 = { invite_code: invite, used_username_suggestion: prop, promotional_email_opt_in: null, promotional_email_pre_checked: null, was_unique_username: true };
  let checked1;
  if (promoEmailConsent != null) {
    checked1 = promoEmailConsent.checked;
  }
  obj4[2] = checked1;
  let preChecked;
  if (promoEmailConsent != null) {
    preChecked = promoEmailConsent.preChecked;
  }
  obj4[3] = preChecked;
  obj3[1] = obj4;
  obj1[2] = obj3;
  const tmp4Result1 = _modDef4679;
  return _modDef4679.post(obj1).then((body) => {
    let obj = callback2(709);
    obj = { type: "REGISTER_SUCCESS", token: body.body.token };
    obj.dispatch(obj);
    obj = { type: "GUARDIAN_CONNECT_REQUIRED", shouldShowGuardianConnect: true === body.body.show_guardian_connect };
    callback2(709).dispatch(obj);
    const obj3 = callback2(709);
    callback2(698).track(constants.AGE_GATE_ACTION, { source: constants3.REGISTER, action: constants2.AGE_GATE_SUCCESS });
  }, (arg0) => {
    if (arg0 instanceof callback(10852).CaptchaCancelError) {
      throw arg0;
    } else {
      let obj = new callback2(4345)(arg0);
      if (null != obj.getFieldErrors("date_of_birth")) {
        const result = callback3(15482).preventUnderageRegistration(constants3.REGISTER);
        const obj2 = callback3(15482);
      }
      obj = { is_unique_username_registration: true, email_error_reason: null, phone_error_reason: null, password_error_reason: null, username_error_reason: null, global_name_error_reason: null, date_of_birth_error_reason: null, promotional_email_opt_in_error_reason: null, fingerprint_error_reason: null, invite_error_reason: null, gift_code_sku_id_error_reason: null, guild_template_code_error_reason: null, consent_error_reason: null, generic_error_reason: null };
      obj[1] = obj.getFirstFieldErrorMessage("email");
      obj[2] = obj.getFirstFieldErrorMessage("phone_token");
      obj[3] = obj.getFirstFieldErrorMessage("password");
      obj[4] = obj.getFirstFieldErrorMessage("username");
      obj[5] = obj.getFirstFieldErrorMessage("global_name");
      obj[6] = obj.getFirstFieldErrorMessage("date_of_birth");
      obj[7] = obj.getFirstFieldErrorMessage("promotional_email_opt_in");
      obj[8] = obj.getFirstFieldErrorMessage("fingerprint");
      obj[9] = obj.getFirstFieldErrorMessage("invite");
      obj[10] = obj.getFirstFieldErrorMessage("gift_code_sku_id");
      obj[11] = obj.getFirstFieldErrorMessage("guild_template_code");
      obj[12] = obj.getFirstFieldErrorMessage("consent");
      obj[13] = obj.getAnyErrorMessage();
      callback2(698).track(constants.REGISTER_SUBMIT_ERRORED, obj);
      throw obj;
    }
  });
}
({ AnalyticEvents: closure_6, AnalyticsSections: error, Endpoints: closure_8 } = ME);
({ AgeGateAnalyticAction: c9, AgeGateSource: c10 } = result);
result = require("set").fileFinishedImporting("modules/auth/register.tsx");

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
  const merged = Object.assign(Object.assign(invite, Object.create(null)));
  obj.invite = invite;
  obj.giftCodeSKUId = giftCodeSKUId;
  return registerFull(obj);
};
export const scorePassword = function scorePassword(arr) {
  const self = this;
  const apply = _scorePassword.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const registerPhone = function registerPhone(arg0) {
  const self = this;
  const apply = _registerPhone.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { registerFull };