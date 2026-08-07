// discord_app/modules/phone/PhoneActionCreators.tsx
import sendRequest from "sendRequest";
import fetchFingerprint from "fetchFingerprint";
import { PHONE_VERIFICATION_MODAL_KEY as closure_5 } from "PHONE_VERIFICATION_MODAL_KEY";
import { Endpoints } from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
const result = require("PHONE_VERIFICATION_MODAL_KEY").fileFinishedImporting("modules/phone/PhoneActionCreators.tsx");

export default {
  setCountryCode(countryCode) {
    let obj = dispatcher;
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
  beginAddPhone(combined, outer1_2) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.PHONE, body: obj, rejectWithError: null };
    obj = { phone: combined, change_phone_reason: outer1_2 };
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
  beginReverifyPhone(combined, outer1_2) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.PHONE_REVERIFY, body: obj, rejectWithError: null };
    obj = { phone: combined, change_phone_reason: outer1_2 };
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
      let closure_1 = tmp2;
      let body = tmp5;
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
      const obj5 = outer1_1(5126);
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
      body = yield obj5.post(obj2);
      if (dependencyMap) {
        const obj = outer1_1(709);
        const obj7 = { type: "MODAL_POP", key: null };
        obj7[1] = outer1_5;
        obj.dispatch(obj7);
      }
      return body.body;
    })();
  }
};
export const ChangePhoneReason = { USER_ACTION_REQUIRED: "user_action_required", USER_SETTINGS_UPDATE: "user_settings_update", GUILD_PHONE_REQUIRED: "guild_phone_required", MFA_PHONE_UPDATE: "mfa_phone_update", CONTACT_SYNC: "contact_sync" };