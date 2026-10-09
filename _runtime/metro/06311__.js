// === Module 6311: ? ===

// Module 6311
import _mod19 from "module_19" /* 19 */;
import _mod6312 from "module_6312" /* 6312 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6312.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};