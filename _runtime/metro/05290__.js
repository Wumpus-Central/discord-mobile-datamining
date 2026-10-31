// _runtime/metro/05290__.js
import _mod19 from "00019__.js";
import BottomSheetContext from "../05286_BottomSheetContext.js";

const useContext = _mod19.useContext;

export function useBottomSheetModalInternal(arg0) {
  const tmp = useContext(BottomSheetContext.BottomSheetModalInternalContext);
  if (true !== arg0) {
    if (null === tmp) {
      throw "'BottomSheetModalInternalContext' cannot be null!";
    }
  }
  return tmp;
}
