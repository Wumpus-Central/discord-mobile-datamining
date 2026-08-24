// discord_app/actions/MFAActionCreators.tsx
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import closure_3 from "../stores/MFAStore.tsx";
import { Endpoints } from "../Constants.tsx";
import { sendRequest } from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("actions/MFAActionCreators.tsx");

export default {
  enable(arg0) {
    ({ code, secret } = arg0);
    const HTTP = sendRequest.HTTP;
    let obj = { url: Endpoints.MFA_TOTP_ENABLE, body: { code, secret }, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    const obj2 = sendRequest;
    return HTTP.post(obj).then((body) => {
      let obj = callback(table[3]);
      obj = { type: "MFA_ENABLE_SUCCESS", token: body.body.token, codes: body.body.backup_codes };
      return obj.dispatch(obj);
    });
  },
  disable() {
    const HTTP = sendRequest.HTTP;
    const obj = { url: Endpoints.MFA_TOTP_DISABLE, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    const obj2 = sendRequest;
    HTTP.post(obj).then((token) => callback(table[3]).dispatch({ type: "MFA_DISABLE_SUCCESS", token: token.body.token }));
  },
  enableSMS() {
    let obj = dispatcherDefault;
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.MFA_SMS_ENABLE, oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    const obj3 = sendRequest;
    return HTTP.post(obj).then((arg0) => {
      callback(709).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return arg0;
    }, (arg0) => {
      callback(709).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  disableSMS(password) {
    let obj = dispatcherDefault;
    obj.dispatch({ type: "MFA_SMS_TOGGLE" });
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.MFA_SMS_DISABLE, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { password };
    obj[3] = sendRequest.rejectWithMigratedError();
    const obj4 = sendRequest;
    return HTTP.post(obj).then((arg0) => {
      callback(709).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      return arg0;
    }, (arg0) => {
      callback(709).dispatch({ type: "MFA_SMS_TOGGLE_COMPLETE" });
      throw arg0;
    });
  },
  sendMFABackupCodesVerificationKeyEmail(password) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.MFA_SEND_VERIFICATION_KEY, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { password };
    obj[3] = sendRequest.rejectWithMigratedError();
    const obj3 = sendRequest;
    return HTTP.post(obj).then((body) => {
      let nonces = callback(table[3]);
      nonces = { viewNonce: body.body.nonce, regenerateNonce: body.body.regenerate_nonce };
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
    const HTTP = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: Endpoints.MFA_CODES_VERIFICATION, body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { key: verificationKey, nonce: regenerateNonce, regenerate };
    obj[3] = require("../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj3 = sendRequest;
    return HTTP.post(obj).then((body) => {
      let obj = closure_1_1(closure_1_2[3]);
      obj = { type: "MFA_VIEW_BACKUP_CODES", codes: body.body.backup_codes, key: closure_0 };
      return obj.dispatch(obj);
    }, (arg0) => {
      throw arg0;
    });
  },
  clearBackupCodes() {
    dispatcherDefault.dispatch({ type: "MFA_CLEAR_BACKUP_CODES" });
  }
};