// === Module 6304: ? ===

// Module 6304
import _mod19 from "module_19" /* 19 */;
import _mod6305 from "module_6305" /* 6305 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6305.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};