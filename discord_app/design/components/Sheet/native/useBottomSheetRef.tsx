// discord_app/design/components/Sheet/native/useBottomSheetRef.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const ref = react.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { bottomSheetRef: ref, bottomSheetClose: first };
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const ref = react.useRef(null);
      const items = [ref];
      const obj = {
        bottomSheetRef: ref,
        bottomSheetClose: react.useCallback(() => {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
        }, items),
      };
      return obj;
    };
const result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = tmp2;
