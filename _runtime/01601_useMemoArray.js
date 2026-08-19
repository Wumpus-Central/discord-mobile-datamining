// _runtime/01601_useMemoArray.js
import noop from "00019_noop.js";


export const useMemoArray = function useMemoArray(arr) {
  const ref = current.useRef(undefined);
  current = ref.current;
  const mapped = arr.map((item, index) => {
    [tmp, arr] = item;
    let tmp3;
    if (current != null) {
      tmp3 = tmp2.entries[index];
    }
    let everyResult = tmp3;
    if (tmp3) {
      everyResult = tmp3.deps.length === arr.length;
    }
    if (everyResult) {
      const deps = tmp3.deps;
      everyResult = deps.every((item, index) => Object.is(item, table[index]));
    }
    if (!everyResult) {
      const obj = { item: null, deps: null };
      obj[0] = tmp;
      obj[1] = arr;
      tmp3 = obj;
    }
    return tmp3;
  });
  if (current) {
    if (current.entries.length === mapped.length) {
      if (mapped.every((item, index) => item === current.entries[index])) {
        return current.items;
      }
    }
  }
  const mapped1 = mapped.map((item, index) => item.item);
  ref.current = { entries: mapped, items: mapped1 };
  return mapped1;
};