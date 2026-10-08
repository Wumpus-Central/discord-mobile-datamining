// _runtime/metro/06306__.js
import _mod19 from "00019__.js";
import _mod6307 from "06307__.js";

const useContext = _mod19.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(_mod6307.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};
