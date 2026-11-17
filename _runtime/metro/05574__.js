// _runtime/metro/05574__.js
import _mod19 from "00019__.js";
import BottomSheetContext from "../05575_BottomSheetContext.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
}