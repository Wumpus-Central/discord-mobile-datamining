// === Module 5257: ? ===

// Module 5257
import _mod19 from "module_19" /* 19 */;
import _mod5258 from "module_5258" /* 5258 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod5258.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};