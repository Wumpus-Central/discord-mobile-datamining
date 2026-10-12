// === Module 6480: ? ===

// Module 6480
import _mod19 from "module_19" /* 19 */;
import _mod6319 from "module_6319" /* 6319 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6319.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};