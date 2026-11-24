// _runtime/metro/05155__.js
import _mod19 from "00019__.js";
import _mod5156 from "05156__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5156.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}