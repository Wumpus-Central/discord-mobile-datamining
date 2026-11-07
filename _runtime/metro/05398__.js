// === Module 5398: ? ===

// Module 5398
import _mod19 from "module_19" /* 19 */;
import _mod5399 from "module_5399" /* 5399 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5399.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}