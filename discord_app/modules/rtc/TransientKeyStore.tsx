// === Module 9133: TransientKeyStore ===

// Module 9133 (TransientKeyStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;

const map = new Map();
const Store = initializeDefault.Store;
class TransientKeyStore extends Store {
}
const prototype = TransientKeyStore.prototype;
prototype["getUsers"] = function getUsers() {
  return map;
};
prototype["isKeyVerified"] = function isKeyVerified(arg0, arg1) {
  value = map.get(arg0);
  if (null != arg1) {
    if (null != value) {
      if (value.length === arg1.length) {
        let num = 0;
        if (0 < arg1.length) {
          while (arg1[num] === value[num]) {
            num = num + 1;
          }
          return false;
        }
        return true;
      }
    }
  }
  return false;
};
TransientKeyStore.displayName = "TransientKeyStore";
const transientKeyStore = new TransientKeyStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: function handleSecureFramesTransientKeyCreate(key) {
    const uint8Array = new Uint8Array(key.key);
    const result = map.set(key.userId, uint8Array);
  },
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: function handleSecureFramesTransientKeyDelete(userId) {
    return map.delete(userId.userId);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/TransientKeyStore.tsx");

export default transientKeyStore;