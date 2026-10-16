// === Module 6704: ? ===

// Module 6704
import _mod19 from "module_19" /* 19 */;
import _mod6543 from "module_6543" /* 6543 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6543.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};