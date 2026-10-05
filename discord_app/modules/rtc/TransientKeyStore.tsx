// === Module 9347: TransientKeyStore ===

// Module 9347 (TransientKeyStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const map = new Map();
const Store = get_initializedDefault.Store;
class TransientKeyStore extends Store {
  getUsers() {
    return map;
  }
  isKeyVerified(arg0, arg1) {
    const value = map.get(arg0);
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
  }
}
const prototype = TransientKeyStore.prototype;
TransientKeyStore.displayName = "TransientKeyStore";
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    map.clear();
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: function handleSecureFramesTransientKeyCreate(userId) {
    userId = userId.userId;
    const uint8Array = new Uint8Array(userId.key);
    const result = map.set(userId, uint8Array);
  },
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: function handleSecureFramesTransientKeyDelete(userId) {
    return map.delete(userId.userId);
  }
};
const transientKeyStore = new TransientKeyStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/rtc/TransientKeyStore.tsx");

export default transientKeyStore;