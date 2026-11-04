// === Module 5408: ? ===

// Module 5408
import _mod19 from "module_19" /* 19 */;
import _mod5409 from "module_5409" /* 5409 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5409.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}