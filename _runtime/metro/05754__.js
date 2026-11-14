// === Module 5754: ? ===

// Module 5754
import _mod19 from "module_19" /* 19 */;
import _mod5582 from "module_5582" /* 5582 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5582.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}