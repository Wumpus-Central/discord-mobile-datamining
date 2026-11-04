// === Module 5584: ? ===

// Module 5584
import _mod19 from "module_19" /* 19 */;
import _mod5412 from "module_5412" /* 5412 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5412.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}