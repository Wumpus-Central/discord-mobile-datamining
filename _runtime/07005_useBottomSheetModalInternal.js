// === Module 7005: useBottomSheetModalInternal ===

// Module 7005 (useBottomSheetModalInternal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 7001 */;

const useContext = noop.useContext;

export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};