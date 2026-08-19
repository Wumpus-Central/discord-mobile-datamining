// === Module 14101: ? ===

// Module 14101
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import getVerificationKey from "getVerificationKey" /* 13295 */;
import { Endpoints } from "ME" /* 676 */;

require = fn;
const result = require("obj132").fileFinishedImporting("actions/MFAActionCreators.tsx");

export default {
  enable(arg0) {
    ({ code, secret } = arg0);
    const HTTP = sendRequest.HTTP;
    let obj = { url: Endpoints.MFA_TOTP_ENABLE, body: { code, secret }, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.post(obj).then((result) => {
      callback(table[3]);
      const obj = { type: "MFA_ENABLE_SUCCESS", token: result.body.token, codes: result.body.backup_codes };
      return obj.dispatch(obj);
    });
  },
  disable() {
    const HTTP = sendRequest.HTTP;
    const obj = { url: Endpoints.MFA_TOTP_DISABLE, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    HTTP.post(obj).then((result) => callback(table[3]).dispatch({ type: "MFA_DISABLE_SUCCESS", token: result.body.token }));
  },
  enableSMS() {
    let obj = dispatcherDefault;
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.MFA_SMS_ENABLE, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    return HTTP.post(obj).then((result) => {
      callback(709).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return result;
    }, (arg0) => {
      callback(709).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  disableSMS(password) {
    let obj = dispatcherDefault;
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = sendRequest.HTTP;
    obj = { password };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj).then((result) => {
      callback(709).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return result;
    }, (arg0) => {
      callback(709).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  sendMFABackupCodesVerificationKeyEmail(password) {
    const HTTP = sendRequest.HTTP;
    const obj = { password };
    obj[3] = sendRequest.rejectWithMigratedError();
    return HTTP.post(obj).then((result) => {
      callback(table[3]);
      const nonces = { viewNonce: result.body.nonce, regenerateNonce: result.body.regenerate_nonce };
      return nonces.dispatch({ type: "MFA_SEND_VERIFICATION_KEY", nonces });
    }, (arg0) => {
      throw arg0;
    });
  },
  confirmViewBackupCodes(verificationKey, regenerate) {
    const _require = verificationKey;
    nonces = nonces.getNonces();
    let regenerateNonce = nonces.viewNonce;
    if (regenerate) {
      regenerateNonce = nonces.regenerateNonce;
    }
    const HTTP = _require(530).HTTP;
    let obj = { key: verificationKey, nonce: regenerateNonce, regenerate };
    obj[3] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    return HTTP.post(obj).then((result) => {
      const obj = { type: "MFA_VIEW_BACKUP_CODES", codes: result.body.backup_codes, key: closure_0 };
      return obj.dispatch(obj);
    }, (arg0) => {
      throw arg0;
    });
  },
  clearBackupCodes() {
    dispatcherDefault.dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
  }
};