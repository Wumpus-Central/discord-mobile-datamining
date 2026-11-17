// === Module 5744: ? ===

// Module 5744
import _mod19 from "module_19" /* 19 */;
import _mod5572 from "module_5572" /* 5572 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5572.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}