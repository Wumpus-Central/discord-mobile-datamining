// === Module 5278: ? ===

// Module 5278
import _mod19 from "module_19" /* 19 */;
import _mod5279 from "module_5279" /* 5279 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5279.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}