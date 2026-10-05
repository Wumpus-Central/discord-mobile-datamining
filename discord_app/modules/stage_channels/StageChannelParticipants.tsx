// discord_app/modules/stage_channels/StageChannelParticipants.tsx
import SecondaryIndexMap from "../../../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx";
import SortedVoiceStateStore from "../../stores/views/SortedVoiceStateStore.tsx";
import StreamKeyUtils from "../go_live/utils/StreamKeyUtils.tsx";
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import getParticipantUserKeyDefault from "../calls/getParticipantUserKey.tsx";
import useGuildMemberDisplayRole from "useGuildMemberDisplayRole.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildMemberRequesterStore from "../../stores/GuildMemberRequesterStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import StageChannelRoleStore from "StageChannelRoleStore.tsx";
import StageInstanceStore from "StageInstanceStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

function sortKey(speaker) {
  let connectedOn;
  let role;
  let type;
  let user;
  let userNick;
  let voiceState;
  ({ role, connectedOn, voiceState } = speaker);
  let str = "\u0001";
  let str2 = "\u0001";
  ({ user, userNick, type } = speaker);
  if (speaker.speaker) {
    str2 = "\0";
  }
  let str3 = str;
  if (type === obj2.STREAM) {
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
  const padStartResult = combined.padStart(3, "0");
  return "" + str2 + str3 + str4 + str + padStartResult + connectedOn + getParticipantUserKeyDefault(userNick, user);
}
function requestToSpeakSortKey(user) {
  let id;
  user = user.user;
  const requestToSpeakTimestamp = user.voiceState.requestToSpeakTimestamp;
  if (null == requestToSpeakTimestamp) {
    id = user.id;
  } else {
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    id = "" + Date.parse(requestToSpeakTimestamp) + user.id;
  }
  return id;
}
function getParticipantIndex(arg0) {
  let blocked;
  let ignored;
  let isFriend;
  let role;
  let rtsState;
  let speaker;
  let tmp12;
  ({ role, rtsState } = arg0);
  ({ speaker, blocked, ignored, isFriend } = arg0);
  const items = [];
  const tmp3 =
    rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK ||
    rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  if (tmp3) {
    items.push(obj.ALL_REQUESTED_TO_SPEAK);
  }
  if (rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK) {
    items.push(obj.REQUESTED_TO_SPEAK_ONLY);
  }
  if (speaker) {
    items.push(obj.SPEAKER);
    tmp12 = obj;
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
const getComparator = SortedVoiceStateStore.getComparator;
const StageChannelParticipantNamedIndex = {
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
let obj2 = { VOICE: "VOICE", STREAM: "STREAM" };
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelParticipants.tsx");
class StageChannelParticipants {
  constructor(channelId) {
    const merged = Object.assign({ participants: null, _participantsIndex: null, _requestToSpeakIndex: null });
    merged[0] = {};
    const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap(getParticipantIndex, sortKey);
    merged[1] = secondaryIndexMap;
    const secondaryIndexMap1 = new SecondaryIndexMap.SecondaryIndexMap(() => [], requestToSpeakSortKey);
    merged[2] = secondaryIndexMap1;
    merged.channelId = channelId;
    const channel = ChannelStore.getChannel(channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    merged.guildId = guildId;
    return merged;
  }
  _getParticipantsForUser(userId, arg1) {
    let connectedOn;
    let encodeStreamKeyResult;
    let obj3;
    let obj4;
    let tmp11Result;
    const self = this;
    const items = [];
    const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(this.channelId, userId);
    if (null == voiceStateForChannel) {
      return items;
    } else {
      const user = UserStore.getUser(userId);
      if (null == user) {
        const isPublicResult = null != self.guildId && StageInstanceStore.isPublic(self.channelId);
        if (isPublicResult) {
          const member = GuildMemberRequesterStore.requestMember(self.guildId, userId);
        }
        return items;
      } else {
        let first = null;
        if (null != arg1) {
          first = arg1[0];
        }
        let member1 = null;
        if (null != self.guildId) {
          member1 = GuildMemberStore.getMember(self.guildId, userId);
        }
        let nick;
        if (member1 != null) {
          nick = member1.nick;
        }
        if (nick == null) {
          const obj = NicknameUtilsDefault;
          nick = obj.getName(self.guildId, self.channelId, user);
        }
        obj2 = {
          user,
          userNick: obj3.getName(self.guildId, self.channelId, user),
          nick,
          comparator: getComparator(voiceStateForChannel, nick),
          voiceState: voiceStateForChannel,
          role: obj4.getHighestHoistedRole(self.guildId, userId),
          speaker: StageChannelRoleStore.isSpeaker(userId, self.channelId),
          member: member1,
          blocked: RelationshipStore.isBlocked(user.id),
          ignored: RelationshipStore.isIgnored(user.id),
          isFriend: RelationshipStore.isFriend(user.id),
          connectedOn,
        };
        obj3 = NicknameUtilsDefault;
        connectedOn = undefined;
        obj4 = useGuildMemberDisplayRole;
        if (first != null) {
          connectedOn = first.connectedOn;
        }
        if (connectedOn == null) {
          const _Date = Date;
          connectedOn = Date.now();
        }
        const obj5 = {
          type: obj2.VOICE,
          id: user.id,
          rtsState: tmp11Result.getAudienceRequestToSpeakState(voiceStateForChannel),
        };
        const merged = Object.assign(obj2);
        tmp11Result = useAudienceRequestToSpeakState;
        items.push(obj5);
        let streamForUser = ApplicationStreamingStore.getStreamForUser(userId, self.guildId);
        const tmp19 = obj2;
        if (streamForUser == null) {
          streamForUser = ApplicationStreamingStore.getActiveStreamForUser(userId, self.guildId);
        }
        if (null != streamForUser) {
          if (streamForUser.channelId === self.channelId) {
            const obj6 = {
              id: encodeStreamKeyResult,
              type: tmp19.STREAM,
              rtsState: useAudienceRequestToSpeakState.RequestToSpeakStates.NONE,
            };
            const tmp11Result2 = StreamKeyUtils;
            encodeStreamKeyResult = tmp11Result2.encodeStreamKey(streamForUser);
            const merged1 = Object.assign(obj2);
            items.push(obj6);
          }
        }
        return items;
      }
    }
  }
  updateParticipant(arg0) {
    const self = this;
    let closure_0 = arg0;
    let result = this._getParticipantsForUser(arg0, arr);
    let flag = null != arr || 0 !== result.length;
    if (flag) {
      if (this.participants[arg0] != null) {
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
        if (id.id === closure_0) {
          const rtsState = id.rtsState;
          const tmp6 =
            rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK ||
            rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
          if (tmp6) {
            const _requestToSpeakIndex2 = self._requestToSpeakIndex;
            const result1 = _requestToSpeakIndex2.set(closure_0, id);
          }
        }
        const _requestToSpeakIndex = self._requestToSpeakIndex;
        _requestToSpeakIndex.delete(closure_0);
      });
      this.participants[arg0] = result;
      flag = true;
    }
    return flag;
  }
  rebuild() {
    const self = this;
    const channel = ChannelStore.getChannel(this.channelId);
    if (null != channel) {
      if (channel.isGuildStageVoice()) {
        const _Set = Set;
        const _Object = Object;
        const self2 = this;
        const self3 = this;
        const _participantsIndex = self._participantsIndex;
        set = new Set(Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id)));
        _participantsIndex.clear();
        const _requestToSpeakIndex = self._requestToSpeakIndex;
        _requestToSpeakIndex.clear();
        self.participants = {};
        const item = set.forEach((item) => self.updateParticipant(item));
        return true;
      }
    }
    return false;
  }
  size(arg0) {
    const _participantsIndex = this._participantsIndex;
    return _participantsIndex.size(arg0);
  }
  toArray(arg0) {
    const _participantsIndex = this._participantsIndex;
    return _participantsIndex.values(arg0, true);
  }
  getParticipant(arg0) {
    const _participantsIndex = this._participantsIndex;
    let value = _participantsIndex.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  getRequestToSpeakParticipants() {
    const _requestToSpeakIndex = this._requestToSpeakIndex;
    return _requestToSpeakIndex.values(undefined, true);
  }
}
const prototype = StageChannelParticipants.prototype;
Object.defineProperty(prototype, "version", {
  get: function version() {
    return this._participantsIndex.version;
  },
  set: undefined,
});
Object.defineProperty(prototype, "requestToSpeakVersion", {
  get: function requestToSpeakVersion() {
    return this._requestToSpeakIndex.version;
  },
  set: undefined,
});

export default StageChannelParticipants;
export { StageChannelParticipantNamedIndex };
export const StageChannelParticipantTypes = obj2;
export const isRequestedToSpeakAll = function isRequestedToSpeakAll(rtsState) {
  const tmp3 =
    rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK ||
    rtsState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
  return tmp3;
};
