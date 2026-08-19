// === Module 13304: retryFailedUsers ===

// Module 13304 (retryFailedUsers)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import keysDefault from "keys" /* 4510 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4569 */;
import getNicknameDefault from "getNickname" /* 4796 */;
import useAvatarDecoration from "useAvatarDecoration" /* 4797 */;
import isVoiceMuted from "isVoiceMuted" /* 4543 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import createRTCConnection from "createRTCConnection" /* 4539 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import updateVoiceState from "updateVoiceState" /* 4542 */;
import { makeSortedVoiceState } from "getVoiceStatesForGuild" /* 4545 */;
import ME from "ME" /* 676 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4544 */;

require = fn;
function retryFailedUsers() {
  const channelId = store.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    channel = channel.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    c2 = false;
    const item = set.forEach((item, index) => {
      if (null == closure_1_7.getVoiceStateForChannel(channelId, item)) {
        const user = closure_1_6.getUser(item);
        if (null != user) {
          dependencyMap = true;
          set.delete(item);
          let obj = { userId: null, channelId: null };
          obj[0] = user.id;
          obj[1] = channelId;
          const tmp23 = new closure_1_3(obj);
          let tmp6 = guildId;
          if (guildId == null) {
            tmp6 = closure_1_9;
          }
          const result = closure_1_12.set(user.id, makeSortedVoiceState(tmp23, tmp6, user.id));
          obj = { type: null, user: null, id: null, streamId: null, voiceState: null, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: null, userAvatarDecoration: null, localVideoDisabled: false, isPoppedOut: false };
          obj[0] = ParticipantTypes.USER;
          obj[1] = user;
          obj[2] = user.id;
          obj[4] = tmp23;
          obj[10] = guildId(4796).getName(guildId, channelId, user);
          const obj2 = guildId(4796);
          obj[11] = channelId(4797).getAvatarDecoration(user, guildId);
          const result1 = closure_1_13.set(user.id, obj);
          const obj3 = channelId(4797);
        }
      } else {
        set.delete(item);
      }
    });
    return c2;
  }
}
({ ME: c9, RTCConnectionStates: c10 } = ME);
let closure_12 = new keysDefault();
const tmp3 = new keysDefault();
let closure_13 = new keysDefault();
const set = new Set();
const Store = initializeDefault.Store;
class RTCConnectionDesyncStore extends Store {
}
const prototype = RTCConnectionDesyncStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_7, closure_6, closure_4, closure_5);
  const items = [closure_6];
  this.syncWith(items, retryFailedUsers);
};
Object.defineProperty(prototype, "desyncedVoiceStatesCount", {
  get: function desyncedVoiceStatesCount() {
    return set.size();
  },
  set: undefined
});
prototype["getDesyncedUserIds"] = function getDesyncedUserIds() {
  return set.keys();
};
prototype["getDesyncedVoiceStates"] = function getDesyncedVoiceStates() {
  return set.values();
};
prototype["getDesyncedParticipants"] = function getDesyncedParticipants() {
  return set2.values();
};
RTCConnectionDesyncStore.displayName = "RTCConnectionDesyncStore";
const rTCConnectionDesyncStore = new RTCConnectionDesyncStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    set.clear();
    set2.clear();
    set.clear();
  },
  VOICE_CHANNEL_SELECT: function handleReset() {
    set.clear();
    set2.clear();
    set.clear();
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    ({ state, context } = arg0);
    let tmp = context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      if (state === constants.DISCONNECTED) {
        set.clear();
        set2.clear();
        set.clear();
      }
      tmp = tmp3;
    }
    return tmp;
  },
  VOICE_STATE_UPDATES: function handleVoiceStateUpdates(voiceStates) {
    voiceStates = voiceStates.voiceStates;
    const channelId = store.getChannelId();
    let reduced = null != channelId;
    if (reduced) {
      reduced = voiceStates.reduce((acc, item, index) => {
        const userId = item.userId;
        let tmp = item.channelId === channelId;
        if (tmp) {
          let deleteResult = closure_1_12.delete(userId);
          const deleteResult1 = closure_1_13.delete(userId);
          if (!deleteResult) {
            deleteResult = deleteResult1;
          }
          if (!deleteResult) {
            deleteResult = deleteResult2;
          }
          tmp = deleteResult;
          deleteResult2 = set.delete(userId);
        }
        if (!tmp) {
          tmp = acc;
        }
        return tmp;
      }, false);
    }
    return reduced;
  },
  RTC_CONNECTION_CLIENT_CONNECT: function handleRTCConnectionClientConnect(context) {
    ({ userIds, guildId: require, channelId: importDefault } = context);
    let reduced = context.context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT;
    if (reduced) {
      reduced = userIds.reduce((acc, item, index) => {
        if (null != closure_1_7.getVoiceStateForChannel(closure_1, item)) {
          return acc;
        } else {
          const user = closure_1_6.getUser(item);
          if (null == user) {
            set.add(item);
            let flag = acc;
          } else {
            let obj = { userId: null, channelId: null };
            obj[0] = user.id;
            obj[1] = closure_1;
            const tmp21 = new closure_1_3(obj);
            let tmp2 = closure_0;
            if (closure_0 == null) {
              tmp2 = closure_1_9;
            }
            const result = closure_1_12.set(user.id, makeSortedVoiceState(tmp21, tmp2, user.id));
            obj = { type: null, user: null, id: null, streamId: null, voiceState: null, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: null, userAvatarDecoration: null, localVideoDisabled: false, isPoppedOut: false };
            obj[0] = ParticipantTypes.USER;
            obj[1] = user;
            obj[2] = user.id;
            obj[4] = tmp21;
            obj[10] = getNicknameDefault.getName(closure_0, closure_1, user);
            obj[11] = useAvatarDecoration.getAvatarDecoration(user, closure_0);
            const result1 = closure_1_13.set(user.id, obj);
            flag = true;
          }
          return flag;
        }
      }, false);
    }
    return reduced;
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function handleRTCConnectionClientDisconnect(userId) {
    userId = userId.userId;
    let tmp = userId.context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      let deleteResult = set.delete(userId);
      const deleteResult1 = set2.delete(userId);
      if (!deleteResult) {
        deleteResult = deleteResult1;
      }
      if (!deleteResult) {
        deleteResult = deleteResult2;
      }
      tmp = deleteResult;
      deleteResult2 = set.delete(userId);
    }
    return tmp;
  }
});
const tmp4 = new keysDefault();
let result = require("obj132").fileFinishedImporting("stores/RTCConnectionDesyncStore.tsx");

export default rTCConnectionDesyncStore;