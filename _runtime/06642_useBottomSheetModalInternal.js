// _runtime/06642_useBottomSheetModalInternal.js
import noop from "00019_noop.js";
import BottomSheetContext from "06638_BottomSheetContext.js";

const useContext = noop.useContext;

export const useBottomSheetModalInternal = function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
};
