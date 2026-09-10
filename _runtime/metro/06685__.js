// === Module 6685: ? ===

// Module 6685
import _mod19 from "module_19" /* 19 */;
import _mod6686 from "module_6686" /* 6686 */;

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6686.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};