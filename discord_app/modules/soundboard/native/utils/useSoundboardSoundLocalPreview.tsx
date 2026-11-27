// === Module 20043: useSoundboardSoundLocalPreview ===

// Module 20043 (useSoundboardSoundLocalPreview)
import SoundboardActionCreators from "SoundboardActionCreators" /* 10407 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SoundboardStore from "SoundboardStore" /* 6923 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/utils/useSoundboardSoundLocalPreview.tsx");

export default function useSoundboardSoundLocalPreview(soundId, volume) {
  _require = soundId;
  dependencyMap = volume;
  items = [SoundboardStore, ref];
  const items1 = [soundId];
  const isPlaying = require("initialize").useStateFromStores(items, () => {
    let isPlayingSoundResult = null != closure_0;
    if (isPlayingSoundResult) {
      isPlayingSoundResult = SoundboardStore.isPlayingSound(tmp);
    }
    if (isPlayingSoundResult) {
      isPlayingSoundResult = SoundboardStore.isUserPlayingSounds(AuthenticationStore.getId());
    }
    return isPlayingSoundResult;
  }, items1);
  let obj = require("initialize");
  const items2 = [isPlaying];
  const effect = isPlaying.useEffect(() => {
    if (!isPlaying) {
      closure_3.current = null;
    }
  }, items2);
  const items3 = [soundId, volume];
  const items4 = [soundId];
  const play = isPlaying.useCallback(() => {
    if (null != soundId) {
      const obj2 = { soundId, volume };
      SoundboardActionCreators.playSoundLocally(null, obj2);
      let isPlayingSoundResult = SoundboardStore.isPlayingSound(soundId);
      if (isPlayingSoundResult) {
        isPlayingSoundResult = SoundboardStore.isUserPlayingSounds(AuthenticationStore.getId());
      }
      let tmp9 = null;
      if (isPlayingSoundResult) {
        tmp9 = soundId;
      }
      closure_3.current = tmp9;
    }
  }, items3);
  const stop = isPlaying.useCallback(() => {
    if (null != closure_0) {
      closure_3.current = null;
      SoundboardActionCreators.stopSoundLocally(tmp);
    }
  }, items4);
  ref = isPlaying.useRef(null);
  const unmountEffect = require("useMountEffect").useUnmountEffect(() => {
    const current = ref.current;
    let tmp = null != current;
    if (tmp) {
      let isPlayingSoundResult = SoundboardStore.isPlayingSound(current);
      if (isPlayingSoundResult) {
        isPlayingSoundResult = SoundboardStore.isUserPlayingSounds(AuthenticationStore.getId());
      }
      tmp = isPlayingSoundResult;
    }
    if (tmp) {
      SoundboardActionCreators.stopSoundLocally(current);
    }
  });
  return { isPlaying, play, stop };
};