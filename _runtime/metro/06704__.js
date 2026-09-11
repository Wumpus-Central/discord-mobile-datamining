// === Module 6704: ? ===

// Module 6704
import _mod19 from "module_19" /* 19 */;
import _mod6705 from "module_6705" /* 6705 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6705.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};