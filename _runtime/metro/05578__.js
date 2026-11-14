// === Module 5578: ? ===

// Module 5578
import _mod19 from "module_19" /* 19 */;
import _mod5579 from "module_5579" /* 5579 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5579.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}