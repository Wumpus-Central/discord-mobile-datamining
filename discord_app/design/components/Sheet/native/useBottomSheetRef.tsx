// === Module 7841: useBottomSheetRef ===

// Module 7841 (useBottomSheetRef)
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
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
}) : (() => {
  const ref = react.useRef(null);
  const items = [ref];
  const obj = {
    bottomSheetRef: ref,
    bottomSheetClose: react.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    }, items)
  };
  return obj;
});
const result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = tmp2;