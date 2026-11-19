// _runtime/metro/05208__.js
import _mod19 from "00019__.js";
import _mod5036 from "05036__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5036.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}