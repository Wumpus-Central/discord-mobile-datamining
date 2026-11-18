// === Module 5063: ? ===

// Module 5063
import _mod19 from "module_19" /* 19 */;
import _mod5064 from "module_5064" /* 5064 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5064.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}