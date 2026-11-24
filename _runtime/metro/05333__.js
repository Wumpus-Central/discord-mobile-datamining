// === Module 5333: ? ===

// Module 5333
import _mod19 from "module_19" /* 19 */;
import _mod5161 from "module_5161" /* 5161 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5161.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}