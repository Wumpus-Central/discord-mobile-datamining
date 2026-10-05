// discord_app/modules/rtc/TransientKeyStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
const transientKeyStore = new TransientKeyStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/rtc/TransientKeyStore.tsx");

export default transientKeyStore;
