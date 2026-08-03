// === Module 9244: ChangePhoneReason ===

// Module 9244 (ChangePhoneReason)
import sendRequest from "sendRequest";
import fetchFingerprint from "fetchFingerprint";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY";
import { Endpoints } from "ME";

const require = arg1;
const result = require("PHONE_VERIFICATION_MODAL_KEY").fileFinishedImporting("modules/phone/PhoneActionCreators.tsx");

export default {
  setCountryCode(countryCode) {
    let obj = importDefault(709);
    obj = { type: "PHONE_SET_COUNTRY_CODE", countryCode };
    obj.dispatch(obj);
  },
  removePhone(password, reason) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { password, change_phone_reason: reason };
    obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.del(obj);
  },
  resendCode(phone) {
    fingerprint = fingerprint.getFingerprint();
    let tmp2 = null != fingerprint;
    if (tmp2) {
      tmp2 = "" !== fingerprint;
    }
    let obj = {};
    if (tmp2) {
      obj["X-Fingerprint"] = fingerprint;
    }
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.RESEND_PHONE, headers: obj, body: obj, rejectWithError: null };
    obj = { phone };
    obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  beginAddPhone(combined, outer1_2) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, rejectWithError: null };
    obj = { phone: combined, change_phone_reason: outer1_2 };
    obj[2] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  addPhone(closure_0, closure_02, reason) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { phone_token: closure_0, password: closure_02, change_phone_reason: reason };
    obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  addPhoneWithoutPassword(closure_0) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.PHONE_VERIFY_NO_PASSWORD, body: obj, rejectWithError: null };
    obj = { code: closure_0 };
    obj[2] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  beginReverifyPhone(combined, outer1_2) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.PHONE_REVERIFY, body: obj, rejectWithError: null };
    obj = { phone: combined, change_phone_reason: outer1_2 };
    obj[2] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  reverifyPhone(closure_0, password, USER_ACTION_REQUIRED) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.PHONE_REVERIFY, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { phone_token: closure_0, password, change_phone_reason: USER_ACTION_REQUIRED };
    obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  validatePhoneForSupport(token) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.VERIFY_PHONE_FOR_TICKET, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { token };
    obj[3] = require(530) /* sendRequest */.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  verifyPhone(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let flag2 = arg3;
    if (arg3 === undefined) {
      flag2 = false;
    }
    return flag2(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              let body = tmp5;
              body = undefined;
              const fingerprint = outer1_4.getFingerprint();
              let tmp15 = null != fingerprint;
              if (tmp15) {
                tmp15 = "" !== fingerprint;
              }
              const obj1 = {};
              if (tmp15) {
                obj1["X-Fingerprint"] = fingerprint;
              }
              if (c3) {
                obj1.authorization = "";
              }
              let obj5 = outer1_1(5003);
              const obj2 = { url: null, headers: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
              obj2[0] = outer1_6.VERIFY_PHONE;
              obj2[1] = obj1;
              const obj3 = { phone: null, code: null };
              obj3[0] = outer1_0;
              obj3[1] = outer1_1;
              obj2[2] = obj3;
              const obj4 = { event: null };
              obj4[0] = outer1_0(503).NetworkActionNames.USER_VERIFY_PHONE;
              obj2[4] = obj4;
              obj2[5] = outer1_0(530).rejectWithMigratedError();
              dependencyMap = 1;
              c3 = 1;
              obj5 = { value: null, done: false };
              obj5[0] = obj5.post(obj2);
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            body = arg1;
            if (dependencyMap) {
              obj = outer1_1(709);
              const obj7 = { type: "MODAL_POP", key: null };
              obj7[1] = outer1_5;
              obj.dispatch(obj7);
            }
            c3 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = body.body;
            return obj8;
          }
        } catch (tmp25) {
          c3 = tmp;
          throw tmp25;
        }
      }
    })();
  }
};
export const ChangePhoneReason = { USER_ACTION_REQUIRED: "user_action_required", USER_SETTINGS_UPDATE: "user_settings_update", GUILD_PHONE_REQUIRED: "guild_phone_required", MFA_PHONE_UPDATE: "mfa_phone_update", CONTACT_SYNC: "contact_sync" };