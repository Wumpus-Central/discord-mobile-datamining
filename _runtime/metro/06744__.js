// === Module 6744: ? ===

// Module 6744
import _mod19 from "module_19" /* 19 */;
import _mod6745 from "module_6745" /* 6745 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6745.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};