// === Module 9381: SecureFramesActionCreators ===

// Module 9381 (SecureFramesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let obj = {
  clearUploadedKeyVersions() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
  },
  addUploadedKeyVersion(keyVersion) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion };
    obj.dispatch(obj2);
  },
  createSecureFramesVerifiedKey(userId, key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId, key };
    obj.dispatch(obj2);
  },
  deleteSecureFramesVerifiedKey(userId, serializeKeyResult) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId, serializedKey: serializeKeyResult };
    obj.dispatch(obj2);
  },
  deleteSecureFramesUserVerifiedKeys(userId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId };
    obj.dispatch(obj2);
  },
  createSecureFramesTransientKey(userId, key) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key };
    obj.dispatch(obj2);
  },
  deleteSecureFramesTransientKey(userId) {
    const obj = DispatcherDefault;
    const obj2 = { type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/rtc/SecureFramesActionCreators.tsx");

export default obj;