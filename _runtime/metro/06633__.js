// === Module 6633: ? ===

// Module 6633
import _mod19 from "module_19" /* 19 */;
import _mod6634 from "module_6634" /* 6634 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6634.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};