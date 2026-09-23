// === Module 7128: ? ===

// Module 7128
import _mod19 from "module_19" /* 19 */;
import _mod6967 from "module_6967" /* 6967 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6967.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};