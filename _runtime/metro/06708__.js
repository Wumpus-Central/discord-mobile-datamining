// _runtime/metro/06708__.js
import _mod19 from "00019__.js";
import BottomSheetContext from "../06709_BottomSheetContext.js";

const useContext = _mod19.useContext;

export const useBottomSheetModal = () => {
  const tmp = useContext(BottomSheetContext.BottomSheetModalContext);
  if (null === tmp) {
    throw "'BottomSheetModalContext' cannot be null!";
  } else {
    return tmp;
  }
};
