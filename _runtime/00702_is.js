// _runtime/00702_is.js
import noop from "noop";

let c3;
let c4;
let c5;
let closure_6;
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
      const tmp3 = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
({ useRef: c3, useEffect: c4, useMemo: c5, useDebugValue: closure_6 } = noop);

export const useSyncExternalStoreWithSelector = (subscribe) => {
  const _require = arg1;
  const dependencyMap = arg2;
  let closure_2 = arg3;
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
    let c2 = false;
    let tmp = null;
    if (undefined !== closure_1) {
      tmp = closure_1;
    }
    let closure_3 = tmp;
    const items = [
      () => {
        const tmp = outer1_0();
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
            if (outer1_4.hasValue) {
              const value = outer1_4.value;
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
        tmp = tmp();
        if (callback) {
          let tmp3 = closure_1;
          if (!callback(closure_0, tmp)) {
            let tmp10 = callback(tmp);
            if (undefined === tmp) {
              closure_0 = tmp;
              closure_1 = tmp10;
            }
            closure_0 = tmp;
            tmp10 = tmp6;
          }
        } else {
          callback = true;
          closure_0 = tmp;
          tmp3 = callback(tmp);
          if (undefined !== tmp) {
            if (outer1_4.hasValue) {
              const value = outer1_4.value;
              if (tmp(value, tmp3)) {
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
  syncExternalStore = _require(703).useSyncExternalStore(subscribe, tmp2[0], tmp2[1]);
  const items1 = [syncExternalStore];
  current(() => {
    current.hasValue = true;
    current.value = syncExternalStore;
  }, items1);
  callback2(syncExternalStore);
  return syncExternalStore;
};