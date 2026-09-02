// === Module 7780: ChangePhoneReason ===

// Module 7780 (ChangePhoneReason)
import sendRequest from "sendRequest" /* 527 */;
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY" /* 7778 */;
import { Endpoints } from "ME" /* 673 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/phone/PhoneActionCreators.tsx");

export default {
  setCountryCode(countryCode) {
    let obj = dispatcherDefault;
    obj = { type: "PHONE_SET_COUNTRY_CODE", countryCode };
    obj.dispatch(obj);
  },
  removePhone(password, reason) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { password, change_phone_reason: reason };
    obj[3] = sendRequest.rejectWithMigratedError();
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
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.RESEND_PHONE, headers: obj, body: obj, rejectWithError: null };
    obj = { phone };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  beginAddPhone(combined, closure_1_2) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, rejectWithError: null };
    obj = { phone: combined, change_phone_reason: closure_1_2 };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  addPhone(closure_0, closure_02, reason) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { phone_token: closure_0, password: closure_02, change_phone_reason: reason };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  addPhoneWithoutPassword(closure_0) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.PHONE_VERIFY_NO_PASSWORD, body: obj, rejectWithError: null };
    obj = { code: closure_0 };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  beginReverifyPhone(combined, closure_1_2) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.PHONE_REVERIFY, body: obj, rejectWithError: null };
    obj = { phone: combined, change_phone_reason: closure_1_2 };
    obj[2] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  reverifyPhone(closure_0, password, USER_ACTION_REQUIRED) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.PHONE_REVERIFY, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { phone_token: closure_0, password, change_phone_reason: USER_ACTION_REQUIRED };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  validatePhoneForSupport(token) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.VERIFY_PHONE_FOR_TICKET, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { token };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj);
  },
  verifyPhone(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let flag2 = arg3;
    if (arg3 === undefined) {
      flag2 = false;
    }
    return flag2(function*() {
      closure_1 = tmp2;
      let body = tmp5;
      const fingerprint = closure_1_4.getFingerprint();
      let tmp15 = null != fingerprint;
      if (tmp15) {
        tmp15 = "" !== fingerprint;
      }
      obj1 = {};
      if (tmp15) {
        obj1["X-Fingerprint"] = fingerprint;
      }
      if (c3) {
        obj1.authorization = "";
      }
      const obj5 = closure_1_1(4713);
      const obj2 = { url: null, headers: null, body: null, oldFormErrors: true, trackedActionData: null, rejectWithError: null };
      obj2[0] = closure_1_6.VERIFY_PHONE;
      obj2[1] = obj1;
      const obj3 = { phone: null, code: null };
      obj3[0] = closure_1_0;
      obj3[1] = closure_1_1;
      obj2[2] = obj3;
      const obj4 = { event: null };
      obj4[0] = closure_1_0(500).NetworkActionNames.USER_VERIFY_PHONE;
      obj2[4] = obj4;
      obj2[5] = closure_1_0(527).rejectWithMigratedError();
      body = yield obj5.post(obj2);
      if (dependencyMap) {
        const obj = closure_1_1(706);
        const obj7 = { type: "MODAL_POP", key: null };
        obj7[1] = closure_1_5;
        obj.dispatch(obj7);
      }
      return body.body;
    })();
  }
};
export const ChangePhoneReason = { USER_ACTION_REQUIRED: "user_action_required", USER_SETTINGS_UPDATE: "user_settings_update", GUILD_PHONE_REQUIRED: "guild_phone_required", MFA_PHONE_UPDATE: "mfa_phone_update", CONTACT_SYNC: "contact_sync" };