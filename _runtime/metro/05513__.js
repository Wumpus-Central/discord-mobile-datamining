// === Module 5513: ? ===

// Module 5513
import _mod19 from "module_19" /* 19 */;
import _mod5514 from "module_5514" /* 5514 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5514.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}