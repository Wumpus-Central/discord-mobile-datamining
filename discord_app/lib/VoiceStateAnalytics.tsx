// discord_app/lib/VoiceStateAnalytics.tsx
import _mod12 from "../../_runtime/metro/00012__.js";
import Constants from "../../discord_common/js/packages/media-engine/Constants.tsx";
import MediaEngineStore from "../stores/MediaEngineStore.tsx";
import VoiceStateStore from "../stores/VoiceStateStore.tsx";
import SortedVoiceStateStore from "../stores/views/SortedVoiceStateStore.tsx";
import size from "../../_runtime/metro/00002__.js";

let set;

const SpeakingFlags = Constants.SpeakingFlags;
const result = size.fileFinishedImporting("lib/VoiceStateAnalytics.tsx");
class VoiceStateAnalytics {
  constructor(userId, channelId) {
    const merged = Object.assign({
      maxVoiceStateCount: 1,
      totalParticipants: null,
      speaking: null,
      maxListenerCount: 0,
      totalListeners: null,
      maxSpeakerCount: 0,
      totalSpeakers: null,
    });
    merged[1] = new Set();
    merged[2] = SpeakingFlags.NONE;
    new Set();
    merged[4] = new Set();
    merged[6] = {};
    merged.userId = userId;
    new Set();
    merged.setChannelId(channelId);
    return merged;
  }
  updateVoiceStates(userId, channelId) {
    const self = this;
    if (channelId === this.channelId) {
      const totalParticipants = self.totalParticipants;
      totalParticipants.add(userId);
      const _Math = Math;
      self.maxVoiceStateCount = Math.max(
        SortedVoiceStateStore.countVoiceStatesForChannel(channelId),
        self.maxVoiceStateCount,
      );
    } else {
      const tmp2 = null == channelId && userId in self.totalSpeakers;
      if (tmp2) {
        self.totalSpeakers[userId] = SpeakingFlags.NONE;
      }
      const tmp4 = userId === self.userId && null != channelId;
      if (tmp4) {
        self.setChannelId(channelId);
      }
    }
  }
  getStats() {
    const obj = {
      max_voice_state_count: this.maxVoiceStateCount,
      total_voice_state_count: this.totalParticipants.size,
      max_listener_count: this.maxListenerCount,
      total_listener_count: this.totalListeners.size,
      max_speaker_count: this.maxSpeakerCount,
      total_speaker_count: Object.keys(this.totalSpeakers).length,
    };
    return obj;
  }
  getUserVoiceSettingsStats(arg0) {
    let arr;
    let arr2;
    let intersection;
    let intersection2;
    const settings = MediaEngineStore.getSettings(arg0);
    set = new Set(Object.keys(settings.localMutes));
    const set1 = new Set(Object.keys(settings.localVolumes));
    set1.delete(this.userId);
    set.delete(this.userId);
    const obj = {
      num_local_voice_user_mutes: intersection(arr, Array.from(this.totalParticipants)).length,
      num_local_voice_volumes: intersection2(arr2, Array.from(this.totalParticipants)).length,
    };
    intersection = _mod12.intersection;
    _mod12;
    arr = Array.from(set);
    intersection2 = _mod12.intersection;
    _mod12;
    arr2 = Array.from(set1);
    return obj;
  }
  setSpeaking(userId, speaking) {
    const self = this;
    if (speaking !== SpeakingFlags.NONE) {
      const voiceStateForChannel = VoiceStateStore.getVoiceStateForChannel(self.channelId, userId);
      if (null != voiceStateForChannel) {
        if (!voiceStateForChannel.selfMute) {
          if (!voiceStateForChannel.mute) {
            self.totalSpeakers[userId] = speaking;
            const _Object = Object;
            const values = Object.values(self.totalSpeakers);
            const _Math = Math;
            self.maxSpeakerCount = Math.max(
              self.maxSpeakerCount,
              values.filter((item) => item !== constants.NONE).length,
            );
          }
        }
      }
    } else if (userId in self.totalSpeakers) {
      self.totalSpeakers[userId] = SpeakingFlags.NONE;
    }
    if (self.userId === userId) {
      if (speaking !== self.speaking) {
        if (speaking !== SpeakingFlags.NONE) {
          const _Object2 = Object;
          const values2 = Object.values(VoiceStateStore.getVoiceStatesForChannel(self.channelId));
          const found = values2.filter((selfDeaf) => !selfDeaf.selfDeaf && !selfDeaf.deaf);
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
  }
  setChannelId(channelId) {
    const self = this;
    if (channelId !== this.channelId) {
      self.channelId = channelId;
      const _Set = Set;
      const items = [self.userId];
      const self2 = this;
      const self3 = this;
      self.totalParticipants = new Set(items);
      const _Object = Object;
      set = new Set(items);
      const keys = Object.keys(VoiceStateStore.getVoiceStatesForChannel(self.channelId));
      const item = keys.forEach((item) => {
        const totalParticipants = self.totalParticipants;
        return totalParticipants.add(item);
      });
      self.maxVoiceStateCount = keys.length;
      self.speaking = SpeakingFlags.NONE;
      self.maxListenerCount = 0;
      const _Set2 = Set;
      const self4 = this;
      const self5 = this;
      self.totalListeners = new Set();
      self.maxSpeakerCount = 0;
      self.totalSpeakers = {};
      const set1 = new Set();
    }
  }
}
const prototype = VoiceStateAnalytics.prototype;

export default VoiceStateAnalytics;
