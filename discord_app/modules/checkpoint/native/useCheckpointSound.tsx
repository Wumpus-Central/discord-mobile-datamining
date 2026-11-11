// === Module 14399: useCheckpointSound ===

// Module 14399 (useCheckpointSound)
import SoundUtils from "SoundUtils" /* 10970 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14150 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointSound.tsx");

export default function useCheckpointSound(arg0) {
  _require = arg0;
  items = [CheckpointStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => isMuted.isMuted);
  noop = noop.useRef(null);
  const effect = noop.useEffect(() => () => {
    const current = ref.current;
    let stopResult;
    if (current != null) {
      stopResult = current.stop();
    }
    return stopResult;
  }, []);
  const items1 = [stateFromStores];
  const effect1 = noop.useEffect(() => {
    if (stateFromStores) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
    }
  }, items1);
  const items2 = [stateFromStores, arg0];
  return noop.useCallback(() => {
    if (!stateFromStores) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
      ref.current = SoundUtils.createSound(closure_0, "vibing_wumpus");
      const current2 = ref.current;
      current2.play();
    }
  }, items2);
};