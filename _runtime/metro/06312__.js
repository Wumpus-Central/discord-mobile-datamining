// === Module 6312: ? ===

// Module 6312
import _mod19 from "module_19" /* 19 */;
import _mod6313 from "module_6313" /* 6313 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6313.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};