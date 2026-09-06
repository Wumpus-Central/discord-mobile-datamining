// discord_app/modules/rtc/SecureFramesVerifiedStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import getCurrentUserSigningKey from "SecureFramesUtils.tsx";
import closure_2 from "../../stores/AuthenticationStore.tsx";
import closure_3 from "../../stores/RTCConnectionStore.tsx";
import closure_4 from "../../stores/StreamRTCConnectionStore.tsx";
import closure_5 from "TransientKeyStore.tsx";
import closure_6 from "VerifiedKeyStore.tsx";
import { RTCConnectionStates } from "../../Constants.tsx";

require = arg1;
function computeCallVerification() {
  let userIds = authStore.getUserIds();
  if (userIds == null) {
    const _Set = Set;
    userIds = new Set();
  }
  let flag = true;
  for (const item10020 of userIds) {
    if (tmp5 !== item10020) {
      let tmp7 = map;
      let tmp8 = item10020;
      if (true !== map.get(tmp6)) {
        flag = false;
        let tmp9 = obj;
        obj.return();
        break;
      }
      let tmp10 = flag;
      let tmp11 = flag;
      return flag !== flag;
    }
    continue;
  }
}
function handleUserUpdate(userId) {
  userId = userId.userId;
  if (store.getId() === userId) {
    return false;
  } else {
    const secureFramesRosterMapEntry = authStore.getSecureFramesRosterMapEntry(userId);
    let flag = false;
    if (null != secureFramesRosterMapEntry) {
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(secureFramesRosterMapEntry);
      let isKeyVerifiedResult = keyVerified2.isKeyVerified(userId, uint8Array);
      if (!isKeyVerifiedResult) {
        isKeyVerifiedResult = keyVerified.isKeyVerified(userId, uint8Array);
      }
      const items = [authStore, store2];
      if (isKeyVerifiedResult) {
        isKeyVerifiedResult = !obj.getIsSecureFramesKeyInconsistent(userId, items);
      }
      flag = isKeyVerifiedResult !== map.get(userId);
      const result = map.set(userId, isKeyVerifiedResult);
      obj = getCurrentUserSigningKey;
    }
    const allActiveStreamKeys = store2.getAllActiveStreamKeys();
    const reduced = allActiveStreamKeys.reduce((arg0, streamKey) => {
      const tmp = true === closure_8.get(callback(table[7]).decodeStreamKey(streamKey).ownerId);
      const value = store.get(streamKey);
      const result = store.set(streamKey, tmp);
      return value !== tmp || arg0;
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
const map = new Map();
const map1 = new Map();
let c10 = false;
let c11 = null;
const Store = initializeDefault.Store;
class SecureFramesVerifiedStore extends Store {}
const prototype = SecureFramesVerifiedStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_2, closure_3, closure_4, closure_5, closure_6);
};
prototype["isCallVerified"] = function isCallVerified() {
  return c10;
};
prototype["isStreamVerified"] = function isStreamVerified(arg0) {
  return map1.get(arg0);
};
prototype["isUserVerified"] = function isUserVerified(arg0) {
  return map.get(arg0);
};
SecureFramesVerifiedStore.displayName = "SecureFramesVerifiedStore";
const secureFramesVerifiedStore = new SecureFramesVerifiedStore(dispatcherDefault, {
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
    let id;
    id = store.getId();
    let reduced = userIds.reduce((arg0, arg1) => {
      let tmp = arg0;
      if (closure_0 !== arg1) {
        const obj = { userId: null };
        obj[0] = arg1;
        tmp = closure_1_13(obj) || arg0;
        const tmp3 = closure_1_13(obj) || arg0;
      }
      return tmp;
    }, false);
    const allActiveStreamKeys = store2.getAllActiveStreamKeys();
    const reduced1 = allActiveStreamKeys.reduce((arg0, streamKey) => {
      const tmp = true === closure_8.get(callback(table[7]).decodeStreamKey(streamKey).ownerId);
      const value = store.get(streamKey);
      const result = store.set(streamKey, tmp);
      return value !== tmp || arg0;
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
  SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: handleUserUpdate,
});
let result = require("set").fileFinishedImporting("modules/rtc/SecureFramesVerifiedStore.tsx");

export default secureFramesVerifiedStore;
