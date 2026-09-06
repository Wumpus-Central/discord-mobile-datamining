// === Module 14680: MFAActionCreators ===

// Module 14680 (MFAActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import MFAStore from "MFAStore" /* 13746 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("actions/MFAActionCreators.tsx");

export default {
  enable(arg0) {
    ({ code, secret } = arg0);
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.MFA_TOTP_ENABLE, body: { code, secret }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(request).then((body) => {
      const obj = { type: "MFA_ENABLE_SUCCESS", token: body.body.token, codes: body.body.backup_codes };
      return obj.dispatch(obj);
    });
  },
  disable() {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: Endpoints.MFA_TOTP_DISABLE, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    HTTP.post(obj).then((token) => DispatcherDefault.dispatch({ type: "MFA_DISABLE_SUCCESS", token: token.body.token }));
  },
  enableSMS() {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = HTTPUtils.HTTP;
    obj = { url: Endpoints.MFA_SMS_ENABLE, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    return HTTP.post(obj).then((result) => {
      DispatcherDefault.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return result;
    }, (arg0) => {
      DispatcherDefault.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  disableSMS(password) {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.MFA_SMS_DISABLE, body: null, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    obj = { password };
    request.body = obj;
    return HTTP.post(request).then((result) => {
      DispatcherDefault.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return result;
    }, (arg0) => {
      DispatcherDefault.dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  sendMFABackupCodesVerificationKeyEmail(password) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.MFA_SEND_VERIFICATION_KEY, body: { password }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    let obj = { password };
    return HTTP.post(request).then((viewNonce) => {
      const obj = { type: "MFA_SEND_VERIFICATION_KEY", nonces: { viewNonce: viewNonce.body.nonce, regenerateNonce: viewNonce.body.regenerate_nonce } };
      return obj.dispatch(obj);
    }, (arg0) => {
      throw arg0;
    });
  },
  confirmViewBackupCodes(verificationKey, regenerate) {
    _require = verificationKey;
    const nonces = MFAStore.getNonces();
    let regenerateNonce = nonces.viewNonce;
    if (regenerate) {
      regenerateNonce = nonces.regenerateNonce;
    }
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: Endpoints.MFA_CODES_VERIFICATION, body: { key: verificationKey, nonce: regenerateNonce, regenerate }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    return HTTP.post(request).then((body) => {
      const obj = { type: "MFA_VIEW_BACKUP_CODES", codes: body.body.backup_codes, key };
      return obj.dispatch(obj);
    }, (arg0) => {
      throw arg0;
    });
  },
  clearBackupCodes() {
    DispatcherDefault.dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
  }
};