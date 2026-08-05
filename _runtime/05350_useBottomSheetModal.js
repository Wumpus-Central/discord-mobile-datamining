// _runtime/05350_useBottomSheetModal.js
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require("05351_BottomSheetContext.js") /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};