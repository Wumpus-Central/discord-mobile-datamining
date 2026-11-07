// _runtime/metro/05398__.js
import _mod19 from "00019__.js";
import _mod5399 from "05399__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5399.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}