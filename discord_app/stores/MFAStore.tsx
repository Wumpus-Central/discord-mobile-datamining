// discord_app/stores/MFAStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import TokenManagerAll from "../../discord_common/js/shared/lib/TokenManager.tsx";

let c3 = false;
let closure_4 = [];
let c6 = false;
let nonces = { viewNonce: "", regenerateNonce: "" };
const Store = initializeDefault.Store;
class MFAStore extends Store {}
const prototype = MFAStore.prototype;
prototype["getVerificationKey"] = function getVerificationKey() {
  return key;
};
prototype["getBackupCodes"] = function getBackupCodes() {
  return closure_4;
};
Object.defineProperty(prototype, "togglingSMS", {
  get: function togglingSMS() {
    return c3;
  },
  set: undefined,
});
prototype["getNonces"] = function getNonces() {
  return nonces;
};
Object.defineProperty(prototype, "hasSeenBackupPrompt", {
  get: function hasSeenBackupPrompt() {
    return c6;
  },
  set: undefined,
});
MFAStore.displayName = "MFAStore";
const mFAStore = new MFAStore(DispatcherDefault, {
  MFA_ENABLE_SUCCESS: function handleEnableSuccess(token) {
    token = token.token;
    if (undefined !== token) {
      TokenManagerAll.setToken(token);
    }
    const codes = token.codes;
  },
  MFA_DISABLE_SUCCESS: function handleDisableSuccess(token) {
    TokenManagerAll.setToken(token.token);
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
    closure_4 = _modDef12.sortBy(codes, "code");
  },
  MFA_SEND_VERIFICATION_KEY: function handleSendVerificationEmail(nonces) {
    nonces = nonces.nonces;
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function handleSeenBackupPrompt() {
    c6 = true;
  },
  CONNECTION_OPEN() {},
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/MFAStore.tsx");

export default mFAStore;
