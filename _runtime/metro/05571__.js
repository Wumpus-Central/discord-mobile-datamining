// _runtime/metro/05571__.js
import _mod19 from "00019__.js";
import _mod5410 from "05410__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5410.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}