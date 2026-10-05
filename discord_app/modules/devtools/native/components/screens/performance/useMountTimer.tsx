// discord_app/modules/devtools/native/components/screens/performance/useMountTimer.tsx
import react2 from "../../../../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_129_0;
      let first;
      let tmp3;
      let tmp5;
      let tmp6;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(5);
      [tmp3, closure_129_0] = _slicedToArray(react.useState(null), 2);
      const tmp2 = _slicedToArray(react.useState(null), 2);
      let closure_1 = react.useRef(0);
      let closure_2 = react.useRef(0);
      let closure_3 = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c(params) {
          const sum = ref.current + 1;
          ref.current = sum;
          ref3.current = sum;
          ref2.current = performance.now();
          const obj = { batchKey: sum, params };
          closure_1_0(obj);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function _(arg0) {
          let diff = null;
          if (arg0 === ref3.current) {
            ref3.current = null;
            const _performance = performance;
            diff = performance.now() - ref2.current;
          }
          return diff;
        };
        cResult[1] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function h(arg0) {
          if (arg0 === ref3.current) {
            tmp.current = null;
          }
        };
        cResult[2] = fn3;
        tmp6 = fn3;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp3) {
        const obj2 = { run: tmp3, begin: first, measure: tmp5, cancel: tmp6 };
        cResult[3] = tmp3;
        cResult[4] = obj2;
        tmp7 = obj2;
      } else {
        tmp7 = cResult[4];
      }
      return tmp7;
    }
  : () => {
      let closure_0;
      let first;
      [first, closure_0] = react.useState(null);
      let closure_1 = react.useRef(0);
      let closure_2 = react.useRef(0);
      let closure_3 = react.useRef(null);
      let obj = {
        run: first,
        begin: react.useCallback((params) => {
          const sum = ref.current + 1;
          ref.current = sum;
          ref3.current = sum;
          ref2.current = performance.now();
          const obj = { batchKey: sum, params };
          closure_0(obj);
        }, []),
        measure: react.useCallback((arg0) => {
          let diff = null;
          if (arg0 === ref3.current) {
            ref3.current = null;
            const _performance = performance;
            diff = performance.now() - ref2.current;
          }
          return diff;
        }, []),
        cancel: react.useCallback((arg0) => {
          if (arg0 === ref3.current) {
            tmp.current = null;
          }
        }, []),
      };
      return obj;
    };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/useMountTimer.tsx");

export default tmp2;
