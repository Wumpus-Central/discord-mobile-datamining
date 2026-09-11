// === Module 6871: ? ===

// Module 6871
import _mod19 from "module_19" /* 19 */;
import _mod6710 from "module_6710" /* 6710 */;

const useContext = _mod19.useContext;

export const useBottomSheetGestureHandlers = () => {
  const tmp = useContext(_mod6710.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};