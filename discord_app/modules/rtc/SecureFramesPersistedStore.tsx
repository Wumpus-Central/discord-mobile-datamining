// discord_app/modules/rtc/SecureFramesPersistedStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";

let items = [];
let c1 = false;
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
  let uploadedKeyVersions;
  if (persistentCodesEnabled != null) {
    uploadedKeyVersions = persistentCodesEnabled.uploadedKeyVersions;
  }
  if (uploadedKeyVersions == null) {
    uploadedKeyVersions = items;
  }
};
prototype["getState"] = function getState() {
  return { persistentCodesEnabled: c1, uploadedKeyVersions: items };
};
prototype["getPersistentCodesEnabled"] = function getPersistentCodesEnabled() {
  return c1;
};
prototype["getUploadedKeyVersionsCached"] = function getUploadedKeyVersionsCached() {
  return items;
};
SecureFramesPersistedStore.displayName = "SecureFramesPersistedStore";
SecureFramesPersistedStore.persistKey = "SecureFramesPersistedStore";
const secureFramesPersistedStore = new SecureFramesPersistedStore(dispatcherDefault, {
  SECURE_FRAMES_SETTINGS_UPDATE: function handleSecureFramesSettingsUpdate(persistentCodesEnabled) {
    persistentCodesEnabled = persistentCodesEnabled.persistentCodesEnabled;
  },
  SECURE_FRAMES_UPLOADED_KEY_VERSION_ADD: function handleSecureFramesUploadedKeyVersionAdd(keyVersion) {
    items = [];
    for (const item10008 of items) {
      if (item10008 === arg0.keyVersion) {
        let tmp4 = obj;
        obj.return();
      } else {
        let tmp2 = item10008;
        let arr = items.push(tmp);
        continue;
      }
    }
    items.push(keyVersion.keyVersion);
  },
  SECURE_FRAMES_UPLOADED_KEY_VERSION_CLEAR: function handleSecureFramesUploadedKeyVersionsClear() {
    closure_2 = items;
  },
});
const result = require("set").fileFinishedImporting("modules/rtc/SecureFramesPersistedStore.tsx");

export default secureFramesPersistedStore;
