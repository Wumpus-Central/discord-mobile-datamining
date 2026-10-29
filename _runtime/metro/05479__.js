// _runtime/metro/05479__.js
import _mod19 from "00019__.js";
import _mod5318 from "05318__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5318.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}