// === Module 6533: ? ===

// Module 6533
import _mod19 from "module_19" /* 19 */;
import _mod6534 from "module_6534" /* 6534 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6534.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};