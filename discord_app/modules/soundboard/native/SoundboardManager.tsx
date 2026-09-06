// discord_app/modules/soundboard/native/SoundboardManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import SoundboardActionCreators from "../SoundboardActionCreators.tsx";
import SoundUtils from "../../sound_playback/SoundUtils.tsx";
import getVolumeForSoundDefault from "../getVolumeForSound.tsx";
import getSoundboardSoundURLDefault from "../getSoundboardSoundURL.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import SelectedChannelStore from "../../../stores/SelectedChannelStore.tsx";
import SoundboardStore from "../SoundboardStore.tsx";
import BaseSoundboardManager from "../BaseSoundboardManager.tsx";

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
    ({
      sound: closure_129_0,
      soundKey: closure_129_1,
      soundId: closure_129_2,
      userId: closure_129_3,
    } = applyArgumentsResult);
    return "PX_16";
  });
  applyArgumentsResult._playSoundWithListener = function () {
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
class prototype extends tmp4 {}
prototype = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/soundboard/native/SoundboardManager.tsx");

export default prototype;
