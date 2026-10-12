// === Module 6313: ? ===

// Module 6313
import _mod19 from "module_19" /* 19 */;
import _mod6314 from "module_6314" /* 6314 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6314.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};