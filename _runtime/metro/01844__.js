// _runtime/metro/01844__.js
import _mod19 from "00019__.js";

_mod19.useCallback;

export default function _default() {
  const items = [...arguments];
  return useCallback((current) => {
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
}
