// discord_app/modules/image/native/APNGPlayer.android.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/image/native/APNGPlayer.android.tsx");

export const useAPNGPlayerControls = function useAPNGPlayerControls(ref) {
  closure_0 = ref;
  closure_1 = noop.useRef(false);
  const items = [ref];
  return noop.useMemo(
    () => ({
      play() {
        let current = null == closure_1_0.current;
        if (!current) {
          current = ref.current;
        }
        if (!current) {
          const current2 = closure_1_0.current;
          current2.play();
          ref.current = true;
        }
      },
      pause() {
        let current = null != closure_1_0.current;
        if (current) {
          current = ref.current;
        }
        if (current) {
          const current2 = closure_1_0.current;
          current2.pause();
          ref.current = false;
        }
      },
      stop() {
        let current = null != closure_1_0.current;
        if (current) {
          current = ref.current;
        }
        if (current) {
          const current2 = closure_1_0.current;
          current2.stop();
          ref.current = false;
        }
      },
      seek(arg0) {
        if (null != ref.current) {
          const current = tmp.current;
          current.seek(arg0);
        }
      },
    }),
    items,
  );
};
export const APNGPlayer = noop.forwardRef((onLoad, arg1) => {
  onLoad = onLoad.onLoad;
  const merged = Object.assign(onLoad, Object.assign({ onLoad: 0 }));
  const ref = noop.useRef(null);
  const items = [onLoad];
  const callback = noop.useCallback((nativeEvent) => {
    if (onLoad != null) {
      tmp(nativeEvent.nativeEvent.url);
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ({
    play() {
      if (null != ref.current) {
        const Commands = onLoad(8809).Commands;
        Commands.play(tmp.current);
      }
    },
    pause() {
      if (null != ref.current) {
        const Commands = onLoad(8809).Commands;
        Commands.pause(tmp.current);
      }
    },
    stop() {
      if (null != ref.current) {
        const Commands = onLoad(8809).Commands;
        Commands.seek(ref.current, 0);
        const Commands2 = onLoad(8809).Commands;
        Commands2.pause(ref.current);
      }
    },
    seek(arg0) {
      if (null != ref.current) {
        const Commands = onLoad(8809).Commands;
        Commands.seek(tmp.current, arg0);
      }
    },
  }));
  const merged1 = Object.assign(merged);
  return jsx(ref(8809), { ref, onLoad: callback });
});
