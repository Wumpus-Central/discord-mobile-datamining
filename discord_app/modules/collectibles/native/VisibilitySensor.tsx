// === Module 16213: VisibilitySensor ===

// Module 16213 (VisibilitySensor)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1497 */;
import noop_mod from "module_19" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let noop = noop_mod;
({ useEffect: c3, useRef: closure_4 } = noop);
let noop = noop_mod;
let View = _mod17.View;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const result = size.fileFinishedImporting("modules/collectibles/native/VisibilitySensor.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((resetKey) => {
  const cResult = c.c(14);
  ({ children, onChange } = resetKey);
  resetKey = resetKey.resetKey;
  const tmp2 = React4(null);
  closure_1 = tmp2;
  closure_2 = React4(false);
  const size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  React4(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c() {
      closure_2.current = false;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== resetKey) {
    const items = [resetKey];
    cResult[1] = resetKey;
    cResult[2] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[2];
  }
  React3(first, tmp4);
  if (cResult[3] !== onChange) {
    const fn2 = function f(arg0, arg1) {
      closure_0 = arg0;
      if (null === arg1.current) {
        const _setInterval = setInterval;
        tmp.current = setInterval(() => {
          if (null !== ref.current) {
            const current = ref.current;
            current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
              let tmp = arg5 + arg3 > 0;
              if (tmp) {
                tmp = arg5 < ref;
              }
              if (tmp) {
                tmp = arg4 < closure_1_0;
              }
              if (tmp) {
                tmp = arg4 + arg2 > 0;
              }
              if (tmp !== ref2.current) {
                ref2.current = tmp;
                closure_0(tmp);
              }
            });
          }
        }, 1000);
      }
    };
    cResult[3] = onChange;
    cResult[4] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
  }
  View = tmp7;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    function stopWatching() {
      if (null !== ref.current) {
        const _clearInterval = clearInterval;
        clearInterval(ref.current);
        ref.current = null;
      }
    }
    cResult[5] = stopWatching;
    let tmp8 = stopWatching;
  } else {
    tmp8 = cResult[5];
  }
  closure_7 = tmp8;
  if (cResult[6] === tmp7) {
    if (cResult[7] === height) {
      if (cResult[8] === width) {
        let tmp9 = cResult[9];
        let tmp10 = cResult[10];
      }
      React3(tmp9, tmp10);
      const _Symbol = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp15 = React5(View, {});
        cResult[11] = tmp15;
        let tmp12 = tmp15;
      } else {
        tmp12 = cResult[11];
      }
      if (cResult[12] !== children) {
        const obj2 = { collapsable: false, ref: tmp2, children: null };
        const items1 = [children, tmp12];
        obj2.children = items1;
        const tmp19 = closure_1_8(View, obj2);
        cResult[12] = children;
        cResult[13] = tmp19;
        let tmp16 = tmp19;
      } else {
        tmp16 = cResult[13];
      }
      return tmp16;
    }
  }
  class E {
    constructor() {
      tmp = closure_6(width, height);
      return closure_7;
    }
  }
  const items2 = [tmp7, height, width];
  cResult[6] = tmp7;
  cResult[7] = height;
  cResult[8] = width;
  cResult[9] = E;
  cResult[10] = items2;
  tmp10 = items2;
  tmp9 = E;
}) : ((onChange) => {
  onChange = onChange.onChange;
  function stopWatching() {
    if (null !== ref.current) {
      const _clearInterval = clearInterval;
      clearInterval(ref.current);
      ref.current = null;
    }
  }
  ({ children, resetKey } = onChange);
  let tmp = React4(null);
  closure_1 = tmp;
  closure_2 = React4(false);
  const size = useWindowDimensionsDefault();
  const width = size.width;
  const height = size.height;
  React4(null);
  const items = [resetKey];
  React3(() => {
    closure_2.current = false;
  }, items);
  const items1 = [onChange];
  const callback = noop.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    if (null === arg1.current) {
      const _setInterval = setInterval;
      tmp.current = setInterval(() => {
        if (null !== ref.current) {
          const current = ref.current;
          current.measure((arg0, arg1, arg2, arg3, arg4, arg5) => {
            let tmp = arg5 + arg3 > 0;
            if (tmp) {
              tmp = arg5 < ref;
            }
            if (tmp) {
              tmp = arg4 < closure_1_0;
            }
            if (tmp) {
              tmp = arg4 + arg2 > 0;
            }
            if (tmp !== ref2.current) {
              ref2.current = tmp;
              closure_0(tmp);
            }
          });
        }
      }, 1000);
    }
  }, items1);
  const items2 = [callback, height, width];
  React3(() => {
    callback(width, height);
    return stopWatching;
  }, items2);
  const obj = { collapsable: false, ref: tmp, children: null };
  const items3 = [children, React5(View, {})];
  obj.children = items3;
  return closure_1_8(View, obj);
});