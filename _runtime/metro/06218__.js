// === Module 6218: ? ===

// Module 6218
import _mod19 from "module_19" /* 19 */;
import _mod6057 from "module_6057" /* 6057 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6057.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};