// === Module 5691: ? ===

// Module 5691
import _mod19 from "module_19" /* 19 */;
import _mod5519 from "module_5519" /* 5519 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5519.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}