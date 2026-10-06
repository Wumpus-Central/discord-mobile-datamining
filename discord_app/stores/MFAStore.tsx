// === Module 13573: MFAStore ===

// Module 13573 (MFAStore)
import _modDef12 from "module_12" /* 12 */;
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import TokenManagerAll from "TokenManager" /* 1111 */;
import size from "module_2" /* 2 */;

let c3 = false;
let codes = [];
const key = "";
let c6 = false;
let nonces = { viewNonce: "", regenerateNonce: "" };
const Store = get_initializedDefault.Store;
class MFAStore extends Store {
  getVerificationKey() {
    return key;
  }
  getBackupCodes() {
    return codes;
  }
  getNonces() {
    return nonces;
  }
}
const prototype = MFAStore.prototype;
Object.defineProperty(prototype, "togglingSMS", {
  get: function togglingSMS() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasSeenBackupPrompt", {
  get: function hasSeenBackupPrompt() {
    return c6;
  },
  set: undefined
});
MFAStore.displayName = "MFAStore";
let obj = {
  MFA_ENABLE_SUCCESS: function handleEnableSuccess(token) {
    token = token.token;
    codes = token.codes;
    if (undefined !== token) {
      const obj = TokenManagerAll;
      obj.setToken(token);
    }
  },
  MFA_DISABLE_SUCCESS: function handleDisableSuccess(token) {
    token = token.token;
    const obj = TokenManagerAll;
    obj.setToken(token);
  },
  MFA_SMS_TOGGLE: function handleSMSToggle() {
    c3 = true;
  },
  MFA_SMS_TOGGLE_COMPLETE: function handleSMSToggleComplete() {
    c3 = false;
  },
  MFA_CLEAR_BACKUP_CODES: function handleClearBackupCodes() {
    codes = [];
  },
  MFA_VIEW_BACKUP_CODES: function handleGetBackupCodes(arg0) {
    ({ codes, key } = arg0);
    const obj = _modDef12;
    codes = obj.sortBy(codes, "code");
  },
  MFA_SEND_VERIFICATION_KEY: function handleSendVerificationEmail(nonces) {
    nonces = nonces.nonces;
  },
  MFA_SEEN_BACKUP_CODE_PROMPT: function handleSeenBackupPrompt() {
    c6 = true;
  },
  CONNECTION_OPEN() {

  }
};
const mFAStore = new MFAStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/MFAStore.tsx");

export default mFAStore;