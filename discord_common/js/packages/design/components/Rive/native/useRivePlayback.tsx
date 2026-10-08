// === Module 4854: useRivePlayback ===

// Module 4854 (useRivePlayback)
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const AppState = fn(17).AppState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/useRivePlayback.tsx");

export const useRivePlayback = ReactCompilerGating.isReactCompilerEnabled() ? (function useRivePlayback(arg0, isReady) {
  _require = arg0;
  const cResult = require("c").c(32);
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  closure_4 = appStatePlaybackEnabled.useRef(false);
  closure_5 = appStatePlaybackEnabled.useRef("background" === shouldShortLoopForReducedMotion.currentState);
  closure_6 = appStatePlaybackEnabled.useRef(false);
  appStatePlaybackEnabled.useRef(null);
  appStatePlaybackEnabled.useRef(false);
  closure_9 = appStatePlaybackEnabled.useRef(true);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function s() {
      closure_9.current = true;
      return () => {
        closure_1_9.current = false;
      };
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp2 = fn;
    tmp3 = items;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const effect = obj2.useEffect(tmp2, tmp3);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function o() {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
    };
    cResult[2] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[2];
  }
  closure_10 = tmp5;
  if (cResult[3] !== arg0) {
    const fn3 = function _() {
      closure_10();
      if (closure_0 != null) {
        closure_0.pause();
      }
      closure_4.current = false;
    };
    cResult[3] = arg0;
    cResult[4] = fn3;
    let tmp6 = fn3;
  } else {
    tmp6 = cResult[4];
  }
  closure_11 = tmp6;
  if (cResult[5] === tmp6) {
    if (cResult[6] === shouldShortLoopForReducedMotion) {
      let tmp7 = cResult[7];
    }
    closure_12 = tmp7;
    if (cResult[8] === tmp7) {
      if (cResult[9] === arg0) {
        let tmp8 = cResult[10];
      }
      closure_13 = tmp8;
      if (cResult[11] === appStatePlaybackEnabled) {
        if (cResult[12] === tmp7) {
          if (cResult[15] !== isReady) {
            class F {
              constructor() {
                if (isReady) {
                  tmp = closure_4;
                  flag = true;
                  closure_4.current = true;
                }
                return;
              }
            }
            const items1 = [isReady];
            class N {
              constructor() {
                if (!closure_8.current) {
                  flag = true;
                  tmp.current = true;
                  tmp2 = globalThis;
                  _queueMicrotask = queueMicrotask;
                  queueMicrotaskResult = queueMicrotask(() => {
                    closure_1_8.current = false;
                    if (ref2.current) {
                      if (appStatePlaybackEnabled) {
                        if (ref.current) {
                          closure_1_6.current = true;
                        }
                      }
                      if (closure_1_0 != null) {
                        closure_1_0.playIfNeeded();
                      }
                      closure_1_4.current = true;
                      closure_1_12();
                    }
                  });
                }
                return;
              }
            }
            cResult[15] = isReady;
            cResult[16] = F;
            cResult[17] = items1;
            let tmp11 = items1;
          } else {
            class F {
              constructor() {
                if (isReady) {
                  tmp = closure_4;
                  flag = true;
                  closure_4.current = true;
                }
                return;
              }
            }
            tmp11 = cResult[17];
          }
          const effect1 = obj2.useEffect(F, tmp11);
          class N {
            constructor() {
              if (!closure_8.current) {
                flag = true;
                tmp.current = true;
                tmp2 = globalThis;
                _queueMicrotask = queueMicrotask;
                queueMicrotaskResult = queueMicrotask(() => {
                  closure_1_8.current = false;
                  if (ref2.current) {
                    if (appStatePlaybackEnabled) {
                      if (ref.current) {
                        closure_1_6.current = true;
                      }
                    }
                    if (closure_1_0 != null) {
                      closure_1_0.playIfNeeded();
                    }
                    closure_1_4.current = true;
                    closure_1_12();
                  }
                });
              }
              return;
            }
          }
          const fn4 = function q() {
            if (isReady) {
              closure_12();
              return closure_10;
            }
          };
          const items2 = [isReady, tmp7, tmp5];
          cResult[18] = tmp7;
          cResult[19] = isReady;
          cResult[20] = fn4;
          cResult[21] = items2;
        }
      }
      class N {
        constructor() {
          if (!closure_8.current) {
            flag = true;
            tmp.current = true;
            tmp2 = globalThis;
            _queueMicrotask = queueMicrotask;
            queueMicrotaskResult = queueMicrotask(() => {
              closure_1_8.current = false;
              if (ref2.current) {
                if (appStatePlaybackEnabled) {
                  if (ref.current) {
                    closure_1_6.current = true;
                  }
                }
                if (closure_1_0 != null) {
                  closure_1_0.playIfNeeded();
                }
                closure_1_4.current = true;
                closure_1_12();
              }
            });
          }
          return;
        }
      }
      cResult[11] = appStatePlaybackEnabled;
      cResult[12] = tmp7;
      cResult[13] = arg0;
      cResult[14] = N;
    }
    class M {
      constructor() {
        obj = closure_0;
        if (closure_0 != null) {
          playResult = obj.play();
        }
        closure_4.current = true;
        tmp2 = closure_12();
        return;
      }
    }
    cResult[8] = tmp7;
    cResult[9] = arg0;
    cResult[10] = M;
    tmp8 = M;
  }
  class C {
    constructor() {
      tmp = closure_10();
      if (closure_3) {
        tmp2 = closure_7;
        tmp3 = globalThis;
        _setTimeout = setTimeout;
        num = 5000;
        closure_7.current = setTimeout(() => closure_1_11(), 5000);
      }
      return;
    }
  }
  cResult[5] = tmp6;
  cResult[6] = shouldShortLoopForReducedMotion;
  cResult[7] = C;
  tmp7 = C;
  const obj = require("c");
}) : (function useRivePlayback(arg0, isReady) {
  closure_0 = arg0;
  isReady = isReady.isReady;
  const appStatePlaybackEnabled = isReady.appStatePlaybackEnabled;
  const shouldShortLoopForReducedMotion = isReady.shouldShortLoopForReducedMotion;
  closure_4 = appStatePlaybackEnabled.useRef(false);
  closure_5 = appStatePlaybackEnabled.useRef("background" === shouldShortLoopForReducedMotion.currentState);
  closure_6 = appStatePlaybackEnabled.useRef(false);
  appStatePlaybackEnabled.useRef(null);
  appStatePlaybackEnabled.useRef(false);
  closure_9 = appStatePlaybackEnabled.useRef(true);
  const effect = appStatePlaybackEnabled.useEffect(() => {
    closure_9.current = true;
    return () => {
      closure_1_9.current = false;
    };
  }, []);
  const callback = appStatePlaybackEnabled.useCallback(() => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
  }, []);
  const items = [callback, arg0];
  const pause = appStatePlaybackEnabled.useCallback(() => {
    callback();
    if (closure_0 != null) {
      closure_0.pause();
    }
    closure_4.current = false;
  }, items);
  const items1 = [callback, shouldShortLoopForReducedMotion, pause];
  const callback2 = appStatePlaybackEnabled.useCallback(() => {
    callback();
    if (shouldShortLoopForReducedMotion) {
      const _setTimeout = setTimeout;
      closure_7.current = setTimeout(() => pause(), 5000);
    }
  }, items1);
  const items2 = [arg0, callback2];
  const play = appStatePlaybackEnabled.useCallback(() => {
    if (closure_0 != null) {
      closure_0.play();
    }
    closure_4.current = true;
    callback2();
  }, items2);
  const items3 = [appStatePlaybackEnabled, arg0, callback2];
  const items4 = [isReady];
  const playIfNeeded = appStatePlaybackEnabled.useCallback(() => {
    if (!ref2.current) {
      tmp.current = true;
      const _queueMicrotask = queueMicrotask;
      queueMicrotask(() => {
        closure_1_8.current = false;
        if (ref2.current) {
          if (appStatePlaybackEnabled) {
            if (ref.current) {
              closure_1_6.current = true;
            }
          }
          if (closure_1_0 != null) {
            closure_1_0.playIfNeeded();
          }
          closure_1_4.current = true;
          callback2();
        }
      });
    }
  }, items3);
  const effect1 = appStatePlaybackEnabled.useEffect(() => {
    if (isReady) {
      closure_4.current = true;
    }
  }, items4);
  const items5 = [isReady, callback2, callback];
  const effect2 = appStatePlaybackEnabled.useEffect(() => {
    if (isReady) {
      callback2();
      return callback;
    }
  }, items5);
  const items6 = [appStatePlaybackEnabled, isReady, play, pause];
  const effect3 = appStatePlaybackEnabled.useEffect(() => {
    if (appStatePlaybackEnabled) {
      closure_0 = shouldShortLoopForReducedMotion.addEventListener("change", (event) => {
        if ("background" === event) {
          closure_1_5.current = true;
          let current2 = isReady;
          if (isReady) {
            current2 = ref.current;
          }
          if (current2) {
            ref2.current = true;
            pause();
          }
        } else if ("active" === event) {
          closure_1_5.current = false;
          let current = isReady;
          if (isReady) {
            current = ref2.current;
          }
          if (current) {
            ref2.current = false;
            play();
          }
        }
      });
      return () => closure_0.remove();
    }
  }, items6);
  return { play, pause, playIfNeeded };
});