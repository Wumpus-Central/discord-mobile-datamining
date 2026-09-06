// discord_app/stores/RTCConnectionDesyncStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import CachedEntriesMapDefault from "../lib/CachedEntriesMap.tsx";
import BaseConnectionEvent from "../../discord_common/js/packages/media-engine/index.tsx";
import NicknameUtilsDefault from "../utils/NicknameUtils.tsx";
import useAvatarDecoration from "../modules/collectibles/avatar_decorations/useAvatarDecoration.tsx";
import VoiceStateRecord from "../records/VoiceStateRecord.tsx";
import ChannelStore from "ChannelStore.tsx";
import RTCConnectionStore from "RTCConnectionStore.tsx";
import UserStore from "UserStore.tsx";
import VoiceStateStore from "VoiceStateStore.tsx";

require = fn;
function retryFailedUsers() {
  const channelId = RTCConnectionStore.getChannelId();
  if (null == channelId) {
    return false;
  } else {
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    c2 = false;
    const item = set.forEach((item) => {
      if (null == VoiceStateStore.getVoiceStateForChannel(channelId, item)) {
        const user = UserStore.getUser(item);
        if (null != user) {
          c2 = true;
          set.delete(item);
          let obj = { userId: user.id, channelId: tmp };
          const tmp23 = new VoiceStateRecord(obj);
          let tmp6 = guildId;
          if (guildId == null) {
            tmp6 = React7;
          }
          const result = closure_12.set(user.id, makeSortedVoiceState(tmp23, tmp6, user.id));
          obj = {
            type: ParticipantTypes.USER,
            user,
            id: user.id,
            streamId: null,
            voiceState: tmp23,
            voicePlatform: null,
            speaking: false,
            lastSpoke: 0,
            soundsharing: false,
            ringing: false,
            userNick: NicknameUtilsDefault.getName(guildId, tmp, user),
            userAvatarDecoration: null,
            localVideoDisabled: false,
            isPoppedOut: false,
          };
          obj.userAvatarDecoration = useAvatarDecoration.getAvatarDecoration(user, guildId);
          const result1 = closure_13.set(user.id, obj);
        }
      } else {
        set.delete(item);
      }
    });
    return c2;
  }
}
const makeSortedVoiceState = fn(4584).makeSortedVoiceState;
const Constants = fn(1074);
({ ME: closure_9, RTCConnectionStates: c10 } = Constants);
const ParticipantTypes = fn(4581).ParticipantTypes;
new CachedEntriesMapDefault();
const tmp3 = new CachedEntriesMapDefault();
const set = new Set();
const Store = initializeDefault.Store;
class RTCConnectionDesyncStore extends Store {}
const prototype = RTCConnectionDesyncStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(VoiceStateStore, UserStore, ChannelStore, RTCConnectionStore);
  const items = [UserStore];
  this.syncWith(items, retryFailedUsers);
};
Object.defineProperty(prototype, "desyncedVoiceStatesCount", {
  get: function desyncedVoiceStatesCount() {
    return set.size();
  },
  set: undefined,
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
const rTCConnectionDesyncStore = new RTCConnectionDesyncStore(DispatcherDefault, {
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
    const channelId = RTCConnectionStore.getChannelId();
    let reduced = null != channelId;
    if (reduced) {
      reduced = voiceStates.reduce((acc, userId) => {
        userId = userId.userId;
        let tmp = userId.channelId === channelId;
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
      reduced = userIds.reduce((acc, item) => {
        if (null != VoiceStateStore.getVoiceStateForChannel(closure_1_1, item)) {
          return acc;
        } else {
          const user = UserStore.getUser(item);
          if (null == user) {
            set.add(item);
            let flag = acc;
          } else {
            let obj = { userId: user.id, channelId: tmp };
            const tmp21 = new VoiceStateRecord(obj);
            let tmp2 = closure_1_0;
            if (closure_1_0 == null) {
              tmp2 = React7;
            }
            const result = closure_12.set(user.id, makeSortedVoiceState(tmp21, tmp2, user.id));
            obj = {
              type: ParticipantTypes.USER,
              user,
              id: user.id,
              streamId: null,
              voiceState: tmp21,
              voicePlatform: null,
              speaking: false,
              lastSpoke: 0,
              soundsharing: false,
              ringing: false,
              userNick: NicknameUtilsDefault.getName(closure_1_0, tmp, user),
              userAvatarDecoration: null,
              localVideoDisabled: false,
              isPoppedOut: false,
            };
            obj.userAvatarDecoration = useAvatarDecoration.getAvatarDecoration(user, closure_1_0);
            const result1 = closure_13.set(user.id, obj);
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
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("stores/RTCConnectionDesyncStore.tsx");

export default rTCConnectionDesyncStore;
