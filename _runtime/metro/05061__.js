// === Module 5061: ? ===

// Module 5061
import _mod19 from "module_19" /* 19 */;
import _mod5062 from "module_5062" /* 5062 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5062.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}