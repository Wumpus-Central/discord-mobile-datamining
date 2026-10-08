// discord_app/hooks/useGetIsMounted.tsx
import c from "../../_runtime/00576_c.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGetIsMounted() {
      const cResult = c.c(3);
      noop.useRef(true);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u() {
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
      const effect = noop.useEffect(tmp2, tmp3);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function c() {
          return ref.current;
        };
        cResult[2] = fn2;
        let tmp5 = fn2;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : function useGetIsMounted() {
      noop.useRef(true);
      const effect = noop.useEffect(
        () => () => {
          ref.current = false;
        },
        [],
      );
      return noop.useCallback(() => ref.current, []);
    };
