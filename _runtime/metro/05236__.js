// === Module 5236: ? ===

// Module 5236
import _mod19 from "module_19" /* 19 */;
import _mod5237 from "module_5237" /* 5237 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod5237.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};