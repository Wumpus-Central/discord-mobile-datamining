// discord_app/design/visual-identities/ai/AIShimmer/useAIShimmerCycle.tsx
import waveTransition from "waveTransition.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_0, closure_12, current, initialDelay, play, ref2, ref3, tmp;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (initialDelay) => {
      let delay;
      let ref6;
      let ref7;
      let ref8;
      let str;
      let text;
      let obj = delay(initialDelay[3]);
      const cResult = obj.c(43);
      ({ text, delay } = initialDelay);
      initialDelay = initialDelay.initialDelay;
      const duration = initialDelay.duration;
      const reducedMotion = initialDelay.reducedMotion;
      const trailingWidth = initialDelay.trailingWidth;
      const onComplete = initialDelay.onComplete;
      const onStart = initialDelay.onStart;
      const createController = initialDelay.createController;
      ref = reducedMotion.useRef(null);
      if (cResult[0] !== text) {
        const _Array = Array;
        let joined = text;
        if (Array.isArray(text)) {
          joined = text.join("\0");
        }
        cResult[0] = text;
        cResult[1] = joined;
        str = joined;
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
      obj2.useRef(0);
      obj2.useRef(null);
      const ref4 = obj2.useRef(null);
      const ref5 = obj2.useRef(true);
      let closure_17 = obj2.useRef(onComplete);
      let closure_18 = obj2.useRef(onStart);
      ref = obj2.useRef(current);
      ref2 = obj2.useRef(createController);
      ref3 = obj2.useRef(trailingWidth);
      const ref9 = obj2.useRef(duration);
      const ref10 = obj2.useRef(reducedMotion);
      const tmp5 = duration;
      if (cResult[4] === createController) {
        if (cResult[5] === duration) {
          if (cResult[6] === current) {
            if (cResult[7] === onComplete) {
              if (cResult[8] === onStart) {
                if (cResult[9] === reducedMotion) {
                  let tmp9;
                  let tmp17;
                  let tmp20;
                  if (cResult[10] === trailingWidth) {
                    tmp9 = cResult[11];
                  }
                  const effect = obj2.useEffect(tmp9);
                  const tmp5Result = tmp5(reducedMotion.useState(str), 2);
                  if (tmp5Result[0] !== str) {
                    tmp5Result[1](str);
                    tmp6[1](0);
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
                  G = tmp15;
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
                          },
                        };
                        return obj;
                      }
                    }
                    const items = [tmp15];
                    cResult[13] = Q;
                    cResult[14] = items;
                    tmp17 = items;
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
                          },
                        };
                        return obj;
                      }
                    }
                    tmp17 = cResult[14];
                  }
                  const imperativeHandle = obj2.useImperativeHandle(ref, Q, tmp17);
                  const _Symbol3 = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    class X {
                      constructor() {
                        str = closure_19.current[0];
                        tmp = closure_20;
                        current = closure_20.current;
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
                          },
                        };
                        currentResult = current(obj);
                        closure_0 = currentResult;
                        closure_8.current = currentResult;
                        return () => {
                          delay.destroy();
                          ref.current = null;
                        };
                      }
                    }
                    const items1 = [];
                    cResult[15] = X;
                    cResult[16] = items1;
                    tmp20 = items1;
                  } else {
                    class X {
                      constructor() {
                        str = closure_19.current[0];
                        tmp = closure_20;
                        current = closure_20.current;
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
                          },
                        };
                        currentResult = current(obj);
                        closure_0 = currentResult;
                        closure_8.current = currentResult;
                        return () => {
                          delay.destroy();
                          ref.current = null;
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
                        current = closure_20.current;
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
                          },
                        };
                        currentResult = current(obj);
                        closure_0 = currentResult;
                        closure_8.current = currentResult;
                        return () => {
                          delay.destroy();
                          ref.current = null;
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
      class K {
        constructor() {
          closure_17.current = onComplete;
          closure_18.current = onStart;
          ref6.current = current;
          ref7.current = createController;
          ref8.current = trailingWidth;
          ref9.current = duration;
          ref10.current = reducedMotion;
        }
      }
      cResult[4] = createController;
      cResult[5] = duration;
      cResult[6] = current;
      cResult[7] = onComplete;
      cResult[8] = onStart;
      cResult[9] = reducedMotion;
      cResult[10] = trailingWidth;
      cResult[11] = K;
      tmp9 = K;
    }
  : (initialDelay) => {
      let delay;
      let text;
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
      ref2 = undefined;
      ref3 = undefined;
      let ref4;
      let ref5;
      let closure_17;
      let closure_18;
      let ref6;
      let ref7;
      let ref8;
      let ref9;
      let ref10;
      current = undefined;
      play = undefined;
      let obj = reducedMotion;
      ref = reducedMotion.useRef(null);
      let joined = text;
      if (Array.isArray(text)) {
        let str = "\0";
        joined = text.join("\0");
      }
      const items = [joined];
      lines = obj.useMemo(() => joined.split("\0"), items);
      const tmp2 = duration(obj.useState(0), 2);
      first = tmp2[0];
      closure_12 = tmp4;
      ref2 = obj.useRef(0);
      ref3 = obj.useRef(null);
      ref4 = obj.useRef(null);
      ref5 = obj.useRef(true);
      closure_17 = obj.useRef(onComplete);
      closure_18 = obj.useRef(onStart);
      ref6 = obj.useRef(lines);
      ref7 = obj.useRef(createController);
      ref8 = obj.useRef(trailingWidth);
      ref9 = obj.useRef(duration);
      ref10 = obj.useRef(reducedMotion);
      const effect = obj.useEffect(() => {
        closure_17.current = onComplete;
        closure_18.current = onStart;
        ref6.current = lines;
        ref7.current = createController;
        ref8.current = trailingWidth;
        ref9.current = duration;
        ref10.current = reducedMotion;
      });
      const tmp6 = duration(obj.useState(joined), 2);
      if (tmp6[0] !== joined) {
        tmp6[1](joined);
        tmp2[1](0);
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
      const imperativeHandle = obj.useImperativeHandle(
        ref,
        () => ({
          play,
          stop() {
            current = ref.current;
            let stopResult;
            if (current != null) {
              stopResult = current.stop();
            }
            return stopResult;
          },
        }),
        items1,
      );
      const effect1 = obj.useEffect(() => {
        let str = ref6.current[0];
        current = ref7.current;
        if (str == null) {
          str = "";
        }
        const obj = {
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
          },
        };
        let currentResult = current(obj);
        delay = currentResult;
        closure_8.current = currentResult;
        return () => {
          delay.destroy();
          ref.current = null;
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
              current.setTransition(current, current);
            } else {
              current.setTransition(current2, current);
              current.play();
            }
          }
          if (null != delay) {
            let current3;
            let sum;
            if (ref10.current) {
              current3 = waveTransition.REDUCED_MOTION_PASS_MS;
            } else {
              current3 = ref9.current;
            }
            if (ref5.current) {
              sum = delay + initialDelay;
            } else {
              sum = delay + current3;
            }
            ref2.current = sum;
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
    };
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
const result = size.fileFinishedImporting("design/visual-identities/ai/AIShimmer/useAIShimmerCycle.tsx");

export { linesKeyFor };
export { linesFromKey };
export const useAIShimmerCycle = tmp2;
