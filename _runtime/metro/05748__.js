// === Module 5748: ? ===

// Module 5748
import _mod19 from "module_19" /* 19 */;
import _mod5576 from "module_5576" /* 5576 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5576.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}