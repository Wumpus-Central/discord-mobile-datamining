// _runtime/05348_useBottomSheetInternal.js
import { useContext } from "noop";
import { context } from "05349_context.js";


export const useBottomSheetInternal = function useBottomSheetInternal(arg0) {
  const tmp = useContext(context /* context */.BottomSheetInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'useBottomSheetInternal' cannot be used out of the BottomSheet!";
    }
  }
  return tmp;
};