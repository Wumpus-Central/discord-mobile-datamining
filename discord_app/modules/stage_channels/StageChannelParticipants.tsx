// discord_app/modules/stage_channels/StageChannelParticipants.tsx
import version from "../../../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import getNicknameDefault from "../../utils/NicknameUtils.tsx";
import getParticipantUserKeyDefault from "../calls/getParticipantUserKey.tsx";
import getHighestHoistedRole from "useGuildMemberDisplayRole.tsx";
import closure_3 from "../../stores/ApplicationStreamingStore.tsx";
import closure_4 from "../../stores/ChannelStore.tsx";
import closure_5 from "../../stores/GuildMemberRequesterStore.tsx";
import closure_6 from "../../stores/GuildMemberStore.tsx";
import closure_7 from "../../stores/RelationshipStore.tsx";
import closure_8 from "../../stores/UserStore.tsx";
import closure_9 from "../../stores/VoiceStateStore.tsx";
import { getComparator } from "../../stores/views/SortedVoiceStateStore.tsx";
import closure_11 from "StageChannelRoleStore.tsx";
import closure_12 from "StageInstanceStore.tsx";

require = arg1;
function sortKey(speaker) {
  ({ role, connectedOn, voiceState } = speaker);
  let str = "\u0001";
  let str2 = "\u0001";
  ({ user, userNick, type } = speaker);
  if (speaker.speaker) {
    str2 = "\0";
  }
  let str3 = str;
  if (type === obj.STREAM) {
    str3 = "\0";
  }
  let str4 = "\0";
  if (voiceState.selfMute) {
    str4 = str;
  }
  if (voiceState.selfVideo) {
    str = "\0";
  }
  let num;
  if (role != null) {
    num = role.position;
  }
  if (num == null) {
    num = 999;
  }
  const combined = "" + num;
  return (
    "" +
    str2 +
    str3 +
    str4 +
    str +
    combined.padStart(3, "0") +
    connectedOn +
    getParticipantUserKeyDefault(userNick, user)
  );
}
function requestToSpeakSortKey(user) {
  user = user.user;
  const requestToSpeakTimestamp = user.voiceState.requestToSpeakTimestamp;
  if (null == requestToSpeakTimestamp) {
    let id = user.id;
  } else {
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    id = "" + Date.parse(requestToSpeakTimestamp) + user.id;
  }
  return id;
}
function getParticipantIndex(arg0) {
  ({ role, rtsState } = arg0);
  ({ speaker, blocked, ignored, isFriend } = arg0);
  const items = [];
  if (tmp3) {
    items.push(obj.ALL_REQUESTED_TO_SPEAK);
  }
  if (rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK) {
    items.push(obj.REQUESTED_TO_SPEAK_ONLY);
  }
  if (speaker) {
    items.push(obj.SPEAKER);
    let tmp12 = obj;
  } else {
    if (null != role) {
      items.push(role.id);
    } else {
      items.push(obj.NO_ROLE);
    }
    tmp12 = obj;
    items.push(obj.AUDIENCE);
  }
  if (blocked) {
    items.push(tmp12.BLOCKED);
  } else if (ignored) {
    items.push(tmp12.IGNORED);
  }
  if (isFriend) {
    items.push(tmp12.FRIEND);
  }
  return items;
}
let obj = {
  SPEAKER: "SPEAKER",
  AUDIENCE: "AUDIENCE",
  NO_ROLE: "NO_ROLE",
  ALL_REQUESTED_TO_SPEAK: "ALL_REQUESTED_TO_SPEAK",
  REQUESTED_TO_SPEAK_ONLY: "REQUESTED_TO_SPEAK_ONLY",
  BLOCKED: "BLOCKED",
  IGNORED: "IGNORED",
  FRIEND: "FRIEND",
  SELECTED: "SELECTED",
  MEDIA: "MEDIA",
};
obj = { VOICE: "VOICE", STREAM: "STREAM" };
let result = require("set").fileFinishedImporting("modules/stage_channels/StageChannelParticipants.tsx");
class StageChannelParticipants {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    secondaryIndexMap = new require("version").SecondaryIndexMap(getParticipantIndex, sortKey);
    obj[1] = secondaryIndexMap;
    secondaryIndexMap1 = new require("version").SecondaryIndexMap(() => [], requestToSpeakSortKey);
    obj[2] = secondaryIndexMap1;
    obj.channelId = global;
    channel = closure_4.getChannel(global);
    guildId = undefined;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    obj.guildId = guildId;
    return obj;
  }
}
const prototype = StageChannelParticipants.prototype;
prototype["_getParticipantsForUser"] = function _getParticipantsForUser(userId) {
  const self = this;
  const items = [];
  const voiceStateForChannel = store2.getVoiceStateForChannel(this.channelId, userId);
  if (null == voiceStateForChannel) {
    return items;
  } else {
    user = user.getUser(userId);
    if (null == user) {
      let isPublicResult = null != self.guildId;
      if (isPublicResult) {
        isPublicResult = _public.isPublic(self.channelId);
      }
      if (isPublicResult) {
        const member = closure_5.requestMember(self.guildId, userId);
      }
      return items;
    } else {
      let first = null;
      if (null != arg1) {
        first = arg1[0];
      }
      let member1 = null;
      if (null != self.guildId) {
        member1 = member.getMember(self.guildId, userId);
      }
      let nick;
      if (member1 != null) {
        nick = member1.nick;
      }
      if (nick == null) {
        obj = getNicknameDefault;
        nick = obj.getName(self.guildId, self.channelId, user);
      }
      obj = {
        user: null,
        userNick: null,
        nick: null,
        comparator: null,
        voiceState: null,
        role: null,
        speaker: null,
        member: null,
        blocked: null,
        ignored: null,
        isFriend: null,
        connectedOn: null,
      };
      obj[0] = user;
      obj[1] = getNicknameDefault.getName(self.guildId, self.channelId, user);
      obj[2] = nick;
      obj[3] = getComparator(voiceStateForChannel, nick);
      obj[4] = voiceStateForChannel;
      const obj3 = getNicknameDefault;
      obj[5] = getHighestHoistedRole.getHighestHoistedRole(self.guildId, userId);
      obj[6] = speaker.isSpeaker(userId, self.channelId);
      obj[7] = member1;
      obj[8] = closure_7.isBlocked(user.id);
      obj[9] = closure_7.isIgnored(user.id);
      obj[10] = closure_7.isFriend(user.id);
      let connectedOn;
      if (first != null) {
        connectedOn = first.connectedOn;
      }
      if (connectedOn == null) {
        const _Date = Date;
        connectedOn = Date.now();
      }
      obj[11] = connectedOn;
      obj = {};
      const merged = Object.assign(obj);
      obj.type = obj.VOICE;
      obj.id = user.id;
      let tmp11Result = tmp11(4707);
      obj.rtsState = tmp11Result.getAudienceRequestToSpeakState(voiceStateForChannel);
      items.push(obj);
      streamForUser = streamForUser.getStreamForUser(userId, self.guildId);
      if (streamForUser == null) {
        streamForUser = streamForUser.getActiveStreamForUser(userId, self.guildId);
      }
      if (null != streamForUser) {
        if (streamForUser.channelId === self.channelId) {
          tmp11Result = tmp11(4612);
          obj1 = {};
          const merged1 = Object.assign(obj);
          obj1.id = tmp11Result.encodeStreamKey(streamForUser);
          obj1.type = obj.STREAM;
          obj1.rtsState = tmp11(4707).RequestToSpeakStates.NONE;
          items.push(obj1);
          const encodeStreamKeyResult = tmp11Result.encodeStreamKey(streamForUser);
        }
      }
      return items;
    }
  }
};
prototype["updateParticipant"] = function updateParticipant(arg0) {
  const self = this;
  closure_0 = arg0;
  let result = this._getParticipantsForUser(arg0, arr);
  let flag = null != arr;
  if (!flag) {
    flag = 0 !== result.length;
  }
  if (flag) {
    if (arr != null) {
      const item = arr.forEach((id) => {
        const _participantsIndex = self._participantsIndex;
        _participantsIndex.delete(id.id);
        const _requestToSpeakIndex = self._requestToSpeakIndex;
        _requestToSpeakIndex.delete(id.id);
      });
    }
    const item1 = result.forEach((id) => {
      const _participantsIndex = self._participantsIndex;
      const result = _participantsIndex.set(id.id, id);
      if (id.id === callback) {
        const rtsState = id.rtsState;
        if (tmp6) {
          const _requestToSpeakIndex2 = tmp._requestToSpeakIndex;
          const result1 = _requestToSpeakIndex2.set(tmp3, id);
        }
      }
      const _requestToSpeakIndex = tmp._requestToSpeakIndex;
      _requestToSpeakIndex.delete(callback);
    });
    this.participants[arg0] = result;
    flag = true;
  }
  return flag;
};
prototype["rebuild"] = function rebuild() {
  let self = this;
  self = this;
  const channel = store.getChannel(this.channelId);
  if (null != channel) {
    if (channel.isGuildStageVoice()) {
      const _Set = Set;
      const _Object = Object;
      const set = new Set(Object.keys(store2.getVoiceStatesForChannel(channel.id)));
      const _participantsIndex = self._participantsIndex;
      _participantsIndex.clear();
      const _requestToSpeakIndex = self._requestToSpeakIndex;
      _requestToSpeakIndex.clear();
      self.participants = {};
      const item = set.forEach((arg0) => self.updateParticipant(arg0));
      return true;
    }
  }
  return false;
};
Object.defineProperty(prototype, "version", {
  get: function version() {
    return this._participantsIndex.version;
  },
  set: undefined,
});
prototype["size"] = function size(arg0) {
  const _participantsIndex = this._participantsIndex;
  return _participantsIndex.size(arg0);
};
prototype["toArray"] = function toArray(arg0) {
  const _participantsIndex = this._participantsIndex;
  return _participantsIndex.values(arg0, true);
};
prototype["getParticipant"] = function getParticipant(arg0) {
  const _participantsIndex = this._participantsIndex;
  let value = _participantsIndex.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
Object.defineProperty(prototype, "requestToSpeakVersion", {
  get: function requestToSpeakVersion() {
    return this._requestToSpeakIndex.version;
  },
  set: undefined,
});
prototype["getRequestToSpeakParticipants"] = function getRequestToSpeakParticipants() {
  const _requestToSpeakIndex = this._requestToSpeakIndex;
  return _requestToSpeakIndex.values(undefined, true);
};

export default StageChannelParticipants;
export const StageChannelParticipantNamedIndex = obj;
export const StageChannelParticipantTypes = obj;
export const isRequestedToSpeakAll = function isRequestedToSpeakAll(rtsState) {
  return (
    rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK ||
    rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
  );
};
