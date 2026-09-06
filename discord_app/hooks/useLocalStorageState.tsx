// === Module 9931: useLocalStorageState ===

// Module 9931 (useLocalStorageState)
import Storage3 from "Storage" /* 510 */;
import useMountEffectDefault from "useMountEffect" /* 4992 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(c2, arg1) {
  closure_0 = c2;
  importDefault = arg1;
  const tmp = _slicedToArray(noop.useState(() => {
    const Storage = Storage3.Storage;
    value = Storage.get(closure_0);
    if (null == value) {
      value = closure_1;
    }
    return value;
  }), 2);
  dependencyMap = tmp[1];
  useMountEffectDefault(() => {
    const Storage = Storage3.Storage;
    if (null == Storage.get(closure_0)) {
      const Storage2 = Storage3.Storage;
      const result = Storage2.set(closure_0, closure_1);
    }
  });
  const items = [tmp[0], ];
  const items1 = [c2];
  items[1] = noop.useCallback((arg0) => {
    closure_2(arg0);
    const Storage = Storage3.Storage;
    const result = Storage.set(closure_0, arg0);
  }, items1);
  return items;
};