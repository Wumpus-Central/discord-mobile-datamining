// === Module 14291: useCheckpointRouteSounds ===

// Module 14291 (useCheckpointRouteSounds)
import CheckpointSounds from "CheckpointSounds" /* 14292 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointRouteSounds.tsx");

export default function useCheckpointRouteSounds() {
  items = [callback];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => callback.isMuted);
  dependencyMap = noop.useRef([]);
  noop = noop.useRef(null);
  callback = noop.useCallback(() => {
    const current = ref2.current;
    if (current != null) {
      current();
    }
    const current1 = ref.current;
    const item = current1.forEach((stop) => stop.stop());
    ref.current = [];
  }, []);
  const items1 = [callback];
  const effect = noop.useEffect(() => callback, items1);
  const items2 = [stateFromStores, callback];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores) {
      callback();
    }
  }, items2);
  const items3 = [callback];
  return noop.useCallback((arr) => {
    callback();
    closure_2.current = CheckpointSounds.scheduleCheckpointRouteSounds(arr, (stage_waiting) => {
      if (!callback.isMuted) {
        const sound = stateFromStores(ref[4]).createSound(stage_waiting, "vibing_wumpus");
        const current = ref.current;
        current.push(sound);
        sound.play();
        const obj = stateFromStores(ref[4]);
      }
    });
  }, items3);
};