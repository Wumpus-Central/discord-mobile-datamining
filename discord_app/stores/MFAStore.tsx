// === Module 13367: getVerificationKey ===

// Module 13367 (getVerificationKey)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import setSecondaryTokenAll from "setSecondaryToken" /* 707 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c3 = false;
let closure_4 = [];
let c5 = "";
let c6 = false;
let closure_7 = { viewNonce: "", regenerateNonce: "" };
const Store = initializeDefault.Store;
class MFAStore extends Store {
}
const prototype = MFAStore.prototype;
prototype["getVerificationKey"] = function getVerificationKey() {
  return c5;
};
prototype["getBackupCodes"] = function getBackupCodes() {
  return closure_4;
};
Object.defineProperty(prototype, "togglingSMS", {
  get: function togglingSMS() {
    return c3;
  },
  set: undefined
});
prototype["getNonces"] = function getNonces() {
  return closure_7;
};
Object.defineProperty(prototype, "hasSeenBackupPrompt", {
  get: function hasSeenBackupPrompt() {
    return c6;
  },
  set: undefined
});
MFAStore.displayName = "MFAStore";
const mFAStore = new MFAStore(dispatcherDefault, {
  MFA_ENABLE_SUCCESS: function handleEnableSuccess(token) {
    token = token.token;
    if (undefined !== token) {
      setSecondaryTokenAll.setToken(token);
      const obj = setSecondaryTokenAll;
    }
    const codes = token.codes;
  },
  MFA_DISABLE_SUCCESS: function handleDisableSuccess(token) {
    setSecondaryTokenAll.setToken(token.token);
  },
  MFA_SMS_TOGGLE: function handleSMSToggle() {
    c3 = true;
  },
  MFA_SMS_TOGGLE_COMPLETE: function handleSMSToggleComplete() {
    c3 = false;
  },
  MFA_CLEAR_BACKUP_CODES: function handleClearBackupCodes() {
    closure_4 = [];
  },
  MFA_VIEW_BACKUP_CODES: function handleGetBackupCodes(arg0) {
    ({ codes, key } = arg0);
    closure_4 = applyDefault.sortBy(codes, "code");
  },
  MFA_SEND_VERIFICATION_KEY: function handleSendVerificationEmail(nonces) {
    nonces = nonces.nonces;
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function handleSeenBackupPrompt() {
    c6 = true;
  },
  CONNECTION_OPEN() {

  }
});
const result = require("set").fileFinishedImporting("stores/MFAStore.tsx");

export default mFAStore;