// discord_common/js/shared/hooks/useStableCallback.tsx
import react2 from "../../../../_runtime/00576_react.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../discord_app/modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let tmp2;
      let tmp4;
      let closure_0 = arg0;
      const obj = react2;
      const cResult = obj.c(3);
      let closure_1 = react.useRef(arg0);
      if (cResult[0] !== arg0) {
        const fn = function c() {
          ref.current = current;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp2 = fn;
      } else {
        tmp2 = cResult[1];
      }
      const insertionEffect = react.useInsertionEffect(tmp2);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s() {
          const items = [...HermesBuiltin.copyRestArgs()];
          return ref.current.apply(items);
        };
        cResult[2] = fn2;
        tmp4 = fn2;
      } else {
        tmp4 = cResult[2];
      }
      return tmp4;
    }
  : (arg0) => {
      let closure_0 = arg0;
      let closure_1 = react.useRef(arg0);
      const insertionEffect = react.useInsertionEffect(() => {
        ref.current = current;
      });
      return react.useCallback(() => {
        const items = [...HermesBuiltin.copyRestArgs()];
        return ref.current.apply(items);
      }, []);
    };
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default tmp2;
