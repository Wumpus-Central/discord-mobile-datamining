// === Module 9217: useAPNGPlayerControls ===

// Module 9217 (useAPNGPlayerControls)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
const forwardRefResult = importAllResult.forwardRef((onLoad, ref) => {
  onLoad = onLoad.onLoad;
  const merged = Object.assign(onLoad, Object.create(null));
  ref = undefined;
  ref = importAllResult.useRef(null);
  const items = [onLoad];
  const callback = importAllResult.useCallback((nativeEvent) => {
    if (onLoad != null) {
      tmp(nativeEvent.nativeEvent.url);
    }
  }, items);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    play() {
      if (null != closure_1.current) {
        const Commands = closure_1_0(closure_1_2[2]).Commands;
        Commands.play(tmp.current);
      }
    },
    pause() {
      if (null != closure_1.current) {
        const Commands = closure_1_0(closure_1_2[2]).Commands;
        Commands.pause(tmp.current);
      }
    },
    stop() {
      if (null != closure_1.current) {
        const Commands = closure_1_0(closure_1_2[2]).Commands;
        Commands.seek(tmp.current, 0);
        const Commands2 = closure_1_0(closure_1_2[2]).Commands;
        Commands2.pause(tmp.current);
      }
    },
    seek(arg0) {
      if (null != closure_1.current) {
        const Commands = closure_1_0(closure_1_2[2]).Commands;
        Commands.seek(tmp.current, arg0);
      }
    }
  }));
  const merged1 = Object.assign(merged);
  return jsx(ref(8406), { ref, onLoad: callback });
});
const result = require("set").fileFinishedImporting("modules/image/native/APNGPlayer.android.tsx");

export const useAPNGPlayerControls = function useAPNGPlayerControls(ref) {
  closure_0 = ref;
  closure_1 = importAllResult.useRef(false);
  const items = [ref];
  return importAllResult.useMemo(() => ({
    play() {
      let current = null == closure_0.current;
      if (!current) {
        current = ref.current;
      }
      if (!current) {
        const current2 = closure_0.current;
        current2.play();
        ref.current = true;
      }
    },
    pause() {
      let current = null != closure_0.current;
      if (current) {
        current = ref.current;
      }
      if (current) {
        const current2 = closure_0.current;
        current2.pause();
        ref.current = false;
      }
    },
    stop() {
      let current = null != closure_0.current;
      if (current) {
        current = ref.current;
      }
      if (current) {
        const current2 = closure_0.current;
        current2.stop();
        ref.current = false;
      }
    },
    seek(arg0) {
      if (null != closure_0.current) {
        const current = tmp.current;
        current.seek(arg0);
      }
    }
  }), items);
};
export const APNGPlayer = forwardRefResult;