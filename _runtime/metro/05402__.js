// === Module 5402: ? ===

// Module 5402
import _mod19 from "module_19" /* 19 */;
import _mod5403 from "module_5403" /* 5403 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5403.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}