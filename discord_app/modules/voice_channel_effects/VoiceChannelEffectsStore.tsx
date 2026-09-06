// === Module 9624: VoiceChannelEffectsStore ===

// Module 9624 (VoiceChannelEffectsStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import shared from "shared" /* 4411 */;
import CallConstants from "CallConstants" /* 4581 */;
import VoiceChannelEffectsUtils from "VoiceChannelEffectsUtils" /* 7349 */;
import apply from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let closure_4 = CallConstants.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT;
const hasOwnProperty = [];
const dependencyMap = {};
let items = [];
let substr = [];
let closure_9 = 10 * DurationsDefault.Millis.SECOND;
let closure_10 = apply.debounce(() => {
  const effectAnnouncement = VoiceChannelEffectsUtils.getEffectAnnouncement(items);
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(effectAnnouncement, "polite");
  items = [];
}, 500);
const Store = initializeDefault.Store;
class VoiceChannelEffectsStore extends Store {
}
const prototype = VoiceChannelEffectsStore.prototype;
Object.defineProperty(prototype, "recentlyUsedEmojis", {
  get: function recentlyUsedEmojis() {
    return uniqByResult;
  },
  set: undefined
});
Object.defineProperty(prototype, "isOnCooldown", {
  get: function isOnCooldown() {
    let tmp = null != date;
    if (tmp) {
      const _Date = Date;
      date = new Date();
      tmp = date < date;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "effectCooldownEndTime", {
  get: function effectCooldownEndTime() {
    return date;
  },
  set: undefined
});
prototype["getEffectForUserId"] = function getEffectForUserId(arg0) {
  return dependencyMap[arg0];
};
VoiceChannelEffectsStore.displayName = "VoiceChannelEffectsStore";
const voiceChannelEffectsStore = new VoiceChannelEffectsStore(DispatcherDefault, {
  VOICE_CHANNEL_EFFECT_CLEAR: function handleClearVoiceChannelEffect(arg0) {
    if (null != dependencyMap[arg0.userId]) {
      delete tmp[tmp2];
    }
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: function handleAddRecentlyUsedEmojis(emoji) {
    emoji = emoji.emoji;
    if (null != emoji) {
      uniqByResult.unshift(emoji);
      uniqByResult = apply.uniqBy(uniqByResult, "name");
      if (uniqByResult.length > closure_4 + 1) {
        uniqByResult.pop();
      }
    }
  },
  VOICE_CHANNEL_EFFECT_SEND: function handleReceivedVoiceChannelEffect(arg0) {
    ({ emoji, userId, animationType } = arg0);
    if (tmp) {
      let obj = { emoji, sentAt: null, animationType: null };
      const _Date = Date;
      obj.sentAt = Date.now();
      obj.animationType = animationType;
      closure_6[userId] = obj;
      items = [];
      obj = { emojiName: emoji.name, userId };
      items[HermesBuiltin.arraySpread(items, 0)] = obj;
      closure_10();
    }
    tmp = null != emoji && null != animationType;
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: function handleVoiceChannelEffectSentLocal() {
    date = new Date();
    items = [date, ...substr];
    substr = items.slice(0, 20);
    if (substr.length >= 20) {
      const time = date.getTime();
      const diff = time - substr[substr.length - 1].getTime();
      if (diff < closure_9) {
        const _Date = Date;
        const date1 = new Date(date.getTime() + tmp4 - diff);
        date = date1;
      }
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: function handleTimestampUpdate(cooldownEndsAtMs) {
    date = new Date(Date.now() + cooldownEndsAtMs.cooldownEndsAtMs);
  }
});
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsStore.tsx");

export default voiceChannelEffectsStore;
export const clearVoiceChannelEffectForUser = function clearVoiceChannelEffectForUser(userId) {
  if (null != userId) {
    const obj = { type: "VOICE_CHANNEL_EFFECT_CLEAR", userId };
    obj.dispatch(obj);
  }
};