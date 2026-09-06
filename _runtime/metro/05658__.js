// === Module 5658: ? ===

// Module 5658
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
({ useSyncExternalStore: closure_1, useRef: c2, useEffect: c3, useMemo: closure_4, useDebugValue: hasOwnProperty } = noop);

export const useSyncExternalStoreWithSelector = (arg0, arg1, arg2, arg3, arg4) => {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  closure_3 = arg4;
  let tmp = closure_2(null);
  if (null === tmp.current) {
    const obj = { hasValue: false, value: null };
    let current = obj;
    tmp.current = obj;
  } else {
    current = tmp.current;
  }
  let items = [arg1, arg2, arg3, arg4];
  const tmp2 = current(() => {
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
          tmp5 = value;
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
          tmp6 = value;
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
  let tmp3 = closure_1(arg0, tmp2[0], tmp2[1]);
  value = tmp3;
  const items1 = [tmp3];
  closure_3(() => {
    current.hasValue = true;
    current.value = value;
  }, items1);
  value(tmp3);
  return tmp3;
};