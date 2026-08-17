// discord_app/stores/RTCConnectionDesyncStore.tsx
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import keysDefault from "keys" /* 4510 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4569 */;
import closure_3 from "isVoiceMuted" /* 4543 */;
import closure_4 from "ensureGuildLoaded" /* 1391 */;
import closure_5 from "createRTCConnection" /* 4539 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;
import closure_7 from "updateVoiceState" /* 4542 */;
import { makeSortedVoiceState } from "getVoiceStatesForGuild" /* 4545 */;
import ME from "ME" /* 676 */;
import { ParticipantTypes } from "ParticipantTypes" /* 4544 */;
import set from "set" /* 2 */;

require = arg1;
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
    const item = set.forEach((userId) => {
      if (null == closure_1_7.getVoiceStateForChannel(channelId, userId)) {
        const user = closure_1_6.getUser(userId);
        if (null != user) {
          dependencyMap = true;
          closure_1_14.delete(userId);
          let obj = { userId: null, channelId: null };
          obj[0] = user.id;
          obj[1] = tmp;
          const tmp23 = new closure_1_3(obj);
          let tmp6 = guildId;
          if (guildId == null) {
            tmp6 = closure_1_9;
          }
          const result = closure_1_12.set(user.id, closure_1_8(tmp23, tmp6, user.id));
          obj = { type: null, user: null, id: null, streamId: null, voiceState: null, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: null, userAvatarDecoration: null, localVideoDisabled: false, isPoppedOut: false };
          obj[0] = closure_1_11.USER;
          obj[1] = user;
          obj[2] = user.id;
          obj[4] = tmp23;
          obj[10] = guildId(4796).getName(guildId, tmp, user);
          const obj2 = guildId(4796);
          const tmp24 = closure_1_8;
          obj[11] = channelId(4797).getAvatarDecoration(user, guildId);
          const result1 = closure_1_13.set(user.id, obj);
          const obj3 = channelId(4797);
        }
      } else {
        closure_1_14.delete(userId);
      }
    });
    return c2;
  }
}
({ ME: c9, RTCConnectionStates: c10 } = ME);
let closure_12 = new keysDefault();
const tmp3 = new keysDefault();
let closure_13 = new keysDefault();
let set = new Set();
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
    let channelId;
    channelId = store.getChannelId();
    let reduced = null != channelId;
    if (reduced) {
      reduced = voiceStates.reduce((arg0, userId) => {
        userId = userId.userId;
        let tmp = userId.channelId === channelId;
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
          deleteResult2 = closure_1_14.delete(userId);
        }
        if (!tmp) {
          tmp = arg0;
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
      reduced = userIds.reduce((arg0, userId) => {
        if (null != closure_1_7.getVoiceStateForChannel(closure_1, userId)) {
          return arg0;
        } else {
          const user = closure_1_6.getUser(userId);
          if (null == user) {
            closure_1_14.add(userId);
            let flag = arg0;
          } else {
            let obj = { userId: null, channelId: null };
            obj[0] = user.id;
            obj[1] = tmp;
            const tmp21 = new closure_1_3(obj);
            let tmp2 = closure_0;
            if (closure_0 == null) {
              tmp2 = closure_1_9;
            }
            const result = closure_1_12.set(user.id, closure_1_8(tmp21, tmp2, user.id));
            obj = { type: null, user: null, id: null, streamId: null, voiceState: null, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: null, userAvatarDecoration: null, localVideoDisabled: false, isPoppedOut: false };
            obj[0] = closure_1_11.USER;
            obj[1] = user;
            obj[2] = user.id;
            obj[4] = tmp21;
            obj[10] = closure_1_1(closure_1_2[9]).getName(closure_0, tmp, user);
            const obj2 = closure_1_1(closure_1_2[9]);
            const tmp22 = closure_1_8;
            obj[11] = closure_1_0(closure_1_2[10]).getAvatarDecoration(user, closure_0);
            const result1 = closure_1_13.set(user.id, obj);
            flag = true;
            const obj3 = closure_1_0(closure_1_2[10]);
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
let result = set.fileFinishedImporting("stores/RTCConnectionDesyncStore.tsx");

export default rTCConnectionDesyncStore;