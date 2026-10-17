// === Module 6757: ? ===

// Module 6757
import _mod19 from "module_19" /* 19 */;
import _mod6596 from "module_6596" /* 6596 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6596.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};