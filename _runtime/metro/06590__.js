// === Module 6590: ? ===

// Module 6590
import _mod19 from "module_19" /* 19 */;
import _mod6591 from "module_6591" /* 6591 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6591.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};