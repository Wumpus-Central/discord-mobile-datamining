// _runtime/metro/05404__.js
import _mod19 from "00019__.js";
import _mod5405 from "05405__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5405.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}