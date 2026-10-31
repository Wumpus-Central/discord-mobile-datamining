// === Module 5281: ? ===

// Module 5281
import _mod19 from "module_19" /* 19 */;
import _mod5282 from "module_5282" /* 5282 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5282.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}