// === Module 5314: ? ===

// Module 5314
import _mod19 from "module_19" /* 19 */;
import _mod5315 from "module_5315" /* 5315 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5315.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}