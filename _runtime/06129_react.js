// === Module 6129: react ===

// Module 6129 (react)
import react from "react" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6130 */;

const useContext = react.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};