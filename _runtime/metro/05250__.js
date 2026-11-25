// _runtime/metro/05250__.js
import _mod19 from "00019__.js";
import _mod5251 from "05251__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5251.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}