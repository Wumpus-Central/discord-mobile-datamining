// _runtime/06962_useBottomSheetModal.js
import { useContext } from "noop";
import { BottomSheetContext } from "06963_BottomSheetContext.js";


export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};