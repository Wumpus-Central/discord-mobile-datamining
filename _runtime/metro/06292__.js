// === Module 6292: ? ===

// Module 6292
import _mod19 from "module_19" /* 19 */;
import _mod6131 from "module_6131" /* 6131 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6131.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};