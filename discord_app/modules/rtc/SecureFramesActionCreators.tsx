// === Module 8830: SecureFramesActionCreators ===

// Module 8830 (SecureFramesActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rtc/SecureFramesActionCreators.tsx");

export default {
  clearUploadedKeyVersions() {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR" });
  },
  addUploadedKeyVersion(keyVersion) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD", keyVersion });
  },
  createSecureFramesVerifiedKey(userId, key) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_CREATE", userId, key });
  },
  deleteSecureFramesVerifiedKey(userId, serializeKeyResult) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_VERIFIED_KEY_DELETE", userId, serializedKey: serializeKeyResult });
  },
  deleteSecureFramesUserVerifiedKeys(userId) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId });
  },
  createSecureFramesTransientKey(userId, key) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key });
  },
  deleteSecureFramesTransientKey(userId) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId });
  }
};