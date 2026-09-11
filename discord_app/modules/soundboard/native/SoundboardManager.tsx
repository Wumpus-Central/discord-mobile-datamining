// === Module 14591: SoundboardManager ===

// Module 14591 (SoundboardManager)
import LoggerDefault from "Logger" /* 3 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7411 */;
import SoundUtils from "SoundUtils" /* 9993 */;
import getVolumeForSoundDefault from "getVolumeForSound" /* 14593 */;
import getSoundboardSoundURLDefault from "getSoundboardSoundURL" /* 14594 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import SoundboardStore from "SoundboardStore" /* 5063 */;
import BaseSoundboardManager from "BaseSoundboardManager" /* 14592 */;

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
  applyArgumentsResult._playSound = function _playSound(soundId, arg1) {
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
  closure_129_0 = asyncGeneratorStep(async (arg0) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            ({ sound: closure_129_0, soundKey: closure_129_1, soundId: closure_129_2, userId: closure_129_3 } = applyArgumentsResult);
            closure_129_4 = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "PX_16", done: null };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_129_4 = false;
            c4 = 1;
            c5 = 3;
            c6 = 1;
            let obj2 = { value: closure_129_0.playWithListener(), done: false };
            return obj2;
          }
        } else {
          if (2 === tmp7) {
            c4 = 0;
            closure_129_5 = closure_3;
            const obj3 = { error: closure_129_5 };
            logger.error("Failed to play sound", obj3);
            closure_129_4 = true;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_4 = value;
            c4 = 0;
          }
          if (closure_129_4) {
            set.delete(closure_129_1);
            obj2 = applyArgumentsResult(tmp3[9]);
            const result = obj2.reportSoundFinishedPlaying(closure_129_2, closure_129_3);
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp30) {
        closure_3 = tmp30;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp30;
        } else {
          c5 = tmp;
        }
      }
    }
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