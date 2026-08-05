// discord_app/modules/soundboard/BaseSoundboardManager.tsx
import fetchFingerprint from "fetchFingerprint";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import "initialize";

class BaseSoundboardManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._playSound = function _playSound() {

    };
    applyArgumentsResult._stopAndClearSounds = function _stopAndClearSounds() {

    };
    applyArgumentsResult._handleToggleSelfDeafened = function _handleToggleSelfDeafened() {
      if (outer1_3.isDeaf()) {
        applyArgumentsResult._stopAndClearSounds();
      }
    };
    applyArgumentsResult._handleSoundboardSoundReceived = function _handleSoundboardSoundReceived(arg0) {
      let channelId;
      let soundId;
      let soundVolume;
      let userId;
      ({ soundId, soundVolume, userId, channelId } = arg0);
      if (null != soundId) {
        if (userId !== outer1_2.getId()) {
          return applyArgumentsResult._playSound(soundId, soundVolume, userId, channelId);
        }
      }
    };
    applyArgumentsResult._handleSoundboardSoundPlayLocally = function _handleSoundboardSoundPlayLocally(sound) {
      sound = sound.sound;
      return applyArgumentsResult._playSound(sound.soundId, sound.volume, outer1_2.getId(), sound.channelId);
    };
    applyArgumentsResult._handleVoiceChannelSelect = function _handleVoiceChannelSelect() {
      applyArgumentsResult._stopAndClearSounds();
    };
    return applyArgumentsResult;
  }
}
const prototype = BaseSoundboardManager.prototype;
prototype["_initialize"] = function _initialize() {
  const subscription = require("../../Dispatcher.tsx").subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
  const obj = require("../../Dispatcher.tsx");
  const subscription1 = require("../../Dispatcher.tsx").subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
  const obj2 = require("../../Dispatcher.tsx");
  const subscription2 = require("../../Dispatcher.tsx").subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
  const obj3 = require("../../Dispatcher.tsx");
  const subscription3 = require("../../Dispatcher.tsx").subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
};
prototype["_terminate"] = function _terminate() {
  require("../../Dispatcher.tsx").unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived);
  const obj = require("../../Dispatcher.tsx");
  require("../../Dispatcher.tsx").unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally);
  const obj2 = require("../../Dispatcher.tsx");
  require("../../Dispatcher.tsx").unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect);
  const obj3 = require("../../Dispatcher.tsx");
  require("../../Dispatcher.tsx").unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened);
};
const result = require("initialize").fileFinishedImporting("modules/soundboard/BaseSoundboardManager.tsx");

export default BaseSoundboardManager;