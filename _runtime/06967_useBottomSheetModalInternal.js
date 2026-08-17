// _runtime/06967_useBottomSheetModalInternal.js
import noop from "noop" /* 19 */;
import BottomSheetContext from "BottomSheetContext" /* 6963 */;

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