// === Module 5448: ? ===

// Module 5448
import _mod19 from "module_19" /* 19 */;
import _mod5287 from "module_5287" /* 5287 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5287.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}