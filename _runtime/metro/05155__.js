// === Module 5155: ? ===

// Module 5155
import _mod19 from "module_19" /* 19 */;
import _mod5156 from "module_5156" /* 5156 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5156.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}