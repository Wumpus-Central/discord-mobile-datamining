// === Module 16669: useConjureRevealedText ===

// Module 16669 (useConjureRevealedText)
import ConjureStreamReveal from "ConjureStreamReveal" /* 16670 */;
import conjurePageVisibility from "conjurePageVisibility" /* 16671 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 4879 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, obj1, target, tmp2Result, tmp6;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let AccessibilityStore = AccessibilityStore_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((target, streaming) => {
  let arr2;
  let closure_2;
  let closure_3;
  let ref;
  let tmp28;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  _require = target;
  let obj = require("react");
  const cResult = obj.c(22);
  streaming = streaming.streaming;
  const tmp = _require;
  const tmp2 = arr2;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function h() {
      return ref.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(tmp2[5]);
  if (streaming) {
    streaming = !tmpResult.useStateFromStores(tmp4, tmp5);
  }
  if (cResult[2] !== target) {
    const fn2 = function v() {
      return { target, length: target.length };
    };
    cResult[2] = target;
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  let obj3 = react;
  [arr2, tmp9] = react.useState(tmp7);
  _slicedToArray(react.useState(tmp7), 2);
  _slicedToArray = tmp9;
  if (cResult[4] === arr2) {
    if (cResult[5] === streaming) {
      let tmp19;
      let tmp23;
      if (cResult[6] === target) {
        arr2 = cResult[7];
      }
      if (arr3 !== arr2) {
        tmp9(arr3);
      }
      react = tmp15;
      AccessibilityStore = obj3.useRef(arr3);
      if (cResult[8] !== arr3) {
        class L {
          constructor() {
            ref.current = arr2;
          }
        }
        cResult[8] = arr3;
        cResult[9] = L;
      } else {
        class L {
          constructor() {
            ref.current = arr2;
          }
        }
      }
      const layoutEffect = obj3.useLayoutEffect(L);
      let closure_5 = obj3.useRef(0);
      let closure_6 = obj3.useRef(0);
      if (cResult[10] !== (streaming && arr3.length < target.length)) {
        class L {
          constructor() {
            ref.current = arr2;
          }
        }
        const items1 = [streaming && arr3.length < target.length];
        cResult[10] = streaming && arr3.length < target.length;
        cResult[11] = tmp20;
        cResult[12] = items1;
        tmp19 = items1;
      } else {
        class L {
          constructor() {
            ref.current = arr2;
          }
        }
        tmp19 = cResult[12];
      }
      const effect = obj3.useEffect(tmp20, tmp19);
      if (cResult[13] !== (streaming && arr3.length < target.length)) {
        class V {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              obj = closure_0(closure_1[7]);
              if (obj.isPageHidden()) {
                tmp4 = closure_4;
                target = closure_4.current.target;
                tmp5 = closure_2;
                obj1 = { target: null, length: null };
                obj1.target = target;
                obj1.length = target.length;
                tmp6 = closure_2(obj1);
              }
              flushIfHidden = function flushIfHidden() {
                const obj = closure_0(arr2[7]);
                if (obj.isPageHidden()) {
                  target = ref.current.target;
                  const obj2 = { target, length: target.length };
                  closure_1_2(obj2);
                }
              };
              tmp2Result = tmp2(tmp3[7]);
              return tmp2Result.subscribePageVisibility(flushIfHidden);
            } else {
              return;
            }
          }
        }
        const items2 = [streaming && arr3.length < target.length];
        cResult[13] = streaming && arr3.length < target.length;
        cResult[14] = V;
        cResult[15] = items2;
        tmp23 = items2;
      } else {
        class V {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              obj = closure_0(closure_1[7]);
              if (obj.isPageHidden()) {
                tmp4 = closure_4;
                target = closure_4.current.target;
                tmp5 = closure_2;
                obj1 = { target: null, length: null };
                obj1.target = target;
                obj1.length = target.length;
                tmp6 = closure_2(obj1);
              }
              flushIfHidden = function flushIfHidden() {
                const obj = closure_0(arr2[7]);
                if (obj.isPageHidden()) {
                  target = ref.current.target;
                  const obj2 = { target, length: target.length };
                  closure_1_2(obj2);
                }
              };
              tmp2Result = tmp2(tmp3[7]);
              return tmp2Result.subscribePageVisibility(flushIfHidden);
            } else {
              return;
            }
          }
        }
        tmp23 = cResult[15];
      }
      const effect1 = obj3.useEffect(V, tmp23);
      const _Math = Math;
      const bound = Math.min(arr3.length, target.length);
      if (cResult[16] === bound) {
        class V {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              obj = closure_0(closure_1[7]);
              if (obj.isPageHidden()) {
                tmp4 = closure_4;
                target = closure_4.current.target;
                tmp5 = closure_2;
                obj1 = { target: null, length: null };
                obj1.target = target;
                obj1.length = target.length;
                tmp6 = closure_2(obj1);
              }
              flushIfHidden = function flushIfHidden() {
                const obj = closure_0(arr2[7]);
                if (obj.isPageHidden()) {
                  target = ref.current.target;
                  const obj2 = { target, length: target.length };
                  closure_1_2(obj2);
                }
              };
              tmp2Result = tmp2(tmp3[7]);
              return tmp2Result.subscribePageVisibility(flushIfHidden);
            } else {
              return;
            }
          }
        }
        if (streaming) {
          class V {
            constructor() {
              tmp = closure_3;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_1;
                obj = closure_0(closure_1[7]);
                if (obj.isPageHidden()) {
                  tmp4 = closure_4;
                  target = closure_4.current.target;
                  tmp5 = closure_2;
                  obj1 = { target: null, length: null };
                  obj1.target = target;
                  obj1.length = target.length;
                  tmp6 = closure_2(obj1);
                }
                flushIfHidden = function flushIfHidden() {
                  const obj = closure_0(arr2[7]);
                  if (obj.isPageHidden()) {
                    target = ref.current.target;
                    const obj2 = { target, length: target.length };
                    closure_1_2(obj2);
                  }
                };
                tmp2Result = tmp2(tmp3[7]);
                return tmp2Result.subscribePageVisibility(flushIfHidden);
              } else {
                return;
              }
            }
          }
        }
        if (cResult[19] === streaming) {
          class V {
            constructor() {
              tmp = closure_3;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_1;
                obj = closure_0(closure_1[7]);
                if (obj.isPageHidden()) {
                  tmp4 = closure_4;
                  target = closure_4.current.target;
                  tmp5 = closure_2;
                  obj1 = { target: null, length: null };
                  obj1.target = target;
                  obj1.length = target.length;
                  tmp6 = closure_2(obj1);
                }
                flushIfHidden = function flushIfHidden() {
                  const obj = closure_0(arr2[7]);
                  if (obj.isPageHidden()) {
                    target = ref.current.target;
                    const obj2 = { target, length: target.length };
                    closure_1_2(obj2);
                  }
                };
                tmp2Result = tmp2(tmp3[7]);
                return tmp2Result.subscribePageVisibility(flushIfHidden);
              } else {
                return;
              }
            }
          }
          return tmp28;
        }
        let obj2 = { text: tmp26, revealing: streaming };
        cResult[19] = streaming;
        cResult[20] = tmp26;
        cResult[21] = obj2;
        tmp28 = obj2;
      }
      if (bound < target.length) {
        class V {
          constructor() {
            tmp = closure_3;
            if (tmp) {
              tmp2 = closure_0;
              tmp3 = closure_1;
              obj = closure_0(closure_1[7]);
              if (obj.isPageHidden()) {
                tmp4 = closure_4;
                target = closure_4.current.target;
                tmp5 = closure_2;
                obj1 = { target: null, length: null };
                obj1.target = target;
                obj1.length = target.length;
                tmp6 = closure_2(obj1);
              }
              flushIfHidden = function flushIfHidden() {
                const obj = closure_0(arr2[7]);
                if (obj.isPageHidden()) {
                  target = ref.current.target;
                  const obj2 = { target, length: target.length };
                  closure_1_2(obj2);
                }
              };
              tmp2Result = tmp2(tmp3[7]);
              return tmp2Result.subscribePageVisibility(flushIfHidden);
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
  let arr4 = arr2;
  if (arr2.target !== target) {
    let result;
    class V {
      constructor() {
        tmp = closure_3;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          obj = closure_0(closure_1[7]);
          if (obj.isPageHidden()) {
            tmp4 = closure_4;
            target = closure_4.current.target;
            tmp5 = closure_2;
            obj1 = { target: null, length: null };
            obj1.target = target;
            obj1.length = target.length;
            tmp6 = closure_2(obj1);
          }
          flushIfHidden = function flushIfHidden() {
            const obj = closure_0(arr2[7]);
            if (obj.isPageHidden()) {
              target = ref.current.target;
              const obj2 = { target, length: target.length };
              closure_1_2(obj2);
            }
          };
          tmp2Result = tmp2(tmp3[7]);
          return tmp2Result.subscribePageVisibility(flushIfHidden);
        } else {
          return;
        }
      }
    }
    tmp10[0] = target;
    if (streaming) {
      class V {
        constructor() {
          tmp = closure_3;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            obj = closure_0(closure_1[7]);
            if (obj.isPageHidden()) {
              tmp4 = closure_4;
              target = closure_4.current.target;
              tmp5 = closure_2;
              obj1 = { target: null, length: null };
              obj1.target = target;
              obj1.length = target.length;
              tmp6 = closure_2(obj1);
            }
            flushIfHidden = function flushIfHidden() {
              const obj = closure_0(arr2[7]);
              if (obj.isPageHidden()) {
                target = ref.current.target;
                const obj2 = { target, length: target.length };
                closure_1_2(obj2);
              }
            };
            tmp2Result = tmp2(tmp3[7]);
            return tmp2Result.subscribePageVisibility(flushIfHidden);
          } else {
            return;
          }
        }
      }
      result = obj4.reconcileRevealedLength(arr2.target, target, arr2.length);
    } else {
      class V {
        constructor() {
          tmp = closure_3;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            obj = closure_0(closure_1[7]);
            if (obj.isPageHidden()) {
              tmp4 = closure_4;
              target = closure_4.current.target;
              tmp5 = closure_2;
              obj1 = { target: null, length: null };
              obj1.target = target;
              obj1.length = target.length;
              tmp6 = closure_2(obj1);
            }
            flushIfHidden = function flushIfHidden() {
              const obj = closure_0(arr2[7]);
              if (obj.isPageHidden()) {
                target = ref.current.target;
                const obj2 = { target, length: target.length };
                closure_1_2(obj2);
              }
            };
            tmp2Result = tmp2(tmp3[7]);
            return tmp2Result.subscribePageVisibility(flushIfHidden);
          } else {
            return;
          }
        }
      }
    }
    tmp10[1] = result;
    arr2 = tmp10;
    arr4 = tmp10;
  }
  const tmp12 = streaming || arr4.length === target.length;
  if (!tmp12) {
    class V {
      constructor() {
        tmp = closure_3;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_1;
          obj = closure_0(closure_1[7]);
          if (obj.isPageHidden()) {
            tmp4 = closure_4;
            target = closure_4.current.target;
            tmp5 = closure_2;
            obj1 = { target: null, length: null };
            obj1.target = target;
            obj1.length = target.length;
            tmp6 = closure_2(obj1);
          }
          flushIfHidden = function flushIfHidden() {
            const obj = closure_0(arr2[7]);
            if (obj.isPageHidden()) {
              target = ref.current.target;
              const obj2 = { target, length: target.length };
              closure_1_2(obj2);
            }
          };
          tmp2Result = tmp2(tmp3[7]);
          return tmp2Result.subscribePageVisibility(flushIfHidden);
        } else {
          return;
        }
      }
    }
    tmp13[0] = target;
    tmp13[1] = target.length;
    arr2 = tmp13;
    arr4 = tmp13;
  }
  cResult[4] = arr2;
  cResult[5] = streaming;
  cResult[6] = target;
  cResult[7] = arr4;
}) : ((target, streaming) => {
  let _undefined;
  let arr2;
  let closure_3;
  let length;
  let tmp4;
  const f126028 = () => ({ target, length: target.length });
  _require = target;
  streaming = streaming.streaming;
  dependencyMap = undefined;
  let obj4;
  react = undefined;
  let ref;
  let closure_5;
  let closure_6;
  let obj = require("get initialized");
  const items = [ref];
  const tmp = _require;
  if (streaming) {
    streaming = !obj.useStateFromStores(items, () => ref.useReducedMotion);
  }
  let obj2 = react;
  [arr2, tmp4] = obj4(react.useState(f126028), 2);
  dependencyMap = tmp4;
  const tmp3 = obj4(react.useState(f126028), 2);
  obj4 = arr2;
  let arr3 = arr2;
  if (arr2.target !== target) {
    let obj3 = { target, length };
    if (streaming) {
      let tmpResult = tmp(16670);
      length = tmpResult.reconcileRevealedLength(arr2.target, target, arr2.length);
    } else {
      length = target.length;
    }
    obj4 = obj3;
    arr3 = obj3;
  }
  const tmp5 = streaming || arr3.length === target.length;
  if (!tmp5) {
    obj4 = { target, length: target.length };
    arr3 = obj4;
  }
  if (arr3 !== arr2) {
    tmp4(arr3);
  }
  react = tmp7;
  ref = obj2.useRef(arr3);
  const layoutEffect = obj2.useLayoutEffect(() => {
    ref.current = obj4;
  });
  closure_5 = obj2.useRef(0);
  closure_6 = obj2.useRef(0);
  const items1 = [streaming && arr3.length < target.length];
  const effect = obj2.useEffect(() => {
    if (closure_3) {
      ref3.current = 0;
      const _requestAnimationFrame = requestAnimationFrame;
      function step(current) {
        let REVEAL_FRAME_MS;
        if (0 === ref3.current) {
          REVEAL_FRAME_MS = ConjureStreamReveal.REVEAL_FRAME_MS;
        } else {
          REVEAL_FRAME_MS = current - ref3.current;
        }
        if (REVEAL_FRAME_MS >= ConjureStreamReveal.REVEAL_FRAME_MS) {
          ref3.current = current;
          current = ref.current;
          const obj3 = { target: null, revealed: null, elapsedMs: REVEAL_FRAME_MS };
          ({ target: obj2.target, length: obj2.revealed } = current);
          const obj = ConjureStreamReveal;
          const nextRevealLengthResult = obj.nextRevealLength(obj3);
          if (nextRevealLengthResult !== current.length) {
            const obj5 = { target: current.target, length: nextRevealLengthResult };
            c1(obj5);
          }
        }
        closure_5.current = requestAnimationFrame(step);
      }
      ref2.current = requestAnimationFrame(step);
      return () => cancelAnimationFrame(ref2.current);
    }
  }, items1);
  const items2 = [streaming && arr3.length < target.length];
  const effect1 = obj2.useEffect(() => {
    if (closure_3) {
      let obj = conjurePageVisibility;
      if (obj.isPageHidden()) {
        target = ref.current.target;
        let obj2 = { target, length: target.length };
        _undefined(obj2);
      }
      function flushIfHidden() {
        const obj = closure_0(c1[7]);
        if (obj.isPageHidden()) {
          target = ref.current.target;
          const obj2 = { target, length: target.length };
          _undefined(obj2);
        }
      }
      const tmpResult = conjurePageVisibility;
      return tmpResult.subscribePageVisibility(flushIfHidden);
    }
  }, items2);
  const bound = Math.min(arr3.length, target.length);
  let substr = target;
  if (bound < target.length) {
    substr = target.slice(0, bound);
  }
  let obj5 = { text: substr, revealing: streaming };
  if (streaming) {
    streaming = bound < target.length;
  }
  return obj5;
});
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureRevealedText.tsx");

export const useConjureRevealedText = tmp2;