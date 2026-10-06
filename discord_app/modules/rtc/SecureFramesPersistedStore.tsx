// === Module 9379: SecureFramesPersistedStore ===

// Module 9379 (SecureFramesPersistedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let items = [];
let flag = false;
let uploadedKeyVersions = items;
const PersistedStore = get_initializedDefault.PersistedStore;
class SecureFramesPersistedStore extends PersistedStore {
  initialize(persistentCodesEnabled) {
    flag = undefined;
    if (persistentCodesEnabled != null) {
      flag = persistentCodesEnabled.persistentCodesEnabled;
    }
    if (flag == null) {
      flag = false;
    }
    uploadedKeyVersions = undefined;
    if (persistentCodesEnabled != null) {
      uploadedKeyVersions = persistentCodesEnabled.uploadedKeyVersions;
    }
    if (uploadedKeyVersions == null) {
      uploadedKeyVersions = items;
    }
  }
  getState() {
    return { persistentCodesEnabled: flag, uploadedKeyVersions };
  }
  getPersistentCodesEnabled() {
    return flag;
  }
  getUploadedKeyVersionsCached() {
    return uploadedKeyVersions;
  }
}
const prototype = SecureFramesPersistedStore.prototype;
SecureFramesPersistedStore.displayName = "SecureFramesPersistedStore";
SecureFramesPersistedStore.persistKey = "SecureFramesPersistedStore";
const obj = {
  SECURE_FRAMES_SETTINGS_UPDATE: function handleSecureFramesSettingsUpdate(persistentCodesEnabled) {

  },
  SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: function handleSecureFramesUploadedKeyVersionAdd(keyVersion) {
    items = [];
    for (const item10008 of uploadedKeyVersions) {
      if (item10008 === keyVersion.keyVersion) {
        obj.return();
      } else {
        let arr = items.push(tmp);
        continue;
      }
    }
    items.push(keyVersion.keyVersion);
    uploadedKeyVersions = items;
  },
  SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: function handleSecureFramesUploadedKeyVersionsClear() {
    uploadedKeyVersions = items;
  }
};
const secureFramesPersistedStore = new SecureFramesPersistedStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesPersistedStore.tsx");

export default secureFramesPersistedStore;