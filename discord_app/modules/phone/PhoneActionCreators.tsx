// === Module 6549: PhoneActionCreators ===

// Module 6549 (PhoneActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import PhoneConstants from "PhoneConstants" /* 6547 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let closure_5 = PhoneConstants.PHONE_VERIFICATION_MODAL_KEY;
const Endpoints = Constants.Endpoints;
let obj = {
  setCountryCode(countryCode) {
    const obj = DispatcherDefault;
    const obj2 = { type: "PHONE_SET_COUNTRY_CODE", countryCode };
    obj.dispatch(obj2);
  },
  removePhone(password, reason) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE, body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const del = HTTP.del;
    obj = { password, change_phone_reason: reason };
    obj3 = HTTPUtils;
    return del(request);
  },
  resendCode(phone) {
    let obj3;
    const fingerprint = AuthenticationStore.getFingerprint();
    const obj = {};
    const tmp2 = null != fingerprint && "" !== fingerprint;
    if (tmp2) {
      obj["X-Fingerprint"] = fingerprint;
    }
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.RESEND_PHONE, headers: obj, body: { phone }, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj3 = HTTPUtils;
    return post(request);
  },
  beginAddPhone(combined, change_phone_reason) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE, body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { phone: combined, change_phone_reason };
    obj3 = HTTPUtils;
    return post(request);
  },
  addPhone(phoneToken, password, CONTACT_SYNC) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE, body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { phone_token: phoneToken, password, change_phone_reason: CONTACT_SYNC };
    obj3 = HTTPUtils;
    return post(request);
  },
  addPhoneWithoutPassword(code) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE_VERIFY_NO_PASSWORD, body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { code };
    obj3 = HTTPUtils;
    return post(request);
  },
  beginReverifyPhone(combined, change_phone_reason) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE_REVERIFY, body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { phone: combined, change_phone_reason };
    obj3 = HTTPUtils;
    return post(request);
  },
  reverifyPhone(phone_token, password, USER_ACTION_REQUIRED) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.PHONE_REVERIFY, body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { phone_token, password, change_phone_reason: USER_ACTION_REQUIRED };
    obj3 = HTTPUtils;
    return post(request);
  },
  validatePhoneForSupport(token) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.VERIFY_PHONE_FOR_TICKET, body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { token };
    obj3 = HTTPUtils;
    return post(request);
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
      let c3;
      let fingerprint;
      let obj5;
      let obj6;
      let obj9;
      const code = tmp;
      let phone = tmp4;
      fingerprint = fingerprint.getFingerprint();
      const tmp14 = null != fingerprint && "" !== fingerprint;
      const obj4 = {};
      if (tmp14) {
        obj4["X-Fingerprint"] = fingerprint;
      }
      if (flag2) {
        obj4.authorization = "";
      }
      const request = { url: constants.VERIFY_PHONE, headers: obj4, body: obj5, oldFormErrors: true, trackedActionData: obj6, rejectWithError: obj9.rejectWithMigratedError() };
      obj5 = { phone, code };
      obj6 = { event: phone(c2[7]).NetworkActionNames.USER_VERIFY_PHONE };
      const post = code(c2[6]).post;
      const tmp18 = code(c2[6]);
      obj9 = phone(c2[5]);
      yield post(request);
      phone = value;
      if (closure_129_2) {
        const obj10 = { type: "MODAL_POP", key };
        const obj = code(c2[4]);
        obj.dispatch(obj10);
      }
      return phone.body;
    })();
  }
};
const result = size.fileFinishedImporting("modules/phone/PhoneActionCreators.tsx");

export default obj;
export const ChangePhoneReason = { USER_ACTION_REQUIRED: "user_action_required", USER_SETTINGS_UPDATE: "user_settings_update", GUILD_PHONE_REQUIRED: "guild_phone_required", MFA_PHONE_UPDATE: "mfa_phone_update", CONTACT_SYNC: "contact_sync" };