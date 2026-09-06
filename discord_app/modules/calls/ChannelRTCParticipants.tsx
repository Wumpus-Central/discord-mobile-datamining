// discord_app/modules/calls/ChannelRTCParticipants.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import SecondaryIndexMap from "../../../discord_common/js/packages/secondary-index-map/SecondaryIndexMap.tsx";
import StreamKeyUtils from "../go_live/utils/StreamKeyUtils.tsx";
import NicknameUtilsDefault from "../../utils/NicknameUtils.tsx";
import getParticipantUserKeyDefault from "getParticipantUserKey.tsx";
import useAvatarDecoration from "../collectibles/avatar_decorations/useAvatarDecoration.tsx";
import useIsSpeaking from "../../hooks/useIsSpeaking.tsx";
import ContentClassificationEmbeddedActivityFilterExperiment2 from "../activities/ContentClassificationEmbeddedActivityFilterExperiment.tsx";
import ContentClassificationReference from "../content_classification/ContentClassificationReference.tsx";
import EmbeddedActivitiesStore from "../activities/EmbeddedActivitiesStore.tsx";
import ApplicationStreamingStore from "../../stores/ApplicationStreamingStore.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import CallStore from "../../stores/CallStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import SpeakingStore from "../../stores/SpeakingStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import VideoStreamStore from "../../stores/VideoStreamStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";

