// === Module 8497: APNGPlayer ===

// Module 8497 (APNGPlayer)
import c from "c" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["onLoad"];
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  const cResult = c.c(2);
  noop.useRef(false);
  if (cResult[0] !== arg0) {
    const obj2 = {
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
    };
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp2 = obj2;
  } else {
    tmp2 = cResult[1];
  }
  return tmp2;
}) : ((arg0) => {
  closure_0 = arg0;
  closure_1 = noop.useRef(false);
  const items = [arg0];
  return noop.useMemo(() => ({
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
      if (null != closure_1_0.current) {
        const current = tmp.current;
        current.seek(arg0);
      }
    }
  }), items);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/image/native/APNGPlayer.android.tsx");

export const useAPNGPlayerControls = tmp2;
export const APNGPlayer = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((onLoad, arg1) => {
  const cResult = require("c").c(9);
  if (cResult[0] !== onLoad) {
    onLoad = onLoad.onLoad;
    _require = onLoad;
    const tmp7 = _objectWithoutProperties(onLoad, closure_3);
    cResult[0] = onLoad;
    cResult[1] = onLoad;
    cResult[2] = tmp7;
    let tmp4 = tmp7;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
  }
  const ref = noop.useRef(null);
  if (cResult[3] !== tmp3) {
    const fn = function v(nativeEvent) {
      if (closure_0 != null) {
        tmp(nativeEvent.nativeEvent.url);
      }
    };
    cResult[3] = tmp3;
    cResult[4] = fn;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function y() {
      return {
        play() {
          if (null != ref.current) {
            const Commands = closure_0(8498).Commands;
            Commands.play(tmp.current);
          }
        },
        pause() {
          if (null != ref.current) {
            const Commands = closure_0(8498).Commands;
            Commands.pause(tmp.current);
          }
        },
        stop() {
          if (null != ref.current) {
            const Commands = closure_0(8498).Commands;
            Commands.seek(ref.current, 0);
            const Commands2 = closure_0(8498).Commands;
            Commands2.pause(ref.current);
          }
        },
        seek(arg0) {
          if (null != ref.current) {
            const Commands = closure_0(8498).Commands;
            Commands.seek(tmp.current, arg0);
          }
        }
      };
    };
    cResult[5] = fn2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[5];
  }
  const imperativeHandle = noop.useImperativeHandle(arg1, tmp10);
  if (cResult[6] === tmp9) {
    if (cResult[7] === tmp4) {
      let tmp12 = cResult[8];
    }
    return tmp12;
  }
  const obj = require("c");
  const obj3 = { ref, onLoad: tmp9 };
  const merged = Object.assign(tmp4);
  const tmp15 = jsx(ref(8498), { ref, onLoad: tmp9 });
  cResult[6] = tmp9;
  cResult[7] = tmp4;
  cResult[8] = tmp15;
  tmp12 = tmp15;
  const tmp13 = ref(8498);
}) : ((onLoad, arg1) => {
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
        const Commands = onLoad(8498).Commands;
        Commands.play(tmp.current);
      }
    },
    pause() {
      if (null != ref.current) {
        const Commands = onLoad(8498).Commands;
        Commands.pause(tmp.current);
      }
    },
    stop() {
      if (null != ref.current) {
        const Commands = onLoad(8498).Commands;
        Commands.seek(ref.current, 0);
        const Commands2 = onLoad(8498).Commands;
        Commands2.pause(ref.current);
      }
    },
    seek(arg0) {
      if (null != ref.current) {
        const Commands = onLoad(8498).Commands;
        Commands.seek(tmp.current, arg0);
      }
    }
  }));
  const merged1 = Object.assign(merged);
  return jsx(ref(8498), { ref, onLoad: callback });
}));