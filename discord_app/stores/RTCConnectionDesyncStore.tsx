// discord_app/stores/RTCConnectionDesyncStore.tsx
import isVoiceMuted from "isVoiceMuted";
import ensureGuildLoaded from "ensureGuildLoaded";
import createRTCConnection from "createRTCConnection";
import mergeGuildAvatar from "mergeGuildAvatar";
import updateVoiceState from "updateVoiceState";
import { makeSortedVoiceState } from "getVoiceStatesForGuild";
import ME from "ME";
import { ParticipantTypes } from "ParticipantTypes";
import { Store } from "initialize";
import set from "createRTCConnection";

let c10;
let c9;
const require = arg1;
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
    let c2 = false;
    const item = set.forEach((userId) => {
      if (null == outer1_7.getVoiceStateForChannel(channelId, userId)) {
        const user = outer1_6.getUser(userId);
        if (null != user) {
          const dependencyMap = true;
          outer1_14.delete(userId);
          let obj = { userId: null, channelId: null };
          obj[0] = user.id;
          obj[1] = tmp;
          const tmp23 = new outer1_3(obj);
          let tmp6 = guildId;
          if (guildId == null) {
            tmp6 = outer1_9;
          }
          const result = outer1_12.set(user.id, outer1_8(tmp23, tmp6, user.id));
          obj = { type: null, user: null, id: null, streamId: null, voiceState: null, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: null, userAvatarDecoration: null, localVideoDisabled: false, isPoppedOut: false };
          obj[0] = outer1_11.USER;
          obj[1] = user;
          obj[2] = user.id;
          obj[4] = tmp23;
          obj[10] = guildId(4383).getName(guildId, tmp, user);
          const obj2 = guildId(4383);
          const tmp24 = outer1_8;
          obj[11] = channelId(8373).getAvatarDecoration(user, guildId);
          const result1 = outer1_13.set(user.id, obj);
          const obj3 = channelId(8373);
        }
      } else {
        outer1_14.delete(userId);
      }
    });
    return c2;
  }
}
({ ME: c9, RTCConnectionStates: c10 } = ME);
let closure_12 = new require("keys")();
const tmp3 = new require("keys")();
let set = new Set();
class RTCConnectionDesyncStore extends Store {
}
const prototype = RTCConnectionDesyncStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(updateVoiceState, mergeGuildAvatar, ensureGuildLoaded, createRTCConnection);
  const items = [mergeGuildAvatar];
  this.syncWith(items, retryFailedUsers);
};
Object.defineProperty(prototype, "desyncedVoiceStatesCount", {
  get: function desyncedVoiceStatesCount() {
    return tmp3.size();
  },
  set: undefined
});
prototype["getDesyncedUserIds"] = function getDesyncedUserIds() {
  return tmp3.keys();
};
prototype["getDesyncedVoiceStates"] = function getDesyncedVoiceStates() {
  return tmp3.values();
};
prototype["getDesyncedParticipants"] = function getDesyncedParticipants() {
  return tmp4.values();
};
RTCConnectionDesyncStore.displayName = "RTCConnectionDesyncStore";
const rTCConnectionDesyncStore = new RTCConnectionDesyncStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    tmp3.clear();
    tmp4.clear();
    set.clear();
  },
  VOICE_CHANNEL_SELECT: function handleReset() {
    tmp3.clear();
    tmp4.clear();
    set.clear();
  },
  RTC_CONNECTION_STATE: function handleRTCConnectionState(arg0) {
    let context;
    let state;
    ({ state, context } = arg0);
    let tmp = context === require(4290) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      if (state === constants.DISCONNECTED) {
        tmp3.clear();
        tmp3.clear();
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
          let deleteResult = outer1_12.delete(userId);
          const deleteResult1 = outer1_13.delete(userId);
          if (!deleteResult) {
            deleteResult = deleteResult1;
          }
          if (!deleteResult) {
            deleteResult = deleteResult2;
          }
          tmp = deleteResult;
          deleteResult2 = outer1_14.delete(userId);
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
    let importDefault;
    let require;
    let userIds;
    ({ userIds, guildId: require, channelId: importDefault } = context);
    let reduced = context.context === require(4290) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT;
    if (reduced) {
      reduced = userIds.reduce((arg0, userId) => {
        if (null != outer1_7.getVoiceStateForChannel(closure_1, userId)) {
          return arg0;
        } else {
          const user = outer1_6.getUser(userId);
          if (null == user) {
            outer1_14.add(userId);
            let flag = arg0;
          } else {
            let obj = { userId: null, channelId: null };
            obj[0] = user.id;
            obj[1] = tmp;
            const tmp21 = new outer1_3(obj);
            let tmp2 = closure_0;
            if (closure_0 == null) {
              tmp2 = outer1_9;
            }
            const result = outer1_12.set(user.id, outer1_8(tmp21, tmp2, user.id));
            obj = { type: null, user: null, id: null, streamId: null, voiceState: null, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: null, userAvatarDecoration: null, localVideoDisabled: false, isPoppedOut: false };
            obj[0] = outer1_11.USER;
            obj[1] = user;
            obj[2] = user.id;
            obj[4] = tmp21;
            obj[10] = outer1_1(outer1_2[9]).getName(closure_0, tmp, user);
            const obj2 = outer1_1(outer1_2[9]);
            const tmp22 = outer1_8;
            obj[11] = outer1_0(outer1_2[10]).getAvatarDecoration(user, closure_0);
            const result1 = outer1_13.set(user.id, obj);
            flag = true;
            const obj3 = outer1_0(outer1_2[10]);
          }
          return flag;
        }
      }, false);
    }
    return reduced;
  },
  RTC_CONNECTION_CLIENT_DISCONNECT: function handleRTCConnectionClientDisconnect(userId) {
    userId = userId.userId;
    let tmp = userId.context === require(4290) /* BaseConnectionEvent */.MediaEngineContextTypes.DEFAULT;
    if (tmp) {
      let deleteResult = tmp3.delete(userId);
      const deleteResult1 = tmp4.delete(userId);
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