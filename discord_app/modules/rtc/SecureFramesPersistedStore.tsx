// discord_app/modules/rtc/SecureFramesPersistedStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

let items = [];
let persistentCodesEnabled = false;
let uploadedKeyVersions = items;
const PersistedStore = initializeDefault.PersistedStore;
class SecureFramesPersistedStore extends PersistedStore {}
const prototype = SecureFramesPersistedStore.prototype;
prototype["initialize"] = function initialize(persistentCodesEnabled) {
  let flag;
  if (persistentCodesEnabled != null) {
    flag = persistentCodesEnabled.persistentCodesEnabled;
  }
  if (flag == null) {
    flag = false;
  }
  persistentCodesEnabled = flag;
  uploadedKeyVersions = undefined;
  if (persistentCodesEnabled != null) {
    uploadedKeyVersions = persistentCodesEnabled.uploadedKeyVersions;
  }
  if (uploadedKeyVersions == null) {
    uploadedKeyVersions = items;
  }
  closure_2 = uploadedKeyVersions;
};
prototype["getState"] = function getState() {
  return { persistentCodesEnabled, uploadedKeyVersions };
};
prototype["getPersistentCodesEnabled"] = function getPersistentCodesEnabled() {
  return persistentCodesEnabled;
};
prototype["getUploadedKeyVersionsCached"] = function getUploadedKeyVersionsCached() {
  return closure_2;
};
SecureFramesPersistedStore.displayName = "SecureFramesPersistedStore";
SecureFramesPersistedStore.persistKey = "SecureFramesPersistedStore";
const secureFramesPersistedStore = new SecureFramesPersistedStore(DispatcherDefault, {
  SECURE_FRAMES_SETTINGS_UPDATE: function handleSecureFramesSettingsUpdate(persistentCodesEnabled) {
    persistentCodesEnabled = persistentCodesEnabled.persistentCodesEnabled;
  },
  SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: function handleSecureFramesUploadedKeyVersionAdd(keyVersion) {
    items = [];
    for (const item10008 of closure_2) {
      if (item10008 === arg0.keyVersion) {
        obj.return();
      } else {
        let arr = items.push(tmp);
        continue;
      }
    }
    items.push(keyVersion.keyVersion);
    closure_2 = items;
  },
  SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: function handleSecureFramesUploadedKeyVersionsClear() {
    closure_2 = items;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/SecureFramesPersistedStore.tsx");

export default secureFramesPersistedStore;
