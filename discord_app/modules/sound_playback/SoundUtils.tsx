// === Module 10424: createSoundForPack ===

// Module 10424 (createSoundForPack)
import Soundpacks from "Soundpacks";
import initialize from "initialize";
import { SoundOutputChannel } from "SoundOutputChannel";

const require = arg1;
let closure_6 = new require("timestamp")("SoundUtils");
const tmp2 = new require("timestamp")("SoundUtils");
const result = require("SoundOutputChannel").fileFinishedImporting("modules/sound_playback/SoundUtils.tsx");

export const createSoundForPack = function createSoundForPack(call_calling, soundpack) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 1;
  }
  let DEFAULT = arg3;
  if (arg3 === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  let tmp3 = importDefault(10427)(soundpack)[call_calling];
  if (tmp3 == null) {
    tmp3 = call_calling;
  }
  if (num === undefined) {
    num = 1;
  }
  if (DEFAULT === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  const mobileAudioSound = new require(10428) /* _createSound */.MobileAudioSound(tmp3, call_calling, num, DEFAULT, false);
  return mobileAudioSound;
};
export const createSound = function createSound(stage_waiting, soundboard_sound, arg2) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 1;
  }
  let DEFAULT = arg3;
  if (arg3 === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  let flag = arg4;
  if (arg4 === undefined) {
    flag = false;
  }
  const mobileAudioSound = new require(10428) /* _createSound */.MobileAudioSound(stage_waiting, soundboard_sound, num, DEFAULT, flag);
  return mobileAudioSound;
};
export const playSound = function playSound(arg0, arg1, arg2, arg3, outputChannel) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  const _require = arg2;
  if (!disableSounds.disableSounds) {
    let soundpack = arg3;
    if (arg3 == null) {
      soundpack = soundpack.getSoundpack();
    }
    const tmp4Result = importDefault(10427)(soundpack);
    if (null == tmp4Result) {
      const _HermesInternal = HermesInternal;
      tmp2.log("Unable to find sound for pack name: " + arg3);
    }
    let tmp13 = tmp4Result[arg0];
    if (tmp13 == null) {
      tmp13 = arg0;
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
    const mobileAudioSound = new _require(10428).MobileAudioSound(tmp13, arg0, num, outputChannel, flag);
    if (null != arg2) {
      mobileAudioSound.playWithListener().then((arg0) => {
        if (arg0) {
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