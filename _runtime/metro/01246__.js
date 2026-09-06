// === Module 1246: ? ===

// Module 1246
import noop from "module_19" /* 19 */;

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
({ useRef: c3, useEffect: closure_4, useMemo: hasOwnProperty, useDebugValue: metroRequire } = noop);

export const useSyncExternalStoreWithSelector = (subscribe, arg1, arg2, arg3, arg4) => {
  _require = arg1;
  dependencyMap = arg2;
  closure_2 = arg3;
  closure_3 = arg4;
  let tmp = closure_3(null);
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
        const tmp = closure_0();
        if (c2) {
          let tmp3 = value;
          if (!is(closure_0, tmp)) {
            let tmp9 = _true(tmp);
            if (undefined === closure_3) {
              closure_0 = tmp;
              value = tmp9;
            }
            closure_0 = tmp;
            tmp9 = tmp5;
          }
        } else {
          c2 = true;
          closure_0 = tmp;
          tmp3 = _true(tmp);
          if (undefined !== closure_3) {
            if (current.hasValue) {
              value = current.value;
              if (tmp4(value, tmp3)) {
                tmp3 = value;
              }
            }
          }
          value = tmp3;
        }
        return tmp3;
      },

    ];
    let fn;
    if (null !== tmp) {
      fn = () => {
        const tmp = closure_3();
        if (c2) {
          let tmp3 = value;
          if (!is(closure_0, tmp)) {
            let tmp10 = _true(tmp);
            if (undefined === closure_3) {
              closure_0 = tmp;
              value = tmp10;
            }
            closure_0 = tmp;
            tmp10 = tmp6;
          }
        } else {
          c2 = true;
          closure_0 = tmp;
          tmp3 = _true(tmp);
          if (undefined !== closure_3) {
            if (current.hasValue) {
              value = current.value;
              if (closure_3(value, tmp3)) {
                tmp3 = value;
              }
            }
          }
          value = tmp3;
        }
        return tmp3;
      };
    }
    items[1] = fn;
    return items;
  }, items);
  syncExternalStore = require("module_1247").useSyncExternalStore(subscribe, tmp2[0], tmp2[1]);
  const items1 = [syncExternalStore];
  current(() => {
    current.hasValue = true;
    current.value = syncExternalStore;
  }, items1);
  closure_6(syncExternalStore);
  return syncExternalStore;
};