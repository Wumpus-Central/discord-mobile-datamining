// === Module 9562: SoundUtils ===

// Module 9562 (SoundUtils)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 9308 */;
import getSoundsForPackDefault from "getSoundsForPack" /* 9565 */;
import sound_playback_SoundUtils from "sound_playback/SoundUtils" /* 9566 */;
import SoundpackStore from "SoundpackStore" /* 9563 */;
import StreamerModeStore from "StreamerModeStore" /* 4723 */;
import size from "module_2" /* 2 */;

const SoundOutputChannel = Constants.SoundOutputChannel;
const logger = new LoggerDefault("SoundUtils");
new LoggerDefault("SoundUtils");
const result = size.fileFinishedImporting("modules/sound_playback/SoundUtils.tsx");

export const createSoundForPack = function createSoundForPack(call_calling, soundpack) {
  let num = arg2;
  if (arg2 === undefined) {
    num = 1;
  }
  let DEFAULT = arg3;
  if (arg3 === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  let tmp3 = getSoundsForPackDefault(soundpack)[call_calling];
  if (tmp3 == null) {
    tmp3 = call_calling;
  }
  if (num === undefined) {
    num = 1;
  }
  if (DEFAULT === undefined) {
    DEFAULT = SoundOutputChannel.DEFAULT;
  }
  const mobileAudioSound = new sound_playback_SoundUtils.MobileAudioSound(tmp3, call_calling, num, DEFAULT, false);
  return mobileAudioSound;
};
export const createSound = function createSound(stage_waiting, vibing_wumpus, arg2) {
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
  const mobileAudioSound = new sound_playback_SoundUtils.MobileAudioSound(stage_waiting, vibing_wumpus, num, DEFAULT, flag);
  return mobileAudioSound;
};
export const playSound = function playSound(bit_message1, arg1, arg2) {
  let soundpack;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  let closure_0 = arg2;
  if (!StreamerModeStore.disableSounds) {
    let tmp = soundpack;
    const tmp4 = getSoundsForPackDefault;
    if (soundpack == null) {
      soundpack = SoundpackStore.getSoundpack();
    }
    const tmp4Result = tmp4(soundpack);
    if (null == tmp4Result) {
      const _HermesInternal = HermesInternal;
      logger.log("Unable to find sound for pack name: " + soundpack);
    }
    let tmp13 = tmp4Result[bit_message1];
    if (tmp13 == null) {
      tmp13 = bit_message1;
    }
    let outputChannel;
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
    const self = this;
    const self2 = this;
    const mobileAudioSound = new sound_playback_SoundUtils.MobileAudioSound(tmp13, bit_message1, num, outputChannel, flag);
    if (null != arg2) {
      const playWithListenerResult = mobileAudioSound.playWithListener();
      playWithListenerResult.then((result) => {
        const tmp = result;
        if (tmp) {
          closure_0();
        }
      });
    } else {
      mobileAudioSound.play();
    }
    return mobileAudioSound;
  }
};