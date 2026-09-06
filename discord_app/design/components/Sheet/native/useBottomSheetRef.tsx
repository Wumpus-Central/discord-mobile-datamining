// discord_app/design/components/Sheet/native/useBottomSheetRef.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

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
    }, items),
  };
};
