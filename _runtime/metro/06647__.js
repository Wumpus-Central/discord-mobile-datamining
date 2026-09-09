// === Module 6647: ? ===

// Module 6647
import _mod19 from "module_19" /* 19 */;
import _mod6648 from "module_6648" /* 6648 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6648.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};