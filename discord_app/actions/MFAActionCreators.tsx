// === Module 14591: MFAActionCreators ===

// Module 14591 (MFAActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import MFAStore from "MFAStore" /* 13573 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Endpoints = Constants.Endpoints;
let obj = {
  enable(arg0) {
    let code;
    let obj2;
    let secret;
    ({ code, secret } = arg0);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.MFA_TOTP_ENABLE, body: { code, secret }, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const post = HTTP.post;
    obj2 = HTTPUtils;
    const postResult = post(request);
    return postResult.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "MFA_ENABLE_SUCCESS", token: body.body.token, codes: body.body.backup_codes };
      return obj.dispatch(obj2);
    });
  },
  disable() {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    let obj = { url: Endpoints.MFA_TOTP_DISABLE, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const post = HTTP.post;
    obj2 = HTTPUtils;
    const postResult = post(obj);
    postResult.then((body) => {
      const token = body.body.token;
      const obj = DispatcherDefault;
      return obj.dispatch({ type: "MFA_DISABLE_SUCCESS", token });
    });
  },
  enableSMS() {
    let obj3;
    let obj = DispatcherDefault;
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = HTTPUtils.HTTP;
    const post = HTTP.post;
    const obj2 = { url: Endpoints.MFA_SMS_ENABLE, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    obj3 = HTTPUtils;
    const postResult = post(obj2);
    return postResult.then((result) => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return result;
    }, (arg0) => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  disableSMS(password) {
    let obj2;
    let obj4;
    let obj = DispatcherDefault;
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.MFA_SMS_DISABLE, body: obj2, oldFormErrors: true, rejectWithError: obj4.rejectWithMigratedError() };
    const post = HTTP.post;
    obj2 = { password };
    obj4 = HTTPUtils;
    const postResult = post(request);
    return postResult.then((result) => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return result;
    }, (arg0) => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  sendMFABackupCodesVerificationKeyEmail(password) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.MFA_SEND_VERIFICATION_KEY, body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    obj = { password };
    const post = HTTP.post;
    obj3 = HTTPUtils;
    const postResult = post(request);
    return postResult.then((viewNonce) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "MFA_SEND_VERIFICATION_KEY", nonces: { viewNonce: viewNonce.body.nonce, regenerateNonce: viewNonce.body.regenerate_nonce } };
      return obj.dispatch(obj2);
    }, (arg0) => {
      throw arg0;
    });
  },
  confirmViewBackupCodes(verificationKey, regenerate) {
    let key;
    let obj2;
    _require = verificationKey;
    const nonces = MFAStore.getNonces();
    let regenerateNonce = nonces.viewNonce;
    if (regenerate) {
      regenerateNonce = nonces.regenerateNonce;
    }
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: Endpoints.MFA_CODES_VERIFICATION, body: { key: verificationKey, nonce: regenerateNonce, regenerate }, oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const post = HTTP.post;
    obj2 = require("HTTPUtils");
    const postResult = post(request);
    return postResult.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "MFA_VIEW_BACKUP_CODES", codes: body.body.backup_codes, key };
      return obj.dispatch(obj2);
    }, (arg0) => {
      throw arg0;
    });
  },
  clearBackupCodes() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
  }
};
const result = size.fileFinishedImporting("actions/MFAActionCreators.tsx");

export default obj;