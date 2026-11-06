// === Module 5606: ? ===

// Module 5606
import _mod19 from "module_19" /* 19 */;
import _mod5434 from "module_5434" /* 5434 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5434.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}