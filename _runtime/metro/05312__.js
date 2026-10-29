// === Module 5312: ? ===

// Module 5312
import _mod19 from "module_19" /* 19 */;
import _mod5313 from "module_5313" /* 5313 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5313.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}