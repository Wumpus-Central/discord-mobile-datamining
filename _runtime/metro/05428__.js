// === Module 5428: ? ===

// Module 5428
import _mod19 from "module_19" /* 19 */;
import _mod5267 from "module_5267" /* 5267 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod5267.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};