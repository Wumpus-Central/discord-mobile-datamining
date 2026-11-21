// === Module 5151: ? ===

// Module 5151
import _mod19 from "module_19" /* 19 */;
import _mod5152 from "module_5152" /* 5152 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5152.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}