// === Module 7448: items ===

// Module 7448 (items)
import set from "set" /* 2 */;
import noop from "noop" /* 19 */;

({ useEffect: c3, useMemo: c4, useRef: c5, useLayoutEffect: closure_6 } = noop);
let closure_7 = {};
let items = [1, { threshold: 1 }];
let items1 = [items];
const map = new Map(items1);
let result = set.fileFinishedImporting("../discord_common/js/shared/hooks/useIntersectionObserver.tsx");

export const useIntersectionObserver = function useIntersectionObserver(arg0, arg1) {
  closure_0 = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  dependencyMap = undefined;
  let callback;
  closure_4 = undefined;
  const tmp2 = callback3(null);
  dependencyMap = tmp2;
  let tmp4 = arg1;
  if (arg1 == null) {
    tmp4 = closure_7;
  }
  const tmp3Result = flag(7449)(tmp4);
  callback = tmp3Result;
  closure_4 = callback3(null);
  const items = [flag, arg0, tmp3Result];
  callback4(() => {
    if (flag) {
      if (null == ref3.current) {
        tmp.current = current(ref[2]).getIntersectionObserver(ref2.current);
        const obj = current(ref[2]);
      }
      current = ref.current;
      const current2 = tmp.current;
      if (tmp7) {
        current(ref[2]).watch(current2, current, current);
        const obj2 = current(ref[2]);
      }
      tmp7 = null != current && null != current2;
    }
  }, items);
  const items1 = [flag, arg1];
  callback(() => {
    if (current2) {
      current = ref.current;
      current2 = ref3.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            current(closure_1_2[2]).unwatch(current2, current);
          };
        }
      }
    }
  }, items1);
  return tmp2;
};
export const useIsVisible = function useIsVisible(arg0, arg1) {
  let current = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  let flag = num;
  flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const items = [num];
  const tmp4 = callback2(() => {
    let obj = closure_1_8;
    let value = closure_1_8.get(flag);
    if (null == value) {
      obj = { threshold: null };
      obj[0] = tmp;
      const result = obj.set(tmp, obj);
      value = obj;
    }
    return value;
  }, items);
  current = flag(7449)((isIntersecting) => {
    current(isIntersecting.isIntersecting);
  }).current;
  flag = undefined;
  if (flag === undefined) {
    flag = true;
  }
  dependencyMap = undefined;
  let callback;
  callback2 = undefined;
  const tmp6 = callback3(null);
  dependencyMap = tmp6;
  let tmp8 = tmp4;
  const tmp = flag;
  const tmp3 = flag(7449)((isIntersecting) => {
    current(isIntersecting.isIntersecting);
  });
  const tmp5 = callback3;
  if (tmp4 == null) {
    tmp8 = closure_7;
  }
  const tmpResultResult = flag(7449)(tmp8);
  callback = tmpResultResult;
  callback2 = tmp5(null);
  const items1 = [flag, current, tmpResultResult];
  callback4(() => {
    if (flag) {
      if (null == ref3.current) {
        tmp.current = current(ref[2]).getIntersectionObserver(ref2.current);
        const obj = current(ref[2]);
      }
      current = ref.current;
      const current2 = tmp.current;
      if (tmp7) {
        current(ref[2]).watch(current2, current, current);
        const obj2 = current(ref[2]);
      }
      tmp7 = null != current && null != current2;
    }
  }, items1);
  const items2 = [flag, tmp4];
  callback(() => {
    if (current2) {
      current = ref.current;
      current2 = ref3.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            current(closure_1_2[2]).unwatch(current2, current);
          };
        }
      }
    }
  }, items2);
  return tmp6;
};