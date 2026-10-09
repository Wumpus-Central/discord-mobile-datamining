// === Module 14156: useAIShimmerCycle ===

// Module 14156 (useAIShimmerCycle)
import waveTransition from "waveTransition" /* 14154 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
function linesKeyFor(join) {
  let joined = join;
  if (Array.isArray(join)) {
    joined = join.join("\0");
  }
  return joined;
}
function linesFromKey(str) {
  return str.split("\0");
}
const size = fn(2);
const result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/useAIShimmerCycle.tsx");

export { linesKeyFor };
export { linesFromKey };
export const useAIShimmerCycle = ReactCompilerGating.isReactCompilerEnabled() ? (function useAIShimmerCycle(initialDelay) {
  const cResult = delay(initialDelay[3]).c(43);
  ({ text, delay } = initialDelay);
  initialDelay = initialDelay.initialDelay;
  const duration = initialDelay.duration;
  const reducedMotion = initialDelay.reducedMotion;
  const trailingWidth = initialDelay.trailingWidth;
  const onComplete = initialDelay.onComplete;
  const onStart = initialDelay.onStart;
  const createController = initialDelay.createController;
  reducedMotion.useRef(null);
  if (cResult[0] !== text) {
    const _Array = Array;
    let joined = text;
    if (Array.isArray(text)) {
      joined = text.join("\0");
    }
    cResult[0] = text;
    cResult[1] = joined;
    let str = joined;
  } else {
    str = cResult[1];
  }
  if (cResult[2] !== str) {
    const parts = str.split("\0");
    cResult[2] = str;
    cResult[3] = parts;
    current = parts;
  } else {
    current = cResult[3];
  }
  const tmp6 = duration(reducedMotion.useState(0), 2);
  const first = tmp6[0];
  closure_12 = tmp8;
  reducedMotion.useRef(0);
  reducedMotion.useRef(null);
  reducedMotion.useRef(null);
  reducedMotion.useRef(true);
  closure_17 = obj2.useRef(onComplete);
  closure_18 = obj2.useRef(onStart);
  reducedMotion.useRef(current);
  reducedMotion.useRef(createController);
  reducedMotion.useRef(trailingWidth);
  reducedMotion.useRef(duration);
  reducedMotion.useRef(reducedMotion);
  if (cResult[4] === createController) {
    if (cResult[5] === duration) {
      if (cResult[6] === current) {
        if (cResult[7] === onComplete) {
          if (cResult[8] === onStart) {
            if (cResult[9] === reducedMotion) {
              if (cResult[10] === trailingWidth) {
                let tmp9 = cResult[11];
              }
              const effect = obj2.useEffect(tmp9);
              const tmp5Result = tmp5(obj2.useState(str), 2);
              if (tmp5Result[0] !== str) {
                tmp5Result[1](str);
                tmp8(0);
              }
              let num5 = 0;
              if (current.length > 0) {
                num5 = first % current.length;
              }
              let str4 = current[num5];
              if (str4 == null) {
                str4 = "";
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                class G {
                  constructor() {
                    tmp = closure_12((arg0) => arg0 + 1);
                    return;
                  }
                }
                cResult[12] = G;
              } else {
                class G {
                  constructor() {
                    tmp = closure_12((arg0) => arg0 + 1);
                    return;
                  }
                }
              }
              play = G;
              const _Symbol2 = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                class Q {
                  constructor() {
                    obj = {
                      play: closure_25,
                      stop() {
                                          current = ref.current;
                                          let stopResult;
                                          if (current != null) {
                                            stopResult = current.stop();
                                          }
                                          return stopResult;
                                        }
                    };
                    return obj;
                  }
                }
                const items = [G];
                cResult[13] = Q;
                cResult[14] = items;
                let tmp17 = items;
              } else {
                class Q {
                  constructor() {
                    obj = {
                      play: closure_25,
                      stop() {
                                          current = ref.current;
                                          let stopResult;
                                          if (current != null) {
                                            stopResult = current.stop();
                                          }
                                          return stopResult;
                                        }
                    };
                    return obj;
                  }
                }
                tmp17 = cResult[14];
              }
              const imperativeHandle = obj2.useImperativeHandle(initialDelay.ref, Q, tmp17);
              const _Symbol3 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class X {
                  constructor() {
                    str = closure_19.current[0];
                    tmp = closure_20;
                    if (str == null) {
                      str = "";
                    }
                    obj = {
                      to: str,
                      trailingWidth: closure_21.current,
                      onStart() {
                                          current = ref2.current;
                                          currentResult = undefined;
                                          if (current != null) {
                                            currentResult = current();
                                          }
                                          return currentResult;
                                        },
                      onComplete() {
                                          current = ref.current;
                                          currentResult = undefined;
                                          if (current != null) {
                                            currentResult = current();
                                          }
                                          return currentResult;
                                        }
                    };
                    currentResult = closure_20.current(obj);
                    closure_0 = currentResult;
                    closure_8.current = currentResult;
                    return () => {
                      currentResult.destroy();
                      closure_8.current = null;
                    };
                  }
                }
                const items1 = [];
                cResult[15] = X;
                cResult[16] = items1;
                let tmp20 = items1;
              } else {
                class X {
                  constructor() {
                    str = closure_19.current[0];
                    tmp = closure_20;
                    if (str == null) {
                      str = "";
                    }
                    obj = {
                      to: str,
                      trailingWidth: closure_21.current,
                      onStart() {
                                          current = ref2.current;
                                          currentResult = undefined;
                                          if (current != null) {
                                            currentResult = current();
                                          }
                                          return currentResult;
                                        },
                      onComplete() {
                                          current = ref.current;
                                          currentResult = undefined;
                                          if (current != null) {
                                            currentResult = current();
                                          }
                                          return currentResult;
                                        }
                    };
                    currentResult = closure_20.current(obj);
                    closure_0 = currentResult;
                    closure_8.current = currentResult;
                    return () => {
                      currentResult.destroy();
                      closure_8.current = null;
                    };
                  }
                }
                tmp20 = cResult[16];
              }
              const effect1 = obj2.useEffect(X, tmp20);
              if (cResult[17] === duration) {
                class X {
                  constructor() {
                    str = closure_19.current[0];
                    tmp = closure_20;
                    if (str == null) {
                      str = "";
                    }
                    obj = {
                      to: str,
                      trailingWidth: closure_21.current,
                      onStart() {
                                          current = ref2.current;
                                          currentResult = undefined;
                                          if (current != null) {
                                            currentResult = current();
                                          }
                                          return currentResult;
                                        },
                      onComplete() {
                                          current = ref.current;
                                          currentResult = undefined;
                                          if (current != null) {
                                            currentResult = current();
                                          }
                                          return currentResult;
                                        }
                    };
                    currentResult = closure_20.current(obj);
                    closure_0 = currentResult;
                    closure_8.current = currentResult;
                    return () => {
                      currentResult.destroy();
                      closure_8.current = null;
                    };
                  }
                }
              }
              function ee() {
                current = ref.current;
                if (current != null) {
                  const obj = { duration, reducedMotion, trailingWidth };
                  current.setOptions(obj);
                }
              }
              const items2 = [duration, reducedMotion, trailingWidth];
              cResult[17] = duration;
              cResult[18] = reducedMotion;
              cResult[19] = trailingWidth;
              cResult[20] = items2;
              cResult[21] = ee;
            }
          }
        }
      }
    }
  }
  class I {
    constructor() {
      closure_17.current = onComplete;
      closure_18.current = onStart;
      closure_19.current = closure_10;
      closure_20.current = createController;
      closure_21.current = trailingWidth;
      closure_22.current = duration;
      closure_23.current = reducedMotion;
      return;
    }
  }
  cResult[4] = createController;
  cResult[5] = duration;
  cResult[6] = current;
  cResult[7] = onComplete;
  cResult[8] = onStart;
  cResult[9] = reducedMotion;
  cResult[10] = trailingWidth;
  cResult[11] = I;
  tmp9 = I;
  let obj = delay(initialDelay[3]);
  tmp5 = duration;
}) : (function useAIShimmerCycle(initialDelay) {
  ({ text, delay } = initialDelay);
  initialDelay = initialDelay.initialDelay;
  const duration = initialDelay.duration;
  const reducedMotion = initialDelay.reducedMotion;
  const trailingWidth = initialDelay.trailingWidth;
  const onComplete = initialDelay.onComplete;
  const onStart = initialDelay.onStart;
  const createController = initialDelay.createController;
  let lines;
  let first;
  closure_12 = undefined;
  closure_17 = undefined;
  closure_18 = undefined;
  current = undefined;
  play = undefined;
  reducedMotion.useRef(null);
  let joined = text;
  if (Array.isArray(text)) {
    joined = text.join("\0");
  }
  const items = [joined];
  lines = obj.useMemo(() => joined.split("\0"), items);
  const tmp2 = duration(reducedMotion.useState(0), 2);
  first = tmp2[0];
  closure_12 = tmp4;
  reducedMotion.useRef(0);
  reducedMotion.useRef(null);
  reducedMotion.useRef(null);
  reducedMotion.useRef(true);
  closure_17 = obj.useRef(onComplete);
  closure_18 = obj.useRef(onStart);
  reducedMotion.useRef(lines);
  reducedMotion.useRef(createController);
  reducedMotion.useRef(trailingWidth);
  reducedMotion.useRef(duration);
  reducedMotion.useRef(reducedMotion);
  const effect = obj.useEffect(() => {
    closure_17.current = onComplete;
    closure_18.current = onStart;
    closure_19.current = lines;
    closure_20.current = createController;
    closure_21.current = trailingWidth;
    closure_22.current = duration;
    closure_23.current = reducedMotion;
  });
  const tmp6 = duration(reducedMotion.useState(joined), 2);
  if (tmp6[0] !== joined) {
    tmp6[1](joined);
    tmp4(0);
  }
  let num = 0;
  if (lines.length > 0) {
    num = first % lines.length;
  }
  current = lines[num];
  if (current == null) {
    current = "";
  }
  play = obj.useCallback(() => {
    closure_12((arg0) => arg0 + 1);
  }, []);
  const items1 = [play];
  const imperativeHandle = obj.useImperativeHandle(initialDelay.ref, () => ({
    play,
    stop() {
      current = ref.current;
      let stopResult;
      if (current != null) {
        stopResult = current.stop();
      }
      return stopResult;
    }
  }), items1);
  const effect1 = obj.useEffect(() => {
    let str = ref6.current[0];
    if (str == null) {
      str = "";
    }
    let currentResult = ref7.current({
      to: str,
      trailingWidth: ref8.current,
      onStart() {
        current = ref2.current;
        currentResult = undefined;
        if (current != null) {
          currentResult = current();
        }
        return currentResult;
      },
      onComplete() {
        current = ref.current;
        currentResult = undefined;
        if (current != null) {
          currentResult = current();
        }
        return currentResult;
      }
    });
    delay = currentResult;
    closure_8.current = currentResult;
    return () => {
      currentResult.destroy();
      closure_8.current = null;
    };
  }, []);
  const items2 = [duration, reducedMotion, trailingWidth];
  const effect2 = obj.useEffect(() => {
    current = ref.current;
    if (current != null) {
      const obj = { duration, reducedMotion, trailingWidth };
      current.setOptions(obj);
    }
  }, items2);
  const items3 = [joined, first, num, current, delay, initialDelay];
  const effect3 = obj.useEffect(() => {
    current = ref.current;
    if (null != current) {
      const _HermesInternal = HermesInternal;
      const combined = "" + joined + ":" + first;
      if (ref4.current !== combined) {
        ref4.current = combined;
        const current2 = ref3.current;
        ref3.current = current;
        ref5.current = null == current2;
        if (null == current2) {
          current.setTransition(tmp2, tmp2);
        } else {
          current.setTransition(current2, tmp2);
          current.play();
        }
      }
      if (null != delay) {
        if (ref10.current) {
          let current3 = waveTransition.REDUCED_MOTION_PASS_MS;
        } else {
          current3 = ref9.current;
        }
        if (ref5.current) {
          let sum = delay + initialDelay;
        } else {
          sum = delay + current3;
        }
        closure_13.current = sum;
      }
    }
  }, items3);
  const items4 = [first, play, delay];
  const effect4 = obj.useEffect(() => {
    if (null != delay) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback, ref2.current);
      return () => clearTimeout(closure_0);
    }
  }, items4);
  return { current, lines };
});