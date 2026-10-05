// === Module 15529: useCheckpointSound ===

// Module 15529 (useCheckpointSound)
import SoundUtils from "SoundUtils" /* 9562 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15524 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c2;
let c3;
let closure_4;
({ useCallback: c2, useEffect: c3, useRef: closure_4 } = react);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let isMuted;
  let stateFromStores;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  const tmp2 = stateFromStores;
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
  const tmpResult = tmp(tmp2[4]);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const ref = closure_4(null);
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
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  closure_3(tmp8, tmp9);
  if (cResult[4] === stateFromStores) {
    let tmp11;
    if (cResult[5] === arg0) {
      tmp11 = cResult[6];
    }
    return tmp11;
  }
  const fn3 = function _() {
    if (!stateFromStores) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
      const obj = SoundUtils;
      ref.current = obj.createSound(closure_0, "vibing_wumpus");
      const current2 = ref.current;
      current2.play();
    }
  };
  cResult[4] = stateFromStores;
  cResult[5] = arg0;
  cResult[6] = fn3;
  tmp11 = fn3;
}) : ((arg0) => {
  let closure_0;
  let isMuted;
  let stateFromStores;
  _require = arg0;
  let obj = require("get initialized");
  const items = [CheckpointStore];
  stateFromStores = obj.useStateFromStores(items, () => isMuted.isMuted);
  const ref = closure_4(null);
  closure_3(() => () => {
    const current = ref.current;
    let stopResult;
    if (current != null) {
      stopResult = current.stop();
    }
    return stopResult;
  }, []);
  const items1 = [stateFromStores, arg0];
  return ref(() => {
    if (!stateFromStores) {
      const current = ref.current;
      if (current != null) {
        current.stop();
      }
      const obj = SoundUtils;
      ref.current = obj.createSound(closure_0, "vibing_wumpus");
      const current2 = ref.current;
      current2.play();
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointSound.tsx");

export default tmp3;