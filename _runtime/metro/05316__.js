// _runtime/metro/05316__.js
import _mod19 from "00019__.js";
import BottomSheetContext from "../05317_BottomSheetContext.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
}