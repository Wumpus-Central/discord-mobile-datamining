// === Module 16669: useConjureRevealedText ===

// Module 16669 (useConjureRevealedText)
import ConjureStreamReveal from "ConjureStreamReveal" /* 16670 */;
import conjurePageVisibility from "conjurePageVisibility" /* 16671 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureRevealedText.tsx");

export const useConjureRevealedText = ReactCompilerGating.isReactCompilerEnabled() ? ((target, streaming) => {
  _require = target;
  target = _require;
  const cResult = require("c").c(22);
  streaming = streaming.streaming;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function h() {
      return ref.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp2 = items;
    tmp3 = fn;
  } else {
    [tmp2, tmp3] = cResult;
  }
  length = dependencyMap;
  let obj = require("c");
  if (streaming) {
    streaming = !targetResult.useStateFromStores(tmp2, tmp3);
  }
  if (cResult[2] !== target) {
    const fn2 = function v() {
      return { target, length: target.length };
    };
    cResult[2] = target;
    cResult[3] = fn2;
    let tmp5 = fn2;
  } else {
    tmp5 = cResult[3];
  }
  targetResult = target(504);
  [tmp7, tmp8] = noop.useState(tmp5);
  _slicedToArray = tmp8;
  if (cResult[4] === tmp7) {
    if (cResult[5] === streaming) {
      if (cResult[6] === target) {
        dependencyMap = cResult[7];
      }
      if (arr2 !== tmp7) {
        tmp8(arr2);
      }
      let tmp16 = streaming;
      if (streaming) {
        tmp16 = arr2.length < target.length;
      }
      noop = tmp16;
      AccessibilityStore = obj3.useRef(arr2);
      if (cResult[8] !== arr2) {
        class L {
          constructor() {
            closure_4.current = closure_1;
            return;
          }
        }
        cResult[8] = arr2;
        cResult[9] = L;
      } else {
        class L {
          constructor() {
            closure_4.current = closure_1;
            return;
          }
        }
      }
      const layoutEffect = obj3.useLayoutEffect(L);
      closure_5 = obj3.useRef(0);
      closure_6 = obj3.useRef(0);
      if (cResult[10] !== tmp16) {
        class L {
          constructor() {
            closure_4.current = closure_1;
            return;
          }
        }
        const items1 = [tmp16];
        cResult[10] = tmp16;
        cResult[11] = tmp21;
        cResult[12] = items1;
        let tmp20 = items1;
      } else {
        class L {
          constructor() {
            closure_4.current = closure_1;
            return;
          }
        }
        tmp20 = cResult[12];
      }
      const effect = obj3.useEffect(tmp21, tmp20);
      if (cResult[13] !== tmp16) {
        class V {
          constructor() {
            if (closure_3) {
              tmp = closure_0;
              tmp2 = closure_1;
              obj = closure_0(closure_1[7]);
              if (obj.isPageHidden()) {
                tmp3 = closure_4;
                target = closure_4.current.target;
                tmp4 = closure_2;
                obj1 = { target: null, length: null };
                obj1.target = target;
                obj1.length = target.length;
                tmp5 = closure_2(obj1);
              }
              flushIfHidden = function flushIfHidden() {
                if (obj.isPageHidden()) {
                  target = ref.current.target;
                  const obj2 = { target, length: target.length };
                  closure_1_2(obj2);
                }
                obj = closure_0(closure_1[7]);
              };
              tmpResult = tmp(tmp2[7]);
              return tmpResult.subscribePageVisibility(flushIfHidden);
            } else {
              return;
            }
          }
        }
        const items2 = [tmp16];
        cResult[13] = tmp16;
        cResult[14] = V;
        cResult[15] = items2;
        let tmp24 = items2;
      } else {
        class V {
          constructor() {
            if (closure_3) {
              tmp = closure_0;
              tmp2 = closure_1;
              obj = closure_0(closure_1[7]);
              if (obj.isPageHidden()) {
                tmp3 = closure_4;
                target = closure_4.current.target;
                tmp4 = closure_2;
                obj1 = { target: null, length: null };
                obj1.target = target;
                obj1.length = target.length;
                tmp5 = closure_2(obj1);
              }
              flushIfHidden = function flushIfHidden() {
                if (obj.isPageHidden()) {
                  target = ref.current.target;
                  const obj2 = { target, length: target.length };
                  closure_1_2(obj2);
                }
                obj = closure_0(closure_1[7]);
              };
              tmpResult = tmp(tmp2[7]);
              return tmpResult.subscribePageVisibility(flushIfHidden);
            } else {
              return;
            }
          }
        }
        tmp24 = cResult[15];
      }
      const effect1 = obj3.useEffect(V, tmp24);
      const _Math = Math;
      const bound = Math.min(arr2.length, target.length);
      if (cResult[16] === bound) {
        class V {
          constructor() {
            if (closure_3) {
              tmp = closure_0;
              tmp2 = closure_1;
              obj = closure_0(closure_1[7]);
              if (obj.isPageHidden()) {
                tmp3 = closure_4;
                target = closure_4.current.target;
                tmp4 = closure_2;
                obj1 = { target: null, length: null };
                obj1.target = target;
                obj1.length = target.length;
                tmp5 = closure_2(obj1);
              }
              flushIfHidden = function flushIfHidden() {
                if (obj.isPageHidden()) {
                  target = ref.current.target;
                  const obj2 = { target, length: target.length };
                  closure_1_2(obj2);
                }
                obj = closure_0(closure_1[7]);
              };
              tmpResult = tmp(tmp2[7]);
              return tmpResult.subscribePageVisibility(flushIfHidden);
            } else {
              return;
            }
          }
        }
        if (streaming) {
          class V {
            constructor() {
              if (closure_3) {
                tmp = closure_0;
                tmp2 = closure_1;
                obj = closure_0(closure_1[7]);
                if (obj.isPageHidden()) {
                  tmp3 = closure_4;
                  target = closure_4.current.target;
                  tmp4 = closure_2;
                  obj1 = { target: null, length: null };
                  obj1.target = target;
                  obj1.length = target.length;
                  tmp5 = closure_2(obj1);
                }
                flushIfHidden = function flushIfHidden() {
                  if (obj.isPageHidden()) {
                    target = ref.current.target;
                    const obj2 = { target, length: target.length };
                    closure_1_2(obj2);
                  }
                  obj = closure_0(closure_1[7]);
                };
                tmpResult = tmp(tmp2[7]);
                return tmpResult.subscribePageVisibility(flushIfHidden);
              } else {
                return;
              }
            }
          }
        }
        if (cResult[19] === streaming) {
          class V {
            constructor() {
              if (closure_3) {
                tmp = closure_0;
                tmp2 = closure_1;
                obj = closure_0(closure_1[7]);
                if (obj.isPageHidden()) {
                  tmp3 = closure_4;
                  target = closure_4.current.target;
                  tmp4 = closure_2;
                  obj1 = { target: null, length: null };
                  obj1.target = target;
                  obj1.length = target.length;
                  tmp5 = closure_2(obj1);
                }
                flushIfHidden = function flushIfHidden() {
                  if (obj.isPageHidden()) {
                    target = ref.current.target;
                    const obj2 = { target, length: target.length };
                    closure_1_2(obj2);
                  }
                  obj = closure_0(closure_1[7]);
                };
                tmpResult = tmp(tmp2[7]);
                return tmpResult.subscribePageVisibility(flushIfHidden);
              } else {
                return;
              }
            }
          }
          return tmp29;
        }
        let obj2 = { text: tmp27, revealing: streaming };
        cResult[19] = streaming;
        cResult[20] = tmp27;
        cResult[21] = obj2;
        tmp29 = obj2;
      }
      if (bound < target.length) {
        class V {
          constructor() {
            if (closure_3) {
              tmp = closure_0;
              tmp2 = closure_1;
              obj = closure_0(closure_1[7]);
              if (obj.isPageHidden()) {
                tmp3 = closure_4;
                target = closure_4.current.target;
                tmp4 = closure_2;
                obj1 = { target: null, length: null };
                obj1.target = target;
                obj1.length = target.length;
                tmp5 = closure_2(obj1);
              }
              flushIfHidden = function flushIfHidden() {
                if (obj.isPageHidden()) {
                  target = ref.current.target;
                  const obj2 = { target, length: target.length };
                  closure_1_2(obj2);
                }
                obj = closure_0(closure_1[7]);
              };
              tmpResult = tmp(tmp2[7]);
              return tmpResult.subscribePageVisibility(flushIfHidden);
            } else {
              return;
            }
          }
        }
      }
      cResult[16] = bound;
      cResult[17] = target;
      cResult[18] = target;
    }
  }
  dependencyMap = tmp7;
  let tmp9 = tmp7;
  if (tmp7.target === target) {
    class V {
      constructor() {
        if (closure_3) {
          tmp = closure_0;
          tmp2 = closure_1;
          obj = closure_0(closure_1[7]);
          if (obj.isPageHidden()) {
            tmp3 = closure_4;
            target = closure_4.current.target;
            tmp4 = closure_2;
            obj1 = { target: null, length: null };
            obj1.target = target;
            obj1.length = target.length;
            tmp5 = closure_2(obj1);
          }
          flushIfHidden = function flushIfHidden() {
            if (obj.isPageHidden()) {
              target = ref.current.target;
              const obj2 = { target, length: target.length };
              closure_1_2(obj2);
            }
            obj = closure_0(closure_1[7]);
          };
          tmpResult = tmp(tmp2[7]);
          return tmpResult.subscribePageVisibility(flushIfHidden);
        } else {
          return;
        }
      }
    }
    if (!streaming) {
      class V {
        constructor() {
          if (closure_3) {
            tmp = closure_0;
            tmp2 = closure_1;
            obj = closure_0(closure_1[7]);
            if (obj.isPageHidden()) {
              tmp3 = closure_4;
              target = closure_4.current.target;
              tmp4 = closure_2;
              obj1 = { target: null, length: null };
              obj1.target = target;
              obj1.length = target.length;
              tmp5 = closure_2(obj1);
            }
            flushIfHidden = function flushIfHidden() {
              if (obj.isPageHidden()) {
                target = ref.current.target;
                const obj2 = { target, length: target.length };
                closure_1_2(obj2);
              }
              obj = closure_0(closure_1[7]);
            };
            tmpResult = tmp(tmp2[7]);
            return tmpResult.subscribePageVisibility(flushIfHidden);
          } else {
            return;
          }
        }
      }
    }
    if (!tmp13) {
      class V {
        constructor() {
          if (closure_3) {
            tmp = closure_0;
            tmp2 = closure_1;
            obj = closure_0(closure_1[7]);
            if (obj.isPageHidden()) {
              tmp3 = closure_4;
              target = closure_4.current.target;
              tmp4 = closure_2;
              obj1 = { target: null, length: null };
              obj1.target = target;
              obj1.length = target.length;
              tmp5 = closure_2(obj1);
            }
            flushIfHidden = function flushIfHidden() {
              if (obj.isPageHidden()) {
                target = ref.current.target;
                const obj2 = { target, length: target.length };
                closure_1_2(obj2);
              }
              obj = closure_0(closure_1[7]);
            };
            tmpResult = tmp(tmp2[7]);
            return tmpResult.subscribePageVisibility(flushIfHidden);
          } else {
            return;
          }
        }
      }
      tmp14[0] = target;
      tmp14[1] = target.length;
      dependencyMap = tmp14;
      tmp9 = tmp14;
    }
    cResult[4] = tmp7;
    cResult[5] = streaming;
    cResult[6] = target;
    cResult[7] = tmp9;
  } else {
    class V {
      constructor() {
        if (closure_3) {
          tmp = closure_0;
          tmp2 = closure_1;
          obj = closure_0(closure_1[7]);
          if (obj.isPageHidden()) {
            tmp3 = closure_4;
            target = closure_4.current.target;
            tmp4 = closure_2;
            obj1 = { target: null, length: null };
            obj1.target = target;
            obj1.length = target.length;
            tmp5 = closure_2(obj1);
          }
          flushIfHidden = function flushIfHidden() {
            if (obj.isPageHidden()) {
              target = ref.current.target;
              const obj2 = { target, length: target.length };
              closure_1_2(obj2);
            }
            obj = closure_0(closure_1[7]);
          };
          tmpResult = tmp(tmp2[7]);
          return tmpResult.subscribePageVisibility(flushIfHidden);
        } else {
          return;
        }
      }
    }
    tmp10[0] = target;
    if (streaming) {
      class V {
        constructor() {
          if (closure_3) {
            tmp = closure_0;
            tmp2 = closure_1;
            obj = closure_0(closure_1[7]);
            if (obj.isPageHidden()) {
              tmp3 = closure_4;
              target = closure_4.current.target;
              tmp4 = closure_2;
              obj1 = { target: null, length: null };
              obj1.target = target;
              obj1.length = target.length;
              tmp5 = closure_2(obj1);
            }
            flushIfHidden = function flushIfHidden() {
              if (obj.isPageHidden()) {
                target = ref.current.target;
                const obj2 = { target, length: target.length };
                closure_1_2(obj2);
              }
              obj = closure_0(closure_1[7]);
            };
            tmpResult = tmp(tmp2[7]);
            return tmpResult.subscribePageVisibility(flushIfHidden);
          } else {
            return;
          }
        }
      }
      ({ target, length } = tmp7);
      const result = obj4.reconcileRevealedLength(target, target, length);
    } else {
      class V {
        constructor() {
          if (closure_3) {
            tmp = closure_0;
            tmp2 = closure_1;
            obj = closure_0(closure_1[7]);
            if (obj.isPageHidden()) {
              tmp3 = closure_4;
              target = closure_4.current.target;
              tmp4 = closure_2;
              obj1 = { target: null, length: null };
              obj1.target = target;
              obj1.length = target.length;
              tmp5 = closure_2(obj1);
            }
            flushIfHidden = function flushIfHidden() {
              if (obj.isPageHidden()) {
                target = ref.current.target;
                const obj2 = { target, length: target.length };
                closure_1_2(obj2);
              }
              obj = closure_0(closure_1[7]);
            };
            tmpResult = tmp(tmp2[7]);
            return tmpResult.subscribePageVisibility(flushIfHidden);
          } else {
            return;
          }
        }
      }
    }
    tmp10[1] = result;
    dependencyMap = tmp10;
  }
  const tmp6 = _slicedToArray(noop.useState(tmp5), 2);
}) : ((target, streaming) => {
  _require = target;
  streaming = streaming.streaming;
  dependencyMap = undefined;
  let obj5;
  noop = undefined;
  let ref;
  closure_5 = undefined;
  closure_6 = undefined;
  target = _require;
  const items = [ref];
  if (streaming) {
    streaming = !obj.useStateFromStores(items, () => ref.useReducedMotion);
  }
  length = dependencyMap;
  obj = require("initialize");
  [tmp2, tmp3] = obj5(noop.useState(() => ({ target, length: target.length })), 2);
  dependencyMap = tmp3;
  obj5 = tmp2;
  let arr2 = tmp2;
  if (tmp2.target === target) {
    let tmp5 = streaming;
    if (!streaming) {
      tmp5 = arr2.length === target.length;
    }
    if (!tmp5) {
      let obj3 = { target, length: target.length };
      obj5 = obj3;
      arr2 = obj3;
    }
    if (arr2 !== tmp2) {
      tmp3(arr2);
    }
    let tmp7 = streaming;
    if (streaming) {
      tmp7 = arr2.length < target.length;
    }
    noop = tmp7;
    ref = obj2.useRef(arr2);
    const layoutEffect = obj2.useLayoutEffect(() => {
      closure_4.current = obj5;
    });
    closure_5 = obj2.useRef(0);
    closure_6 = obj2.useRef(0);
    const items1 = [tmp7];
    const effect = obj2.useEffect(() => {
      if (closure_3) {
        ref3.current = 0;
        const _requestAnimationFrame = requestAnimationFrame;
        function step(current) {
          if (0 === ref3.current) {
            let REVEAL_FRAME_MS = ConjureStreamReveal.REVEAL_FRAME_MS;
          } else {
            REVEAL_FRAME_MS = current - ref3.current;
          }
          if (REVEAL_FRAME_MS >= ConjureStreamReveal.REVEAL_FRAME_MS) {
            ref3.current = current;
            current = ref.current;
            const obj3 = { target: null, revealed: null, elapsedMs: null };
            ({ target: obj2.target, length: obj2.revealed } = current);
            obj3.elapsedMs = REVEAL_FRAME_MS;
            const nextRevealLengthResult = ConjureStreamReveal.nextRevealLength(obj3);
            if (nextRevealLengthResult !== current.length) {
              obj5 = { target: current.target, length: nextRevealLengthResult };
              c1(obj5);
            }
          }
          closure_5.current = requestAnimationFrame(step);
        }
        ref2.current = requestAnimationFrame(step);
        return () => cancelAnimationFrame(ref2.current);
      }
    }, items1);
    const items2 = [tmp7];
    const effect1 = obj2.useEffect(() => {
      if (closure_3) {
        if (obj.isPageHidden()) {
          target = ref.current.target;
          let obj2 = { target, length: target.length };
          _undefined(obj2);
        }
        function flushIfHidden() {
          if (obj.isPageHidden()) {
            target = ref.current.target;
            const obj2 = { target, length: target.length };
            dependencyMap(obj2);
          }
          obj = closure_0(16671);
        }
        obj = conjurePageVisibility;
        return conjurePageVisibility.subscribePageVisibility(flushIfHidden);
      }
    }, items2);
    const _Math = Math;
    const bound = Math.min(arr2.length, target.length);
    let substr = target;
    if (bound < target.length) {
      substr = target.slice(0, bound);
    }
    const obj4 = { text: substr, revealing: null };
    if (streaming) {
      streaming = bound < target.length;
    }
    obj4.revealing = streaming;
    return obj4;
  } else {
    obj5 = { target, length: null };
    if (streaming) {
      ({ target, length } = tmp2);
      let length2 = target(16670).reconcileRevealedLength(target, target, length);
      const targetResult = target(16670);
    } else {
      length2 = target.length;
    }
    obj5.length = length2;
  }
});