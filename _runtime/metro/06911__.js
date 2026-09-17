// === Module 6911: ? ===

// Module 6911
import _mod19 from "module_19" /* 19 */;
import _mod6750 from "module_6750" /* 6750 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6750.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};