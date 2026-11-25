// === Module 5252: ? ===

// Module 5252
import _mod19 from "module_19" /* 19 */;
import _mod5253 from "module_5253" /* 5253 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5253.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}