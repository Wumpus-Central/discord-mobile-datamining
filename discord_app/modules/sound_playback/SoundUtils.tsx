// === Module 10040: createSoundForPack ===

// Module 10040 (createSoundForPack)
import timestampDefault from "timestamp" /* 3 */;
import getSoundPackDefault from "getSoundPack" /* 10043 */;
import _createSound from "_createSound" /* 10044 */;
import Soundpacks from "Soundpacks" /* 10041 */;
import initialize from "initialize" /* 4220 */;
import { SoundOutputChannel } from "SoundOutputChannel" /* 9655 */;

require = fn;
let closure_6 = new timestampDefault("SoundUtils");
const tmp2 = new timestampDefault("SoundUtils");
const result = require("obj132").fileFinishedImporting("modules/sound_playback/SoundUtils.tsx");

export const createSoundForPack = function createSoundForPack(call_calling, soundpack, _volume, DEFAULT) {
  let num = _volume;
  if (_volume === undefined) {
    num = 1;
  }
  if (DEFAULT === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  let tmp3 = getSoundPackDefault(soundpack)[call_calling];
  if (tmp3 == null) {
    tmp3 = call_calling;
  }
  if (num === undefined) {
    num = 1;
  }
  if (DEFAULT === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  const mobileAudioSound = new _createSound.MobileAudioSound(tmp3, call_calling, num, DEFAULT, false);
  return mobileAudioSound;
};
export const createSound = function createSound(stage_waiting, soundboard_sound, _volume, DEFAULT, flag) {
  let num = _volume;
  if (_volume === undefined) {
    num = 1;
  }
  if (DEFAULT === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  if (flag === undefined) {
    flag = false;
  }
  const mobileAudioSound = new _createSound.MobileAudioSound(stage_waiting, soundboard_sound, num, DEFAULT, flag);
  return mobileAudioSound;
};
export const playSound = function playSound(name, _volume, arg2, arg3, outputChannel) {
  let num = _volume;
  if (_volume === undefined) {
    num = 1;
  }
  const _require = arg2;
  if (!disableSounds.disableSounds) {
    let soundpack = arg3;
    if (arg3 == null) {
      soundpack = soundpack.getSoundpack();
    }
    const tmp4Result = getSoundPackDefault(soundpack);
    if (null == tmp4Result) {
      const _HermesInternal = HermesInternal;
      logger.log("Unable to find sound for pack name: " + arg3);
    }
    let tmp13 = tmp4Result[name];
    if (tmp13 == null) {
      tmp13 = name;
    }
    outputChannel = undefined;
    if (outputChannel != null) {
      outputChannel = outputChannel.outputChannel;
    }
    if (outputChannel == null) {
      outputChannel = SoundOutputChannel.DEFAULT;
    }
    let flag;
    if (outputChannel != null) {
      flag = outputChannel.trackNotificationFailure;
    }
    if (flag == null) {
      flag = false;
    }
    if (num === undefined) {
      num = 1;
    }
    if (outputChannel === undefined) {
      outputChannel = SoundOutputChannel.DEFAULT;
    }
    if (flag === undefined) {
      flag = false;
    }
    const mobileAudioSound = new _require(10044).MobileAudioSound(tmp13, name, num, outputChannel, flag);
    if (null != arg2) {
      mobileAudioSound.playWithListener().then((result) => {
        if (result) {
          callback();
        }
      });
      const playWithListenerResult = mobileAudioSound.playWithListener();
    } else {
      mobileAudioSound.play();
    }
    return mobileAudioSound;
  }
};