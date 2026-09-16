// === Module 6908: ? ===

// Module 6908
import _mod19 from "module_19" /* 19 */;
import _mod6747 from "module_6747" /* 6747 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6747.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};