// === Module 13903: map ===

// Module 13903 (map)
import timestampDefault from "timestamp" /* 3 */;
import _initializeDefault from "_initialize" /* 13904 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_detectH265HardwareDecode" /* 4497 */;
import closure_5 from "handleConnectionOpen" /* 1979 */;
import closure_6 from "handleSoundCreateOrUpdate" /* 4780 */;

const require = arg1;
let map = new Map();
let closure_8 = new timestampDefault("SoundboardManagerNative");
_initializeDefault;
let prototype = function SoundboardManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  closure_0 = applyArgumentsResult;
  applyArgumentsResult._stopAndClearSounds = function _stopAndClearSounds() {
    const item = map.forEach((stop) => {
      stop.stop();
    });
    map = new Map();
  };
  applyArgumentsResult._playSound = function _playSound(soundId, arg1, id) {
    let num = arg1;
    if (arg1 === undefined) {
      num = 1;
    }
    if (closure_1_5.getVoiceChannelId() === arg3) {
      if (!closure_1_4.isDeaf()) {
        if (!closure_1_6.isLocalSoundboardMuted(id)) {
          const tmp8 = closure_1_1(closure_1_2[6])(num);
          const _HermesInternal = HermesInternal;
          const combined = "" + id + "-" + soundId;
          const value = closure_1_7.get(combined);
          if (null != value) {
            value.stop();
          }
          const tmp14 = closure_1_1(closure_1_2[7])(soundId);
          const tmp6 = closure_1_1;
          const sound = lib(closure_1_2[8]).createSound(tmp14, "soundboard_sound", tmp8);
          sound.volume = tmp8;
          const result = closure_1_7.set(combined, sound);
          const obj2 = lib(closure_1_2[8]);
          const result1 = lib(closure_1_2[9]).reportSoundStartedPlaying(soundId, id);
          const obj = { sound: null, soundKey: null, soundId: null, userId: null };
          obj[0] = sound;
          obj[1] = combined;
          obj[2] = soundId;
          obj[3] = id;
          const result2 = lib._playSoundWithListener(obj);
          const obj3 = lib(closure_1_2[9]);
        }
      }
    }
  };
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c2 = tmp3;
              c1 = tmp7;
              let lib;
              c1 = undefined;
              c2 = undefined;
              c3 = undefined;
              ({ sound: c0, soundKey: c1, soundId: c2, userId: c3 } = lib);
              c4 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              c4 = false;
              c4 = 1;
              c5 = 3;
              c6 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = lib.playWithListener();
              return obj2;
            }
          } else {
            if (2 === tmp7) {
              c4 = 0;
              c5 = c3;
              const obj3 = { error: null };
              obj3[0] = c5;
              closure_1_8.error("Failed to play sound", obj3);
              c4 = true;
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              c4 = arg1;
              c4 = 0;
            }
            if (c4) {
              closure_1_7.delete(c1);
              obj2 = lib(closure_1_2[9]);
              const result = obj2.reportSoundFinishedPlaying(c2, c3);
            }
            c6 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp30) {
          c3 = tmp30;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp30;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  applyArgumentsResult._playSoundWithListener = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
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
const tmp3 = new timestampDefault("SoundboardManagerNative");
let result = require("set").fileFinishedImporting("modules/soundboard/native/SoundboardManager.tsx");

export default prototype;