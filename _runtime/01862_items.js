// _runtime/01862_items.js
import noop from "00019_noop.js";

noop.useCallback;

export default function _default() {
  const items = [...arguments];
  return items((current) => {
    for (const item10007 of items) {
      if (item10007) {
        if (typeof item10007 === "function") {
          let tmpResult = item10007(arg0);
        } else {
          item10007.current = arg0;
        }
      }
      continue;
    }
  }, items);
};