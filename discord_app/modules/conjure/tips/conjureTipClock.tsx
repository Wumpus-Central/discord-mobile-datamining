// === Module 12050: conjureTipClock ===

// Module 12050 (conjureTipClock)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
function nextConjureTipClockDelay(arg0, arr, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg2;
  closure_2 = arg3;
  const mapped = arr.map((item) => closure_0 + item);
  if (mapped.some((item) => {
    let tmp = item > closure_1;
    if (tmp) {
      tmp = item <= timestamp;
    }
    return tmp;
  })) {
    return 0;
  } else {
    const found = mapped.filter((item) => item > timestamp);
    let diff = null;
    if (found.length > 0) {
      const _Math = Math;
      const items = [];
      HermesBuiltin.arraySpread(found, 0);
      const _Math2 = Math;
      diff = HermesBuiltin.apply(items, Math) - arg3;
    }
    return diff;
  }
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/conjureTipClock.tsx");

export { nextConjureTipClockDelay };
export const useConjureTipClock = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTipClock(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
      return Date.now();
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const tmp3 = first1(noop.useState(first), 2);
  first1 = tmp3[0];
  noop = tmp3[1];
  if (cResult[1] === arg0) {
    if (cResult[2] === first1) {
      if (cResult[3] === arg1) {
        let tmp5 = cResult[4];
        let tmp6 = cResult[5];
      }
      const effect = noop.useEffect(tmp5, tmp6);
      return first1;
    }
  }
  const fn2 = function s() {
    if (null != timeout) {
      const _Date = Date;
      const timestamp = Date.now();
      timeout = tmp;
      closure_1 = timestamp;
      const mapped = closure_1.map((item) => closure_0 + item);
      let num2 = 0;
      if (!mapped.some((item) => {
        let tmp = item > closure_1;
        if (tmp) {
          tmp = item <= timestamp;
        }
        return tmp;
      })) {
        const found = mapped.filter((item) => item > timestamp);
        let diff = null;
        if (found.length > 0) {
          const _Math = Math;
          const items = [];
          HermesBuiltin.arraySpread(found, 0);
          const _Math2 = Math;
          diff = HermesBuiltin.apply(items, Math) - timestamp;
        }
        num2 = diff;
      }
      if (null != num2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_3(Date.now()), num2);
        return () => clearTimeout(closure_0);
      }
    }
  };
  let items = [arg0, arg1, first1];
  cResult[1] = arg0;
  cResult[2] = first1;
  cResult[3] = arg1;
  cResult[4] = fn2;
  cResult[5] = items;
  tmp6 = items;
  tmp5 = fn2;
}) : (function useConjureTipClock(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  let tmp = first(noop.useState(() => Date.now()), 2);
  first = tmp[0];
  noop = tmp[1];
  let items = [arg0, arg1, first];
  const effect = noop.useEffect(() => {
    if (null != timeout) {
      const _Date = Date;
      const timestamp = Date.now();
      timeout = tmp;
      closure_1 = timestamp;
      const mapped = closure_1.map((item) => closure_0 + item);
      let num2 = 0;
      if (!mapped.some((item) => {
        let tmp = item > closure_1;
        if (tmp) {
          tmp = item <= timestamp;
        }
        return tmp;
      })) {
        const found = mapped.filter((item) => item > timestamp);
        let diff = null;
        if (found.length > 0) {
          const _Math = Math;
          const items = [];
          HermesBuiltin.arraySpread(found, 0);
          const _Math2 = Math;
          diff = HermesBuiltin.apply(items, Math) - timestamp;
        }
        num2 = diff;
      }
      if (null != num2) {
        const _setTimeout = setTimeout;
        timeout = setTimeout(() => closure_1_3(Date.now()), num2);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
  return first;
});