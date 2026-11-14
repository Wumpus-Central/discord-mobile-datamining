// _runtime/metro/05576__.js
import _mod19 from "00019__.js";
import _mod5577 from "05577__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5577.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}