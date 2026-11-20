// === Module 5210: ? ===

// Module 5210
import _mod19 from "module_19" /* 19 */;
import _mod5038 from "module_5038" /* 5038 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5038.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}