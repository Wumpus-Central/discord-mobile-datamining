// === Module 6247: ? ===

// Module 6247
import _mod19 from "module_19" /* 19 */;
import _mod6248 from "module_6248" /* 6248 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6248.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};