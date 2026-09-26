// === Module 15253: useCheckpointSound ===

// Module 15253 (useCheckpointSound)
import SoundUtils from "SoundUtils" /* 9357 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15248 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ useCallback: c2, useEffect: c3, useRef: closure_4 } = noop);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointSound.tsx");

export default function useCheckpointSound(arg0) {
  _require = arg0;
  const items = [CheckpointStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => isMuted.isMuted);
  let obj = require("initialize");
  closure_3(() => () => {
    const current = ref.current;
    let stopResult;
    if (current != null) {
      stopResult = current.stop();
    }
    return stopResult;
  }, []);
  const items1 = [stateFromStores, arg0];
  return closure_4(null)(() => {
    if (!stateFromStores) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
      ref.current = SoundUtils.createSound(closure_0, "vibing_wumpus");
      const current2 = ref.current;
      current2.play();
    }
  }, items1);
};