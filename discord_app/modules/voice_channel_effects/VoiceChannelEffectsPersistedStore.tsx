// === Module 6860: VoiceChannelEffectsPersistedStore ===

// Module 6860 (VoiceChannelEffectsPersistedStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants" /* 6861 */;
import size from "module_2" /* 2 */;

VoiceChannelEffectsConstants.VoiceChannelEffectAnimationType;
const PersistedStore = get_initializedDefault.PersistedStore;
class VoiceChannelEffectsPersistedStore extends PersistedStore {
  initialize(animationType) {
    animationType = undefined;
    if (animationType != null) {
      animationType = animationType.animationType;
    }
    if (animationType == null) {
      animationType = constants.PREMIUM;
    }
  }
  getState() {
    return { animationType };
  }
}
const prototype = VoiceChannelEffectsPersistedStore.prototype;
VoiceChannelEffectsPersistedStore.displayName = "VoiceChannelEffectsPersistedStore";
VoiceChannelEffectsPersistedStore.persistKey = "VoiceChannelEffectsPersistedStore";
const obj = {
  VOICE_CHANNEL_EFFECT_TOGGLE_ANIMATION_TYPE: function handleToggleAnimationType() {
    animationType = animationType === constants.BASIC ? constants.PREMIUM : constants.BASIC;
  }
};
const voiceChannelEffectsPersistedStore = new VoiceChannelEffectsPersistedStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx");

export default voiceChannelEffectsPersistedStore;