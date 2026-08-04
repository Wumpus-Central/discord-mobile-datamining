// _runtime/05259_useBottomSheetModal.js
import { useContext } from "noop";


export const useBottomSheetModal = () => {
  const tmp = useContext(require(5260) /* BottomSheetContext */.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};