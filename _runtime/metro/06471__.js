// === Module 6471: ? ===

// Module 6471
import _mod19 from "module_19" /* 19 */;
import _mod6310 from "module_6310" /* 6310 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6310.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};