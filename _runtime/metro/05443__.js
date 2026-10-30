// === Module 5443: ? ===

// Module 5443
import _mod19 from "module_19" /* 19 */;
import _mod5282 from "module_5282" /* 5282 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5282.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}