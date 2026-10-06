// discord_app/modules/rtc/SecureFramesVerifiedStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import BaseConnectionEvent from "../../../discord_common/js/packages/media-engine/index.tsx";
import SecureFramesUtils from "SecureFramesUtils.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import StreamRTCConnectionStore from "../../stores/StreamRTCConnectionStore.tsx";
import TransientKeyStore from "TransientKeyStore.tsx";
import VerifiedKeyStore from "VerifiedKeyStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const f100452 = (acc, item) => {
  const obj = closure_0(dependencyMap[7]);
  const tmp = true === map.get(obj.decodeStreamKey(item).ownerId);
  const value = map1.get(item);
  const result = map1.set(item, tmp);
  return value !== tmp || acc;
};
function computeCallVerification() {
  let userIds = RTCConnectionStore.getUserIds();
  if (userIds == null) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    userIds = new Set();
  }
  let flag = true;
  for (const item10020 of userIds) {
    if (tmp3 !== item10020) {
      if (true !== map.get(tmp4)) {
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
      const self = this;
      const self2 = this;
      const uint8Array = new Uint8Array(secureFramesRosterMapEntry);
      let isKeyVerifiedResult =
        VerifiedKeyStore.isKeyVerified(userId, uint8Array) || TransientKeyStore.isKeyVerified(userId, uint8Array);
      const items = [RTCConnectionStore, StreamRTCConnectionStore];
      const obj = SecureFramesUtils;
      if (isKeyVerifiedResult) {
        isKeyVerifiedResult = !obj.getIsSecureFramesKeyInconsistent(userId, items);
      }
      flag = isKeyVerifiedResult !== map.get(userId);
      const result = map.set(userId, isKeyVerifiedResult);
    }
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const reduced = allActiveStreamKeys.reduce(f100452, false);
    const tmp16 = computeCallVerification();
    if (!flag) {
      flag = reduced;
    }
    if (!flag) {
      flag = tmp16;
    }
    return flag;
  }
}
const RTCConnectionStates = Constants.RTCConnectionStates;
const map = new Map();
const map1 = new Map();
let c10 = false;
let channelId = null;
const Store = get_initializedDefault.Store;
class SecureFramesVerifiedStore extends Store {
  initialize() {
    this.waitFor(
      AuthenticationStore,
      RTCConnectionStore,
      StreamRTCConnectionStore,
      TransientKeyStore,
      VerifiedKeyStore,
    );
  }
  isCallVerified() {
    return c10;
  }
  isStreamVerified(streamKey) {
    return map1.get(streamKey);
  }
  isUserVerified(userId) {
    return map.get(userId);
  }
}
const prototype = SecureFramesVerifiedStore.prototype;
SecureFramesVerifiedStore.displayName = "SecureFramesVerifiedStore";
let obj = {
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
    let context;
    let streamKey;
    ({ streamKey, context } = state);
    if (state.state !== RTCConnectionStates.DISCONNECTED) {
      return false;
    } else if (BaseConnectionEvent.MediaEngineContextTypes.STREAM === context) {
      let tmp6 = null != streamKey;
      if (tmp6) {
        map1.delete(streamKey);
        tmp6 = computeCallVerification();
      }
      return tmp6;
    } else if (BaseConnectionEvent.MediaEngineContextTypes.DEFAULT === context) {
      map.clear();
      map1.clear();
      c10 = false;
    }
  },
  RTC_CONNECTION_ROSTER_MAP_UPDATE: function handleBulkUserUpdate(userIds) {
    let closure_0;
    userIds = userIds.userIds;
    const id = AuthenticationStore.getId();
    let reduced = userIds.reduce((acc, userId) => {
      let tmp = acc;
      if (closure_0 !== userId) {
        const obj = { userId };
        tmp = handleUserUpdate(obj) || acc;
        handleUserUpdate(obj) || acc;
      }
      return tmp;
    }, false);
    const allActiveStreamKeys = StreamRTCConnectionStore.getAllActiveStreamKeys();
    const reduced1 = allActiveStreamKeys.reduce(f100452, false);
    const tmp3 = computeCallVerification();
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
};
const secureFramesVerifiedStore = new SecureFramesVerifiedStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/rtc/SecureFramesVerifiedStore.tsx");

export default secureFramesVerifiedStore;
