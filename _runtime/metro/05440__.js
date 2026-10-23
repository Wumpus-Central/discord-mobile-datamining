// === Module 5440: ? ===

// Module 5440
import _mod19 from "module_19" /* 19 */;
import _mod5279 from "module_5279" /* 5279 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod5279.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};