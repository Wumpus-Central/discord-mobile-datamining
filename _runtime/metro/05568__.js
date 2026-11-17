// === Module 5568: ? ===

// Module 5568
import _mod19 from "module_19" /* 19 */;
import _mod5569 from "module_5569" /* 5569 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5569.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}