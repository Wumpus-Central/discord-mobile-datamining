// === Module 5515: ? ===

// Module 5515
import _mod19 from "module_19" /* 19 */;
import _mod5516 from "module_5516" /* 5516 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5516.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}