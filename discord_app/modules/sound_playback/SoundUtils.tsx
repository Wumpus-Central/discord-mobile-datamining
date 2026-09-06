// discord_app/modules/sound_playback/SoundUtils.tsx
import LoggerDefault from "../debug/Logger.tsx";
import getSoundsForPackDefault from "../soundpacks/getSoundsForPack.tsx";
import sound_playback_SoundUtils from "native/SoundUtils.tsx";
import SoundpackStore from "../soundpacks/SoundpackStore.tsx";
import StreamerModeStore from "../../stores/StreamerModeStore.tsx";

require = fn;
const SoundOutputChannel = fn(9091).SoundOutputChannel;
const logger = new LoggerDefault("SoundUtils");
const size = fn(2);
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
  const mobileAudioSound = new sound_playback_SoundUtils.MobileAudioSound(
    stage_waiting,
    soundboard_sound,
    num,
    DEFAULT,
    flag,
  );
  return mobileAudioSound;
};
export const playSound = function playSound(arg0, arg1, arg2, arg3, outputChannel) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  closure_0 = arg2;
  if (!StreamerModeStore.disableSounds) {
    let soundpack = arg3;
    if (arg3 == null) {
      soundpack = SoundpackStore.getSoundpack();
    }
    const tmp4Result = getSoundsForPackDefault(soundpack);
    if (null == tmp4Result) {
      const _HermesInternal = HermesInternal;
      logger.log("Unable to find sound for pack name: " + arg3);
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
    const mobileAudioSound = new sound_playback_SoundUtils.MobileAudioSound(tmp13, arg0, num, outputChannel, flag);
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
};
