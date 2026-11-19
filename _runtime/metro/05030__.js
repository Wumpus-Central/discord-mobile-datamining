// === Module 5030: ? ===

// Module 5030
import _mod19 from "module_19" /* 19 */;
import _mod5031 from "module_5031" /* 5031 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5031.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}