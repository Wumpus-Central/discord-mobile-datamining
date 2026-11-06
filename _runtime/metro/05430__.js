// === Module 5430: ? ===

// Module 5430
import _mod19 from "module_19" /* 19 */;
import _mod5431 from "module_5431" /* 5431 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5431.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}