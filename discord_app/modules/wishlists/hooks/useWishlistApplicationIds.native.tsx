// === Module 10123: useWishlistApplicationIds ===

// Module 10123 (useWishlistApplicationIds)
import c from "c" /* 576 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(1085).COLLECTIBLES_APPLICATION_ID;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistApplicationIds.native.tsx");

export const useWishlistApplicationIds = ReactCompilerGating.isReactCompilerEnabled() ? (function useWishlistApplicationIds() {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_3];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (function useWishlistApplicationIds() {
  return noop.useMemo(() => {
    const items = [closure_1_3];
    return items;
  }, []);
});