// === Module 5578: ? ===

// Module 5578
import _mod19 from "module_19" /* 19 */;
import _mod5406 from "module_5406" /* 5406 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5406.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}