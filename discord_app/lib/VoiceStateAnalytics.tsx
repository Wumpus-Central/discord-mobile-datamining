// === Module 13703: updateVoiceStates ===

// Module 13703 (updateVoiceStates)
import apply from "apply" /* 12 */;
import closure_2 from "_detectH265HardwareDecode" /* 4529 */;
import closure_3 from "updateVoiceState" /* 4497 */;
import closure_4 from "getVoiceStatesForGuild" /* 4555 */;
import { SpeakingFlags } from "DesktopSources" /* 4542 */;

require = arg1;
const result = require("set").fileFinishedImporting("lib/VoiceStateAnalytics.tsx");
class VoiceStateAnalytics {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    set = new Set();
    obj[1] = set;
    obj[2] = SpeakingFlags.NONE;
    set1 = new Set();
    obj[4] = set1;
    obj[6] = {};
    obj.userId = global;
    setChannelIdResult = obj.setChannelId(arg1);
    return obj;
  }
}
const prototype = VoiceStateAnalytics.prototype;
prototype["updateVoiceStates"] = function updateVoiceStates(userId, channelId) {
  const self = this;
  if (channelId === this.channelId) {
    const totalParticipants = self.totalParticipants;
    totalParticipants.add(userId);
    const _Math = Math;
    self.maxVoiceStateCount = Math.max(closure_4.countVoiceStatesForChannel(channelId), self.maxVoiceStateCount);
  } else {
    if (tmp2) {
      self.totalSpeakers[userId] = SpeakingFlags.NONE;
    }
    if (tmp4) {
      self.setChannelId(channelId);
    }
    tmp2 = null == channelId && userId in self.totalSpeakers;
    tmp4 = userId === self.userId && null != channelId;
  }
};
prototype["getStats"] = function getStats() {
  return { max_voice_state_count: this.maxVoiceStateCount, total_voice_state_count: this.totalParticipants.size, max_listener_count: this.maxListenerCount, total_listener_count: this.totalListeners.size, max_speaker_count: this.maxSpeakerCount, total_speaker_count: Object.keys(this.totalSpeakers).length };
};
prototype["getUserVoiceSettingsStats"] = function getUserVoiceSettingsStats(arg0) {
  settings = settings.getSettings(arg0);
  const set = new Set(Object.keys(settings.localMutes));
  const set1 = new Set(Object.keys(settings.localVolumes));
  set1.delete(this.userId);
  set.delete(this.userId);
  const obj = { num_local_voice_user_mutes: null, num_local_voice_volumes: null };
  let arr = Array.from(set);
  obj[0] = apply.intersection(arr, Array.from(this.totalParticipants)).length;
  const obj4 = apply;
  arr = Array.from(set1);
  obj[1] = apply.intersection(arr, Array.from(this.totalParticipants)).length;
  return obj;
};
prototype["setSpeaking"] = function setSpeaking(userId, speaking) {
  let self = this;
  self = this;
  if (speaking !== SpeakingFlags.NONE) {
    const voiceStateForChannel = store.getVoiceStateForChannel(self.channelId, userId);
    if (null != voiceStateForChannel) {
      if (!voiceStateForChannel.selfMute) {
        if (!voiceStateForChannel.mute) {
          self.totalSpeakers[userId] = speaking;
          const _Object = Object;
          let values = Object.values(self.totalSpeakers);
          const _Math = Math;
          self.maxSpeakerCount = Math.max(self.maxSpeakerCount, values.filter((arg0) => arg0 !== constants.NONE).length);
        }
      }
    }
  } else if (userId in self.totalSpeakers) {
    self.totalSpeakers[userId] = tmp.NONE;
  }
  if (self.userId === userId) {
    if (speaking !== self.speaking) {
      if (speaking !== tmp.NONE) {
        const _Object2 = Object;
        values = Object.values(store.getVoiceStatesForChannel(self.channelId));
        const found = values.filter((selfDeaf) => {
          selfDeaf = selfDeaf.selfDeaf;
          let tmp = !selfDeaf;
          if (!selfDeaf) {
            tmp = !selfDeaf.deaf;
          }
          return tmp;
        });
        const item = found.forEach((userId) => {
          const totalListeners = self.totalListeners;
          return totalListeners.add(userId.userId);
        });
        const _Math2 = Math;
        self.maxListenerCount = Math.max(found.length, self.maxListenerCount);
      }
      self.speaking = speaking;
    }
  }
};
prototype["setChannelId"] = function setChannelId(channelId) {
  let self = this;
  self = this;
  if (channelId !== this.channelId) {
    self.channelId = channelId;
    const _Set = Set;
    const items = [self.userId];
    const set = new Set(items);
    self.totalParticipants = set;
    const _Object = Object;
    const keys = Object.keys(store.getVoiceStatesForChannel(self.channelId));
    const item = keys.forEach((arg0) => {
      const totalParticipants = self.totalParticipants;
      return totalParticipants.add(arg0);
    });
    self.maxVoiceStateCount = keys.length;
    self.speaking = SpeakingFlags.NONE;
    self.maxListenerCount = 0;
    const _Set2 = Set;
    const set1 = new Set();
    self.totalListeners = set1;
    self.maxSpeakerCount = 0;
    self.totalSpeakers = {};
  }
};

export default VoiceStateAnalytics;