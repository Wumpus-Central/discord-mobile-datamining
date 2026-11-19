// === Module 5208: ? ===

// Module 5208
import _mod19 from "module_19" /* 19 */;
import _mod5036 from "module_5036" /* 5036 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5036.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}