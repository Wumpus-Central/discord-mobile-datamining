// _runtime/05632_useBottomSheetInternal.js
import noop from "00019_noop.js";
import context from "05633_context.js";

const useContext = noop.useContext;

export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(context.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};