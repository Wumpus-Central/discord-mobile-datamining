// === Module 8992: APNGPlayer ===

// Module 8992 (APNGPlayer)
import c from "c" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["onLoad", "ref"];
const jsx = fn(21).jsx;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAPNGPlayerControls(arg0) {
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
}) : (function useAPNGPlayerControls(arg0) {
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
export const APNGPlayer = ReactCompilerGating.isReactCompilerEnabled() ? (function APNGPlayer(onLoad) {
  const cResult = require("c").c(10);
  if (cResult[0] !== onLoad) {
    onLoad = onLoad.onLoad;
    _require = onLoad;
    const tmp8 = _objectWithoutProperties(onLoad, closure_3);
    cResult[0] = onLoad;
    cResult[1] = onLoad;
    cResult[2] = tmp8;
    cResult[3] = onLoad.ref;
    let tmp5 = ref;
    let tmp4 = tmp8;
  } else {
    _require = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
  }
  const ref1 = noop.useRef(null);
  if (cResult[4] !== tmp3) {
    const fn = function y(nativeEvent) {
      if (closure_0 != null) {
        tmp(nativeEvent.nativeEvent.url);
      }
    };
    cResult[4] = tmp3;
    cResult[5] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        obj = {
          play() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.play(tmp.current);
                  }
                },
          pause() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.pause(tmp.current);
                  }
                },
          stop() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.seek(ref1.current, 0);
                    const Commands2 = closure_0(8993).Commands;
                    Commands2.pause(ref1.current);
                  }
                },
          seek(arg0) {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.seek(tmp.current, arg0);
                  }
                }
        };
        return obj;
      }
    }
    cResult[6] = C;
  } else {
    class C {
      constructor() {
        obj = {
          play() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.play(tmp.current);
                  }
                },
          pause() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.pause(tmp.current);
                  }
                },
          stop() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.seek(ref1.current, 0);
                    const Commands2 = closure_0(8993).Commands;
                    Commands2.pause(ref1.current);
                  }
                },
          seek(arg0) {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.seek(tmp.current, arg0);
                  }
                }
        };
        return obj;
      }
    }
  }
  const imperativeHandle = noop.useImperativeHandle(tmp5, C);
  if (cResult[7] === tmp10) {
    class C {
      constructor() {
        obj = {
          play() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.play(tmp.current);
                  }
                },
          pause() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.pause(tmp.current);
                  }
                },
          stop() {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.seek(ref1.current, 0);
                    const Commands2 = closure_0(8993).Commands;
                    Commands2.pause(ref1.current);
                  }
                },
          seek(arg0) {
                  if (null != ref1.current) {
                    const Commands = closure_0(8993).Commands;
                    Commands.seek(tmp.current, arg0);
                  }
                }
        };
        return obj;
      }
    }
    return tmp15;
  }
  const obj = require("c");
  const obj3 = { ref: ref1, onLoad: tmp10 };
  const merged = Object.assign(tmp4);
  tmp15 = jsx(ref1(8993), { ref: ref1, onLoad: tmp10 });
  cResult[7] = tmp10;
  cResult[8] = tmp4;
  cResult[9] = tmp15;
  const tmp13 = ref1(8993);
}) : (function APNGPlayer(onLoad) {
  onLoad = onLoad.onLoad;
  const merged = Object.assign(onLoad, Object.assign({ onLoad: 0, ref: 0 }));
  const ref = noop.useRef(null);
  const items = [onLoad];
  const callback = noop.useCallback((nativeEvent) => {
    if (onLoad != null) {
      tmp(nativeEvent.nativeEvent.url);
    }
  }, items);
  const imperativeHandle = noop.useImperativeHandle(onLoad.ref, () => ({
    play() {
      if (null != ref.current) {
        const Commands = onLoad(8993).Commands;
        Commands.play(tmp.current);
      }
    },
    pause() {
      if (null != ref.current) {
        const Commands = onLoad(8993).Commands;
        Commands.pause(tmp.current);
      }
    },
    stop() {
      if (null != ref.current) {
        const Commands = onLoad(8993).Commands;
        Commands.seek(ref.current, 0);
        const Commands2 = onLoad(8993).Commands;
        Commands2.pause(ref.current);
      }
    },
    seek(arg0) {
      if (null != ref.current) {
        const Commands = onLoad(8993).Commands;
        Commands.seek(tmp.current, arg0);
      }
    }
  }));
  const merged1 = Object.assign(merged);
  return jsx(ref(8993), { ref, onLoad: callback });
});