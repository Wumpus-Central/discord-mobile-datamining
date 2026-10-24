// === Module 5442: ? ===

// Module 5442
import _mod19 from "module_19" /* 19 */;
import _mod5281 from "module_5281" /* 5281 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod5281.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};