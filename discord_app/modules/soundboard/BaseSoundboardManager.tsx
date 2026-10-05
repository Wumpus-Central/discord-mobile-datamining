// discord_app/modules/soundboard/BaseSoundboardManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";
import LifecycleManager from "../../lib/LifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let importDefault;

class BaseSoundboardManager extends LifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    importDefault = applyArgumentsResult;
    applyArgumentsResult._playSound = function _playSound() {};
    applyArgumentsResult._stopAndClearSounds = function _stopAndClearSounds() {};
    applyArgumentsResult._handleToggleSelfDeafened = function _handleToggleSelfDeafened() {
      if (MediaEngineStore.isDeaf()) {
        importDefault._stopAndClearSounds();
      }
    };
    applyArgumentsResult._handleSoundboardSoundReceived = function _handleSoundboardSoundReceived(arg0) {
      let channelId;
      let soundId;
      let soundVolume;
      let userId;
      ({ soundId, soundVolume, userId, channelId } = arg0);
      if (null != soundId) {
        if (userId !== AuthenticationStore.getId()) {
          return importDefault._playSound(soundId, soundVolume, userId, channelId);
        }
      }
    };
    applyArgumentsResult._handleSoundboardSoundPlayLocally = function _handleSoundboardSoundPlayLocally(sound) {
      sound = sound.sound;
      return importDefault._playSound(sound.soundId, sound.volume, AuthenticationStore.getId(), sound.channelId);
    };
    applyArgumentsResult._handleVoiceChannelSelect = function _handleVoiceChannelSelect() {
      importDefault._stopAndClearSounds();
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
    const obj2 = DispatcherDefault;
    const subscription1 = obj2.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
    const obj3 = DispatcherDefault;
    const subscription2 = obj3.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
    const obj4 = DispatcherDefault;
    const subscription3 = obj4.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
    const obj2 = DispatcherDefault;
    obj2.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
    const obj3 = DispatcherDefault;
    obj3.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
    const obj4 = DispatcherDefault;
    obj4.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
  }
}
const prototype = BaseSoundboardManager.prototype;
const result = size.fileFinishedImporting("modules/soundboard/BaseSoundboardManager.tsx");

export default BaseSoundboardManager;
