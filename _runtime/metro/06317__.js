// === Module 6317: ? ===

// Module 6317
import _mod19 from "module_19" /* 19 */;
import _mod6318 from "module_6318" /* 6318 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6318.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};