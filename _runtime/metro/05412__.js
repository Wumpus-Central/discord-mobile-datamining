// === Module 5412: ? ===

// Module 5412
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5413 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
}