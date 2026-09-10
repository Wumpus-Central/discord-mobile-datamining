// === Module 6683: ? ===

// Module 6683
import _mod19 from "module_19" /* 19 */;
import _mod6684 from "module_6684" /* 6684 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6684.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};