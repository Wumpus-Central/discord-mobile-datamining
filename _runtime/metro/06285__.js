// === Module 6285: ? ===

// Module 6285
import _mod19 from "module_19" /* 19 */;
import _mod6124 from "module_6124" /* 6124 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6124.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};