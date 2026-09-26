// === Module 6051: ? ===

// Module 6051
import _mod19 from "module_19" /* 19 */;
import _mod6052 from "module_6052" /* 6052 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6052.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};