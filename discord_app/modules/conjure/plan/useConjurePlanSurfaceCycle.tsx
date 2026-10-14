// === Module 11949: useConjurePlanSurfaceCycle ===

// Module 11949 (useConjurePlanSurfaceCycle)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5085 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanSurfaceCycle.tsx");

export const useConjurePlanSurfaceCycle = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanSurfaceCycle(arg0, arg1) {
  _require = arg0;
  const cResult = require("c").c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function o() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let tmp7 = arg1;
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
  const obj3 = noop;
  const tmpResult = require("initialize");
  dependencyMap = _slicedToArray(noop.useState(0), 2)[1];
  const tmp10 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp10[1];
  if (arg1) {
    tmp7 = !tmp10[0];
  }
  if (tmp7) {
    tmp7 = !stateFromStores;
  }
  if (tmp7) {
    tmp7 = arg0 > 1;
  }
  noop = tmp7;
  if (cResult[2] === arg0) {
    if (cResult[3] === tmp7) {
      let tmp11 = cResult[4];
      let tmp12 = cResult[5];
    }
    const effect = obj3.useEffect(tmp11, tmp12);
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          tmp = closure_2(true);
          tmp2 = closure_1(arg0);
          return;
        }
      }
      cResult[6] = C;
    } else {
      class C {
        constructor(arg0) {
          tmp = closure_2(true);
          tmp2 = closure_1(arg0);
          return;
        }
      }
    }
    if (0 !== arg0) {
      class C {
        constructor(arg0) {
          tmp = closure_2(true);
          tmp2 = closure_1(arg0);
          return;
        }
      }
    }
    if (cResult[7] !== 0) {
      class C {
        constructor(arg0) {
          tmp = closure_2(true);
          tmp2 = closure_1(arg0);
          return;
        }
      }
      tmp16[0] = num5;
      tmp16[1] = C;
      cResult[7] = num5;
      cResult[8] = tmp16;
    } else {
      class C {
        constructor(arg0) {
          tmp = closure_2(true);
          tmp2 = closure_1(arg0);
          return;
        }
      }
    }
    return tmp16;
  }
  class S {
    constructor() {
      if (closure_3) {
        tmp = globalThis;
        _setInterval = setInterval;
        num = 2500;
        closure_0 = setInterval(() => closure_1_1(() => { ... }), 2500);
        return () => clearInterval(closure_0);
      } else {
        return;
      }
    }
  }
  const items1 = [tmp7, arg0];
  cResult[2] = arg0;
  cResult[3] = tmp7;
  cResult[4] = S;
  cResult[5] = items1;
  tmp12 = items1;
  tmp11 = S;
  const tmp9 = _slicedToArray(noop.useState(0), 2);
}) : (function useConjurePlanSurfaceCycle(arg0, arg1) {
  _require = arg0;
  let tmp = arg1;
  const items = [AccessibilityStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const tmp3 = _slicedToArray(noop.useState(0), 2);
  dependencyMap = tmp3[1];
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  _slicedToArray = tmp4[1];
  if (arg1) {
    tmp = !tmp4[0];
  }
  if (tmp) {
    tmp = !stateFromStores;
  }
  if (tmp) {
    tmp = arg0 > 1;
  }
  noop = tmp;
  const items1 = [tmp, arg0];
  const effect = obj2.useEffect(() => {
    if (closure_3) {
      const _setInterval = setInterval;
      const interval = setInterval(() => closure_1_1((arg0) => (arg0 + 1) % closure_1_0), 2500);
      return () => clearInterval(closure_0);
    }
  }, items1);
  let selectedIndex = 0;
  const select = obj2.useCallback((arg0) => {
    closure_2(true);
    closure_1(arg0);
  }, []);
  if (0 !== arg0) {
    selectedIndex = tmp3[0] % arg0;
  }
  return { selectedIndex, select };
});