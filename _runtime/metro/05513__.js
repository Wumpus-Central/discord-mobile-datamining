// _runtime/metro/05513__.js
import _mod19 from "00019__.js";
import _mod5514 from "05514__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5514.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}