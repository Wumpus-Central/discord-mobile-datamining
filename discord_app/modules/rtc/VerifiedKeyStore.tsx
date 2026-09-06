// discord_app/modules/rtc/VerifiedKeyStore.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _mod9135 from "../../../discord_common/js/packages/libdave/index.tsx";

require = fn;
let users = {};
const PersistedStore = initializeDefault.PersistedStore;
class VerifiedKeyStore extends PersistedStore {}
const prototype = VerifiedKeyStore.prototype;
prototype["initialize"] = function initialize(users) {
  users = undefined;
  if (users != null) {
    users = users.users;
  }
  if (users == null) {
    users = {};
  }
};
prototype["getState"] = function getState() {
  return { users };
};
prototype["getKeyTrustedAt"] = function getKeyTrustedAt(arg0, uint8Array) {
  const obj = _mod9135;
  let tmp2;
  if (users[arg0] != null) {
    tmp2 = tmp[obj.serializeKey(obj, uint8Array)];
  }
  return tmp2;
};
prototype["isKeyVerified"] = function isKeyVerified(arg0, uint8Array) {
  return null != this.getKeyTrustedAt(arg0, uint8Array);
};
prototype["getUserIds"] = function getUserIds() {
  return SnowflakeUtilsDefault.keys(users);
};
prototype["getUserVerifiedKeys"] = function getUserVerifiedKeys(userId) {
  return users[userId];
};
VerifiedKeyStore.displayName = "VerifiedKeyStore";
VerifiedKeyStore.persistKey = "VerifiedKeyStore";
const verifiedKeyStore = new VerifiedKeyStore(DispatcherDefault, {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function handleSecureFramesVerifiedKeyCreate(arg0) {
    ({ userId, key } = arg0);
    let obj = users[userId];
    if (obj == null) {
      obj = {};
    }
    users[userId] = obj;
    const uint8Array = new Uint8Array(key);
    obj[_mod9135.serializeKey(uint8Array)] = Date.now();
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function handleSecureFramesVerifiedKeyDelete(arg0) {
    let tmp6 = null;
    if (null == users[arg0.userId]) {
      return false;
    } else {
      delete tmp4[tmp3];
      const _Object = Object;
      let flag = false;
      if (0 === Object.keys(tmp5).length) {
        delete tmp[tmp2];
        flag = true;
      }
      if (!tmp6) {
        tmp6 = flag;
      }
      return tmp6;
    }
  },
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function handleSecureFramesUserVerifiedKeysDelete(arg0) {
    if (null != users[arg0.userId]) {
      delete tmp[tmp2];
    }
    return null != users[arg0.userId];
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/rtc/VerifiedKeyStore.tsx");

export default verifiedKeyStore;
