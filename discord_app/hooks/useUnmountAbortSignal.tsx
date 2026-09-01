// discord_app/hooks/useUnmountAbortSignal.tsx
import set from "../../_runtime/00002_set.js";
import useInitialValueDefault from "useInitialValue.tsx";

const result = set.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const _require = tmp;
  const unmountEffect = require("useMountEffect.tsx").useUnmountEffect(() => {
    closure_0.abort();
  });
  return tmp.signal;
}
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const _require = arg0;
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  importDefault = tmp;
  const unmountEffect = require("useMountEffect.tsx").useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};
