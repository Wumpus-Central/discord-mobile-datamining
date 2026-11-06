// === Module 5428: ? ===

// Module 5428
import _mod19 from "module_19" /* 19 */;
import _mod5429 from "module_5429" /* 5429 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5429.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}