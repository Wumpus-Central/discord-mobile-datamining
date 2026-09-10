// === Module 6850: ? ===

// Module 6850
import _mod19 from "module_19" /* 19 */;
import _mod6689 from "module_6689" /* 6689 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6689.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};