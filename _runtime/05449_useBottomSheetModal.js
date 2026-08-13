// _runtime/05449_useBottomSheetModal.js
import { useContext } from "noop";
import { BottomSheetContext } from "05450_BottomSheetContext.js";


export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};