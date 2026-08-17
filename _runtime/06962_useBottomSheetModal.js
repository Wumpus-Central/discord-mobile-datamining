// _runtime/06962_useBottomSheetModal.js
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6963 */;

const useContext = noop.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};