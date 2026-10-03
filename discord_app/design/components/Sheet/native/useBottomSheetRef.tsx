// discord_app/design/components/Sheet/native/useBottomSheetRef.tsx
import c from "../../../../../_runtime/00576_c.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      const ref = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { bottomSheetRef: ref, bottomSheetClose: first };
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const ref = noop.useRef(null);
      const items = [ref];
      return {
        bottomSheetRef: ref,
        bottomSheetClose: noop.useCallback(() => {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
        }, items),
      };
    };
