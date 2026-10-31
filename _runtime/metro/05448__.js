// _runtime/metro/05448__.js
import _mod19 from "00019__.js";
import _mod5287 from "05287__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5287.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}