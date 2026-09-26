// === Module 6053: ? ===

// Module 6053
import _mod19 from "module_19" /* 19 */;
import _mod6054 from "module_6054" /* 6054 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6054.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};