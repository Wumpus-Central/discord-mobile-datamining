// === Module 5406: ? ===

// Module 5406
import _mod19 from "module_19" /* 19 */;
import _mod5407 from "module_5407" /* 5407 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5407.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}