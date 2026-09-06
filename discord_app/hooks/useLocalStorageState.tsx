// discord_app/hooks/useLocalStorageState.tsx
import Storage3 from "../../discord_common/js/packages/storage/Storage.tsx";
import useMountEffectDefault from "useMountEffect.tsx";
import _slicedToArray from "../../_runtime/metro/00032__.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("hooks/useLocalStorageState.tsx");

export const useLocalStorageState = function useLocalStorageState(c2, arg1) {
  closure_0 = c2;
  importDefault = arg1;
  const tmp = _slicedToArray(
    noop.useState(() => {
      const Storage = Storage3.Storage;
      value = Storage.get(closure_0);
      if (null == value) {
        value = closure_1;
      }
      return value;
    }),
    2,
  );
  dependencyMap = tmp[1];
  useMountEffectDefault(() => {
    const Storage = Storage3.Storage;
    if (null == Storage.get(closure_0)) {
      const Storage2 = Storage3.Storage;
      const result = Storage2.set(closure_0, closure_1);
    }
  });
  const items = [tmp[0]];
  const items1 = [c2];
  items[1] = noop.useCallback((arg0) => {
    closure_2(arg0);
    const Storage = Storage3.Storage;
    const result = Storage.set(closure_0, arg0);
  }, items1);
  return items;
};
