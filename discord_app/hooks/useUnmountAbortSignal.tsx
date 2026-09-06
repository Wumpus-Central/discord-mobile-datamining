// discord_app/hooks/useUnmountAbortSignal.tsx
import useMountEffect from "useMountEffect.tsx";
import useInitialValueDefault from "useInitialValue.tsx";
import size from "../../_runtime/metro/00002__.js";

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
}
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
