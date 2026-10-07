// discord_app/modules/soundboard/BaseSoundboardManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";

class BaseSoundboardManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._playSound = function _playSound() {};
    applyArgumentsResult._stopAndClearSounds = function _stopAndClearSounds() {};
    applyArgumentsResult._handleToggleSelfDeafened = function _handleToggleSelfDeafened() {
      if (MediaEngineStore.isDeaf()) {
        applyArgumentsResult._stopAndClearSounds();
      }
    };
    applyArgumentsResult._handleSoundboardSoundReceived = function _handleSoundboardSoundReceived(arg0) {
      ({ soundId, soundVolume, userId, channelId } = arg0);
      if (null != soundId) {
        if (userId !== AuthenticationStore.getId()) {
          return applyArgumentsResult._playSound(soundId, soundVolume, userId, channelId);
        }
      }
    };
    applyArgumentsResult._handleSoundboardSoundPlayLocally = function _handleSoundboardSoundPlayLocally(sound) {
      sound = sound.sound;
      return applyArgumentsResult._playSound(sound.soundId, sound.volume, AuthenticationStore.getId(), sound.channelId);
    };
    applyArgumentsResult._handleVoiceChannelSelect = function _handleVoiceChannelSelect() {
      applyArgumentsResult._stopAndClearSounds();
    };
    return applyArgumentsResult;
  }
}
const prototype = BaseSoundboardManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = DispatcherDefault.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
  const subscription1 = DispatcherDefault.subscribe(
    "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
    this._handleSoundboardSoundPlayLocally,
  );
  const subscription2 = DispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
  const subscription3 = DispatcherDefault.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
};
prototype["_terminate"] = function _terminate() {
  DispatcherDefault.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
  DispatcherDefault.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
  DispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
  DispatcherDefault.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/BaseSoundboardManager.tsx");

export default BaseSoundboardManager;
