// === Module 5479: ? ===

// Module 5479
import _mod19 from "module_19" /* 19 */;
import _mod5318 from "module_5318" /* 5318 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5318.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}