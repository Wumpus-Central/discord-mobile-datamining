// === Module 7044: ? ===

// Module 7044
import _mod19 from "module_19" /* 19 */;
import _mod6883 from "module_6883" /* 6883 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6883.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};