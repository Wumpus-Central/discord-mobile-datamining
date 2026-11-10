// === Module 5400: ? ===

// Module 5400
import _mod19 from "module_19" /* 19 */;
import _mod5401 from "module_5401" /* 5401 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5401.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}