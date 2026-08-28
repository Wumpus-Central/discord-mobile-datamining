// === Module 6156: initialize ===

// Module 6156 (initialize)
import set from "set" /* 2 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import VoiceChannelEffectAnimationType from "VoiceChannelEffectAnimationType" /* 6157 */;

let closure_1 = VoiceChannelEffectAnimationType.VoiceChannelEffectAnimationType;
const PersistedStore = initializeDefault.PersistedStore;
class VoiceChannelEffectsPersistedStore extends PersistedStore {
}
const prototype = VoiceChannelEffectsPersistedStore.prototype;
prototype["initialize"] = function initialize(animationType) {
  animationType = undefined;
  if (animationType != null) {
    animationType = animationType.animationType;
  }
  if (animationType == null) {
    animationType = constants.PREMIUM;
  }
};
prototype["getState"] = function getState() {
  return { animationType: closure_0 };
};
VoiceChannelEffectsPersistedStore.displayName = "VoiceChannelEffectsPersistedStore";
VoiceChannelEffectsPersistedStore.persistKey = "VoiceChannelEffectsPersistedStore";
const voiceChannelEffectsPersistedStore = new VoiceChannelEffectsPersistedStore(dispatcherDefault, {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function handleToggleAnimationType() {
    closure_0 = closure_0 === constants.BASIC ? tmp.PREMIUM : tmp.BASIC;
  }
});
const result = set.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx");

export default voiceChannelEffectsPersistedStore;