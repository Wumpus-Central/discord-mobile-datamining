// === Module 6055: ? ===

// Module 6055
import _mod19 from "module_19" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6056 */;

const useContext = _mod19.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};