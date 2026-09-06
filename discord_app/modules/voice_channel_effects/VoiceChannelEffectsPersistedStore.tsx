// === Module 7347: VoiceChannelEffectsPersistedStore ===

// Module 7347 (VoiceChannelEffectsPersistedStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 7348 */;
import size from "module_2" /* 2 */;

const constants = VoiceChannelEffectsConstants.VoiceChannelEffectAnimationType;
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
  closure_0 = animationType;
};
prototype["getState"] = function getState() {
  return { animationType };
};
VoiceChannelEffectsPersistedStore.displayName = "VoiceChannelEffectsPersistedStore";
VoiceChannelEffectsPersistedStore.persistKey = "VoiceChannelEffectsPersistedStore";
const voiceChannelEffectsPersistedStore = new VoiceChannelEffectsPersistedStore(DispatcherDefault, {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function handleToggleAnimationType() {
    closure_0 = closure_0 === constants.BASIC ? constants.PREMIUM : constants.BASIC;
  }
});
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx");

export default voiceChannelEffectsPersistedStore;