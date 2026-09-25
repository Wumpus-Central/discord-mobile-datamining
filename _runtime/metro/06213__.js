// === Module 6213: ? ===

// Module 6213
import _mod19 from "module_19" /* 19 */;
import _mod6052 from "module_6052" /* 6052 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6052.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};