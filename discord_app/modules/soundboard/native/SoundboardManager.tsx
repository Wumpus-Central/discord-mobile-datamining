// === Module 14538: SoundboardManager ===

// Module 14538 (SoundboardManager)
import LoggerDefault from "Logger" /* 3 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7338 */;
import SoundUtils from "SoundUtils" /* 9902 */;
import getVolumeForSoundDefault from "getVolumeForSound" /* 14540 */;
import getSoundboardSoundURLDefault from "getSoundboardSoundURL" /* 14541 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SoundboardStore from "SoundboardStore" /* 5012 */;
import BaseSoundboardManager from "BaseSoundboardManager" /* 14539 */;

require = fn;
let map = new Map();
let closure_8 = new LoggerDefault("SoundboardManagerNative");
let prototype = function SoundboardManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._stopAndClearSounds = function _stopAndClearSounds() {
    const item = map.forEach((stop) => {
      stop.stop();
    });
    map = new Map();
  };
  applyArgumentsResult._playSound = function _playSound(soundId, arg1, userId) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    if (SelectedChannelStore.getVoiceChannelId() === arg3) {
      if (!MediaEngineStore.isDeaf()) {
        if (!SoundboardStore.isLocalSoundboardMuted(userId)) {
          const tmp8 = getVolumeForSoundDefault(num);
          const _HermesInternal = HermesInternal;
          const combined = "" + userId + "-" + soundId;
          value = map.get(combined);
          if (null != value) {
            value.stop();
          }
          const tmp14 = getSoundboardSoundURLDefault(soundId);
          const sound = SoundUtils.createSound(tmp14, "soundboard_sound", tmp8);
          sound.volume = tmp8;
          const result = map.set(combined, sound);
          const result1 = SoundboardActionCreators.reportSoundStartedPlaying(soundId, userId);
          const obj = { sound, soundKey: combined, soundId, userId };
          const result2 = applyArgumentsResult._playSoundWithListener(obj);
        }
      }
    }
  };
  closure_129_0 = asyncGeneratorStep(async (arg0, value) => {
    closure_129_4 = false;
    await closure_129_0.playWithListener();
    if (2 === tmp7) {
      c4 = 0;
      closure_129_5 = closure_3;
      logger.error("Failed to play sound", { error: closure_129_5 });
      closure_129_4 = true;
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 0;
      c6 = 3;
      return { value, done: true };
    } else {
      closure_129_4 = value;
      c4 = 0;
    }
    if (closure_129_4) {
      set.delete(closure_129_1);
      const result = applyArgumentsResult(tmp3[9]).reportSoundFinishedPlaying(closure_129_2, closure_129_3);
      applyArgumentsResult(tmp3[9]);
    }
    await "HermesInternal";
    ({ sound: closure_129_0, soundKey: closure_129_1, soundId: closure_129_2, userId: closure_129_3 } = applyArgumentsResult);
    return "PX_16";
  });
  applyArgumentsResult._playSoundWithListener = function() {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp4 {
}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardManager.tsx");

export default prototype;