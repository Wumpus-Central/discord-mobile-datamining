// discord_app/modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx
import react2 from "../../../../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_129_0;
      let first;
      let tmp4;
      let tmp5;
      let tmp6;
      let obj = react2;
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      [tmp4, closure_129_0] = react.useState(first);
      _slicedToArray(react.useState(first), 2);
      let closure_1 = react.useRef(0);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s(label, elapsedMs) {
          label((arg0) => {
            elapsedMs.current = elapsedMs.current + 1;
            const items = [{ kind: "mount", id: elapsedMs.current, label, elapsedMs }, ...arg0];
            return items;
          });
        };
        cResult[1] = fn;
        tmp5 = fn;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function v(arg0) {
          let ref;
          let closure_0 = arg0;
          closure_0((arg0) => {
            ref.current = ref.current + 1;
            const obj = { kind: "scroll", id: ref.current };
            const merged = Object.assign(closure_0);
            const items = [obj, ...arg0];
            return items;
          });
        };
        cResult[2] = fn2;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            return closure_1_0([]);
          }
        }
        cResult[3] = S;
      } else {
        class S {
          constructor() {
            return closure_1_0([]);
          }
        }
      }
      if (cResult[4] !== tmp4) {
        class S {
          constructor() {
            return closure_1_0([]);
          }
        }
        tmp9[0] = tmp4;
        tmp9[1] = tmp5;
        tmp9[2] = tmp6;
        tmp9[3] = S;
        cResult[4] = tmp4;
        cResult[5] = tmp9;
      } else {
        class S {
          constructor() {
            return closure_1_0([]);
          }
        }
      }
      return tmp9;
    }
  : () => {
      let closure_0;
      let first;
      [first, closure_0] = react.useState([]);
      let closure_1 = react.useRef(0);
      let obj = {
        results: first,
        addMount: react.useCallback((label, elapsedMs) => {
          label((arg0) => {
            const obj = { kind: "mount", id: +elapsedMs.current, label, elapsedMs };
            elapsedMs.current = +elapsedMs.current + 1;
            const items = [obj, ...arg0];
            return items;
          });
        }, []),
        addScroll: react.useCallback((arg0) => {
          let ref;
          closure_0 = arg0;
          closure_0((arg0) => {
            const obj = { kind: "scroll", id: +ref.current };
            ref.current = +ref.current + 1;
            const merged = Object.assign(closure_0);
            const items = [obj, ...arg0];
            return items;
          });
        }, []),
        clear: react.useCallback(() => closure_0([]), []),
      };
      return obj;
    };
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/performance/useBenchmarkResults.tsx",
);

export default tmp2;
