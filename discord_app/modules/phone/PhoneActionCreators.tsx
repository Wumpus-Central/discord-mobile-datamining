// === Module 7045: PhoneActionCreators ===

// Module 7045 (PhoneActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_5 = fn(7043).PHONE_VERIFICATION_MODAL_KEY;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/phone/PhoneActionCreators.tsx");

export default {
  setCountryCode(countryCode) {
    const obj = { type: "PHONE_SET_COUNTRY_CODE", countryCode };
    obj.dispatch(obj);
  },
  removePhone(password, reason) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE, body: { password, change_phone_reason: reason }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.del(request);
  },
  resendCode(phone) {
    const fingerprint = AuthenticationStore.getFingerprint();
    let tmp2 = null != fingerprint;
    if (tmp2) {
      tmp2 = "" !== fingerprint;
    }
    const obj = {};
    if (tmp2) {
      obj["X-Fingerprint"] = fingerprint;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.RESEND_PHONE, headers: obj, body: { phone }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  beginAddPhone(combined, change_phone_reason) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE, body: { phone: combined, change_phone_reason }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  addPhone(phoneToken, password, reason) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE, body: { phone_token: phoneToken, password, change_phone_reason: reason }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  addPhoneWithoutPassword(code) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE_VERIFY_NO_PASSWORD, body: { code }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  beginReverifyPhone(combined, change_phone_reason) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE_REVERIFY, body: { phone: combined, change_phone_reason }, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  reverifyPhone(phone_token, password, USER_ACTION_REQUIRED) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE_REVERIFY, body: { phone_token, password, change_phone_reason: USER_ACTION_REQUIRED }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
  },
  validatePhoneForSupport(token) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.VERIFY_PHONE_FOR_TICKET, body: { token }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request);
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
      const code = tmp2;
      const phone = tmp5;
      fingerprint = fingerprint.getFingerprint();
      let tmp15 = null != fingerprint;
      if (tmp15) {
        tmp15 = "" !== fingerprint;
      }
      const obj1 = {};
      if (tmp15) {
        obj1["X-Fingerprint"] = fingerprint;
      }
      if (flag2) {
        obj1.authorization = "";
      }
      const request = { url: constants.VERIFY_PHONE, headers: obj1, body: { phone, code }, oldFormErrors: true, trackedActionData: { event: phone(1250).NetworkActionNames.USER_VERIFY_PHONE }, rejectWithError: phone(1272).rejectWithMigratedError() };
      yield code(4753).post(request);
      closure_128_0 = value;
      if (closure_129_2) {
        code(573).dispatch({ type: "MODAL_POP", key });
        code(573);
      }
      return closure_128_0.body;
    })();
  }
};
export const ChangePhoneReason = { USER_ACTION_REQUIRED: "user_action_required", USER_SETTINGS_UPDATE: "user_settings_update", GUILD_PHONE_REQUIRED: "guild_phone_required", MFA_PHONE_UPDATE: "mfa_phone_update", CONTACT_SYNC: "contact_sync" };