// === Module 6237: ? ===

// Module 6237
import _mod19 from "module_19" /* 19 */;
import _mod6238 from "module_6238" /* 6238 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6238.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};