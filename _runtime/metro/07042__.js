// === Module 7042: ? ===

// Module 7042
import _mod19 from "module_19" /* 19 */;
import _mod6881 from "module_6881" /* 6881 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6881.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};