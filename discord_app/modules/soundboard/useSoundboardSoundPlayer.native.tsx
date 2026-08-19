// discord_app/modules/soundboard/useSoundboardSoundPlayer.native.tsx
import noop from "../../../_runtime/00019_noop.js";
import handleSoundCreateOrUpdate from "SoundboardStore.tsx";
import { SoundOutputChannel } from "../sound_playback/Constants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/soundboard/useSoundboardSoundPlayer.native.tsx");

export default function useSoundboardSoundPlayer(arg0, arg1) {
  const _require = arg0;
  importDefault = arg1;
  if (arg2 === undefined) {
    const SoundboardSettings = _require(audioRef[3]).SoundboardSettings;
    const setting = SoundboardSettings.getSetting();
    let volume;
    if (setting != null) {
      volume = setting.volume;
    }
  }
  if (arg3 === undefined) {
    const DEFAULT = SoundOutputChannel.DEFAULT;
  }
  audioRef = undefined;
  audioRef = React.useContext(importDefault(audioRef[4])).audioRef;
  _require(audioRef[5]);
  const items = [closure_4];
  const items1 = [arg0];
  let obj = { playSoundboardSound: null, isPlayingSound: null, previewSound: null, isPreviewingSound: false };
  const items2 = [arg0, audioRef, arg1];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_4.isPlayingSound(lib.soundId), items1);
  obj[0] = React.useCallback((arg0) => {
    if (null != audioRef.current) {
      const current = audioRef.current;
      current.pause();
    }
    if (null != closure_1) {
      lib(audioRef[6]).playSound(lib, tmp2, arg0);
      const obj = lib(audioRef[6]);
    }
  }, items2);
  obj[1] = stateFromStores;
  obj[2] = function previewSound() {
    return Promise.resolve();
  };
  return obj;
};