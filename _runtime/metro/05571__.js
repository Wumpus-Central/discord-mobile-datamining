// === Module 5571: ? ===

// Module 5571
import _mod19 from "module_19" /* 19 */;
import _mod5410 from "module_5410" /* 5410 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5410.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}