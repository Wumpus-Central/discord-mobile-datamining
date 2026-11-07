// === Module 5400: ? ===

// Module 5400
import _mod19 from "module_19" /* 19 */;
import _mod5401 from "module_5401" /* 5401 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5401.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}