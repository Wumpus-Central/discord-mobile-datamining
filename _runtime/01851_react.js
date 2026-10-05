// _runtime/01851_react.js
import react from "00019_react.js";

const useCallback = react.useCallback;

export default function _default() {
  const items = [...arguments];
  return useCallback((current) => {
    for (const item10007 of items) {
      if (item10007) {
        if (typeof item10007 === "function") {
          let tmpResult = item10007(current);
        } else {
          item10007.current = current;
        }
      }
      continue;
    }
  }, items);
}
