// _runtime/metro/05428__.js
import _mod19 from "00019__.js";
import _mod5429 from "05429__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5429.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}