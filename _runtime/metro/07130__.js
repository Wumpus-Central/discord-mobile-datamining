// === Module 7130: ? ===

// Module 7130
import _mod19 from "module_19" /* 19 */;
import _mod6969 from "module_6969" /* 6969 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6969.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};