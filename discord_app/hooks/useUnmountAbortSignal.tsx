// === Module 6667: useUnmountAbortSignal ===

// Module 6667 (useUnmountAbortSignal)
import useMountEffect from "useMountEffect" /* 5291 */;
import useInitialValueDefault from "useInitialValue" /* 5905 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
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
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
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