// _runtime/05414_useBottomSheetModalInternal.js
import { useContext } from "noop";
import { BottomSheetContext } from "05410_BottomSheetContext.js";


export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};