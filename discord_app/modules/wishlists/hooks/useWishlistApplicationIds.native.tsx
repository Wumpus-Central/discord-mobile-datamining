// discord_app/modules/wishlists/hooks/useWishlistApplicationIds.native.tsx
import c from "../../../../_runtime/00576_c.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = fn(1085).COLLECTIBLES_APPLICATION_ID;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/wishlists/hooks/useWishlistApplicationIds.native.tsx");

export const useWishlistApplicationIds = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [closure_3];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      noop.useMemo(() => {
        const items = [closure_1_3];
        return items;
      }, []);
