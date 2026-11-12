// === Module 10964: SoundUtils ===

// Module 10964 (SoundUtils)
import LoggerDefault from "Logger" /* 3 */;
import getSoundsForPackDefault from "getSoundsForPack" /* 10967 */;
import sound_playback_SoundUtils from "sound_playback/SoundUtils" /* 10968 */;
import SoundpackStore from "SoundpackStore" /* 10965 */;
import StreamerModeStore from "StreamerModeStore" /* 5310 */;

require = fn;
const SoundOutputChannel = fn(6167).SoundOutputChannel;
const logger = new LoggerDefault("SoundUtils");
const size = fn(2);
const result = size.fileFinishedImporting("modules/sound_playback/SoundUtils.tsx");

export function createSoundForPack(call_calling, soundpack) {
  let num = _volume;
  if (_volume === undefined) {
    num = 1;
  }
  if (DEFAULT === undefined) {
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
}
export function createSound(stage_waiting, vibing_wumpus) {
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
  const mobileAudioSound = new sound_playback_SoundUtils.MobileAudioSound(stage_waiting, vibing_wumpus, num, DEFAULT, flag);
  return mobileAudioSound;
}
export function playSound(call_calling) {
  let num = _volume;
  if (_volume === undefined) {
    num = 1;
  }
  closure_0 = arg2;
  if (!StreamerModeStore.disableSounds) {
    if (soundpack == null) {
      soundpack = SoundpackStore.getSoundpack();
    }
    const tmp4Result = getSoundsForPackDefault(soundpack);
    if (null == tmp4Result) {
      const _HermesInternal = HermesInternal;
      logger.log("Unable to find sound for pack name: " + soundpack);
    }
    let tmp13 = tmp4Result[call_calling];
    if (tmp13 == null) {
      tmp13 = call_calling;
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
    const mobileAudioSound = new sound_playback_SoundUtils.MobileAudioSound(tmp13, call_calling, num, outputChannel, flag);
    if (null != arg2) {
      mobileAudioSound.playWithListener().then((result) => {
        if (result) {
          closure_0();
        }
      });
      const playWithListenerResult = mobileAudioSound.playWithListener();
    } else {
      mobileAudioSound.play();
    }
    return mobileAudioSound;
  }
}