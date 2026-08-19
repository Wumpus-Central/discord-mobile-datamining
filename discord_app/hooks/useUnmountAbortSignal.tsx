// === Module 7220: useUnmountAbortSignal ===

// Module 7220 (useUnmountAbortSignal)
import obj132 from "obj132" /* 2 */;
import useInitialValueDefault from "useInitialValue" /* 7127 */;

const result = obj132.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const _require = tmp;
  const unmountEffect = _require(4761).useUnmountEffect(() => {
    closure_0.abort();
  });
  return tmp.signal;
};
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const _require = arg0;
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  importDefault = tmp;
  const unmountEffect = _require(4761).useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};