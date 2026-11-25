// === Module 5250: ? ===

// Module 5250
import _mod19 from "module_19" /* 19 */;
import _mod5251 from "module_5251" /* 5251 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5251.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}