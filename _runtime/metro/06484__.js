// === Module 6484: ? ===

// Module 6484
import _mod19 from "module_19" /* 19 */;
import _mod6323 from "module_6323" /* 6323 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6323.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};