// === Module 5032: ? ===

// Module 5032
import _mod19 from "module_19" /* 19 */;
import _mod5033 from "module_5033" /* 5033 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5033.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}