// discord_app/hooks/useLocalStorageState.tsx
import useMountLayoutEffectDefault from "useMountEffect.tsx";
import closure_3 from "../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../_runtime/00019_noop.js";

const require = arg1;
let result = require("set").fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(c2, arg1) {
  closure_0 = c2;
  importDefault = arg1;
  const tmp = callback(
    React.useState(() => {
      const Storage = c2(510).Storage;
      let value = Storage.get(c2);
      if (null == value) {
        value = closure_1;
      }
      return value;
    }),
    2,
  );
  dependencyMap = tmp[1];
  useMountLayoutEffectDefault(() => {
    const Storage = c2(510).Storage;
    if (null == Storage.get(c2)) {
      const Storage2 = c2(510).Storage;
      const result = Storage2.set(c2, closure_1);
    }
  });
  const items = [tmp[0]];
  const items1 = [c2];
  items[1] = React.useCallback((arg0) => {
    dependencyMap(arg0);
    const Storage = c2(510).Storage;
    const result = Storage.set(c2, arg0);
  }, items1);
  return items;
};
