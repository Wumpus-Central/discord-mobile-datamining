// discord_app/modules/checkpoint/native/useCheckpointMusic.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ useEffect: c3, useRef: closure_4 } = noop);
const AppState = _mod17.AppState;
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointMusic.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCheckpointMusic() {
      const cResult = stateFromStores(576).c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CheckpointStore];
        const fn = function s() {
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
          const obj = stateFromStores(10770);
          if (CheckpointStore.isMuted) {
            num = 0;
          }
          const sound = obj.createSound(ref(15810), "vibing_wumpus", num);
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
    }
  : function useCheckpointMusic() {
      const items = [CheckpointStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => CheckpointStore.isMuted);
      closure_4(null);
      closure_3(() => {
        let num = 1;
        const obj = stateFromStores(10770);
        if (CheckpointStore.isMuted) {
          num = 0;
        }
        const sound = obj.createSound(ref(15810), "vibing_wumpus", num);
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
    };
