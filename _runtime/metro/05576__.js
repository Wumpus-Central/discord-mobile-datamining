// === Module 5576: ? ===

// Module 5576
import _mod19 from "module_19" /* 19 */;
import _mod5577 from "module_5577" /* 5577 */;

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5577.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}