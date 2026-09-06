// discord_app/modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import VoiceChannelEffectsConstants from "VoiceChannelEffectsConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const constants = VoiceChannelEffectsConstants.VoiceChannelEffectAnimationType;
const PersistedStore = initializeDefault.PersistedStore;
class VoiceChannelEffectsPersistedStore extends PersistedStore {}
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
  },
});
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsPersistedStore.tsx");

export default voiceChannelEffectsPersistedStore;
