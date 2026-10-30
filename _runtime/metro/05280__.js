// === Module 5280: ? ===

// Module 5280
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5281 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
}