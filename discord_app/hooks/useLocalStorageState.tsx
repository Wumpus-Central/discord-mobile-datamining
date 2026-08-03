import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
let result = require("Storage").fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(c2, arg1) {
  let closure_0 = c2;
  const importDefault = arg1;
  const tmp = callback(React.useState(() => {
    const Storage = c2(595).Storage;
    let value = Storage.get(c2);
    if (null == value) {
      value = closure_1;
    }
    return value;
  }), 2);
  const dependencyMap = tmp[1];
  importDefault(4682)(() => {
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