// === Module 6120: ? ===

// Module 6120
import _mod19 from "module_19" /* 19 */;
import _mod6121 from "module_6121" /* 6121 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6121.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};