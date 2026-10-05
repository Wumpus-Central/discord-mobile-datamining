// === Module 9121: VoiceChannelEffectsStore ===

// Module 9121 (VoiceChannelEffectsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import shared from "shared" /* 4729 */;
import CallConstants from "CallConstants" /* 4911 */;
import VoiceChannelEffectsUtils from "VoiceChannelEffectsUtils" /* 6852 */;
import module_12 from "module_12" /* 12 */;
import size from "module_2" /* 2 */;

let date;

let closure_4 = CallConstants.EMOJI_PICKER_EMOJI_TO_SHOW_COUNT;
let hasOwnProperty = [];
const metroRequire = {};
let items = [];
let substr = [];
let closure_9 = 10 * DurationsDefault.Millis.SECOND;
let closure_10 = module_12.debounce(() => {
  const obj = VoiceChannelEffectsUtils;
  const effectAnnouncement = obj.getEffectAnnouncement(items);
  const AccessibilityAnnouncer = shared.AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(effectAnnouncement, "polite");
  items = [];
}, 500);
const Store = get_initializedDefault.Store;
class VoiceChannelEffectsStore extends Store {
  getEffectForUserId(arg0) {
    return closure_6[arg0];
  }
}
const prototype = VoiceChannelEffectsStore.prototype;
Object.defineProperty(prototype, "recentlyUsedEmojis", {
  get: function recentlyUsedEmojis() {
    return hasOwnProperty;
  },
  set: undefined
});
Object.defineProperty(prototype, "isOnCooldown", {
  get: function isOnCooldown() {
    let tmp = null != date;
    if (tmp) {
      const _Date = Date;
      const self = this;
      const self2 = this;
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
VoiceChannelEffectsStore.displayName = "VoiceChannelEffectsStore";
let obj = {
  VOICE_CHANNEL_EFFECT_CLEAR: function handleClearVoiceChannelEffect(userId) {
    userId = userId.userId;
    if (null != closure_6[userId]) {
      delete closure_6[userId];
    }
  },
  VOICE_CHANNEL_EFFECT_RECENT_EMOJI: function handleAddRecentlyUsedEmojis(emoji) {
    emoji = emoji.emoji;
    if (null != emoji) {
      hasOwnProperty.unshift(emoji);
      const obj = module_12;
      hasOwnProperty = obj.uniqBy(hasOwnProperty, "name");
      if (hasOwnProperty.length > closure_4 + 1) {
        hasOwnProperty.pop();
      }
    }
  },
  VOICE_CHANNEL_EFFECT_SEND: function handleReceivedVoiceChannelEffect(arg0) {
    let animationType;
    let emoji;
    let userId;
    ({ emoji, userId, animationType } = arg0);
    const tmp2 = null != emoji && null != animationType;
    if (tmp2) {
      const _Date = Date;
      closure_6[userId] = { emoji, sentAt: Date.now(), animationType };
      items = [];
      const obj2 = { emojiName: emoji.name, userId };
      items[HermesBuiltin.arraySpread(items, items, 0)] = obj2;
      const obj = { emoji, sentAt: Date.now(), animationType };
      closure_10();
    }
  },
  VOICE_CHANNEL_EFFECT_SENT_LOCAL: function handleVoiceChannelEffectSentLocal() {
    date = new Date();
    items = [date, ...substr];
    substr = items.slice(0, 20);
    if (substr.length >= 20) {
      const obj2 = substr[substr.length - 1];
      const time = date.getTime();
      const diff = time - obj2.getTime();
      if (diff < closure_9) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const date1 = new Date(date.getTime() + tmp4 - diff);
        date = date1;
      }
    }
  },
  VOICE_CHANNEL_EFFECT_UPDATE_TIME_STAMP: function handleTimestampUpdate(cooldownEndsAtMs) {
    date = new Date(Date.now() + cooldownEndsAtMs.cooldownEndsAtMs);
  }
};
const voiceChannelEffectsStore = new VoiceChannelEffectsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsStore.tsx");

export default voiceChannelEffectsStore;
export const clearVoiceChannelEffectForUser = function clearVoiceChannelEffectForUser(userId) {
  if (null != userId) {
    const obj2 = { type: "VOICE_CHANNEL_EFFECT_CLEAR", userId };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
  }
};