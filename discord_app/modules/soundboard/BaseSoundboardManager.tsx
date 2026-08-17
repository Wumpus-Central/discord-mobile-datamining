// discord_app/modules/soundboard/BaseSoundboardManager.tsx
import dispatcherDefault from "dispatcher" /* 709 */;
import initializeDefault from "initialize" /* 4720 */;
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "_detectH265HardwareDecode" /* 4497 */;

initializeDefault;
class BaseSoundboardManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._playSound = function _playSound() {

    };
    applyArgumentsResult._stopAndClearSounds = function _stopAndClearSounds() {

    };
    applyArgumentsResult._handleToggleSelfDeafened = function _handleToggleSelfDeafened() {
      if (closure_1_3.isDeaf()) {
        applyArgumentsResult._stopAndClearSounds();
      }
    };
    applyArgumentsResult._handleSoundboardSoundReceived = function _handleSoundboardSoundReceived(arg0) {
      ({ soundId, soundVolume, userId, channelId } = arg0);
      if (null != soundId) {
        if (userId !== closure_1_2.getId()) {
          return applyArgumentsResult._playSound(soundId, soundVolume, userId, channelId);
        }
      }
    };
    applyArgumentsResult._handleSoundboardSoundPlayLocally = function _handleSoundboardSoundPlayLocally(sound) {
      sound = sound.sound;
      return applyArgumentsResult._playSound(sound.soundId, sound.volume, closure_1_2.getId(), sound.channelId);
    };
    applyArgumentsResult._handleVoiceChannelSelect = function _handleVoiceChannelSelect() {
      applyArgumentsResult._stopAndClearSounds();
    };
    return applyArgumentsResult;
  }
}
const prototype = BaseSoundboardManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = dispatcherDefault.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
  const obj = dispatcherDefault;
  const subscription1 = dispatcherDefault.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
  const obj2 = dispatcherDefault;
  const subscription2 = dispatcherDefault.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
  const obj3 = dispatcherDefault;
  const subscription3 = dispatcherDefault.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
};
prototype["_terminate"] = function _terminate() {
  dispatcherDefault.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
  const obj = dispatcherDefault;
  dispatcherDefault.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
  const obj2 = dispatcherDefault;
  dispatcherDefault.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
  const obj3 = dispatcherDefault;
  dispatcherDefault.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
};
const result = require("set").fileFinishedImporting("modules/soundboard/BaseSoundboardManager.tsx");

export default BaseSoundboardManager;