// === Module 5478: ? ===

// Module 5478
import _mod19 from "module_19" /* 19 */;
import _mod5317 from "module_5317" /* 5317 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod5317.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};