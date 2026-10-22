// === Module 5261: ? ===

// Module 5261
import _mod19 from "module_19" /* 19 */;
import _mod5262 from "module_5262" /* 5262 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod5262.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};