// === Module 15547: useCheckpointMusic ===

// Module 15547 (useCheckpointMusic)
import react_native from "react-native" /* 17 */;
import react from "react" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15540 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ useEffect: c3, useRef: closure_4 } = react);
const AppState = react_native.AppState;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let stateFromStores;
  let tmp12;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = stateFromStores;
  const obj = stateFromStores(576);
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CheckpointStore];
    const fn = function l() {
      return CheckpointStore.isMuted;
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  let ref = closure_4(null);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      let closure_1;
      const createSound = stateFromStores(dependencyMap[6]).createSound;
      let num = 1;
      stateFromStores(dependencyMap[6]);
      const tmp2 = ref(dependencyMap[7]);
      if (CheckpointStore.isMuted) {
        num = 0;
      }
      const sound = createSound(tmp2, "vibing_wumpus", num);
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
    tmp9 = items1;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  closure_3(tmp8, tmp9);
  if (cResult[4] !== stateFromStores) {
    const fn3 = function f() {
      if (null != ref.current) {
        let num = 1;
        const current = ref.current;
        if (stateFromStores) {
          num = 0;
        }
        current.volume = num;
      }
    };
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = fn3;
    cResult[6] = items2;
    tmp13 = items2;
    tmp12 = fn3;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  closure_3(tmp12, tmp13);
}) : (() => {
  let stateFromStores;
  const items = [CheckpointStore];
  const obj = stateFromStores(504);
  stateFromStores = obj.useStateFromStores(items, () => CheckpointStore.isMuted);
  let ref = closure_4(null);
  let tmp2 = closure_3(() => {
    let closure_1;
    const createSound = stateFromStores(dependencyMap[6]).createSound;
    let num = 1;
    stateFromStores(dependencyMap[6]);
    const tmp2 = ref(dependencyMap[7]);
    if (CheckpointStore.isMuted) {
      num = 0;
    }
    const sound = createSound(tmp2, "vibing_wumpus", num);
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
      const current = ref.current;
      if (stateFromStores) {
        num = 0;
      }
      current.volume = num;
    }
  }, items1);
});
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointMusic.tsx");

export default tmp3;