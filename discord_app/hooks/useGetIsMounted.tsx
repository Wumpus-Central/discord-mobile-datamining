// discord_app/hooks/useGetIsMounted.tsx
import noop from "../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  noop.useRef(true);
  const effect = noop.useEffect(
    () => () => {
      ref.current = false;
    },
    [],
  );
  return noop.useCallback(() => ref.current, []);
}
