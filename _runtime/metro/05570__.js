// === Module 5570: ? ===

// Module 5570
import _mod19 from "module_19" /* 19 */;
import _mod5571 from "module_5571" /* 5571 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5571.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}