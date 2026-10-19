// === Module 5403: ? ===

// Module 5403
import _mod19 from "module_19" /* 19 */;
import _mod5242 from "module_5242" /* 5242 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod5242.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};