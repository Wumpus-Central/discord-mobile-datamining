// _runtime/metro/05566__.js
import _mod19 from "00019__.js";
import _mod5567 from "05567__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5567.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}