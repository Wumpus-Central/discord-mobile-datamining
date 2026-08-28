// === Module 13261: rateLimit ===

// Module 13261 (rateLimit)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("lib/rateLimit.tsx");

export default function rateLimit(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_4 = [];
  function wrapper() {
    const items = [...arguments];
    const timestamp = Date.now();
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(timeout);
      timeout = null;
    }
    let arr2 = arr;
    if (arr.length > 0) {
      arr2 = tmp4;
      if (tmp4[0] <= timestamp) {
        arr = arr.shift();
        arr2 = arr;
        while (arr.length > 0) {
          arr2 = tmp5;
          if (tmp5[0] > timestamp) {
            break;
          }
        }
      }
    }
    if (arr2.length < items) {
      arr = arr2.push(timestamp + closure_1);
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      HermesBuiltin.apply(items1, undefined);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => closure_1_5(...items), arr2[0] - timestamp);
    }
  }
  return wrapper;
};