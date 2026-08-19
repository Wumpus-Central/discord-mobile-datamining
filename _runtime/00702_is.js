// _runtime/00702_is.js
import noop from "00019_noop.js";

if (typeof Object.is === "function") {
  const _Object = Object;
} else {
  is = function is(arg0, arg1) {
    let tmp = arg0 === arg1;
    if (tmp) {
      let tmp2 = 0 !== arg0;
      if (!tmp2) {
        tmp2 = 1 / arg0 === 1 / arg1;
      }
      tmp = tmp2;
    }
    if (!tmp) {
      tmp = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
({ useRef: c3, useEffect: c4, useMemo: c5, useDebugValue: closure_6 } = noop);

export const useSyncExternalStoreWithSelector = (subscribe) => {
  const _require = arg1;
  dependencyMap = arg2;
  closure_2 = arg3;
  let callback = arg4;
  let tmp = callback(null);
  if (null === tmp.current) {
    const obj = { hasValue: false, value: null };
    let current = obj;
    tmp.current = obj;
  } else {
    current = tmp.current;
  }
  let items = [arg1, arg2, arg3, arg4];
  const tmp2 = syncExternalStore(() => {
    c2 = false;
    let tmp = null;
    if (undefined !== closure_1) {
      tmp = closure_1;
    }
    closure_3 = tmp;
    const items = [
      () => {
        const tmp = closure_1_0();
        if (callback) {
          let tmp3 = closure_1;
          if (!callback(closure_0, tmp)) {
            let tmp9 = callback(tmp);
            if (undefined === closure_3) {
              closure_0 = tmp;
              closure_1 = tmp9;
            }
            closure_0 = tmp;
            tmp9 = tmp5;
          }
        } else {
          callback = true;
          closure_0 = tmp;
          tmp3 = callback(tmp);
          if (undefined !== closure_3) {
            if (current.hasValue) {
              const value = current.value;
              if (tmp4(value, tmp3)) {
                closure_1 = value;
                tmp3 = value;
              }
            }
          }
          closure_1 = tmp3;
        }
        return tmp3;
      },

    ];
    let fn;
    if (null !== tmp) {
      fn = () => {
        const tmp = callback2();
        if (callback) {
          let tmp3 = closure_1;
          if (!callback(closure_0, tmp)) {
            let tmp10 = callback(tmp);
            if (undefined === callback2) {
              closure_0 = tmp;
              closure_1 = tmp10;
            }
            closure_0 = tmp;
            tmp10 = tmp6;
          }
          tmp6 = closure_1;
        } else {
          callback = true;
          closure_0 = tmp;
          tmp3 = callback(tmp);
          if (undefined !== callback2) {
            if (current.hasValue) {
              const value = current.value;
              if (callback2(value, tmp3)) {
                closure_1 = value;
                tmp3 = value;
              }
            }
          }
          closure_1 = tmp3;
        }
        return tmp3;
      };
    }
    items[1] = fn;
    return items;
  }, items);
  syncExternalStore = require("00703_checkIfSnapshotChanged.js").useSyncExternalStore(subscribe, tmp2[0], tmp2[1]);
  const items1 = [syncExternalStore];
  current(() => {
    current.hasValue = true;
    current.value = syncExternalStore;
  }, items1);
  callback2(syncExternalStore);
  return syncExternalStore;
};