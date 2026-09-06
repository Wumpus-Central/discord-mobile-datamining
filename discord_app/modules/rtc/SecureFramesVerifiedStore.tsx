// === Module 9132: SecureFramesVerifiedStore ===

// Module 9132 (SecureFramesVerifiedStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4615 */;
import SecureFramesUtils from "SecureFramesUtils" /* 9150 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4583 */;
import StreamRTCConnectionStore from "StreamRTCConnectionStore" /* 4599 */;
import TransientKeyStore from "TransientKeyStore" /* 9133 */;
import VerifiedKeyStore from "VerifiedKeyStore" /* 9134 */;

require = fn;
function computeCallVerification() {
  let userIds = RTCConnectionStore.getUserIds();
  if (userIds == null) {
    const _Set = Set;
    userIds = new Set();
  }
  let flag = true;
  for (const item10020 of userIds) {
    if (tmp5 !== item10020) {
      if (true !== map.get(tmp6)) {
        flag = false;
        obj.return();
        break;
      }
      c10 = flag;
      return flag !== c10;
    }
    continue;
  }
}
function handleUserUpdate(userId) {
  userId = userId.userId;
  if (AuthenticationStore.getId() === userId) {
    return false;
  } else {
    const secureFramesRosterMapEntry = RTCConnectionStore.getSecureFramesRosterMapEntry(userId);
    let flag = false;
    if (null != secureFramesRosterMapEntry) {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(secureFramesRosterMapEntry);
      let isKeyVerifiedResult = VerifiedKeyStore.isKeyVerified(userId, uint8Array);
      if (!isKeyVerifiedResult) {
        isKeyVerifiedResult = TransientKeyStore.isKeyVerified(userId, uint8Array);
      }
      const items = [RTCConnectionStore, StreamRTCConnectionStore];
      if (isKeyVerifiedResult) {
        isKeyVerifiedResult = !obj.getIsSecureFramesKeyInconsistent(userId, items);
      }
      flag = isKeyVerifiedResult !== map.get(userId);
      const result = map.set(userId, isKeyVerifiedResult);
      obj = SecureFramesUtils;
    }
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const reduced = allActiveStreamKeys.reduce((acc, item) => {
      const tmp = true === map.get(closure_0(dependencyMap[7]).decodeStreamKey(item).ownerId);
      value = map1.get(item);
      const result = map1.set(item, tmp);
      return value !== tmp || acc;
    }, false);
    if (!flag) {
      flag = reduced;
    }
    if (!flag) {
      flag = tmp18;
    }
    return flag;
  }
}
const RTCConnectionStates = fn(1074).RTCConnectionStates;
const map = new Map();
const map1 = new Map();
let c10 = false;
let channelId = null;
const Store = initializeDefault.Store;
class SecureFramesVerifiedStore extends Store {
}
const prototype = SecureFramesVerifiedStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, RTCConnectionStore, StreamRTCConnectionStore, TransientKeyStore, VerifiedKeyStore);
};
prototype["isCallVerified"] = function isCallVerified() {
  return c10;
};
prototype["isStreamVerified"] = function isStreamVerified(streamKey) {
  return map1.get(streamKey);
};
prototype["isUserVerified"] = function isUserVerified(userId) {
  return map.get(userId);
};
SecureFramesVerifiedStore.displayName = "SecureFramesVerifiedStore";
const secureFramesVerifiedStore = new SecureFramesVerifiedStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleReset() {
    map.clear();
    map1.clear();
    c10 = false;
  },
  VOICE_CHANNEL_SELECT: function handleVoiceChannelSelect(channelId) {
    channelId = channelId.channelId;
    if (channelId === channelId) {
      return false;
    } else {
      map.clear();
      map1.clear();
      c10 = false;
    }
  },
  RTC_CONNECTION_STATE: function handleRtcConnectionState(state) {
    ({ streamKey, context } = state);
    if (state.state !== RTCConnectionStates.DISCONNECTED) {
      return false;
    } else {
      if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === context) {
        let tmp6 = null != streamKey;
        if (tmp6) {
          map1.delete(streamKey);
          tmp6 = computeCallVerification();
        }
        return tmp6;
      } else if (tmp10(4615).MediaEngineContextTypes.DEFAULT === context) {
        map.clear();
        map1.clear();
        c10 = false;
      }
      tmp10 = require;
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function handleBulkUserUpdate(userIds) {
    userIds = userIds.userIds;
    const id = AuthenticationStore.getId();
    let reduced = userIds.reduce((acc, userId) => {
      let tmp = acc;
      if (closure_0 !== userId) {
        const obj = { userId };
        tmp = handleUserUpdate(obj) || acc;
        const tmp3 = handleUserUpdate(obj) || acc;
      }
      return tmp;
    }, false);
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const reduced1 = allActiveStreamKeys.reduce((acc, item) => {
      const tmp = true === map.get(closure_0(dependencyMap[7]).decodeStreamKey(item).ownerId);
      value = map1.get(item);
      const result = map1.set(item, tmp);
      return value !== tmp || acc;
    }, false);
    if (!reduced) {
      reduced = reduced1;
    }
    if (!reduced) {
      reduced = tmp3;
    }
    return reduced;
  },
  SECURE_FRAMES_TRANSIENT_KEY_CREATE: handleUserUpdate,
  SECURE_FRAMES_TRANSIENT_KEY_DELETE: handleUserUpdate,
  SECURE_FRAMES_VERIFIED_KEY_CREATE: handleUserUpdate,
  SECURE_FRAMES_VERIFIED_KEY_DELETE: handleUserUpdate,
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: handleUserUpdate
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/rtc/SecureFramesVerifiedStore.tsx");

export default secureFramesVerifiedStore;