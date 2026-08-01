// === Module 10525: sortKey ===

// Module 10525 (sortKey)
import participantFromServer from "participantFromServer";
import reset from "reset";
import fetchFingerprint from "fetchFingerprint";
import callConnect from "callConnect";
import ensureGuildLoaded from "ensureGuildLoaded";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import anyoneHasFlagInContext from "anyoneHasFlagInContext";
import mergeGuildAvatar from "mergeGuildAvatar";
import makeTimeoutKey from "makeTimeoutKey";
import updateVoiceState from "updateVoiceState";
import ParticipantTypes from "ParticipantTypes";
import ME from "ME";
import { MediaEngineContextTypes } from "DesktopSources";

let closure_14;
let closure_15;
let closure_16;
let map1;
const require = arg1;
function sortKey(type) {
  type = type.type;
  if (constants.ACTIVITY === type) {
    const _HermesInternal3 = HermesInternal;
    return "\u0001" + type.sortKey;
  } else {
    if (tmp.HIDDEN_STREAM !== type) {
      if (tmp.STREAM !== type) {
        if (tmp.USER === type) {
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
          return "" + str + importDefault(5021)(type.userNick, type.user);
        }
      }
    }
    let str4 = "\u0003";
    if (type.userVideo) {
      str4 = "\u0002";
    }
    const _HermesInternal2 = HermesInternal;
    return "" + str4 + importDefault(5021)(type.userNick, type.user) + "\u0003";
  }
}
({ isStreamParticipant: map1, ParticipantTypes: closure_14 } = ParticipantTypes);
({ ActivityTypes: closure_15, ChannelTypes: closure_16 } = ME);
const __EMBEDDED_ACTIVITIES__ = "__EMBEDDED_ACTIVITIES__";
let obj = { VIDEO: "VIDEO", STREAM: "STREAM", FILTERED: "FILTERED", SPEAKING: "SPEAKING", ACTIVITY: "ACTIVITY", NOT_POPPED_OUT: "NOT_POPPED_OUT" };
let result = require("fetchFingerprint").fileFinishedImporting("modules/calls/ChannelRTCParticipants.tsx");
class ChannelRTCParticipants {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    obj[1] = {};
    set = new Set();
    obj[2] = set;
    set1 = new Set();
    obj[3] = set1;
    secondaryIndexMap = new require("version").SecondaryIndexMap((type) => {
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
            items.push(tmp11.FILTERED);
          }
          tmp11 = constants2;
          tmp13 = type.localVideoDisabled || type.isPoppedOut;
        }
        if (type.type === tmp.ACTIVITY) {
          items.push(constants2.ACTIVITY);
        }
        if (!tmp17) {
          items.push(constants2.NOT_POPPED_OUT);
        }
        return items;
      }
      if (callback(type)) {
        items.push(constants2.STREAM);
        let isPoppedOut = type.type === tmp.HIDDEN_STREAM;
        if (!isPoppedOut) {
          isPoppedOut = null == type.streamId;
        }
        if (!isPoppedOut) {
          isPoppedOut = type.isPoppedOut;
        }
        if (!isPoppedOut) {
          items.push(tmp7.FILTERED);
        }
        tmp7 = constants2;
      }
    }, sortKey);
    obj[4] = secondaryIndexMap;
    obj.channelId = global;
    return obj;
  }
}
const prototype = ChannelRTCParticipants.prototype;
Object.defineProperty(prototype, "version", {
  get: function version() {
    return this.participantByIndex.version;
  },
  set: undefined
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
  let self = this;
  self = this;
  const channel = store3.getChannel(this.channelId);
  if (null != channel) {
    if (channel.type !== constants2.GUILD_TEXT) {
      self.call = call.getCall(self.channelId);
      if (channel.isPrivate()) {
        return false;
      }
      if (channel.isGuildVocalOrThread()) {
        const _Object = Object;
        let recipients = Object.keys(store4.getVoiceStatesForChannel(channel.id));
      } else {
        recipients = channel.recipients;
      }
      const set = new Set(recipients);
      let set1 = set;
      set.add(store2.getId());
      let arr = set;
      if (self.guildRingingUsers.size > 0) {
        const _Set = Set;
        const items = [];
        HermesBuiltin.arraySpread(self.guildRingingUsers, HermesBuiltin.arraySpread(set, 0));
        set1 = new Set(items);
        arr = set1;
      }
      const allActiveStreamsForChannel = authStore.getAllActiveStreamsForChannel(self.channelId);
      const item = allActiveStreamsForChannel.forEach((ownerId) => set1.add(ownerId.ownerId));
      const participantByIndex = self.participantByIndex;
      participantByIndex.clear();
      self.participants = {};
      const item1 = arr.forEach((arg0) => self.updateParticipant(arg0));
      const result = self.updateEmbeddedActivities();
      return true;
    }
  }
  return false;
};
prototype["getParticipant"] = function getParticipant(arg0) {
  const participantByIndex = this.participantByIndex;
  let value = participantByIndex.get(arg0);
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
  let self = this;
  self = this;
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
prototype["updateParticipantSpeaking"] = function updateParticipantSpeaking(f73941) {
  const self = this;
  let closure_0 = f73941;
  let flag;
  if (this.participants[f73941] != null) {
    flag = arr.reduce((arg0, type) => {
      let flag = arg0;
      if (type.type === outer1_14.USER) {
        let obj = callback(outer1_2[15]);
        obj = { userId: null, checkIsMuted: true };
        obj[0] = callback;
        const isSpeaking = obj.getIsSpeaking(obj);
        const isSoundSharingResult = outer1_9.isSoundSharing(callback);
        const participantByIndex = self.participantByIndex;
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
          tmp8.lastSpoke[tmp4] = Date.now();
        }
        const participantByIndex2 = tmp8.participantByIndex;
        obj = {};
        const merged = Object.assign(type);
        obj.speaking = isSpeaking;
        obj.lastSpoke = self.lastSpoke[callback];
        obj.soundsharing = isSoundSharingResult;
        const result = participantByIndex2.set(type.id, obj);
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
};
prototype["updateParticipantQuality"] = function updateParticipantQuality(f73948, closure_1, closure_2) {
  const self = this;
  let closure_0 = closure_2;
  let flag;
  if (this.participants[f73948] != null) {
    flag = arr.reduce((arg0, type) => {
      let flag = arg0;
      if (type.type === outer1_14.STREAM) {
        const participantByIndex = self.participantByIndex;
        const obj = {};
        const merged = Object.assign(type);
        obj.maxResolution = closure_1;
        obj.maxFrameRate = closure_0;
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
  const embeddedActivitiesForChannelIncludingHidden = store.getEmbeddedActivitiesForChannelIncludingHidden(this.channelId);
  const selfEmbeddedActivityForChannel = store.getSelfEmbeddedActivityForChannel(this.channelId);
  let uniqByResult = embeddedActivitiesForChannelIncludingHidden;
  if (null != selfEmbeddedActivityForChannel) {
    const items = [];
    items[HermesBuiltin.arraySpread(embeddedActivitiesForChannelIncludingHidden, 0)] = selfEmbeddedActivityForChannel;
    uniqByResult = require(12) /* apply */.uniqBy(items, (compositeInstanceId) => compositeInstanceId.compositeInstanceId);
    const obj = require(12) /* apply */;
  }
  const ContentClassificationEmbeddedActivityFilterExperiment = require(10528) /* apexExperiment */.ContentClassificationEmbeddedActivityFilterExperiment;
  const currentUser = authStore2.getCurrentUser();
  let nsfwAllowed;
  if (currentUser != null) {
    nsfwAllowed = currentUser.nsfwAllowed;
  }
  let found = uniqByResult;
  if (!nsfwAllowed) {
    found = uniqByResult;
    if (ContentClassificationEmbeddedActivityFilterExperiment.getConfig({ location: "rtc_participants" }).enabled) {
      found = uniqByResult.filter((contentClassification) => !callback(table[18]).isAgeRestrictedClassificationReference(contentClassification.contentClassification));
    }
  }
  return found;
};
prototype["_getParticipantsForEmbeddedActivities"] = function _getParticipantsForEmbeddedActivities() {
  const self = this;
  const result = this._getEmbeddedActivities();
  return result.map((applicationId) => {
    let compositeInstanceId;
    let participants;
    const obj = { type: outer1_14.ACTIVITY, id: null, applicationId: null, activityType: null, activityUrl: null, participants: null, guildId: null, sortKey: null };
    ({ applicationId, compositeInstanceId } = applicationId);
    if (null != compositeInstanceId) {
      const _HermesInternal2 = HermesInternal;
      let combined = "activity-" + applicationId + "-" + compositeInstanceId;
    } else {
      const _HermesInternal = HermesInternal;
      combined = "activity-" + applicationId;
    }
    obj[1] = combined;
    obj[2] = applicationId.applicationId;
    obj[3] = outer1_15.PLAYING;
    ({ url: obj[4], participants } = applicationId);
    if (participants == null) {
      participants = [];
    }
    const items = [...participants];
    obj[5] = items;
    const channel = outer1_7.getChannel(self.channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    if (guildId == null) {
      guildId = null;
    }
    obj[6] = guildId;
    obj[7] = arg1.toString();
    return obj;
  });
};
prototype["_getParticipantsForUser"] = function _getParticipantsForUser(userId) {
  const items = [];
  const user = authStore2.getUser(userId);
  if (null == user) {
    return items;
  } else {
    const self = this;
    const voiceStateForChannel = store4.getVoiceStateForChannel(this.channelId, userId);
    const voicePlatformForChannel = store4.getVoicePlatformForChannel(this.channelId, userId);
    const channel = store3.getChannel(this.channelId);
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
      let obj = { type: null };
      obj[0] = constants.USER;
      const merged = Object.assign(authStore3.getUserStreamData(userId, guildId));
      obj.user = user;
      obj.id = user.id;
      obj.voiceState = voiceStateForChannel;
      obj.voicePlatform = voicePlatformForChannel;
      let obj1 = require(10527) /* useIsSpeaking */;
      obj = { userId: null, checkIsMuted: true };
      obj[0] = userId;
      obj.speaking = obj1.getIsSpeaking(obj);
      let num = self.lastSpoke[userId];
      if (num == null) {
        num = 0;
      }
      obj.lastSpoke = num;
      obj.soundsharing = soundSharing.isSoundSharing(userId);
      obj.ringing = flag;
      obj.userNick = importDefault(4383).getName(guildId, self.channelId, user);
      const obj4 = importDefault(4383);
      const tmp8 = require;
      obj.userAvatarDecoration = require(8373) /* useAvatarDecoration */.getAvatarDecoration(user, guildId);
      obj.localVideoDisabled = localVideoDisabled.isLocalVideoDisabled(user.id);
      const poppedOutParticipants = self.poppedOutParticipants;
      obj.isPoppedOut = poppedOutParticipants.has(user.id);
      items.push(obj);
      const tmp8Result = require(8373) /* useAvatarDecoration */;
    }
    let streamForUser = authStore.getStreamForUser(userId, guildId);
    if (streamForUser == null) {
      streamForUser = obj6.getActiveStreamForUser(userId, guildId);
    }
    if (null != streamForUser) {
      if (streamForUser.channelId === self.channelId) {
        const encodeStreamKeyResult = require(4257) /* isStreamKey */.encodeStreamKey(streamForUser);
        const participant = self.getParticipant(encodeStreamKeyResult);
        const obj12 = require(4257) /* isStreamKey */;
        let type;
        if (participant != null) {
          type = participant.type;
        }
        let tmp18 = null;
        if (type === constants.STREAM) {
          let tmp19;
          if (null != participant.maxResolution) {
            obj = {};
            const merged1 = Object.assign(participant.maxResolution);
            tmp19 = obj;
          }
          obj1 = { maxResolution: null, maxFrameRate: null };
          obj1[0] = tmp19;
          obj1[1] = participant.maxFrameRate;
          tmp18 = obj1;
        }
        const obj2 = {};
        const merged2 = Object.assign(authStore3.getUserStreamData(userId, guildId, MediaEngineContextTypes.STREAM));
        const merged3 = Object.assign(tmp18);
        obj2.type = streamForUser.ownerId === store2.getId() && obj6.isSelfStreamHidden(self.channelId) ? constants.HIDDEN_STREAM : constants.STREAM;
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
        const tmp15 = streamForUser.ownerId === store2.getId() && obj6.isSelfStreamHidden(self.channelId);
        obj2.userNick = importDefault(4383).getName(guildId, self.channelId, user);
        obj2.stream = streamForUser;
        const poppedOutParticipants2 = self.poppedOutParticipants;
        obj2.isPoppedOut = poppedOutParticipants2.has(encodeStreamKeyResult);
        items.push(obj2);
        const obj10 = importDefault(4383);
      }
    }
    return items;
  }
};

export default ChannelRTCParticipants;
export const getEmbeddedActivityParticipantId = function getEmbeddedActivityParticipantId(arg0) {
  let applicationId;
  let instanceId;
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
  let tmp;
  let tmp2;
  [, tmp] = arg0;
  [, tmp2] = arg1;
  return tmp === tmp2;
};
export const ChannelRTCParticipantsIndexes = obj;