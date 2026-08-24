// _runtime/01601_useMemoArray.js
import closure_0 from "00019_noop.js";


export const useMemoArray = function useMemoArray(arr) {
  const ref = current.useRef(undefined);
  current = ref.current;
  const mapped = arr.map((arg0, arg1) => {
    [tmp, arr] = arg0;
    let tmp3;
    if (current != null) {
      tmp3 = tmp2.entries[arg1];
    }
    let everyResult = tmp3;
    if (tmp3) {
      everyResult = tmp3.deps.length === arr.length;
    }
    if (everyResult) {
      const deps = tmp3.deps;
      everyResult = deps.every((arg0, arg1) => Object.is(arg0, table[arg1]));
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
      if (mapped.every((arg0, arg1) => arg0 === current.entries[arg1])) {
        return current.items;
      }
    }
  }
  const mapped1 = mapped.map((item) => item.item);
  ref.current = { entries: mapped, items: mapped1 };
  return mapped1;
};