// === Module 6700: ? ===

// Module 6700
import _mod19 from "module_19" /* 19 */;
import _mod6539 from "module_6539" /* 6539 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6539.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};