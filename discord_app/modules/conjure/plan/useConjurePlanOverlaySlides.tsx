// === Module 12540: useConjurePlanOverlaySlides ===

// Module 12540 (useConjurePlanOverlaySlides)
import _modDef3864 from "module_3864" /* 3864 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;

const require = globalThis.__r;

const require = fn;
let items = [_modDef3864["3eTjcV"], _modDef3864.l3j5nS];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanOverlaySlides.tsx");

export const useConjurePlanOverlaySlides = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanOverlaySlides(arg0) {
  const cResult = require("c").c(12);
  ({ ready, paused } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [closure_4];
    const fn = function c() {
      return closure_4.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj = require("c");
  const tmp4 = undefined !== paused && paused;
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  const tmp9 = ready(num3.useState(0), 2);
  _require = tmp9[1];
  const obj3 = num3;
  const tmpResult = require("initialize");
  [tmp11, dependencyMap] = ready(num3.useState(false), 2);
  if (ready) {
    ready = !stateFromStores;
  }
  if (ready) {
    ready = !tmp4;
  }
  if (ready) {
    ready = !tmp11;
  }
  if (!stateFromStores) {
    num3 = tmp9[0];
  } else {
    num3 = 0;
  }
  if (cResult[2] !== ready) {
    const fn2 = function y() {
      if (ready) {
        const _setInterval = setInterval;
        const interval = setInterval(() => closure_0((arg0) => (arg0 + 1) % length.length), 4000);
        return () => clearInterval(closure_0);
      }
    };
    const items1 = [ready];
    cResult[2] = ready;
    cResult[3] = fn2;
    cResult[4] = items1;
    let tmp13 = items1;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  const effect = obj3.useEffect(tmp12, tmp13);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const fn3 = function b(arg0) {
      dependencyMap(true);
      closure_0(arg0);
    };
    cResult[5] = fn3;
    let tmp15 = fn3;
  } else {
    tmp15 = cResult[5];
  }
  closure_4 = tmp15;
  if (cResult[6] !== num3) {
    const fn4 = function x() {
      return closure_4(num3);
    };
    cResult[6] = num3;
    cResult[7] = fn4;
    let tmp16 = fn4;
  } else {
    tmp16 = cResult[7];
  }
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const mapped = items.map((item) => {
      const intl = closure_0(1125).intl;
      return intl.string(item);
    });
    cResult[8] = mapped;
    let tmp17 = mapped;
  } else {
    tmp17 = cResult[8];
  }
  if (cResult[9] === tmp16) {
    if (cResult[10] === num3) {
      let tmp20 = cResult[11];
    }
    return tmp20;
  }
  const obj2 = { slide: num3, labels: tmp17, pick: tmp15, hold: tmp16 };
  cResult[9] = tmp16;
  cResult[10] = num3;
  cResult[11] = obj2;
  tmp20 = obj2;
  const tmp10 = ready(num3.useState(false), 2);
}) : (function useConjurePlanOverlaySlides(arg0) {
  ({ ready, paused } = arg0);
  if (paused === undefined) {
    paused = false;
  }
  _require = undefined;
  dependencyMap = undefined;
  ready = undefined;
  let num;
  let pick;
  items = [pick];
  const stateFromStores = require("initialize").useStateFromStores(items, () => callback.useReducedMotion);
  const tmp2 = ready(num.useState(0), 2);
  _require = tmp2[1];
  const obj = require("initialize");
  [tmp4, c1] = ready(num.useState(false), 2);
  if (ready) {
    ready = !stateFromStores;
  }
  if (ready) {
    ready = !paused;
  }
  if (ready) {
    ready = !tmp4;
  }
  if (!stateFromStores) {
    num = tmp2[0];
  } else {
    num = 0;
  }
  const items1 = [ready];
  const effect = obj2.useEffect(() => {
    if (ready) {
      const _setInterval = setInterval;
      const interval = setInterval(() => closure_0((arg0) => (arg0 + 1) % length.length), 4000);
      return () => clearInterval(closure_0);
    }
  }, items1);
  pick = obj2.useCallback((arg0) => {
    _undefined(true);
    closure_0(arg0);
  }, []);
  const items2 = [pick, num];
  const obj3 = { slide: num, labels: null, pick: null, hold: null };
  const callback1 = obj2.useCallback(() => callback(num), items2);
  obj3.labels = items.map((item) => {
    const intl = closure_0(_undefined[7]).intl;
    return intl.string(item);
  });
  obj3.pick = pick;
  obj3.hold = callback1;
  return obj3;
});