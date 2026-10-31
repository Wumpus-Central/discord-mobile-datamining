// === Module 5283: ? ===

// Module 5283
import _mod19 from "module_19" /* 19 */;
import _mod5284 from "module_5284" /* 5284 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5284.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}