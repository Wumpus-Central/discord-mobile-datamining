// === Module 5417: ? ===

// Module 5417
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5413 */;

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