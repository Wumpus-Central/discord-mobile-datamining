// === Module 6217: ? ===

// Module 6217
import _mod19 from "module_19" /* 19 */;
import _mod6218 from "module_6218" /* 6218 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6218.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};