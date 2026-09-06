// === Module 7696: useIntersectionObserver ===

// Module 7696 (useIntersectionObserver)
import InteractionObserverUtils from "InteractionObserverUtils" /* 7698 */;
import noop from "module_19" /* 19 */;
import size from "module_2" /* 2 */;

({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useLayoutEffect: metroRequire } = noop);
let closure_7 = {};
let items = [1, { threshold: 1 }];
let items1 = [items];
const map = new Map(items1);
let result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useIntersectionObserver.tsx");

export const useIntersectionObserver = function useIntersectionObserver(arg0, arg1) {
  closure_0 = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  closure_3 = undefined;
  closure_4 = undefined;
  const tmp2 = closure_5(null);
  dependencyMap = tmp2;
  let tmp4 = arg1;
  if (arg1 == null) {
    tmp4 = closure_7;
  }
  const tmp3Result = flag(7697)(tmp4);
  closure_3 = tmp3Result;
  closure_4 = closure_5(null);
  const items = [flag, arg0, tmp3Result];
  closure_6(() => {
    if (num) {
      if (null == ref3.current) {
        ref3.current = InteractionObserverUtils.getIntersectionObserver(ref2.current);
      }
      const current = ref.current;
      const current2 = ref3.current;
      if (tmp7) {
        InteractionObserverUtils.watch(current2, current, closure_0);
      }
      tmp7 = null != current && null != current2;
    }
  }, items);
  const items1 = [flag, arg1];
  closure_3(() => {
    if (num) {
      const current = ref.current;
      const current2 = ref3.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            current(ref[2]).unwatch(current2, current);
          };
        }
      }
    }
  }, items1);
  return tmp2;
};
export const useIsVisible = function useIsVisible(arg0, arg1) {
  closure_0 = arg0;
  let num = arg1;
  if (arg1 === undefined) {
    num = 1;
  }
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const items = [num];
  const tmp4 = ref3(() => {
    let obj = map;
    value = map.get(num);
    if (null == value) {
      obj = { threshold: num };
      const result = obj.set(num, obj);
      value = obj;
    }
    return value;
  }, items);
  let current = num(7697)((isIntersecting) => {
    closure_0(isIntersecting.isIntersecting);
  }).current;
  closure_129_1 = undefined;
  closure_129_0 = current;
  if (flag === undefined) {
    flag = true;
  }
  closure_129_1 = flag;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  const tmp6 = closure_5(null);
  closure_129_2 = tmp6;
  let tmp8 = tmp4;
  const tmp3 = num(7697)((isIntersecting) => {
    closure_0(isIntersecting.isIntersecting);
  });
  if (tmp4 == null) {
    tmp8 = closure_7;
  }
  const tmpResultResult = num(7697)(tmp8);
  closure_129_3 = tmpResultResult;
  closure_129_4 = closure_5(null);
  const items1 = [flag, current, tmpResultResult];
  closure_6(() => {
    if (num) {
      if (null == ref3.current) {
        ref3.current = InteractionObserverUtils.getIntersectionObserver(ref2.current);
      }
      const current = ref.current;
      const current2 = ref3.current;
      if (tmp7) {
        InteractionObserverUtils.watch(current2, current, closure_0);
      }
      tmp7 = null != current && null != current2;
    }
  }, items1);
  const items2 = [flag, tmp4];
  ref2(() => {
    if (num) {
      const current = ref.current;
      const current2 = ref3.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            current(ref[2]).unwatch(current2, current);
          };
        }
      }
    }
  }, items2);
  return tmp6;
};