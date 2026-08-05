// _runtime/05350_useBottomSheetModal.js
import { useContext } from "noop";
import { BottomSheetContext } from "05351_BottomSheetContext.js";


export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};