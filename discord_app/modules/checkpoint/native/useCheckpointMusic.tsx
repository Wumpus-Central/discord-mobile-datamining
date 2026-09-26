// discord_app/modules/checkpoint/native/useCheckpointMusic.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
