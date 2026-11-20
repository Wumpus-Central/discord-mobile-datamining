// _runtime/metro/05032__.js
import _mod19 from "00019__.js";
import _mod5033 from "05033__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5033.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}