require = fn;
function sortKey(type) {
  type = type.type;
  if (constants.ACTIVITY === type) {
    const _HermesInternal3 = HermesInternal;
    return "\u0001" + type.sortKey;
  } else {
    if (constants.HIDDEN_STREAM !== type) {
      if (constants.STREAM !== type) {
        if (constants.USER === type) {
          const voiceState = type.voiceState;
          let selfVideo;
          if (voiceState != null) {
            selfVideo = voiceState.selfVideo;
          }
          let str = "\u0003";
          if (!selfVideo) {
            const voiceState2 = type.voiceState;
            let selfStream;
            if (voiceState2 != null) {
              selfStream = voiceState2.selfStream;
            }
            str = "\u0005";
            if (selfStream) {
              str = "\u0004";
            }
          }
          const _HermesInternal = HermesInternal;
          return "" + str + getParticipantUserKeyDefault(type.userNick, type.user);
        }
      }
    }
    let str4 = "\u0003";
    if (type.userVideo) {
      str4 = "\u0002";
    }
    const _HermesInternal2 = HermesInternal;
    return "" + str4 + getParticipantUserKeyDefault(type.userNick, type.user) + "\u0003";
  }
}
const CallConstants = fn(4581);
({ isStreamParticipant: map1, ParticipantTypes: closure_14 } = CallConstants);
let Constants = fn(1074);
({ ActivityTypes: closure_15, ChannelTypes: closure_16 } = Constants);
Constants = fn(4585);
({ MediaEngineContextTypes: closure_17, Features: closure_18 } = Constants);
const __EMBEDDED_ACTIVITIES__ = "__EMBEDDED_ACTIVITIES__";
const ChannelRTCParticipantsIndexes = {
  VIDEO: "VIDEO",
  STREAM: "STREAM",
  FILTERED: "FILTERED",
  SPEAKING: "SPEAKING",
  ACTIVITY: "ACTIVITY",
  NOT_POPPED_OUT: "NOT_POPPED_OUT",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/calls/ChannelRTCParticipants.tsx");
class ChannelRTCParticipants {
  constructor(arg0) {
    merged = Object.assign({
      participants: null,
      lastSpoke: null,
      guildRingingUsers: null,
      poppedOutParticipants: null,
      participantByIndex: null,
    });
    merged[0] = {};
    merged[1] = {};
    set = new Set();
    merged[2] = set;
    set1 = new Set();
    merged[3] = set1;
    secondaryIndexMap = new closure_0(closure_2[14]).SecondaryIndexMap((type) => {
      const items = [];
      if (tmp2) {
        items.push(constants2.SPEAKING);
      }
      if (type.type === constants.USER) {
        const voiceState = type.voiceState;
        let selfVideo;
        if (voiceState != null) {
          selfVideo = voiceState.selfVideo;
        }
        if (selfVideo) {
          items.push(constants2.VIDEO);
          if (!tmp13) {
            items.push(constants2.FILTERED);
          }
          tmp13 = type.localVideoDisabled || type.isPoppedOut;
        }
        if (type.type === constants.ACTIVITY) {
          items.push(constants2.ACTIVITY);
        }
        if (!tmp17) {
          items.push(constants2.NOT_POPPED_OUT);
        }
        return items;
      }
      if (closure_1_13(type)) {
        items.push(constants2.STREAM);
        let isPoppedOut = type.type === constants.HIDDEN_STREAM;
        if (!isPoppedOut) {
          isPoppedOut = null == type.streamId;
        }
        if (!isPoppedOut) {
          isPoppedOut = type.isPoppedOut;
        }
        if (!isPoppedOut) {
          items.push(constants2.FILTERED);
        }
      }
      tmp2 = type.type === constants.USER && type.speaking;
    }, sortKey);
    merged[4] = secondaryIndexMap;
    merged.channelId = global;
    return merged;
  }
}
const prototype = ChannelRTCParticipants.prototype;
Object.defineProperty(prototype, "version", {
  get: function version() {
    return this.participantByIndex.version;
  },
  set: undefined,
});
prototype["size"] = function size(arg0) {
  const participantByIndex = this.participantByIndex;
  return participantByIndex.size(arg0);
};
prototype["toArray"] = function toArray(arg0) {
  const participantByIndex = this.participantByIndex;
  return participantByIndex.values(arg0, true);
};
prototype["rebuild"] = function rebuild() {
  const self = this;
  const channel = ChannelStore.getChannel(this.channelId);
  if (null != channel) {
    if (channel.type !== constants3.GUILD_TEXT) {
      self.call = CallStore.getCall(self.channelId);
      if (channel.isPrivate()) {
        return false;
      }
      if (channel.isGuildVocalOrThread()) {
        const _Object = Object;
        let recipients = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id));
      } else {
        recipients = channel.recipients;
      }
      const set = new Set(recipients);
      let set1 = set;
      set.add(AuthenticationStore.getId());
      let arr = set;
      if (self.guildRingingUsers.size > 0) {
        const _Set = Set;
        const items = [];
        HermesBuiltin.arraySpread(self.guildRingingUsers, HermesBuiltin.arraySpread(set, 0));
        set1 = new Set(items);
        arr = set1;
      }
      const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(self.channelId);
      const item = allActiveStreamsForChannel.forEach((ownerId) => set1.add(ownerId.ownerId));
      const participantByIndex = self.participantByIndex;
      participantByIndex.clear();
      self.participants = {};
      const item1 = arr.forEach((item) => self.updateParticipant(item));
      const result = self.updateEmbeddedActivities();
      return true;
    }
  }
  return false;
};
prototype["getParticipant"] = function getParticipant(arg0) {
  const participantByIndex = this.participantByIndex;
  value = participantByIndex.get(arg0);
  if (value == null) {
    value = null;
  }
  return value;
};
prototype["updateEmbeddedActivities"] = function updateEmbeddedActivities() {
  return this.updateParticipant(__EMBEDDED_ACTIVITIES__);
};
prototype["hasEmbeddedActivity"] = function hasEmbeddedActivity() {
  return this.size(obj.ACTIVITY) > 0;
};
prototype["updateParticipant"] = function updateParticipant(arg0) {
  const self = this;
  if (arg0 === __EMBEDDED_ACTIVITIES__) {
    let result = self._getParticipantsForEmbeddedActivities();
  } else {
    result = self._getParticipantsForUser(arg0);
  }
  let flag = null != arr;
  if (!flag) {
    flag = 0 !== result.length;
  }
  if (flag) {
    if (arr != null) {
      const item = arr.forEach((id) => {
        const participantByIndex = self.participantByIndex;
        participantByIndex.delete(id.id);
      });
    }
    const item1 = result.forEach((id) => {
      const participantByIndex = self.participantByIndex;
      const result = participantByIndex.set(id.id, id);
    });
    self.participants[arg0] = result;
    flag = true;
  }
  return flag;
};
prototype["updateParticipantSpeaking"] = function updateParticipantSpeaking(f78247) {
  const self = this;
  const userId = f78247;
  let flag;
  if (this.participants[f78247] != null) {
    flag = arr.reduce((acc, type) => {
      let flag = acc;
      if (type.type === constants.USER) {
        let obj = { userId, checkIsMuted: true };
        const isSpeaking = obj.getIsSpeaking(obj);
        const participantByIndex = self.participantByIndex;
        value = participantByIndex.get(type.id);
        type = undefined;
        if (value != null) {
          type = value.type;
        }
        if (type === tmp.USER) {
          return flag;
        }
        if (isSpeaking) {
          const _Date = Date;
          self.lastSpoke[userId] = Date.now();
        }
        const participantByIndex2 = self.participantByIndex;
        obj = {};
        const merged = Object.assign(type);
        obj.speaking = isSpeaking;
        obj.lastSpoke = self.lastSpoke[userId];
        obj.soundsharing = SpeakingStore.isSoundSharing(userId);
        const result = participantByIndex2.set(type.id, obj);
        flag = true;
        const isSoundSharingResult = SpeakingStore.isSoundSharing(userId);
      } else {
        return flag;
      }
    }, false);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["updateParticipantQuality"] = function updateParticipantQuality(f78254, maxResolution, maxFrameRate) {
  const self = this;
  let flag;
  if (this.participants[f78254] != null) {
    flag = arr.reduce((acc, type) => {
      let flag = acc;
      if (type.type === constants.STREAM) {
        const participantByIndex = self.participantByIndex;
        const obj = {};
        const merged = Object.assign(type);
        obj.maxResolution = maxResolution;
        obj.maxFrameRate = maxFrameRate;
        const result = participantByIndex.set(type.id, obj);
        flag = true;
      }
      return flag;
    }, false);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["updateGuildRingingUsers"] = function updateGuildRingingUsers(userId, arg1) {
  const guildRingingUsers = this.guildRingingUsers;
  if (arg1) {
    guildRingingUsers.add(userId);
  } else {
    guildRingingUsers.delete(userId);
  }
};
prototype["updateParticipantPoppedOut"] = function updateParticipantPoppedOut(participantId, arg1) {
  const poppedOutParticipants = this.poppedOutParticipants;
  if (arg1) {
    poppedOutParticipants.add(participantId);
  } else {
    poppedOutParticipants.delete(participantId);
  }
};
prototype["_getEmbeddedActivities"] = function _getEmbeddedActivities() {
  const embeddedActivitiesForChannelIncludingHidden =
    EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId);
  const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(this.channelId);
  let uniqByResult = embeddedActivitiesForChannelIncludingHidden;
  if (null != selfEmbeddedActivityForChannel) {
    const items = [];
    items[HermesBuiltin.arraySpread(embeddedActivitiesForChannelIncludingHidden, 0)] = selfEmbeddedActivityForChannel;
    uniqByResult = _mod12.uniqBy(items, (compositeInstanceId) => compositeInstanceId.compositeInstanceId);
  }
  const ContentClassificationEmbeddedActivityFilterExperiment =
    ContentClassificationEmbeddedActivityFilterExperiment2.ContentClassificationEmbeddedActivityFilterExperiment;
  const currentUser = UserStore.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let found = uniqByResult;
  if (!nsfwAllowed) {
    found = uniqByResult;
    if (ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "rtc_participants" }).enabled) {
      found = uniqByResult.filter(
        (contentClassification) =>
          !ContentClassificationReference.isAgeRestrictedClassificationReference(
            contentClassification.contentClassification,
          ),
      );
    }
  }
  return found;
};
prototype["_getParticipantsForEmbeddedActivities"] = function _getParticipantsForEmbeddedActivities() {
  const self = this;
  const result = this._getEmbeddedActivities();
  return result.map((applicationId, index) => {
    const obj = {
      type: constants.ACTIVITY,
      id: null,
      applicationId: null,
      activityType: null,
      activityUrl: null,
      participants: null,
      guildId: null,
      sortKey: null,
    };
    ({ applicationId, compositeInstanceId } = applicationId);
    if (null != compositeInstanceId) {
      const _HermesInternal2 = HermesInternal;
      let combined = "activity-" + applicationId + "-" + compositeInstanceId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "activity-" + applicationId;
    }
    obj.id = combined;
    obj.applicationId = applicationId.applicationId;
    obj.activityType = constants2.PLAYING;
    ({ url: obj.activityUrl, participants } = applicationId);
    if (participants == null) {
      participants = [];
    }
    const items = [...participants];
    obj.participants = items;
    const channel = ChannelStore.getChannel(self.channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (guildId == null) {
      guildId = null;
    }
    obj.guildId = guildId;
    obj.sortKey = index.toString();
    return obj;
  });
};
prototype["_getParticipantsForUser"] = function _getParticipantsForUser(userId) {
  const items = [];
  const user = UserStore.getUser(userId);
  if (null == user) {
    return items;
  } else {
    const self = this;
    const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(this.channelId, userId);
    const voicePlatformForChannel = VoiceStateStore.getVoicePlatformForChannel(this.channelId, userId);
    const channel = ChannelStore.getChannel(this.channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const call = self.call;
    let flag;
    if (call != null) {
      const ringing = call.ringing;
      if (ringing != null) {
        flag = ringing.includes(userId);
      }
    }
    if (!flag) {
      const guildRingingUsers = self.guildRingingUsers;
      flag = guildRingingUsers.has(userId);
    }
    if (flag == null) {
      flag = false;
    }
    if (tmp3) {
      let obj = { type: constants.USER };
      const merged = Object.assign(VideoStreamStore.getUserStreamData(userId, guildId));
      obj.user = user;
      obj.id = user.id;
      obj.voiceState = voiceStateForChannel;
      obj.voicePlatform = voicePlatformForChannel;
      let obj1 = useIsSpeaking;
      obj = { userId, checkIsMuted: true };
      obj.speaking = obj1.getIsSpeaking(obj);
      let num = self.lastSpoke[userId];
      if (num == null) {
        num = 0;
      }
      obj.lastSpoke = num;
      obj.soundsharing = SpeakingStore.isSoundSharing(userId);
      obj.ringing = flag;
      obj.userNick = NicknameUtilsDefault.getName(guildId, self.channelId, user);
      obj.userAvatarDecoration = useAvatarDecoration.getAvatarDecoration(user, guildId);
      obj.localVideoDisabled = MediaEngineStore.isLocalVideoDisabled(user.id);
      const poppedOutParticipants = self.poppedOutParticipants;
      obj.isPoppedOut = poppedOutParticipants.has(user.id);
      items.push(obj);
      const tmp8Result = useAvatarDecoration;
    }
    let streamForUser = ApplicationStreamingStore.getStreamForUser(userId, guildId);
    if (streamForUser == null) {
      streamForUser = ApplicationStreamingStore.getActiveStreamForUser(userId, guildId);
    }
    if (MediaEngineStore.supports(constants5.VIDEO)) {
      if (null != streamForUser) {
        if (streamForUser.channelId === self.channelId) {
          const encodeStreamKeyResult = StreamKeyUtils.encodeStreamKey(streamForUser);
          const participant = self.getParticipant(encodeStreamKeyResult);
          let type;
          if (participant != null) {
            type = participant.type;
          }
          let tmp20 = null;
          if (type === constants.STREAM) {
            let tmp21;
            if (null != participant.maxResolution) {
              obj = {};
              const merged1 = Object.assign(participant.maxResolution);
              tmp21 = obj;
            }
            obj1 = { maxResolution: tmp21, maxFrameRate: participant.maxFrameRate };
            tmp20 = obj1;
          }
          const obj2 = {};
          const merged2 = Object.assign(VideoStreamStore.getUserStreamData(userId, guildId, constants4.STREAM));
          const merged3 = Object.assign(tmp20);
          obj2.type =
            streamForUser.ownerId === AuthenticationStore.getId() &&
            ApplicationStreamingStore.isSelfStreamHidden(self.channelId)
              ? constants.HIDDEN_STREAM
              : constants.STREAM;
          obj2.id = encodeStreamKeyResult;
          let flag2;
          if (voiceStateForChannel != null) {
            flag2 = voiceStateForChannel.selfVideo;
          }
          if (flag2 == null) {
            flag2 = false;
          }
          obj2.userVideo = flag2;
          obj2.user = user;
          const tmp17 =
            streamForUser.ownerId === AuthenticationStore.getId() &&
            ApplicationStreamingStore.isSelfStreamHidden(self.channelId);
          obj2.userNick = NicknameUtilsDefault.getName(guildId, self.channelId, user);
          obj2.stream = streamForUser;
          const poppedOutParticipants2 = self.poppedOutParticipants;
          obj2.isPoppedOut = poppedOutParticipants2.has(encodeStreamKeyResult);
          items.push(obj2);
        }
      }
    }
    return items;
  }
};

export default ChannelRTCParticipants;
export const getEmbeddedActivityParticipantId = function getEmbeddedActivityParticipantId(arg0) {
  ({ applicationId, instanceId } = arg0);
  if (null != instanceId) {
    const _HermesInternal2 = HermesInternal;
    let combined = "activity-" + applicationId + "-" + instanceId;
  } else {
    const _HermesInternal = HermesInternal;
    combined = "activity-" + applicationId;
  }
  return combined;
};
export const activityParticipantIdToApplicationId = function activityParticipantIdToApplicationId(id) {
  let tmp = id;
  if (null != id) {
    tmp = id.split("-")[1];
  }
  return tmp;
};
export { sortKey };
export const areParticipantsEqual = function areParticipantsEqual(arg0, arg1) {
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
};
export { ChannelRTCParticipantsIndexes };
