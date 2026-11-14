// _runtime/metro/05754__.js
import _mod19 from "00019__.js";
import _mod5582 from "05582__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5582.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}