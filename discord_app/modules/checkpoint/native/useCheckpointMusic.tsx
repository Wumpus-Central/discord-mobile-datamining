// === Module 15255: useCheckpointMusic ===

// Module 15255 (useCheckpointMusic)
import _mod17 from "module_17" /* 17 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 15248 */;
import size from "module_2" /* 2 */;

({ useEffect: c3, useRef: closure_4 } = noop);
const AppState = _mod17.AppState;
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointMusic.tsx");

export default function useCheckpointMusic() {
  const items = [CheckpointStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => CheckpointStore.isMuted);
  closure_4(null);
  closure_3(() => {
    let num = 1;
    const obj = stateFromStores(9357);
    if (CheckpointStore.isMuted) {
      num = 0;
    }
    const sound = obj.createSound(ref(15256), "vibing_wumpus", num);
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