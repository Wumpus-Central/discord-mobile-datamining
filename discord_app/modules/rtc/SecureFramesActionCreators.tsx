// discord_app/modules/rtc/SecureFramesActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
    DispatcherDefault.dispatch({
      type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
      userId,
      serializedKey: serializeKeyResult,
    });
  },
  deleteSecureFramesUserVerifiedKeys(userId) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE", userId });
  },
  createSecureFramesTransientKey(userId, key) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE", userId, key });
  },
  deleteSecureFramesTransientKey(userId) {
    DispatcherDefault.dispatch({ type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE", userId });
  },
};
