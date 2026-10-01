// === Module 6404: ? ===

// Module 6404
import _mod19 from "module_19" /* 19 */;
import _mod6243 from "module_6243" /* 6243 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6243.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};