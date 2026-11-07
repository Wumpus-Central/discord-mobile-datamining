// === Module 5407: ? ===

// Module 5407
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5403 */;

const useContext = _mod19.useContext;

export function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
}