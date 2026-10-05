// === Module 13566: RTCConnectionDesyncStore ===

// Module 13566 (RTCConnectionDesyncStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import CachedEntriesMapDefault from "CachedEntriesMap" /* 2025 */;
import CallConstants from "CallConstants" /* 4911 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4945 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5042 */;
import useAvatarDecoration from "useAvatarDecoration" /* 7887 */;
import VoiceStateRecord from "VoiceStateRecord" /* 4910 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4913 */;
import UserStore from "UserStore" /* 1377 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
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
    let c2 = false;
    const item = set.forEach(function(item) {
      let obj2;
      let obj3;
      if (null == VoiceStateStore.getVoiceStateForChannel(channelId, item)) {
        const user = UserStore.getUser(item);
        if (null != user) {
          c2 = true;
          set.delete(item);
          const self = this;
          const self2 = this;
          const obj4 = { userId: user.id, channelId };
          const tmp21 = new VoiceStateRecord(obj4);
          let tmp6 = guildId;
          if (guildId == null) {
            tmp6 = React4;
          }
          const result = closure_12.set(user.id, makeSortedVoiceState(tmp21, tmp6, user.id));
          const obj = { type: ParticipantTypes.USER, user, id: user.id, streamId: null, voiceState: tmp21, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: obj2.getName(guildId, channelId, user), userAvatarDecoration: obj3.getAvatarDecoration(user, guildId), localVideoDisabled: false, isPoppedOut: false };
          obj2 = NicknameUtilsDefault;
          obj3 = useAvatarDecoration;
          const result1 = set2.set(user.id, obj);
        }
      } else {
        set.delete(item);
      }
    });
    let tmp6 = c2;
    return c2;
  }
}
const makeSortedVoiceState = SortedVoiceStateStore.makeSortedVoiceState;
({ ME: c9, RTCConnectionStates: c10 } = Constants);
const ParticipantTypes = CallConstants.ParticipantTypes;
const tmp3 = new CachedEntriesMapDefault();
new CachedEntriesMapDefault();
const set = new Set();
const Store = get_initializedDefault.Store;
class RTCConnectionDesyncStore extends Store {
  initialize() {
    this.waitFor(VoiceStateStore, UserStore, ChannelStore, RTCConnectionStore);
    const items = [UserStore];
    this.syncWith(items, retryFailedUsers);
  }
  getDesyncedUserIds() {
    return set.keys();
  }
  getDesyncedVoiceStates() {
    return set.values();
  }
  getDesyncedParticipants() {
    return set2.values();
  }
}
Object.defineProperty(RTCConnectionDesyncStore.prototype, "desyncedVoiceStatesCount", {
  get: function desyncedVoiceStatesCount() {
    return set.size();
  },
  set: undefined
});
RTCConnectionDesyncStore.displayName = "RTCConnectionDesyncStore";
let obj = {
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
    let context;
    let state;
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
    const reduced = null != channelId && voiceStates.reduce((acc, userId) => {
      userId = userId.userId;
      let tmp = userId.channelId === channelId;
      if (tmp) {
        let deleteResult = set.delete(userId);
        const deleteResult1 = set2.delete(userId);
        const deleteResult2 = set.delete(userId);
        if (!deleteResult) {
          deleteResult = deleteResult1;
        }
        if (!deleteResult) {
          deleteResult = deleteResult2;
        }
        tmp = deleteResult;
      }
      if (!tmp) {
        tmp = acc;
      }
      return tmp;
    }, false);
    return reduced;
  },
  RTC_CONNECTION_CLIENT_CONNECT: function handleRTCConnectionClientConnect(context) {
    let userIds;
    ({ userIds, guildId: require, channelId: importDefault } = context);
    let reduced = context.context === BaseConnectionEvent.MediaEngineContextTypes.DEFAULT;
    if (reduced) {
      let flag = false;
      reduced = userIds.reduce(function(acc, item) {
        let obj2;
        let obj3;
        if (null != VoiceStateStore.getVoiceStateForChannel(importDefault, item)) {
          return acc;
        } else {
          let flag;
          const user = UserStore.getUser(item);
          if (null == user) {
            set.add(item);
            flag = acc;
          } else {
            const self = this;
            const self2 = this;
            const obj4 = { userId: user.id, channelId: importDefault };
            const tmp19 = new VoiceStateRecord(obj4);
            let tmp2 = require;
            if (require == null) {
              tmp2 = React4;
            }
            const result = closure_12.set(user.id, makeSortedVoiceState(tmp19, tmp2, user.id));
            const obj = { type: ParticipantTypes.USER, user, id: user.id, streamId: null, voiceState: tmp19, voicePlatform: null, speaking: false, lastSpoke: 0, soundsharing: false, ringing: false, userNick: obj2.getName(require, importDefault, user), userAvatarDecoration: obj3.getAvatarDecoration(user, require), localVideoDisabled: false, isPoppedOut: false };
            obj2 = NicknameUtilsDefault;
            obj3 = useAvatarDecoration;
            const result1 = set2.set(user.id, obj);
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
      const deleteResult2 = set.delete(userId);
      if (!deleteResult) {
        deleteResult = deleteResult1;
      }
      if (!deleteResult) {
        deleteResult = deleteResult2;
      }
      tmp = deleteResult;
    }
    return tmp;
  }
};
const rTCConnectionDesyncStore = new RTCConnectionDesyncStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/RTCConnectionDesyncStore.tsx");

export default rTCConnectionDesyncStore;