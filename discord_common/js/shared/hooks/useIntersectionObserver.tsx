// discord_common/js/shared/hooks/useIntersectionObserver.tsx
import react2 from "../../../../_runtime/00576_react.js";
import reactDefault from "useConstRef.tsx";
import InteractionObserverUtils from "../utils/InteractionObserverUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ useEffect: c3, useMemo: closure_4, useRef: hasOwnProperty, useLayoutEffect: metroRequire } = react);
let closure_7 = {};
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, current, arg2) => {
      let closure_0;
      let closure_1;
      let ref;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(10);
      importDefault = tmp3;
      const tmp5 = closure_5(null);
      dependencyMap = tmp5;
      let tmp7 = current;
      const tmp6 = reactDefault;
      if (current == null) {
        tmp7 = closure_7;
      }
      const tmp6Result = tmp6(tmp7);
      const ref2 = tmp6Result;
      const ref3 = closure_5(null);
      if (cResult[0] === arg0) {
        if (cResult[1] === (undefined === arg2 || arg2)) {
          let tmp9;
          let tmp10;
          let tmp13;
          if (cResult[2] === tmp6Result) {
            tmp9 = cResult[3];
            tmp10 = cResult[4];
          }
          closure_6(tmp9, tmp10);
          if (cResult[5] !== (undefined === arg2 || arg2)) {
            const fn2 = function h() {
              if (closure_1) {
                const current = ref.current;
                const current2 = ref3.current;
                if (null != current) {
                  if (null != current2) {
                    return () => {
                      const obj = closure_2_0(ref[4]);
                      obj.unwatch(current2, current);
                    };
                  }
                }
              }
            };
            cResult[5] = undefined === arg2 || arg2;
            cResult[6] = fn2;
            tmp13 = fn2;
          } else {
            tmp13 = cResult[6];
          }
          if (cResult[7] === (undefined === arg2 || arg2)) {
            let tmp14;
            if (cResult[8] === current) {
              tmp14 = cResult[9];
            }
            ref2(tmp13, tmp14);
            return tmp5;
          }
          const items = [tmp3, current];
          cResult[7] = undefined === arg2 || arg2;
          cResult[8] = current;
          cResult[9] = items;
          tmp14 = items;
        }
      }
      const fn = function v() {
        if (closure_1) {
          if (null == ref3.current) {
            const obj = InteractionObserverUtils;
            ref3.current = obj.getIntersectionObserver(ref2.current);
          }
          const current = ref.current;
          const current2 = ref3.current;
          const tmp8 = null != current && null != current2;
          if (tmp8) {
            const obj2 = InteractionObserverUtils;
            obj2.watch(current2, current, closure_0);
          }
        }
      };
      const items1 = [tmp3, arg0, tmp6Result];
      cResult[0] = arg0;
      cResult[1] = undefined === arg2 || arg2;
      cResult[2] = tmp6Result;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp10 = items1;
      tmp9 = fn;
    }
  : (arg0, arg1) => {
      let ref;
      let closure_0 = arg0;
      let flag = arg2;
      if (arg2 === undefined) {
        flag = true;
      }
      let ref2;
      let ref3;
      const tmp2 = closure_5(null);
      dependencyMap = tmp2;
      let tmp4 = arg1;
      const tmp3 = flag(7194);
      if (arg1 == null) {
        tmp4 = closure_7;
      }
      const tmp3Result = tmp3(tmp4);
      ref2 = tmp3Result;
      ref3 = closure_5(null);
      const items = [flag, arg0, tmp3Result];
      closure_6(() => {
        if (flag) {
          if (null == ref3.current) {
            const obj = InteractionObserverUtils;
            ref3.current = obj.getIntersectionObserver(ref2.current);
          }
          const current = ref.current;
          const current2 = ref3.current;
          const tmp8 = null != current && null != current2;
          if (tmp8) {
            const obj2 = InteractionObserverUtils;
            obj2.watch(current2, current, closure_0);
          }
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
                const obj = closure_2_0(ref[4]);
                obj.unwatch(current2, current);
              };
            }
          }
        }
      }, items1);
      return tmp2;
    };
let closure_8 = tmp3;
let items = [1, { threshold: 1 }];
let items1 = [items];
const map = new Map(items1);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let tmp4;
      let tmp6;
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(4);
      let num = 1;
      if (undefined !== arg1) {
        num = arg1;
      }
      const tmp3 = undefined === arg2 || arg2;
      if (cResult[0] !== arg0) {
        const fn = function l(isIntersecting) {
          closure_0(isIntersecting.isIntersecting);
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const tmp5 = reactDefault(tmp4);
      if (cResult[2] !== num) {
        let value = map.get(num);
        if (null == value) {
          const obj3 = { threshold: num };
          const result = map.set(num, obj3);
          value = obj3;
        }
        cResult[2] = num;
        cResult[3] = value;
        tmp6 = value;
      } else {
        tmp6 = cResult[3];
      }
      return closure_8(tmp5.current, tmp6, tmp3);
    }
  : (arg0) => {
      let closure_0 = arg0;
      let num = arg1;
      if (arg1 === undefined) {
        num = 1;
      }
      let flag = arg2;
      if (arg2 === undefined) {
        flag = true;
      }
      const items = [num];
      const tmp = num(7194)((isIntersecting) => {
        closure_0(isIntersecting.isIntersecting);
      });
      return closure_8(
        tmp.current,
        closure_4(() => {
          let value = map.get(num);
          if (null == value) {
            const obj2 = { threshold: num };
            const result = map.set(num, obj2);
            value = obj2;
          }
          return value;
        }, items),
        flag,
      );
    };
let result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useIntersectionObserver.tsx");

export const useIntersectionObserver = tmp3;
export const useIsVisible = tmp5;
