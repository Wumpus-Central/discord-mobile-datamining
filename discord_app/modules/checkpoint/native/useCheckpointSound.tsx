// === Module 15807: useCheckpointSound ===

// Module 15807 (useCheckpointSound)
import SoundUtils from "SoundUtils" /* 10770 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15802 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ useCallback: c2, useEffect: c3, useRef: closure_4 } = noop);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointSound.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointSound(arg0) {
  _require = arg0;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function s() {
      return isMuted.isMuted;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  closure_4(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function p() {
      return () => {
        const current = ref.current;
        let stopResult;
        if (current != null) {
          stopResult = current.stop();
        }
        return stopResult;
      };
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  closure_3(tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    if (cResult[5] === arg0) {
      let tmp11 = cResult[6];
    }
    return tmp11;
  }
  class S {
    constructor() {
      if (!closure_1) {
        tmp = closure_2;
        current = closure_2.current;
        tmp2 = null;
        if (current != null) {
          stopResult = current.stop();
        }
        tmp4 = closure_0;
        tmp5 = closure_1;
        obj = closure_0(closure_1[5]);
        tmp6 = closure_0;
        str = "vibing_wumpus";
        tmp.current = obj.createSound(closure_0, "vibing_wumpus");
        current2 = tmp.current;
        playResult = current2.play();
      }
      return;
    }
  }
  cResult[4] = stateFromStores;
  cResult[5] = arg0;
  cResult[6] = S;
  tmp11 = S;
  const tmpResult = require("initialize");
}) : (function useCheckpointSound(arg0) {
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
});