// === Module 5153: ? ===

// Module 5153
import _mod19 from "module_19" /* 19 */;
import _mod5154 from "module_5154" /* 5154 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5154.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}