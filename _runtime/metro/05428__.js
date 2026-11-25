// _runtime/metro/05428__.js
import _mod19 from "00019__.js";
import _mod5256 from "05256__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5256.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}