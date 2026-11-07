// === Module 13691: useCheckpointSound ===

// Module 13691 (useCheckpointSound)
import SoundUtils from "SoundUtils" /* 11160 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13667 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ useCallback: c2, useEffect: c3, useRef: closure_4 } = noop);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointSound.tsx");

export default function useCheckpointSound(arg0) {
  _require = arg0;
  items = [CheckpointStore];
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