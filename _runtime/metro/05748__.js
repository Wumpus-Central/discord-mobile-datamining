// _runtime/metro/05748__.js
import _mod19 from "00019__.js";
import _mod5576 from "05576__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5576.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}