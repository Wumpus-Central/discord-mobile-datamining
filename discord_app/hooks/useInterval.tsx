// discord_app/hooks/useInterval.tsx
import react from "../../_runtime/00019_react.js";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

let c3;
let closure_4;
({ useEffect: c3, useRef: closure_4 } = react);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (current, arg1) => {
      let closure_2;
      let tmp2;
      let tmp3;
      let tmp6;
      let tmp7;
      _require = current;
      let closure_1 = arg1;
      const obj = require("react");
      const cResult = obj.c(6);
      dependencyMap = closure_4(current);
      const ref = closure_4(null);
      if (cResult[0] !== current) {
        const fn = function c() {
          closure_2.current = current;
        };
        const items = [current];
        cResult[0] = current;
        cResult[1] = fn;
        cResult[2] = items;
        tmp3 = items;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
        tmp3 = cResult[2];
      }
      ref(tmp2, tmp3);
      const tmp4 = ref;
      if (cResult[3] !== arg1) {
        const fn2 = function f() {
          let ref2;
          if (null !== closure_1) {
            const _setInterval = setInterval;
            ref.current = setInterval(() => {
              closure_1(ref[3])(null != ref.current, "Missing callback");
              ref.current();
            }, tmp);
            return () => clearInterval(ref2.current);
          } else if (null !== ref.current) {
            const _clearInterval = clearInterval;
            clearInterval(ref.current);
            ref.current = null;
          }
        };
        const items1 = [arg1];
        cResult[3] = arg1;
        cResult[4] = fn2;
        cResult[5] = items1;
        tmp7 = items1;
        tmp6 = fn2;
      } else {
        tmp6 = cResult[4];
        tmp7 = cResult[5];
      }
      tmp4(tmp6, tmp7);
    }
  : (current, arg1) => {
      let closure_1 = arg1;
      let closure_2 = closure_4(current);
      const ref = closure_4(null);
      const items = [current];
      const tmp = ref(() => {
        closure_2.current = current;
      }, items);
      const items1 = [arg1];
      ref(() => {
        let ref2;
        if (null !== closure_1) {
          const _setInterval = setInterval;
          ref.current = setInterval(() => {
            closure_1(ref[3])(null != ref.current, "Missing callback");
            ref.current();
          }, tmp);
          return () => clearInterval(ref2.current);
        } else if (null !== ref.current) {
          const _clearInterval = clearInterval;
          clearInterval(ref.current);
          ref.current = null;
        }
      }, items1);
    };
const result = size.fileFinishedImporting("hooks/useInterval.tsx");

export default tmp3;
