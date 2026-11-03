// === Module 5404: ? ===

// Module 5404
import _mod19 from "module_19" /* 19 */;
import _mod5405 from "module_5405" /* 5405 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5405.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}