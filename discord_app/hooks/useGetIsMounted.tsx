// discord_app/hooks/useGetIsMounted.tsx
import react2 from "../../_runtime/00576_react.js";
import react from "../../_runtime/00019_react.js";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp2;
      let tmp3;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(3);
      let closure_0 = react.useRef(true);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          return () => {
            ref.current = false;
          };
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp2 = fn;
        tmp3 = items;
      } else {
        [tmp2, tmp3] = cResult;
      }
      const effect = react.useEffect(tmp2, tmp3);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function u() {
          return ref.current;
        };
        cResult[2] = fn2;
        tmp5 = fn2;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : () => {
      let closure_0 = react.useRef(true);
      const effect = react.useEffect(
        () => () => {
          ref.current = false;
        },
        [],
      );
      return react.useCallback(() => ref.current, []);
    };
const result = size.fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default tmp2;
