// === Module 5576: ? ===

// Module 5576
import _mod19 from "module_19" /* 19 */;
import _mod5404 from "module_5404" /* 5404 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5404.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}