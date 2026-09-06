// discord_common/js/shared/hooks/useMountEffect.tsx
import noop from "../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useMountEffect.tsx");

export default function useMountEffect(set) {
  noop.useRef(set);
  const effect = noop.useEffect(() => ref.current(), []);
}
export const useMountLayoutEffect = function useMountLayoutEffect(set) {
  noop.useRef(set);
  const layoutEffect = noop.useLayoutEffect(() => ref.current(), []);
};
export const useUnmountEffect = function useUnmountEffect(callback) {
  const current = callback;
  closure_1 = noop.useRef(callback);
  const effect = noop.useEffect(() => {
    closure_1.current = current;
  });
  const effect1 = noop.useEffect(
    () => () => {
      ref.current();
    },
    [],
  );
};
