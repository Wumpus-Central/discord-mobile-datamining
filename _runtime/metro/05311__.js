// === Module 5311: ? ===

// Module 5311
import _mod19 from "module_19" /* 19 */;
import _mod5312 from "module_5312" /* 5312 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod5312.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};