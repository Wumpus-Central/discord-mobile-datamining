// discord_app/hooks/useUnmountAbortSignal.tsx
const result = require("set").fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = require("useInitialValue.tsx")(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const require = tmp;
  const unmountEffect = require("useMountEffect.tsx") /* useMountLayoutEffect */.useUnmountEffect(() => {
    tmp.abort();
  });
  return tmp.signal;
};
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const _require = arg0;
  const tmp = require("useInitialValue.tsx")(() => {
    const abortController = new AbortController();
    return abortController;
  });
  importDefault = tmp;
  const unmountEffect = _require("useMountEffect.tsx").useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};