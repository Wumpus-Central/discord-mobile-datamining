// === Module 6993: ? ===

// Module 6993
import _mod19 from "module_19" /* 19 */;
import _mod6832 from "module_6832" /* 6832 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6832.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};