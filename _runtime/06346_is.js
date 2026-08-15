// _runtime/06346_is.js
import noop from "noop";

let c3;
let c4;
let c5;
let closure_1;
let obj1;
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
({ useSyncExternalStore: closure_1, useRef: obj1, useEffect: c3, useMemo: c4, useDebugValue: c5 } = noop);

export const useSyncExternalStoreWithSelector = (arg0, arg1, arg2, arg3, arg4) => {
  let closure_0 = arg1;
  let callback = arg2;
  let callback2 = arg3;
  const callback3 = arg4;
  let tmp = callback2(null);
  if (null === tmp.current) {
    const obj = { hasValue: false, value: null };
    let current = obj;
    tmp.current = obj;
  } else {
    current = tmp.current;
  }
  let items = [arg1, arg2, arg3, arg4];
  const tmp2 = current(() => {
    let c2 = false;
    let tmp = null;
    if (undefined !== closure_1) {
      tmp = closure_1;
    }
    let closure_3 = tmp;
    const items = [
      () => {
        const tmp = outer1_0();
        if (callback2) {
          let tmp3 = closure_1;
          if (!callback(callback, tmp)) {
            let tmp9 = callback2(tmp);
            if (undefined === closure_3) {
              callback = tmp;
              closure_1 = tmp9;
            }
            callback = tmp;
            tmp9 = tmp5;
          }
        } else {
          callback2 = true;
          callback = tmp;
          tmp3 = callback2(tmp);
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
        if (callback2) {
          let tmp3 = closure_1;
          if (!callback(callback, tmp)) {
            let tmp10 = callback2(tmp);
            if (undefined === tmp) {
              callback = tmp;
              closure_1 = tmp10;
            }
            callback = tmp;
            tmp10 = tmp6;
          }
        } else {
          callback2 = true;
          callback = tmp;
          tmp3 = callback2(tmp);
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
  let tmp3 = callback(arg0, tmp2[0], tmp2[1]);
  const callback4 = tmp3;
  const items1 = [tmp3];
  callback3(() => {
    current.hasValue = true;
    current.value = closure_5;
  }, items1);
  callback4(tmp3);
  return tmp3;
};