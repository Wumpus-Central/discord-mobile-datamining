// _runtime/metro/05744__.js
import _mod19 from "00019__.js";
import _mod5572 from "05572__.js";

const useContext = _mod19.useContext;

export () => {
  const tmp = useContext(_mod5572.BottomSheetGestureHandlersContext);
  if (null === tmp) {
    throw "'useBottomSheetGestureHandlers' cannot be used out of the BottomSheet!";
  } else {
    return tmp;
  }
}