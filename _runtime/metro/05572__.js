// _runtime/metro/05572__.js
import _mod19 from "00019__.js";
import _mod5573 from "05573__.js";

const useContext = _mod19.useContext;

export function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod5573.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
}
