// === Module 6905: ? ===

// Module 6905
import _mod19 from "module_19" /* 19 */;
import _mod6744 from "module_6744" /* 6744 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6744.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};