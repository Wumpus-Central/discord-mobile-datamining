// === Module 5329: ? ===

// Module 5329
import _mod19 from "module_19" /* 19 */;
import _mod5157 from "module_5157" /* 5157 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5157.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}