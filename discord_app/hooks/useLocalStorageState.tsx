// === Module 10896: useLocalStorageState ===

// Module 10896 (useLocalStorageState)
import useMountLayoutEffectDefault from "useMountLayoutEffect" /* 4831 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;

const require = arg1;
let result = require("set").fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(c2, arg1) {
  closure_0 = c2;
  importDefault = arg1;
  const tmp = callback(React.useState(() => {
    const Storage = c2(595).Storage;
    let value = Storage.get(c2);
    if (null == value) {
      value = closure_1;
    }
    return value;
  }), 2);
  dependencyMap = tmp[1];
  useMountLayoutEffectDefault(() => {
    const Storage = c2(595).Storage;
    if (null == Storage.get(c2)) {
      const Storage2 = c2(595).Storage;
      const result = Storage2.set(c2, closure_1);
    }
  });
  const items = [tmp[0], ];
  const items1 = [c2];
  items[1] = React.useCallback((arg0) => {
    dependencyMap(arg0);
    const Storage = c2(595).Storage;
    const result = Storage.set(c2, arg0);
  }, items1);
  return items;
};