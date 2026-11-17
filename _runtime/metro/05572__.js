// === Module 5572: ? ===

// Module 5572
import _mod19 from "module_19" /* 19 */;
import _mod5573 from "module_5573" /* 5573 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5573.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}