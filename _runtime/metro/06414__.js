// === Module 6414: ? ===

// Module 6414
import _mod19 from "module_19" /* 19 */;
import _mod6253 from "module_6253" /* 6253 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6253.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};