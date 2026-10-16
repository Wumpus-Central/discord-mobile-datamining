// === Module 6537: ? ===

// Module 6537
import _mod19 from "module_19" /* 19 */;
import _mod6538 from "module_6538" /* 6538 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6538.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};