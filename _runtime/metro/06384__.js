// === Module 6384: ? ===

// Module 6384
import _mod19 from "module_19" /* 19 */;
import _mod6223 from "module_6223" /* 6223 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6223.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};