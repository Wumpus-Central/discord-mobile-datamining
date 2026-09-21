// === Module 6875: ? ===

// Module 6875
import _mod19 from "module_19" /* 19 */;
import _mod6876 from "module_6876" /* 6876 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6876.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};