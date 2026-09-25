// === Module 6046: ? ===

// Module 6046
import _mod19 from "module_19" /* 19 */;
import _mod6047 from "module_6047" /* 6047 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6047.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};