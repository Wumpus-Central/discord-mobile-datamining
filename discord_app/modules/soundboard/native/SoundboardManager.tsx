// discord_app/modules/soundboard/native/SoundboardManager.tsx
import _initialize from "_initialize";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import handleConnectionOpen from "handleConnectionOpen";
import handleSoundCreateOrUpdate from "handleSoundCreateOrUpdate";
import "_initialize";

const require = arg1;
let map = new Map();
const metroImportAll = new require("handleSoundCreateOrUpdate")("SoundboardManagerNative");
let prototype = function SoundboardManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let closure_0 = applyArgumentsResult;
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
    if (outer1_5.getVoiceChannelId() === arg3) {
      if (!outer1_4.isDeaf()) {
        if (!outer1_6.isLocalSoundboardMuted(id)) {
          const tmp8 = outer1_1(outer1_2[6])(num);
          const _HermesInternal = HermesInternal;
          const combined = "" + id + "-" + soundId;
          const value = outer1_7.get(combined);
          if (null != value) {
            value.stop();
          }
          const tmp14 = outer1_1(outer1_2[7])(soundId);
          const tmp6 = outer1_1;
          const sound = lib(outer1_2[8]).createSound(tmp14, "soundboard_sound", tmp8);
          sound.volume = tmp8;
          const result = outer1_7.set(combined, sound);
          const obj2 = lib(outer1_2[8]);
          const result1 = lib(outer1_2[9]).reportSoundStartedPlaying(soundId, id);
          const obj = { sound: null, soundKey: null, soundId: null, userId: null };
          obj[0] = sound;
          obj[1] = combined;
          obj[2] = soundId;
          obj[3] = id;
          const result2 = lib._playSoundWithListener(obj);
          const obj3 = lib(outer1_2[9]);
        }
      }
    }
  };
  closure_0 = undefined;
  closure_0 = callback((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
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
          return { value: "T", done: null };
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
              let c4;
              c5 = 1;
              c6 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value: null, done: true };
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
              outer1_8.error("Failed to play sound", obj3);
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
              outer1_7.delete(c1);
              obj2 = lib(outer1_2[9]);
              const result = obj2.reportSoundFinishedPlaying(c2, c3);
            }
            c6 = 3;
            return { value: "T", done: null };
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
const tmp3 = new require("handleSoundCreateOrUpdate")("SoundboardManagerNative");
let result = require("handleConnectionOpen").fileFinishedImporting("modules/soundboard/native/SoundboardManager.tsx");

export default prototype;