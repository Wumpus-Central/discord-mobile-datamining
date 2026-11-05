// === Module 5408: ? ===

// Module 5408
import _mod19 from "module_19" /* 19 */;
import _mod5409 from "module_5409" /* 5409 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5409.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}