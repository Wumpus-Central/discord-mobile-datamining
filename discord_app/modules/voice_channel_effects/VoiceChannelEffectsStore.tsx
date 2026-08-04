// discord_app/modules/voice_channel_effects/VoiceChannelEffectsStore.tsx
import { EMOJI_PICKER_EMOJI_TO_SHOW_COUNT as closure_4 } from "ParticipantTypes";
import apply from "apply";
import { Store } from "initialize";

let closure_5 = [];
let closure_6 = {};
let closure_7 = [];
let closure_8 = [];
let closure_9 = 10 * require("set").Millis.SECOND;
let closure_10 = apply.debounce(() => {
  const effectAnnouncement = require(10586) /* VoiceChannelEffectAnimationType */.getEffectAnnouncement(closure_7);
  const AccessibilityAnnouncer = require(4039) /* AccessibilityAnnouncer */.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(effectAnnouncement, "polite");
  closure_7 = [];
}, 500);
class VoiceChannelEffectsStore extends Store {
}
const prototype = VoiceChannelEffectsStore.prototype;
Object.defineProperty(prototype, "recentlyUsedEmojis", {
  get: function recentlyUsedEmojis() {
    return closure_5;
  },
  set: undefined
});
Object.defineProperty(prototype, "isOnCooldown", {
  get: function isOnCooldown() {
    let tmp = null != closure_3;
    if (tmp) {
      const _Date = Date;
      const date = new Date();
      tmp = date < closure_3;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "effectCooldownEndTime", {
  get: function effectCooldownEndTime() {
    return closure_3;
  },
  set: undefined
});
prototype["getEffectForUserId"] = function getEffectForUserId(arg0) {
  return dependencyMap[arg0];
};
VoiceChannelEffectsStore.displayName = "VoiceChannelEffectsStore";
const voiceChannelEffectsStore = new VoiceChannelEffectsStore(require("dispatcher"), {
  VOICE_CHANNEL_EFFECT_CLEAR: function handleClearVoiceChannelEffect(arg0) {
    if (null != dependencyMap[arg0.userId]) {
      delete tmp[tmp2];
    }
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: function handleAddRecentlyUsedEmojis(emoji) {
    emoji = emoji.emoji;
    if (null != emoji) {
      arr = arr.unshift(emoji);
      const uniqByResult = require(12) /* apply */.uniqBy(arr, "name");
      arr = uniqByResult;
      if (uniqByResult.length > closure_4 + 1) {
        arr = arr.pop();
      }
      const obj = require(12) /* apply */;
    }
  },
  VOICE_CHANNEL_EFFECT_SEND: function handleReceivedVoiceChannelEffect(arg0) {
    let animationType;
    let emoji;
    let userId;
    ({ emoji, userId, animationType } = arg0);
    if (tmp) {
      let obj = { emoji: null, sentAt: null, animationType: null };
      obj[0] = emoji;
      const _Date = Date;
      obj[1] = Date.now();
      obj[2] = animationType;
      closure_6[userId] = obj;
      const items = [];
      obj = { emojiName: null, userId: null };
      obj[0] = emoji.name;
      obj[1] = userId;
      items[HermesBuiltin.arraySpread(items, 0)] = obj;
      callback();
    }
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: function handleVoiceChannelEffectSentLocal() {
    const date = new Date();
    const items = [date, ...substr];
    substr = items.slice(0, 20);
    if (substr.length >= 20) {
      const time = date.getTime();
      const diff = time - substr[substr.length - 1].getTime();
      if (diff < closure_9) {
        const _Date = Date;
        const date1 = new Date(date.getTime() + tmp4 - diff);
      }
      const obj2 = substr[substr.length - 1];
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: function handleTimestampUpdate(cooldownEndsAtMs) {
    const date = new Date(Date.now() + cooldownEndsAtMs.cooldownEndsAtMs);
  }
});
const result = require("set").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsStore.tsx");

export default voiceChannelEffectsStore;
export const clearVoiceChannelEffectForUser = function clearVoiceChannelEffectForUser(arg0) {
  if (null != arg0) {
    let obj = importDefault(709);
    obj = { type: "VOICE_CHANNEL_EFFECT_CLEAR", userId: null };
    obj[1] = arg0;
    obj.dispatch(obj);
  }
};