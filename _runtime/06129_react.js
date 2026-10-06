// _runtime/06129_react.js
import react from "00019_react.js";
import BottomSheetContext from "06130_BottomSheetContext.js";

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
