// === Module 5034: ? ===

// Module 5034
import _mod19 from "module_19" /* 19 */;
import _mod5035 from "module_5035" /* 5035 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5035.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}