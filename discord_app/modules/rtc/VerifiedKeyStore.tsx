import { PersistedStore } from "initialize";

const require = arg1;
let closure_3 = {};
class VerifiedKeyStore extends PersistedStore {
}
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
  return { users: closure_3 };
};
prototype["getKeyTrustedAt"] = function getKeyTrustedAt(arg0, uint8Array) {
  const obj = require(9116) /* set */;
  let tmp2;
  if (dependencyMap[arg0] != null) {
    tmp2 = tmp[obj.serializeKey(obj, uint8Array)];
  }
  return tmp2;
};
prototype["isKeyVerified"] = function isKeyVerified(arg0, uint8Array) {
  return null != this.getKeyTrustedAt(arg0, uint8Array);
};
prototype["getUserIds"] = function getUserIds() {
  return importDefault(11).keys(closure_3);
};
prototype["getUserVerifiedKeys"] = function getUserVerifiedKeys(closure_0) {
  return dependencyMap[closure_0];
};
VerifiedKeyStore.displayName = "VerifiedKeyStore";
VerifiedKeyStore.persistKey = "VerifiedKeyStore";
const verifiedKeyStore = new VerifiedKeyStore(require("dispatcher"), {
  SECURE_FRAMES_VERIFIED_KEY_CREATE: function handleSecureFramesVerifiedKeyCreate(arg0) {
    let key;
    let userId;
    ({ userId, key } = arg0);
    let obj = dependencyMap[userId];
    if (obj == null) {
      obj = {};
    }
    dependencyMap[userId] = obj;
    const uint8Array = new Uint8Array(key);
    const obj2 = require(9116) /* set */;
    obj[require(9116) /* set */.serializeKey(uint8Array)] = Date.now();
  },
  SECURE_FRAMES_VERIFIED_KEY_DELETE: function handleSecureFramesVerifiedKeyDelete(arg0) {
    let tmp6 = null;
    if (null == dependencyMap[arg0.userId]) {
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
    if (null != dependencyMap[arg0.userId]) {
      delete tmp[tmp2];
    }
    return null != dependencyMap[arg0.userId];
  }
});
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/rtc/VerifiedKeyStore.tsx");

export default verifiedKeyStore;