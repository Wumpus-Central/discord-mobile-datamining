// === Module 12613: conjureTipClock ===

// Module 12613 (conjureTipClock)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/tips/conjureTipClock.tsx");

export function nextConjureTipClockDelay(arg0, arr, arg2, arg3) {
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
export function useConjureTipClock(entryActivityAtResult, arg1) {
  _slicedToArray = entryActivityAtResult;
  noop = arg1;
  [first, closure_3] = noop.useState(() => Date.now());
  let items = [entryActivityAtResult, arg1, first];
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
}