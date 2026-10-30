// _runtime/metro/05276__.js
import _mod19 from "00019__.js";
import _mod5277 from "05277__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5277.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}