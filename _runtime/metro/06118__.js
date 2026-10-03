// === Module 6118: ? ===

// Module 6118
import _mod19 from "module_19" /* 19 */;
import _mod6119 from "module_6119" /* 6119 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6119.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};