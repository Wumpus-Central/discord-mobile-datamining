// === Module 6965: hooks/useStableCallback ===

// Module 6965 (hooks/useStableCallback)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("../discord_common/js/shared/hooks/useStableCallback.tsx");

export default function useStableCallback(current) {
  noop.useRef(current);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_1.current = current;
  });
  return noop.useCallback(() => {
    const items = [...HermesBuiltin.copyRestArgs()];
    return ref.current.apply(items);
  }, []);
};