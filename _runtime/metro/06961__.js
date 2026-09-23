// === Module 6961: ? ===

// Module 6961
import _mod19 from "module_19" /* 19 */;
import _mod6962 from "module_6962" /* 6962 */;

const useContext = _mod19.useContext;

export const useBottomSheet = () => {
  const tmp = useContext(_mod6962.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
};