// discord_app/stores/MFAStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import TokenManagerAll from "../../discord_common/js/shared/lib/TokenManager.tsx";
import size from "../../_runtime/metro/00002__.js";

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
  set: undefined,
});
Object.defineProperty(prototype, "hasSeenBackupPrompt", {
  get: function hasSeenBackupPrompt() {
    return c6;
  },
  set: undefined,
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
  CONNECTION_OPEN() {},
};
const mFAStore = new MFAStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/MFAStore.tsx");

export default mFAStore;
