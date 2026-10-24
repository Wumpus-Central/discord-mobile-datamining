// === Module 5275: ? ===

// Module 5275
import _mod19 from "module_19" /* 19 */;
import _mod5276 from "module_5276" /* 5276 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod5276.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};