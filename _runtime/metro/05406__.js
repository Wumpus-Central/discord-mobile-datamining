// _runtime/metro/05406__.js
import _mod19 from "00019__.js";
import _mod5407 from "05407__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5407.BottomSheetContext);
  if (null === tmp) {
    throw "'useBottomSheet' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}