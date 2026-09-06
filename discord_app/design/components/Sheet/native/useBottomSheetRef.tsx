// === Module 8170: useBottomSheetRef ===

// Module 8170 (useBottomSheetRef)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/useBottomSheetRef.tsx");

export const useBottomSheetRef = function useBottomSheetRef() {
  const ref = noop.useRef(null);
  const items = [ref];
  return {
    bottomSheetRef: ref,
    bottomSheetClose: noop.useCallback(() => {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
    }, items)
  };
};