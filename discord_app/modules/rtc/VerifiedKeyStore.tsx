// discord_app/modules/rtc/VerifiedKeyStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _mod9363 from "../../../discord_common/js/packages/libdave/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

let users = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class VerifiedKeyStore extends PersistedStore {
  initialize(users) {
    users = undefined;
    if (users != null) {
      users = users.users;
    }
    if (users == null) {
      users = {};
    }
  }
  getState() {
    return { users };
  }
  getKeyTrustedAt(arg0, uint8Array) {
    const obj = _mod9363;
    let tmp2;
    if (users[arg0] != null) {
      tmp2 = tmp[obj.serializeKey(obj, uint8Array)];
    }
    return tmp2;
  }
  isKeyVerified(arg0, uint8Array) {
    return null != this.getKeyTrustedAt(arg0, uint8Array);
  }
  getUserIds() {
    const obj = SnowflakeUtilsDefault;
    return obj.keys(users);
  }
  getUserVerifiedKeys(userId) {
    return users[userId];
  }
}
const prototype = VerifiedKeyStore.prototype;
VerifiedKeyStore.displayName = "VerifiedKeyStore";
VerifiedKeyStore.persistKey = "VerifiedKeyStore";
let obj = {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function handleSecureFramesVerifiedKeyCreate(arg0) {
    let key;
    let userId;
    ({ userId, key } = arg0);
    let obj = users[userId];
    if (obj == null) {
      obj = {};
    }
    users[userId] = obj;
    const uint8Array = new Uint8Array(key);
    const obj2 = _mod9363;
    const serializeKeyResult = obj2.serializeKey(uint8Array);
    obj[serializeKeyResult] = Date.now();
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function handleSecureFramesVerifiedKeyDelete(userId) {
    userId = userId.userId;
    let tmp3 = null;
    if (null == users[userId]) {
      return false;
    } else {
      delete users[userId][tmp];
      const _Object = Object;
      let flag = false;
      if (0 === Object.keys(users[userId]).length) {
        delete users[userId];
        flag = true;
      }
      if (!tmp3) {
        tmp3 = flag;
      }
      return tmp3;
    }
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function handleSecureFramesUserVerifiedKeysDelete(userId) {
    userId = userId.userId;
    if (null != users[userId]) {
      delete users[userId];
    }
    return null != users[userId];
  },
};
const verifiedKeyStore = new VerifiedKeyStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/rtc/VerifiedKeyStore.tsx");

export default verifiedKeyStore;
