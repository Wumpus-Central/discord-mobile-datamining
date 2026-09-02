// === Module 5642: useBottomSheetModal ===

// Module 5642 (useBottomSheetModal)
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 5643 */;

const useContext = noop.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};