// === Module 6734: ? ===

// Module 6734
import _mod19 from "module_19" /* 19 */;
import _mod6735 from "module_6735" /* 6735 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6735.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};