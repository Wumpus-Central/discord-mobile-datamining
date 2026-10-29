// _runtime/metro/05312__.js
import _mod19 from "00019__.js";
import _mod5313 from "05313__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5313.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}