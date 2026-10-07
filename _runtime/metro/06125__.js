// === Module 6125: ? ===

// Module 6125
import _mod19 from "module_19" /* 19 */;
import _mod6126 from "module_6126" /* 6126 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6126.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};