// === Module 5406: ? ===

// Module 5406
import _mod19 from "module_19" /* 19 */;
import _mod5407 from "module_5407" /* 5407 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5407.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}