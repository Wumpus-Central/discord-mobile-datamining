// === Module 8249: useGetIsMounted ===

// Module 8249 (useGetIsMounted)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("hooks/useGetIsMounted.tsx");

export default function useGetIsMounted() {
  noop.useRef(true);
  const effect = noop.useEffect(() => () => {
    ref.current = false;
  }, []);
  return noop.useCallback(() => ref.current, []);
};