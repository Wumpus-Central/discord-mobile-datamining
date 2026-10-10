// === Module 6314: ? ===

// Module 6314
import _mod19 from "module_19" /* 19 */;
import _mod6315 from "module_6315" /* 6315 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6315.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};