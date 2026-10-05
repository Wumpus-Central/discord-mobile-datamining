// === Module 17238: useSoundboardSoundPlayer ===

// Module 17238 (useSoundboardSoundPlayer)
import SoundboardUtils from "SoundboardUtils" /* 6847 */;
import Constants from "Constants" /* 9308 */;
import react from "react" /* 19 */;
import SoundboardStore from "SoundboardStore" /* 5680 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const SoundOutputChannel = Constants.SoundOutputChannel;
const result = size.fileFinishedImporting("modules/soundboard/useSoundboardSoundPlayer.native.tsx");

export default function useSoundboardSoundPlayer(arg0, arg1) {
  let audioRef;
  let closure_1;
  let items2;
  let soundId;
  let stateFromStores;
  _require = arg0;
  importDefault = arg1;
  if (arg2 === undefined) {
    const tmp2 = audioRef;
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
  audioRef = react.useContext(require("react")).audioRef;
  let obj = require("get initialized");
  const items = [SoundboardStore];
  const items1 = [arg0];
  const obj2 = {
    playSoundboardSound: react.useCallback((items) => {
      if (null != audioRef.current) {
        const current = audioRef.current;
        current.pause();
      }
      if (null != closure_1) {
        const obj = SoundboardUtils;
        obj.playSound(soundId, tmp2, items);
      }
    }, items2),
    isPlayingSound: stateFromStores,
    previewSound() {
      return Promise.resolve();
    },
    isPreviewingSound: false
  };
  items2 = [arg0, audioRef, arg1];
  stateFromStores = obj.useStateFromStores(items, () => SoundboardStore.isPlayingSound(soundId.soundId), items1);
  return obj2;
};