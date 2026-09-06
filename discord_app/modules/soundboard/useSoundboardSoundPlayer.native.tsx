// === Module 17071: useSoundboardSoundPlayer ===

// Module 17071 (useSoundboardSoundPlayer)
import SoundboardUtils from "SoundboardUtils" /* 7344 */;
import noop from "module_19" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 5012 */;

require = fn;
const SoundOutputChannel = fn(9091).SoundOutputChannel;
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
  require("initialize");
  const items = [SoundboardStore];
  const items1 = [arg0];
  let obj = { playSoundboardSound: null, isPlayingSound: null, previewSound: null, isPreviewingSound: false };
  const items2 = [arg0, audioRef, arg1];
  const stateFromStores = obj.useStateFromStores(items, () => SoundboardStore.isPlayingSound(soundId.soundId), items1);
  obj.playSoundboardSound = noop.useCallback((arg0) => {
    if (null != audioRef.current) {
      const current = audioRef.current;
      current.pause();
    }
    if (null != closure_1) {
      SoundboardUtils.playSound(closure_0, tmp2, arg0);
    }
  }, items2);
  obj.isPlayingSound = stateFromStores;
  obj.previewSound = function previewSound() {
    return Promise.resolve();
  };
  return obj;
};