// === Module 6870: ? ===

// Module 6870
import _mod19 from "module_19" /* 19 */;
import _mod6871 from "module_6871" /* 6871 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6871.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};