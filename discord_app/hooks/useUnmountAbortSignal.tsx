// discord_app/hooks/useUnmountAbortSignal.tsx
import c from "../../_runtime/00576_c.js";
import useMountEffect from "useMountEffect.tsx";
import useInitialValueDefault from "useInitialValue.tsx";
import "ReactCompilerGating";
import ReactCompilerGating from "../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const abortController = new AbortController();
          return abortController;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp5 = useInitialValueDefault(first);
      closure_0 = tmp5;
      if (cResult[1] !== tmp5) {
        const fn2 = function o() {
          closure_0.abort();
        };
        cResult[1] = tmp5;
        cResult[2] = fn2;
        let tmp6 = fn2;
      } else {
        tmp6 = cResult[2];
      }
      const unmountEffect = useMountEffect.useUnmountEffect(tmp6);
      return tmp5.signal;
    }
  : () => {
      const tmp = useInitialValueDefault(() => {
        const abortController = new AbortController();
        return abortController;
      });
      closure_0 = tmp;
      const unmountEffect = useMountEffect.useUnmountEffect(() => {
        closure_0.abort();
      });
      return tmp.signal;
    };
const result = size.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default tmp2;
export const useUnmountAbortSignalWithDelay = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      closure_0 = arg0;
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          const abortController = new AbortController();
          return abortController;
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp5 = useInitialValueDefault(first);
      closure_1 = tmp5;
      if (cResult[1] === tmp5) {
        if (cResult[2] === arg0) {
          let tmp6 = cResult[3];
        }
        const unmountEffect = useMountEffect.useUnmountEffect(tmp6);
        return tmp5.signal;
      }
      const fn2 = function l() {
        const timerId = setTimeout(() => {
          closure_1_1.abort();
        }, closure_0);
      };
      cResult[1] = tmp5;
      cResult[2] = arg0;
      cResult[3] = fn2;
      tmp6 = fn2;
    }
  : (arg0) => {
      closure_0 = arg0;
      const tmp = useInitialValueDefault(() => {
        const abortController = new AbortController();
        return abortController;
      });
      closure_1 = tmp;
      const unmountEffect = useMountEffect.useUnmountEffect(() => {
        const timerId = setTimeout(() => {
          closure_1_1.abort();
        }, closure_0);
      });
      return tmp.signal;
    };
