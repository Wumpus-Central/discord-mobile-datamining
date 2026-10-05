// === Module 15531: useCheckpointMusic ===

// Module 15531 (useCheckpointMusic)
import _mod17 from "module_17" /* 17 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15524 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

({ useEffect: c3, useRef: closure_4 } = noop);
const AppState = _mod17.AppState;
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointMusic.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = stateFromStores(576).c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function l() {
      return CheckpointStore.isMuted;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5);
  closure_4(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      let num = 1;
      const obj = stateFromStores(9562);
      if (CheckpointStore.isMuted) {
        num = 0;
      }
      const sound = obj.createSound(ref(15532), "vibing_wumpus", num);
      ref.current = sound;
      sound.loop();
      ref = AppState.addEventListener("change", (event) => {
        if ("active" === event) {
          sound.play();
        } else {
          sound.pause();
        }
      });
      return () => {
        closure_1.remove();
        sound.stop();
        closure_1.current = null;
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
  if (cResult[4] !== stateFromStores) {
    const fn3 = function f() {
      if (null != ref.current) {
        let num = 1;
        if (stateFromStores) {
          num = 0;
        }
        ref.current.volume = num;
      }
    };
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = fn3;
    cResult[6] = items2;
    let tmp13 = items2;
    let tmp12 = fn3;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  closure_3(tmp12, tmp13);
  const tmpResult = stateFromStores(504);
}) : (() => {
  const items = [CheckpointStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => CheckpointStore.isMuted);
  closure_4(null);
  closure_3(() => {
    let num = 1;
    const obj = stateFromStores(9562);
    if (CheckpointStore.isMuted) {
      num = 0;
    }
    const sound = obj.createSound(ref(15532), "vibing_wumpus", num);
    ref.current = sound;
    sound.loop();
    ref = AppState.addEventListener("change", (event) => {
      if ("active" === event) {
        sound.play();
      } else {
        sound.pause();
      }
    });
    return () => {
      closure_1.remove();
      sound.stop();
      closure_1.current = null;
    };
  }, []);
  const items1 = [stateFromStores];
  closure_3(() => {
    if (null != ref.current) {
      let num = 1;
      if (stateFromStores) {
        num = 0;
      }
      ref.current.volume = num;
    }
  }, items1);
});