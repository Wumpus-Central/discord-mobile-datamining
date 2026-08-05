// _runtime/05355_useBottomSheetModalInternal.js
import { useContext } from "noop";
import { BottomSheetContext } from "05351_BottomSheetContext.js";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};