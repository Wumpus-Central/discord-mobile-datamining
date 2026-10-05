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
import CallConstants from "CallConstants.tsx";
import Constants_mod from "../../Constants.tsx";
import Constants_mod2 from "../../../discord_common/js/packages/media-engine/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let set;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
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
({ isStreamParticipant: map1, ParticipantTypes: closure_14 } = CallConstants);
let Constants = Constants_mod2;
({ ActivityTypes: closure_15, ChannelTypes: closure_16 } = Constants);
Constants = Constants_mod2;
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
let result = size.fileFinishedImporting("modules/calls/ChannelRTCParticipants.tsx");
class ChannelRTCParticipants {
  constructor(channelId) {
    const merged = Object.assign({
      participants: null,
      lastSpoke: null,
      poppedOutParticipants: null,
      participantByIndex: null,
    });
    merged[0] = {};
    merged[1] = {};
    merged[2] = new Set();
    new Set();
    const secondaryIndexMap = new SecondaryIndexMap.SecondaryIndexMap((type) => {
      const items = [];
      const tmp2 = type.type === constants.USER && type.speaking;
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
          const tmp13 = type.localVideoDisabled || type.isPoppedOut;
          if (!tmp13) {
            items.push(constants2.FILTERED);
          }
        }
        if (type.type === constants.ACTIVITY) {
          items.push(constants2.ACTIVITY);
        }
        const tmp17 = "isPoppedOut" in type && type.isPoppedOut;
        if (!tmp17) {
          items.push(constants2.NOT_POPPED_OUT);
        }
        return items;
      }
      if (closure_1_13(type)) {
        items.push(constants2.STREAM);
        const isPoppedOut = type.type === constants.HIDDEN_STREAM || null == type.streamId || type.isPoppedOut;
        if (!isPoppedOut) {
          items.push(constants2.FILTERED);
        }
      }
    }, sortKey);
    merged[3] = secondaryIndexMap;
    merged.channelId = channelId;
    return merged;
  }
  size(arg0) {
    const participantByIndex = this.participantByIndex;
    return participantByIndex.size(arg0);
  }
  toArray(arg0) {
    const participantByIndex = this.participantByIndex;
    return participantByIndex.values(arg0, true);
  }
  rebuild() {
    const self = this;
    const channel = ChannelStore.getChannel(this.channelId);
    if (null != channel) {
      if (channel.type !== constants3.GUILD_TEXT) {
        let recipients;
        self.call = CallStore.getCall(self.channelId);
        if (channel.isPrivate()) {
          return false;
        }
        const _Set = Set;
        if (channel.isGuildVocalOrThread()) {
          const _Object = Object;
          recipients = Object.keys(VoiceStateStore.getVoiceStatesForChannel(channel.id));
        } else {
          recipients = channel.recipients;
        }
        const self2 = this;
        const self3 = this;
        const _Set1 = new _Set(recipients);
        _Set1.add(AuthenticationStore.getId());
        const allActiveStreamsForChannel = ApplicationStreamingStore.getAllActiveStreamsForChannel(self.channelId);
        const item = allActiveStreamsForChannel.forEach((ownerId) => _Set1.add(ownerId.ownerId));
        const participantByIndex = self.participantByIndex;
        participantByIndex.clear();
        self.participants = {};
        const item1 = _Set1.forEach((item) => self.updateParticipant(item));
        const result = self.updateEmbeddedActivities();
        return true;
      }
    }
    return false;
  }
  getParticipant(arg0) {
    const participantByIndex = this.participantByIndex;
    let value = participantByIndex.get(arg0);
    if (value == null) {
      value = null;
    }
    return value;
  }
  updateEmbeddedActivities() {
    return this.updateParticipant(__EMBEDDED_ACTIVITIES__);
  }
  hasEmbeddedActivity() {
    return this.size(obj.ACTIVITY) > 0;
  }
  updateParticipant(arg0) {
    let result;
    const self = this;
    if (arg0 === __EMBEDDED_ACTIVITIES__) {
      result = self._getParticipantsForEmbeddedActivities();
    } else {
      result = self._getParticipantsForUser(arg0);
    }
    let flag = null != arr || 0 !== result.length;
    if (flag) {
      if (this.participants[arg0] != null) {
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
  }
  updateParticipantSpeaking(id) {
    const self = this;
    const userId = id;
    let flag;
    if (this.participants[id] != null) {
      flag = arr.reduce((acc, type) => {
        let flag = acc;
        if (type.type === constants.USER) {
          const obj2 = { userId, checkIsMuted: true };
          const obj = useIsSpeaking;
          const isSpeaking = obj.getIsSpeaking(obj2);
          const participantByIndex = self.participantByIndex;
          const isSoundSharingResult = SpeakingStore.isSoundSharing(userId);
          const value = participantByIndex.get(type.id);
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
          const id = type.id;
          const obj3 = { speaking: isSpeaking, lastSpoke: self.lastSpoke[userId], soundsharing: isSoundSharingResult };
          set = participantByIndex2.set;
          const merged = Object.assign(type);
          const result = set(id, obj3);
          flag = true;
        } else {
          return flag;
        }
      }, false);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  updateParticipantQuality(arg0, maxResolution, maxFrameRate) {
    const self = this;
    let flag;
    if (this.participants[arg0] != null) {
      flag = arr.reduce((acc, type) => {
        let flag = acc;
        if (type.type === constants.STREAM) {
          const participantByIndex = self.participantByIndex;
          const id = type.id;
          const obj = { maxResolution, maxFrameRate };
          set = participantByIndex.set;
          const merged = Object.assign(type);
          const result = set(id, obj);
          flag = true;
        }
        return flag;
      }, false);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  }
  updateParticipantPoppedOut(participantId, arg1) {
    const poppedOutParticipants = this.poppedOutParticipants;
    const tmp = arg1;
    if (tmp) {
      poppedOutParticipants.add(participantId);
    } else {
      poppedOutParticipants.delete(participantId);
    }
  }
  _getEmbeddedActivities() {
    const embeddedActivitiesForChannelIncludingHidden =
      EmbeddedActivitiesStore.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId);
    const selfEmbeddedActivityForChannel = EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(this.channelId);
    let uniqByResult = embeddedActivitiesForChannelIncludingHidden;
    if (null != selfEmbeddedActivityForChannel) {
      let obj = _mod12;
      const items = [];
      items[HermesBuiltin.arraySpread(items, embeddedActivitiesForChannelIncludingHidden, 0)] =
        selfEmbeddedActivityForChannel;
      uniqByResult = obj.uniqBy(items, (compositeInstanceId) => compositeInstanceId.compositeInstanceId);
    }
    const ContentClassificationEmbeddedActivityFilterExperiment =
      ContentClassificationEmbeddedActivityFilterExperiment2.ContentClassificationEmbeddedActivityFilterExperiment;
    const enabled = ContentClassificationEmbeddedActivityFilterExperiment.getConfig({
      location: "rtc_participants",
    }).enabled;
    const currentUser = UserStore.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    let found = uniqByResult;
    if (!nsfwAllowed) {
      found = uniqByResult;
      if (enabled) {
        found = uniqByResult.filter((contentClassification) => {
          const obj = ContentClassificationReference;
          return !obj.isAgeRestrictedClassificationReference(contentClassification.contentClassification);
        });
      }
    }
    return found;
  }
  _getParticipantsForEmbeddedActivities() {
    const self = this;
    const result = this._getEmbeddedActivities();
    return result.map((applicationId, index) => {
      let combined;
      let compositeInstanceId;
      let guildId;
      let items;
      let participants;
      const obj = {
        type: constants.ACTIVITY,
        id: combined,
        applicationId: applicationId.applicationId,
        activityType: constants2.PLAYING,
        activityUrl: null,
        participants: items,
        guildId,
        sortKey: index.toString(),
      };
      ({ applicationId, compositeInstanceId } = applicationId);
      if (null != compositeInstanceId) {
        const _HermesInternal2 = HermesInternal;
        combined = "activity-" + applicationId + "-" + compositeInstanceId;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "activity-" + applicationId;
      }
      ({ url: obj.activityUrl, participants } = applicationId);
      if (participants == null) {
        participants = [];
      }
      items = [...participants];
      const channel = ChannelStore.getChannel(self.channelId);
      guildId = undefined;
      if (channel != null) {
        guildId = channel.getGuildId();
      }
      if (guildId == null) {
        guildId = null;
      }
      return obj;
    });
  }
  _getParticipantsForUser(userId) {
    let flag2;
    let num;
    let obj10;
    let obj2;
    let obj3;
    let obj4;
    let poppedOutParticipants;
    let poppedOutParticipants2;
    let tmp8Result;
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
      if (flag == null) {
        flag = false;
      }
      const tmp3 = null != voiceStateForChannel || flag;
      if (tmp3) {
        const obj = {
          type: constants.USER,
          user,
          id: user.id,
          voiceState: voiceStateForChannel,
          voicePlatform: voicePlatformForChannel,
          speaking: obj2.getIsSpeaking(obj3),
          lastSpoke: num,
          soundsharing: SpeakingStore.isSoundSharing(userId),
          ringing: flag,
          userNick: obj4.getName(guildId, self.channelId, user),
          userAvatarDecoration: tmp8Result.getAvatarDecoration(user, guildId),
          localVideoDisabled: MediaEngineStore.isLocalVideoDisabled(user.id),
          isPoppedOut: poppedOutParticipants.has(user.id),
        };
        const merged = Object.assign(VideoStreamStore.getUserStreamData(userId, guildId));
        obj3 = { userId, checkIsMuted: true };
        num = self.lastSpoke[userId];
        obj2 = useIsSpeaking;
        if (num == null) {
          num = 0;
        }
        obj4 = NicknameUtilsDefault;
        poppedOutParticipants = self.poppedOutParticipants;
        tmp8Result = useAvatarDecoration;
        items.push(obj);
      }
      let streamForUser = ApplicationStreamingStore.getStreamForUser(userId, guildId);
      if (streamForUser == null) {
        streamForUser = ApplicationStreamingStore.getActiveStreamForUser(userId, guildId);
      }
      if (MediaEngineStore.supports(constants5.VIDEO)) {
        if (null != streamForUser) {
          if (streamForUser.channelId === self.channelId) {
            const obj12 = StreamKeyUtils;
            const encodeStreamKeyResult = obj12.encodeStreamKey(streamForUser);
            const participant = self.getParticipant(encodeStreamKeyResult);
            let type;
            const tmp17 =
              streamForUser.ownerId === AuthenticationStore.getId() &&
              ApplicationStreamingStore.isSelfStreamHidden(self.channelId);
            if (participant != null) {
              type = participant.type;
            }
            let tmp20 = null;
            if (type === constants.STREAM) {
              let tmp21;
              if (null != participant.maxResolution) {
                const obj5 = {};
                const merged1 = Object.assign(participant.maxResolution);
                tmp21 = obj5;
              }
              tmp20 = { maxResolution: tmp21, maxFrameRate: participant.maxFrameRate };
              const obj7 = { maxResolution: tmp21, maxFrameRate: participant.maxFrameRate };
            }
            const obj8 = {
              type: tmp17 ? constants.HIDDEN_STREAM : constants.STREAM,
              id: encodeStreamKeyResult,
              userVideo: flag2,
              user,
              userNick: obj10.getName(guildId, self.channelId, user),
              stream: streamForUser,
              isPoppedOut: poppedOutParticipants2.has(encodeStreamKeyResult),
            };
            const merged2 = Object.assign(VideoStreamStore.getUserStreamData(userId, guildId, constants4.STREAM));
            const merged3 = Object.assign(tmp20);
            flag2 = undefined;
            if (voiceStateForChannel != null) {
              flag2 = voiceStateForChannel.selfVideo;
            }
            if (flag2 == null) {
              flag2 = false;
            }
            poppedOutParticipants2 = self.poppedOutParticipants;
            obj10 = NicknameUtilsDefault;
            items.push(obj8);
          }
        }
      }
      return items;
    }
  }
}
Object.defineProperty(ChannelRTCParticipants.prototype, "version", {
  get: function version() {
    return this.participantByIndex.version;
  },
  set: undefined,
});

export default ChannelRTCParticipants;
export const getEmbeddedActivityParticipantId = function getEmbeddedActivityParticipantId(arg0) {
  let applicationId;
  let combined;
  let instanceId;
  ({ applicationId, instanceId } = arg0);
  if (null != instanceId) {
    const _HermesInternal2 = HermesInternal;
    combined = "activity-" + applicationId + "-" + instanceId;
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
  let tmp;
  let tmp2;
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
};
export { ChannelRTCParticipantsIndexes };
