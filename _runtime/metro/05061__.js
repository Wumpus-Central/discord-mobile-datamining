// _runtime/metro/05061__.js
import _mod19 from "00019__.js";
import _mod5062 from "05062__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5062.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}