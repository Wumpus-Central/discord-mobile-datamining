// discord_app/hooks/useLocalStorageState.tsx
import useMountLayoutEffectDefault from "useMountEffect.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../_runtime/00019_noop.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(c2, arg1) {
  closure_0 = c2;
  importDefault = arg1;
  const tmp = callback(React.useState(() => {
    const Storage = callback(595).Storage;
    let value = Storage.get(callback);
    if (null == value) {
      value = closure_1;
    }
    return value;
  }), 2);
  dependencyMap = tmp[1];
  useMountLayoutEffectDefault(() => {
    const Storage = callback(595).Storage;
    if (null == Storage.get(callback)) {
      const Storage2 = callback(595).Storage;
      const result = Storage2.set(callback, closure_1);
    }
  });
  const items = [tmp[0], ];
  const items1 = [c2];
  items[1] = React.useCallback((arg0) => {
    dependencyMap(arg0);
    const Storage = callback(595).Storage;
    const result = Storage.set(callback, arg0);
  }, items1);
  return items;
};