// _runtime/06053_react.js
import react from "00019_react.js";

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let map;
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
({ useSyncExternalStore: map, useRef: c2, useEffect: c3, useMemo: closure_4, useDebugValue: hasOwnProperty } = react);

export const useSyncExternalStoreWithSelector = (arg0, arg1, arg2, arg3, arg4) => {
  let current;
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let closure_3 = arg4;
  let tmp = closure_2(null);
  if (null === tmp.current) {
    const obj = { hasValue: false, value: null };
    current = obj;
    tmp.current = obj;
  } else {
    current = tmp.current;
  }
  let items = [arg1, arg2, arg3, arg4];
  let tmp2 = current(() => {
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
  const tmp3 = closure_1(arg0, tmp2[0], tmp2[1]);
  let value = tmp3;
  const items1 = [tmp3];
  let tmp4 = closure_3(() => {
    current.hasValue = true;
    current.value = value;
  }, items1);
  const tmp5 = value(tmp3);
  return tmp3;
};
