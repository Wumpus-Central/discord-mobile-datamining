// === Module 6535: ? ===

// Module 6535
import _mod19 from "module_19" /* 19 */;
import _mod6536 from "module_6536" /* 6536 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6536.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};