// === Module 5402: ? ===

// Module 5402
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5403 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
}