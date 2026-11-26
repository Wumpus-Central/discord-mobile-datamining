// _runtime/metro/05281__.js
import _mod19 from "00019__.js";
import _mod5282 from "05282__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5282.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}