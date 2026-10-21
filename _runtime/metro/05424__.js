// === Module 5424: ? ===

// Module 5424
import _mod19 from "module_19" /* 19 */;
import _mod5263 from "module_5263" /* 5263 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod5263.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};