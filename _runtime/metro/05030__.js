// _runtime/metro/05030__.js
import _mod19 from "00019__.js";
import _mod5031 from "05031__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5031.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}