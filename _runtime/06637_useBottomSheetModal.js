// _runtime/06637_useBottomSheetModal.js
import noop from "00019_noop.js";
import BottomSheetContext from "06638_BottomSheetContext.js";

const useContext = noop.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
