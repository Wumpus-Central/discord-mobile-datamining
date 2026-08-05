import { apply } from "../../_runtime/00012_apply.js";
// discord_app/stores/MFAStore.tsx
import { Store } from "initialize";

let c3 = false;
let closure_4 = [];
let c5 = "";
let c6 = false;
let closure_7 = { viewNonce: "", regenerateNonce: "" };
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
const mFAStore = new MFAStore(require("dispatcher"), {
  MFA_ENABLE_SUCCESS: function handleEnableSuccess(token) {
    token = token.token;
    if (undefined !== token) {
      importAll(707).setToken(token);
      const obj = importAll(707);
    }
    const codes = token.codes;
  },
  MFA_DISABLE_SUCCESS: function handleDisableSuccess(token) {
    importAll(707).setToken(token.token);
  },
  MFA_SMS_TOGGLE: function handleSMSToggle() {
    let c3 = true;
  },
  MFA_SMS_TOGGLE_COMPLETE: function handleSMSToggleComplete() {
    let c3 = false;
  },
  MFA_CLEAR_BACKUP_CODES: function handleClearBackupCodes() {
    let closure_4 = [];
  },
  MFA_VIEW_BACKUP_CODES: function handleGetBackupCodes(arg0) {
    let codes;
    let key;
    ({ codes, key } = arg0);
    let closure_4 = apply.sortBy(codes, "code");
  },
  MFA_SEND_VERIFICATION_KEY: function handleSendVerificationEmail(nonces) {
    nonces = nonces.nonces;
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function handleSeenBackupPrompt() {
    let c6 = true;
  },
  CONNECTION_OPEN() {

  }
});
const result = require("initialize").fileFinishedImporting("stores/MFAStore.tsx");

export default mFAStore;