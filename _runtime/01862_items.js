// _runtime/01862_items.js
import noop from "noop" /* 19 */;

noop.useCallback;

export default function _default() {
  const items = [...arguments];
  return items((current) => {
    for (const item10007 of items) {
      let tmp = item10007;
      if (item10007) {
        let tmp2 = item10007;
        if (typeof tmp === "function") {
          let tmp3 = item10007;
          let tmpResult = tmp(arg0);
        } else {
          let tmp5 = item10007;
          tmp.current = arg0;
        }
      }
      continue;
    }
  }, items);
};