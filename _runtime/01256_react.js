// === Module 1256: react ===

// Module 1256 (react)
import react from "react" /* 19 */;

const require = globalThis.__r;
let _require, closure_0, dependencyMap, value;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
if (typeof Object.is === "function") {
  const _Object = Object;
} else {
  is = function is(arg0, arg1) {
    let tmp = arg0 === arg1;
    if (tmp) {
      tmp = 0 !== arg0 || 1 / arg0 === 1 / arg1;
      const tmp2 = 0 !== arg0 || 1 / arg0 === 1 / arg1;
    }
    if (!tmp) {
      tmp = arg0 != arg0 && arg1 != arg1;
    }
    return tmp;
  };
}
({ useRef: c3, useEffect: closure_4, useMemo: hasOwnProperty, useDebugValue: metroRequire } = react);

export const useSyncExternalStoreWithSelector = (arg0, arg1, arg2, arg3, arg4) => {
  let closure_1;
  let current;
  let syncExternalStore;
  _require = arg1;
  dependencyMap = arg2;
  let closure_2 = arg3;
  let closure_3 = arg4;
  let tmp = closure_3(null);
  if (null === tmp.current) {
    const obj = { hasValue: false, value: null };
    current = obj;
    tmp.current = obj;
  } else {
    current = tmp.current;
  }
  let items = [arg1, arg2, arg3, arg4];
  let tmp2 = syncExternalStore(() => {
    let _true;
    let c2 = false;
    let tmp = null;
    if (undefined !== closure_1) {
      tmp = closure_1;
    }
    closure_3 = tmp;
    const items = [
      () => {
        let tmp4;
        const tmp = closure_0();
        const tmp2 = c2;
        if (tmp2) {
          tmp4 = value;
          if (!is(closure_0, tmp)) {
            let tmp10 = _true(tmp);
            if (undefined !== closure_3) {
              if (closure_3(value, tmp10)) {
                closure_0 = tmp;
                tmp10 = tmp6;
              }
              tmp4 = tmp10;
            }
            closure_0 = tmp;
            value = tmp10;
          }
        } else {
          c2 = true;
          closure_0 = tmp;
          tmp4 = _true(tmp);
          if (undefined !== closure_3) {
            if (current.hasValue) {
              value = current.value;
              if (tmp5(value, tmp4)) {
                tmp4 = value;
              }
            }
          }
          value = tmp4;
        }
        return tmp4;
      },

    ];
    let fn;
    if (null !== tmp) {
      fn = () => {
        let tmp4;
        const tmp = closure_3();
        const tmp2 = c2;
        if (tmp2) {
          tmp4 = value;
          if (!is(closure_0, tmp)) {
            let tmp11 = _true(tmp);
            if (undefined !== closure_3) {
              if (closure_3(value, tmp11)) {
                closure_0 = tmp;
                tmp11 = tmp7;
              }
              tmp4 = tmp11;
            }
            closure_0 = tmp;
            value = tmp11;
          }
        } else {
          c2 = true;
          closure_0 = tmp;
          tmp4 = _true(tmp);
          if (undefined !== closure_3) {
            if (current.hasValue) {
              value = current.value;
              if (closure_3(value, tmp4)) {
                tmp4 = value;
              }
            }
          }
          value = tmp4;
        }
        return tmp4;
      };
    }
    items[1] = fn;
    return items;
  }, items);
  const obj2 = require("react");
  syncExternalStore = obj2.useSyncExternalStore(arg0, tmp2[0], tmp2[1]);
  const items1 = [syncExternalStore];
  let tmp4 = current(() => {
    current.hasValue = true;
    current.value = syncExternalStore;
  }, items1);
  const tmp5 = closure_6(syncExternalStore);
  return syncExternalStore;
};