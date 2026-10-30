// === Module 5276: ? ===

// Module 5276
import _mod19 from "module_19" /* 19 */;
import _mod5277 from "module_5277" /* 5277 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5277.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}