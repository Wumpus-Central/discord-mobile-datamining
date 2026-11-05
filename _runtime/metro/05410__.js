// === Module 5410: ? ===

// Module 5410
import _mod19 from "module_19" /* 19 */;
import _mod5411 from "module_5411" /* 5411 */;

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5411.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}