// === Module 5273: ? ===

// Module 5273
import _mod19 from "module_19" /* 19 */;
import _mod5274 from "module_5274" /* 5274 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod5274.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};