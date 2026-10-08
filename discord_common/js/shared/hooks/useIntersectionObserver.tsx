// === Module 7372: useIntersectionObserver ===

// Module 7372 (useIntersectionObserver)
import c from "c" /* 576 */;
import useConstRefDefault from "useConstRef" /* 7373 */;
import InteractionObserverUtils from "InteractionObserverUtils" /* 7374 */;
import noop from "module_19" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useLayoutEffect: metroRequire } = noop);
let closure_7 = {};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIntersectionObserver(arg0, current, arg2) {
  _require = arg0;
  const cResult = require("c").c(10);
  importDefault = tmp3;
  const tmp5 = closure_5(null);
  dependencyMap = tmp5;
  let tmp7 = current;
  let obj = require("c");
  if (current == null) {
    tmp7 = closure_7;
  }
  const tmp6Result = useConstRefDefault(tmp7);
  closure_5(null);
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp3) {
      if (cResult[2] === tmp6Result) {
        let tmp9 = cResult[3];
        let tmp10 = cResult[4];
      }
      closure_6(tmp9, tmp10);
      if (cResult[5] !== tmp3) {
        const fn2 = function h() {
          if (closure_1) {
            const current = ref.current;
            const current2 = ref3.current;
            if (null != current) {
              if (null != current2) {
                return () => {
                  current(closure_2[4]).unwatch(current2, current);
                };
              }
            }
          }
        };
        cResult[5] = tmp3;
        cResult[6] = fn2;
        let tmp13 = fn2;
      } else {
        tmp13 = cResult[6];
      }
      if (cResult[7] === tmp3) {
        if (cResult[8] === current) {
          let tmp14 = cResult[9];
        }
        ref2(tmp13, tmp14);
        return tmp5;
      }
      const items = [tmp3, current];
      cResult[7] = tmp3;
      cResult[8] = current;
      cResult[9] = items;
      tmp14 = items;
    }
  }
  const fn = function v() {
    if (closure_1) {
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
  };
  const items1 = [undefined === arg2 || arg2, arg0, tmp6Result];
  cResult[0] = arg0;
  cResult[1] = undefined === arg2 || arg2;
  cResult[2] = tmp6Result;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp10 = items1;
  tmp9 = fn;
}) : (function useIntersectionObserver(arg0, arg1) {
  closure_0 = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  let ref2;
  const tmp2 = closure_5(null);
  dependencyMap = tmp2;
  let tmp4 = arg1;
  if (arg1 == null) {
    tmp4 = closure_7;
  }
  const tmp3Result = flag(7373)(tmp4);
  ref2 = tmp3Result;
  closure_5(null);
  const items = [flag, arg0, tmp3Result];
  closure_6(() => {
    if (flag) {
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
  ref2(() => {
    if (flag) {
      const current = ref.current;
      const current2 = ref3.current;
      if (null != current) {
        if (null != current2) {
          return () => {
            current(closure_2[4]).unwatch(current2, current);
          };
        }
      }
    }
  }, items1);
  return tmp2;
});
let closure_8 = tmp3;
let items = [1, { threshold: 1 }];
let items1 = [items];
const map = new Map(items1);
let ReactCompilerGating = ReactCompilerGating_mod;
let result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useIntersectionObserver.tsx");

export const useIntersectionObserver = tmp3;
export const useIsVisible = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsVisible(arg0, arg1, arg2) {
  closure_0 = arg0;
  const cResult = c.c(4);
  let num = 1;
  if (undefined !== arg1) {
    num = arg1;
  }
  if (cResult[0] !== arg0) {
    const fn = function s(isIntersecting) {
      closure_0(isIntersecting.isIntersecting);
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp3 = undefined === arg2 || arg2;
  if (cResult[2] !== num) {
    value = map.get(num);
    if (null == value) {
      const obj3 = { threshold: num };
      const result = map.set(num, obj3);
      value = obj3;
    }
    cResult[2] = num;
    cResult[3] = value;
    let tmp6 = value;
  } else {
    tmp6 = cResult[3];
  }
  return closure_8(useConstRefDefault(tmp4).current, tmp6, tmp3);
}) : (function useIsVisible(arg0) {
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
  return closure_8(num(7373)((isIntersecting) => {
    closure_0(isIntersecting.isIntersecting);
  }).current, closure_4(() => {
    value = map.get(num);
    if (null == value) {
      const obj2 = { threshold: num };
      const result = map.set(num, obj2);
      value = obj2;
    }
    return value;
  }, items), flag);
});