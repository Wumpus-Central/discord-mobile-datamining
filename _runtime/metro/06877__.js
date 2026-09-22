// === Module 6877: ? ===

// Module 6877
import _mod19 from "module_19" /* 19 */;
import _mod6878 from "module_6878" /* 6878 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6878.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};