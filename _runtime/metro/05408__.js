// _runtime/metro/05408__.js
import _mod19 from "00019__.js";
import _mod5409 from "05409__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5409.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}