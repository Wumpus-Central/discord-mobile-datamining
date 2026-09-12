// === Module 6901: ? ===

// Module 6901
import _mod19 from "module_19" /* 19 */;
import _mod6740 from "module_6740" /* 6740 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6740.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};