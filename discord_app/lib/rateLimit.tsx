// discord_app/lib/rateLimit.tsx
import size from "../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("lib/rateLimit.tsx");

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
    let arr2 = closure_4;
    if (closure_4.length > 0) {
      arr2 = closure_4;
      if (closure_4[0] <= timestamp) {
        closure_4.shift();
        arr2 = closure_4;
        while (closure_4.length > 0) {
          arr2 = closure_4;
          if (closure_4[0] > timestamp) {
            break;
          }
        }
      }
    }
    if (arr2.length < items) {
      arr2.push(timestamp + closure_1);
      const items1 = [];
      HermesBuiltin.arraySpread(items, 0);
      HermesBuiltin.apply(items1, undefined);
    } else {
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => wrapper(...items), arr2[0] - timestamp);
    }
  }
  return wrapper;
}
