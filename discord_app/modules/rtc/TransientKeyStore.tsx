import { Store } from "initialize";

const map = new Map();
class TransientKeyStore extends Store {
}
const prototype = TransientKeyStore.prototype;
prototype["getUsers"] = function getUsers() {
  return map;
};
prototype["isKeyVerified"] = function isKeyVerified(arg0, arg1) {
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
};
TransientKeyStore.displayName = "TransientKeyStore";
const transientKeyStore = new TransientKeyStore(require("dispatcher"), {
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
let result = require("set").fileFinishedImporting("modules/rtc/TransientKeyStore.tsx");

export default transientKeyStore;