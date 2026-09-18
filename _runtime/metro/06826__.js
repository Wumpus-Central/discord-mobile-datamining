// === Module 6826: ? ===

// Module 6826
import _mod19 from "module_19" /* 19 */;
import _mod6827 from "module_6827" /* 6827 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6827.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};