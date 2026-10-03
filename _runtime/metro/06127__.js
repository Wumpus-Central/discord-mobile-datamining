// === Module 6127: ? ===

// Module 6127
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6123 */;

const useContext = _mod19.useContext;

export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};