// discord_app/modules/soundboard/useSoundboardSoundPlayer.native.tsx
import SoundboardUtils from "SoundboardUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import SoundboardStore from "SoundboardStore.tsx";

const require = globalThis.__r;

require = fn;
const SoundOutputChannel = fn(9913).SoundOutputChannel;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/useSoundboardSoundPlayer.native.tsx");

export default function useSoundboardSoundPlayer(arg0, arg1) {
  _require = arg0;
  importDefault = arg1;
  if (arg2 === undefined) {
    const SoundboardSettings = require("UserSettings").SoundboardSettings;
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
  audioRef = noop.useContext(require("SoundPlayerContext")).audioRef;
  const items = [SoundboardStore];
  const items1 = [arg0];
  const obj2 = { playSoundboardSound: null, isPlayingSound: null, previewSound: null, isPreviewingSound: false };
  const items2 = [arg0, audioRef, arg1];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => SoundboardStore.isPlayingSound(soundId.soundId),
    items1,
  );
  obj2.playSoundboardSound = noop.useCallback((items) => {
    if (null != audioRef.current) {
      const current = audioRef.current;
      current.pause();
    }
    if (null != closure_1) {
      SoundboardUtils.playSound(closure_0, tmp2, items);
    }
  }, items2);
  obj2.isPlayingSound = stateFromStores;
  obj2.previewSound = function previewSound() {
    return Promise.resolve();
  };
  return obj2;
}
