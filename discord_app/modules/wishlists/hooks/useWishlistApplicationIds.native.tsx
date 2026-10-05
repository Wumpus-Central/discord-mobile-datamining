// === Module 10528: useWishlistApplicationIds ===

// Module 10528 (useWishlistApplicationIds)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.COLLECTIBLES_APPLICATION_ID;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [closure_3];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => react.useMemo(() => {
  const items = [closure_1_3];
  return items;
}, []));
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistApplicationIds.native.tsx");

export const useWishlistApplicationIds = tmp2;